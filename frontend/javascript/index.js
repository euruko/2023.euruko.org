import smoothscroll from "smoothscroll-polyfill";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ClipboardJS from "clipboard";
import "lite-youtube-embed";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import "map.js";

import "index.scss";
import { startAnimation } from "./animation";

smoothscroll.polyfill();

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/);
componentsContext.keys().forEach(componentsContext);

console.info("Bridgetown is loaded!");

window.addEventListener(
  "load",
  () => {
    setClickListeners();
    setScrollListener();
    setIntersectionObserver();
    linkDateBlocker();
    discountCodeApplicator();
    clipboardHandlers();
    initPhotoGallery();
  },
  false
);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const animationPlayed = sessionStorage.getItem("animationPlayed");
  if (!animationPlayed && document.getElementById("home-content")) {
    document.querySelector("body").style.background = "#000";
    document.getElementById("home-content").style.display = "none";
    document.getElementById("animation").style.display = "block";
    // startAnimation();
    sessionStorage.setItem("animationPlayed", true);
    const logo = document.querySelector(".logo");
    logo.style.animation = "appear 2s forwards";

    logo.addEventListener("animationend", () => {
      setTimeout(() => {
        document.body.style.transition = "background-color 2s ease";
        document.body.style.backgroundColor = "#d9d9d9";
        document.getElementById("animation").style.display = "none";
      }, 0);
      document.getElementById("home-content").style.display = "flex";
      document.getElementById("home-content").style.animation = "visible 2s";
    });
  } else {
    document.body.style.backgroundColor = "#d9d9d9";
    document.getElementById("home-content").style.display = "flex";
    document.getElementById("animation").style.display = "none";
  }
});

const initPhotoGallery = () => {
  const gallery = document.getElementById("gallery");
  if (gallery) {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  }
};

const setScrollListener = () => {
  const header = document.getElementById("header");
  const heroImage = document.getElementById("hero-image");

  if (header && window.scrollY > 100) {
    header.classList.remove("header--not-scrolled");
  }

  if (heroImage && window.scrollY < 1600) {
    heroImage.style.cssText = "transform: translate3d(0, " + (window.scrollY * 0.3).toFixed(0) + "px, 0);";
  }

  window.addEventListener("scroll", (e) => {
    if (header && window.scrollY > 100) {
      header.classList.remove("header--not-scrolled");
    } else {
      header.classList.add("header--not-scrolled");
    }
    if (heroImage && window.scrollY < 1600) {
      heroImage.style.cssText = "transform: translate3d(0, " + (window.scrollY * 0.3).toFixed(0) + "px, 0);";
    }
  });
};

const setClickListeners = () => {
  const mobileToggle = document.getElementById("mobile-toggle");
  const header = document.getElementById("header");
  const continueButton = document.querySelector("[data-continue-button]");
  if (mobileToggle && header) {
    mobileToggle.addEventListener("click", () => {
      header.classList.toggle("header--mobile-toggled");
    });
  }

  if (continueButton) {
    continueButton.addEventListener("click", (e) => {
      continueButton.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }

  const links = document.getElementsByTagName("a");
  for (let link of links) {
    if (link.href) {
      const url = new URL(link.href);
      if (url.hostname === window.location.hostname && url.pathname === window.location.pathname && url.hash) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.getElementById(url.hash.substring(1));
          if (target) {
            header.classList.remove("header--mobile-toggled");
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            history.replaceState({}, "", url.hash);
          }
        });
      }
    }
  }
};

const setIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(observerCallback, options);

  document.querySelectorAll(".section__heading").forEach((section) => {
    observer.observe(section);
  });
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section__heading--active");
    }
  });
};

const linkDateBlocker = () => {
  const links = document.querySelectorAll("a[data-datetime]");
  for (let link of links) {
    const date = new Date(link.dataset.datetime);
    if (date && !isNaN(date) && date >= Date.now()) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const now = Date.now();
        if (date <= now) {
          window.location.href = link.href;
        } else {
          console.log(link.dataset);
          if (!link.dataset.blocked) {
            link.dataset.blocked = true;
            const span = link.querySelector("span");
            const originalText = span.innerText;
            const distance = formatDistanceToNow(date, { addSuffix: true });
            span.innerText = `Available ${distance}`;
            setTimeout(() => {
              delete link.dataset.blocked;
              span.innerText = originalText;
            }, 5000);
          }
        }
      });
    }
  }
};

const discountCodeApplicator = () => {
  const listing = document.querySelector("[data-ticket-listing]");
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  if (listing && params.code) {
    let code = params.code;
    console.table({ code });
    const codeSpan = document.createElement("span");
    codeSpan.classList.add("tickets__listing__discount--code");
    codeSpan.innerText = code;

    const discountDiv = document.createElement("div");
    discountDiv.classList.add("tickets__listing__discount");
    discountDiv.innerHTML = `👍 Discount code ${codeSpan.outerHTML} will be applied at checkout to eligible tickets.`;

    listing.parentNode.insertBefore(discountDiv, listing);
    // listing.insertAdjacentElement("afterend", discountDiv.cloneNode(true))

    const links = listing.querySelectorAll("a[href]");

    for (let link of links) {
      const url = new URL(link.href);
      if (url.hostname === "ti.to") {
        const path = url.pathname.split("/");
        url.pathname = path.concat(["discount", code]).join("/");
        link.href = url.toString();
      }
    }
  }
};

const clipboardHandlers = () => {
  const clipboard = new ClipboardJS("button[data-clipboard-target]");
  clipboard.on("success", function ({ trigger }) {
    const oldLabel = trigger.innerText;
    trigger.innerText = "Copied!";
    setTimeout(() => {
      trigger.innerText = oldLabel;
    }, 3000);
  });
};
