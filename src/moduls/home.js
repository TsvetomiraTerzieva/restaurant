import { nav, createTags } from "./functions";
import { showSection } from "../index";

export function Home() {
  const content = document.querySelector("#content");
  const homeSection = document.createElement("section");
  homeSection.id = "home";
  const container = document.createElement("div");
  container.classList.add("container");
  const home = createTags(["h3", "h1", "button", "button"]);
  const menuButton = home[2];
  const bookTableButton = home[3];
  menuButton.addEventListener("click", () => {
    showSection("menu");
  });
  bookTableButton.addEventListener("click", () => {
    showSection("bookTable");
  });
  nav(home, ["Welcome to Johny", "Steakhouse and Bar", "MENU", "BOOK TABLE"]);
  content.appendChild(homeSection);
  homeSection.appendChild(container);
  container.append(...home);
}
