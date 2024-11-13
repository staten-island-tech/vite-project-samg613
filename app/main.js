import "./style.css";

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);
});
import { widgets } from "./product.js";

const filterButtons = document.querySelectorAll(".filter-button");
const cardContainer = document.getElementById("card-container");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    const filteredWidgets = widgets.filter((widget) =>
      widget.category.includes(category)
    );

    renderWidgets(filteredWidgets);
  });
});

function renderWidgets(widgetsArray) {
  cardContainer.innerHTML = "";

  widgetsArray.forEach((widget) => {
    const widgetHTML = `
            <div class="card">
                <h3>${widget.name}</h3>
                <p>Category: ${widget.category}</p>
                <p>Price: $${widget.price}</p>
            </div>
        `;

    cardContainer.insertAdjacentHTML("beforeend", widgetHTML);
  });
}
export default products;
