export function createTags(htmlTags) {
  let tags = [];
  for (let item of htmlTags) {
    const tag = document.createElement(item);
    tags.push(tag);
  }
  return tags;
}
export function nav(elements, texts) {
  if (elements.length === texts.length) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].textContent = texts[i];
    }
  }
}
export function expandHtml(expand, tags) {
  for (let item of tags) {
    expand.appendChild(item);
  }
}
