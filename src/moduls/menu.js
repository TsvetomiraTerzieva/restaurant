import { nav, createTags, expandHtml } from "./functions";

export function Menu() {
  const content = document.querySelector("#content");
  const menuSection = document.createElement("section");
  menuSection.id = "menu";
  const menu = document.createElement("div");
  menu.classList.add("menu");

  // Haupt Menu
  const hauptMenu = createTags(["h1", "h5"]);
  nav(hauptMenu, [
    "Our Menu",
    "Our steaks have been dry aged on the bone for at least 8 weeks. They are grilled at 1.000°C, giving them unique roasted flavors. All dry aged steaks will be percut in the kitchen, served on the bone with hot brown butter.",
  ]);

  // Steak Menu
  const steakMenu = document.createElement("ul");
  steakMenu.classList.add = "steakMenu";
  const steakItems = createTags([
    "li",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
  ]);
  nav(steakItems, [
    "DRY AGED BEEF",
    "Porterhouse",
    "Seasoned and slow-roasted for hours to achieve peak tenderness and flavor",
    "Parmesan Crusted Sirloin",
    "A 12oz Sirloin topped with our Garlic & Parmesan crust",
    "Bone-In New York Strip",
    "A thick 12 oz. cut, perfectly aged and marbled",
    "Bone-In Rib-Eye",
    "A 14 oz. cut, aged and bursting with flavor, grilled to perfection",
    "Porter House Steak",
    "A hearty 20 oz. cut, combining New York strip and tender filet in one",
    "Zotter Filet",
    "Hand-trimmed filet, naturally-aged and tender",
  ]);

  // Potatoes Menu
  const potatoesMenu = document.createElement("ul");
  potatoesMenu.classList.add("potatoesMenu");
  const potatoesItems = createTags([
    "li",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
  ]);
  nav(potatoesItems, [
    "POTATOES",
    "Potato Skins",
    "Potato halves topped with cheese, bacon, and chives, served with sour cream",
    "Baked",
    "A one-pound potato, fully loaded",
    "Mashed",
    "Creamy potatoes with subtle hints of roasted garlic",
    "Au Gratin",
    "Sliced Idaho potatoes smothered in a three-cheese sauce",
    "Hash Brown Casserole",
    "Crispy shredded potatoes with a golden crust, baked to perfection",
    "Sweet Potato Fries",
    "Thinly sliced sweet potatoes, seasoned and baked until crispy",
  ]);

  // Drinks Menu
  const drinksMenu = document.createElement("ul");
  drinksMenu.classList.add("drinksMenu");
  const drinksItems = createTags([
    "li",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
    "li",
    "p",
  ]);
  nav(drinksItems, [
    "DRINKS",
    "Yazoo Gerst Amber Ale",
    "Smooth, malty amber ale with a hint of hops",
    "Apple Cider Bourbon",
    "Crisp apple cider meets smoky bourbon",
    "Bearded Iris Homestyle IPA",
    "Hoppy IPA with citrus and tropical notes",
    "Nashville Brewing Co. Lager",
    "Clean and crisp classic lager",
    "Turtle Anarchy Brewing Co. Portly Stout",
    "Rich, velvety stout with coffee and chocolate tones",
    "Heineken 0.0",
    "Non-alcoholic version of the classic Heineken lager",
  ]);

  content.appendChild(menuSection);
  menuSection.appendChild(menu);
  expandHtml(menu, hauptMenu);
  menu.appendChild(steakMenu);
  menu.appendChild(potatoesMenu);
  menu.appendChild(drinksMenu);

  expandHtml(steakMenu, steakItems);
  expandHtml(potatoesMenu, potatoesItems);
  expandHtml(drinksMenu, drinksItems);
}
