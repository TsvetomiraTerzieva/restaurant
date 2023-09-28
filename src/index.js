import "./styles.css";
import { Navigation } from "./moduls/nav";
import { Home } from "./moduls/home";
import { Menu } from "./moduls/menu";
import { Contact } from "./moduls/contact";
import { BookTable } from "./moduls/bookTable";

Navigation();
Home();
Menu();
Contact();
BookTable();
const content = document.querySelector("#content");

export function showSection(sectionId) {
  const sections = content.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = "block";
  }
}
const ul = document.querySelector(".liste");
ul.addEventListener("click", (e) => {
  let targetId = e.target.textContent.toLowerCase();
  if (targetId == "Steak House Johny".toLowerCase()) {
    targetId = "home";
  }
  if (targetId == "Book Table".toLowerCase()) {
    targetId = "bookTable";
  }

  showSection(targetId);
});
showSection("home");
