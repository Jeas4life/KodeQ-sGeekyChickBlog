const bookingForm = document.querySelector(".book-appointment");
const overlayNav = document.getElementById("overlayNav");
const closeForm = document.querySelector(".close-form");
const closeNav = document.querySelector(".close-nav");
const openNav = document.querySelector(".open-nav");
const openForm = document.querySelector(".open-form");

openForm.addEventListener("click", () => {
  bookingForm.style.display = "flex";
});

openNav.addEventListener("click", () => {
  overlayNav.style.display = "flex";
});

closeNav.addEventListener("click", () => {
  overlayNav.style.display = "none";
});

closeForm.addEventListener("click", () => {
  bookingForm.style.display = "none";
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: bookingForm.name.value,
    phone: bookingForm.phone.value,
    zoom: bookingForm.zoom.checked,
    chat: bookingForm["live-chat"].checked,
    date: bookingForm.date.value
  };
  localStorage.setItem("bookingData", JSON.stringify(formData));

  alert("Booking saved! You can retrieve it later.");
  bookingForm.reset();
});
flatpickr("#date", {
  enableTime: false,
  dateFormat: "Y-m-d",
  minDate: "today",
  inline: "true"
});