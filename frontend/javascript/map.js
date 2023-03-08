__webpack_public_path__ = "/_bridgetown/static/js/";

function buildLegend(props) {
  const { svgElement, data, valueExtent } = props;

  console.log({ data });

  const legendList = document.createElement("ol");
  legendList.classList.add("map__legend");
  svgElement.insertAdjacentElement("afterend", legendList);

  const highestValue = valueExtent[1];
  const minFontSize = 0.8;
  const maxFontSizeForTag = 2;

  data
    .filter((c) => c.percentage > 1)
    .forEach((country) => {
      const legendItem = document.createElement("li");
      legendItem.classList.add("map__legend-item");
      legendItem.innerHTML = `
        <span class="map__legend--name">
          ${country.name}
        </span>
        <span class="map__legend--percentage">
          (${country.percentage}%)
        </span>`;

      let fontSize = (country.percentage / highestValue) * maxFontSizeForTag;
      if (fontSize < minFontSize) {
        fontSize = minFontSize;
      }
      fontSize = +fontSize.toFixed(2);
      const fontSizeProperty = `${fontSize}em`;
      legendItem.style.fontSize = fontSizeProperty;

      legendList.appendChild(legendItem);
    });

  const tail = data.filter((c) => c.percentage <= 1);

  const joined = tail.map((country) => country.name).join(", ");

  const tailItem = document.createElement("li");
  tailItem.classList.add("map__legend-item");
  tailItem.innerHTML = `
    <span class="map__legend--name">
      ${joined}
    </span>
    <span class="map__legend--percentage">
      (≤ 1% each)
    </span>`;
  tailItem.style.fontSize = `${(minFontSize * 0.9).toFixed(2)}em`;

  legendList.appendChild(tailItem);

  const legendDisclaimer = document.createElement("p");
  legendDisclaimer.classList.add("map__legend--disclaimer");
  legendDisclaimer.innerText =
    "Figures are based on billing countries as reported by ticket buyers. The data is updated sporadically.";

  legendList.insertAdjacentElement("afterend", legendDisclaimer);
}

async function initializeMap(svgElement) {
  const d3 = await Promise.all([
    import("d3-array"),
    import("d3-color"),
    import("d3-fetch"),
    import("d3-geo"),
    import("d3-interpolate"),
    import("d3-scale"),
    import("d3-selection"),
    import("d3-zoom"),
  ]).then((d3) => Object.assign({}, ...d3));

  const worldUrl = svgElement.dataset.world;
  const statsUrl = svgElement.dataset.stats;

  const svg = d3.select(svgElement),
    width = +svgElement.viewBox.baseVal.width,
    height = +svgElement.viewBox.baseVal.height;

  svg.append("style").text(`
    .d3-country {
      cursor: zoom-in;
    }
    .d3-country.d3-active {
      cursor: zoom-out;
    }
  `);
  const countriesGroup = svg.append("g");

  const projection = d3
    .geoNaturalEarth1()
    .center([0, 0]) // GPS of location to zoom on
    .scale(100) // This is like the zoom
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  let active = d3.select(null);

  const zoomed = (event) => {
    countriesGroup.attr("transform", event.transform);
  };
  const zoom = d3.zoom().on("zoom", zoomed);

  const clicked = (event, d) => {
    console.log({ event, d });
    if (active.node() === event.target) return reset();
    active.classed("d3-active", false);
    active = d3.select(event.target).classed("d3-active", true);

    var bounds = path.bounds(d),
      dx = bounds[1][0] - bounds[0][0],
      dy = bounds[1][1] - bounds[0][1],
      x = (bounds[0][0] + bounds[1][0]) / 2,
      y = (bounds[0][1] + bounds[1][1]) / 2,
      scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
      translate = [width / 2 - scale * x, height / 2 - scale * y];

    svg
      .transition()
      .duration(750)
      .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
  };

  const reset = () => {
    active.classed("d3-active", false);
    active = d3.select(null);

    svg
      .transition()
      .duration(750)
      // .call( zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1) ); // not in d3 v4
      .call(zoom.transform, d3.zoomIdentity); // updated for d3 v4
  };

  // Map
  Promise.all([d3.json(worldUrl), d3.json(statsUrl)]).then(function (initialize) {
    let dataGeo = initialize[0];
    let data = initialize[1];

    // Create a color scale
    const valueExtent = d3.extent(data, (d) => +d.percentage);

    buildLegend({ svgElement, data, valueExtent });

    // Draw the map
    const color = d3
      .scaleSequential()
      .domain(valueExtent)
      .interpolator(d3.interpolateLab(d3.hsl(328, 0.3, 0.8), d3.hsl(328, 0.8, 0.55)));
    const backgroundColor = "#000024";
    const graticuleColor = "#d74090";
    const graticuleStroke = 0.4;
    const mapColor = "#f767b3";
    const graticule = d3.geoGraticule10();
    // .-. ..- -... -.--
    // R   U   B    Y
    const dashArray = "2 2 4 2 2 4 2 2 2 2 4 4 4 2 2 2 2 2 2 4 4 2 2 2 4 2 4 2";
    countriesGroup
      .append("path")
      .data([{ type: "Sphere" }])
      .join("path")
      .attr("fill", backgroundColor)
      .attr("d", d3.geoPath().projection(projection))
      .style("stroke", graticuleColor)
      .style("stroke-width", graticuleStroke * 2)
      .style("opacity", 1);
    countriesGroup
      .append("path")
      .data([graticule])
      .join("path")
      .attr("fill", "none")
      .attr("d", d3.geoPath().projection(projection))
      .style("stroke", graticuleColor)
      .style("stroke-width", graticuleStroke)
      .style("stroke-dasharray", dashArray)
      .style("opacity", 1);

    countriesGroup
      .append("g")
      .selectAll("path")
      .data(dataGeo.features)
      .enter()
      .append("path")
      .attr("d", d3.geoPath().projection(projection))
      .attr("fill", (d) => {
        const stats = data.find((c) => c.alpha3 == d.id);
        d.percentage = stats?.percentage || 0;
        return color(d.percentage);
      })
      .classed("d3-country", (d) => d.percentage > 0)
      .on("click", clicked);
  });
}

window.addEventListener("load", () => {
  const mapElement = document.querySelector("[data-map]");
  if (mapElement) {
    initializeMap(mapElement);
  }
});
