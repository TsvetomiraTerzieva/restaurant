import { nav, createTags, expandHtml } from "./functions";

export function Contact() {
  const content = document.querySelector("#content");
  const contactSection = document.createElement("section");
  contactSection.id = "contact";
  const contact = document.createElement("div");
  contact.classList.add("contact");
  const contactHeader = createTags(["h1"]);
  nav(contactHeader, ["Contact Us"]);
  const navLeft = createTags(["ul", "li", "li", "li", "li", "li", "li"]);
  nav(navLeft, [
    "Dine with us",
    "Phone: 0316 / 0123456789",
    "Email: steakhousejohny@gmail.com",
    "Bruckerstrasse 7/9",
    "8101 Gratkorn",
    "Sunday-Thursday 11am-9pm",
    "Friday & Saturday 11am-10pm",
  ]);
  const navRight = document.createElement("div");
  const googleMap = document.getElementById("googleMap");
  googleMap.classList.toggle("hide");
  navRight.appendChild(googleMap);
  expandHtml(contact, contactHeader);
  content.appendChild(contactSection);
  contactSection.appendChild(contact);
  contact.append(...navLeft, navRight);
}
