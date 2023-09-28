import { nav, createTags, expandHtml } from "./functions";

export function Navigation() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  header.id = "header";
  const navContainer = document.createElement("nav");
  navContainer.classList.add("nav-container");
  const ul = document.createElement("ul");
  ul.classList.add("liste");
  const menuListe = createTags(["li", "li", "li", "li", "li"]);
  nav(menuListe, [
    "Steak House Johny",
    "Home",
    "Menu",
    "Book Table",
    "Contact",
  ]);
  const socialMediaLinks = createTags(["li", "li", "li"]);
  socialMediaLinks[0].innerHTML =
    '<a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>';
  socialMediaLinks[1].innerHTML =
    '<a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i>';
  socialMediaLinks[2].innerHTML =
    '<a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i>';
  expandHtml(ul, menuListe.concat(socialMediaLinks));
  navContainer.appendChild(ul);
  header.appendChild(navContainer);
  content.appendChild(header);
}
