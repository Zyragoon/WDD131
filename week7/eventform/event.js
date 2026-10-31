const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const eventDate = document.querySelector("#eventDate");
const studentField = document.querySelector("#studentField");
const studentId = document.querySelector("#studentId");
const guestField = document.querySelector("#guestField");
const accessCode = document.querySelector("#accessCode");
const message = document.querySelector("#message");
const ticket = document.querySelector("#ticket");

function localDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateDateMinimum() {
  const tomorrow = new Date();
  tomorrow.setHours(0, 0, 0, 0);
  tomorrow.setDate(tomorrow.getDate() + 1);
  eventDate.min = localDateString(tomorrow);
}

function updateTypeFields() {
  const isStudent = type.value === "student";
  const isGuest = type.value === "guest";

  studentField.hidden = !isStudent;
  studentId.required = isStudent;
  guestField.hidden = !isGuest;
  accessCode.required = isGuest;
  message.hidden = true;
}

function showMessage(text) {
  message.textContent = text;
  message.hidden = false;
  ticket.hidden = true;
}

function appendTicketLine(className, text) {
  ticket.querySelector(`.${className}`).textContent = text;
}

type.addEventListener("change", updateTypeFields);
eventDate.addEventListener("focus", updateDateMinimum);
form.addEventListener("input", () => {
  message.hidden = true;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateDateMinimum();

  if (!form.checkValidity()) {
    const invalidField = form.querySelector(":invalid");
    showMessage(invalidField.validationMessage);
    invalidField.focus();
    return;
  }

  if (type.value === "student" && !/^\d{9}$/.test(studentId.value.trim())) {
    showMessage("Student # must be 9 digits");
    studentId.focus();
    return;
  }

  if (type.value === "guest" && accessCode.value !== "EVENT131") {
    showMessage("Access code is incorrect.");
    accessCode.focus();
    return;
  }

  if (eventDate.value <= localDateString(new Date())) {
    showMessage("Please choose a date later than today.");
    eventDate.focus();
    return;
  }

  const firstName = form.elements.firstName.value.trim();
  const lastName = form.elements.lastName.value.trim();
  const selectedType = type.value;
  const selectedDate = eventDate.value;

  appendTicketLine("ticket-name", `${firstName} ${lastName}`);
  appendTicketLine("ticket-type", selectedType);
  appendTicketLine("ticket-date", selectedDate);
  ticket.hidden = false;
  message.hidden = true;
  form.reset();
  updateTypeFields();
  updateDateMinimum();
});

updateTypeFields();
updateDateMinimum();