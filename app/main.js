import { widgets } from "./product.js";

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
}

themeToggleButton.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);
});

const filterButtons = document.querySelectorAll(".filter-button");
const cardContainer = document.getElementById("card-container");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    const filteredWidgets = widgets
      .filter((widget) => widget.category === category)
      .map((widget) => {
        return {
          ...widget,
        };
      });
    renderWidgets(filteredWidgets);
  });
});

function renderWidgets(widgetsArray) {
  cardContainer.innerHTML = "";

  if (widgetsArray.length === 0) {
    cardContainer.innerHTML = "<p>No widgets found for this category.</p>";
    return;
  }

  widgetsArray.forEach((widget) => {
    const widgetHTML = `
      <div class="card effect">
        <img src="${widget.image}" alt="${widget.name}">
        <h3>${widget.name}</h3>
        <p>${widget.description}</p>
        <p>Price: $${widget.price}</p>
      </div>
    `;
    cardContainer.insertAdjacentHTML("beforeend", widgetHTML);
  });
}

renderWidgets(widgets);
