import { nav, createTags } from "./functions";

export function BookTable() {
  const content = document.querySelector("#content");
  const bookTableSection = document.createElement("section");
  bookTableSection.id = "bookTable";
  const bookTable = document.createElement("div");
  bookTable.classList.add("bookTable");
  const bookTableHeader = createTags(["h1", "p"]);
  nav(bookTableHeader, ["Book Table", "Do you want to book today?"]);
  content.appendChild(bookTableSection);
  bookTableSection.appendChild(bookTable);
  bookTable.append(...bookTableHeader);
  const reservationForm = document.createElement("form");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Your Name: ";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date: ";
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "date");

  const timeLabel = document.createElement("label");
  timeLabel.textContent = "Time: ";
  const timeInput = document.createElement("input");
  timeInput.setAttribute("type", "time");
  timeInput.setAttribute("name", "time");

  const submitButton = document.createElement("input");
  submitButton.classList.add("submitButton");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "SUBMIT");
  bookTable.appendChild(reservationForm);
  reservationForm.appendChild(nameLabel);
  reservationForm.appendChild(nameInput);
  reservationForm.appendChild(dateLabel);
  reservationForm.appendChild(dateInput);
  reservationForm.appendChild(timeLabel);
  reservationForm.appendChild(timeInput);

  reservationForm.appendChild(submitButton);
}

/* reservationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Тук можете да добавите логика за обработка на резервацията
  alert("Reservation submitted!");
}); */
