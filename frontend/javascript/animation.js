export const startAnimation = () => {
  const item = document.querySelector(".animation__item");
  const logo = document.querySelector(".animation__logo");
  const headerSmallLogo = document.querySelector(".header__logo");
  const date = document.querySelector(".animation__date");
  const animation = document.querySelector(".animation");
  const animationContainer = document.querySelector(".animation-container");
  const hidden = document.querySelector(".animation__item-hidden");
  const links = document.querySelectorAll(".header__link");

  animation.addEventListener("animationend", () => {
    document.getElementById("home-content").style.display = "flex";
    setTimeout(() => {
      document.getElementById("home-content").style.animation = "visible 2s";
    }, 500);
  });

  item.addEventListener("animationstart", () => {
    links.forEach((link) => {
      link.style.color = "#d9d9d9";
    });
    setTimeout(() => {
      logo.style.opacity = "1";
      logo.style.animation = "moveLogo 2.5s ease-in-out";
    }, 800);
  });

  item.addEventListener("animationend", () => {
    item.style.animation = "none";
  });

  logo.addEventListener("animationend", () => {
    date.style.opacity = "1";

    setTimeout(() => {
      document.body.style.transition = "background-color 2.5s ease";
      document.body.style.backgroundColor = "#d9d9d9";

      hidden.style.animation = "color-change";
      logo.style.animation = "none";
      animation.style.opacity = "0";

      links.forEach((link) => {
        link.style.animation = "color-change 1.5s ease-in-out forwards";
      });
      setTimeout(() => {
        headerSmallLogo.style.opacity = "1";
        headerSmallLogo.style.transition = "opacity 0.5s linear";
        animation.style.display = "none";
        animationContainer.style.display = "none";
      }, 500);
    }, 500);
  });

  animation.addEventListener("transitionend", (event) => {
    if (event.propertyName === "transform") {
      headerSmallLogo.style.display = "block";
    }
  });
};
