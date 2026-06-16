document.addEventListener("DOMContentLoaded", function () {
   const bookingForm = document.getElementById("bookingForm");
   if (bookingForm) {
       bookingForm.addEventListener("submit", function (e) {
           e.preventDefault();
           const inputs = bookingForm.querySelectorAll("input, select");
           let isValid = true;
           inputs.forEach(input => {
               if (!input.value) {
                   isValid = false;
                   input.style.border = "2px solid red";
               } else {
                   input.style.border = "none";
               }
           });
           if (!isValid) {
               alert("⚠ Please complete all fields before booking.");
               return;
           }
           alert("🎮 Booking Confirmed! Your VR session is reserved.");
           bookingForm.reset();
       });
   }
   const links = document.querySelectorAll("a[href^='#']");
   links.forEach(link => {
       link.addEventListener("click", function (e) {
           e.preventDefault();
           const target = document.querySelector(this.getAttribute("href"));
           if (target) {
               target.scrollIntoView({
                   behavior: "smooth"
               });
           }
       });
   });
   const locatorButtons = document.querySelectorAll(".locator-btn");
   locatorButtons.forEach(btn => {
       btn.addEventListener("click", function () {
           alert(
               "📍 Pulse VR Manchester Centre\n\n" +
               "123 VR Street\nManchester\nM1 1AA\n\n" +
               "Open: 10AM - 10PM"
           );
       });
   });
   const buttons = document.querySelectorAll("button");
   buttons.forEach(btn => {
       btn.addEventListener("mouseenter", () => {
           btn.style.transform = "scale(1.05)";
       });
       btn.addEventListener("mouseleave", () => {
           btn.style.transform = "scale(1)";
       });
   });
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger && navLinks) {
   hamburger.addEventListener("click", () => {
       navLinks.classList.toggle("active");
   });
}
let selectedGame = "";
const gameCards = document.querySelectorAll(".game-card");
gameCards.forEach(card => {
   card.addEventListener("click", () => {
       selectedGame = card.querySelector("h3")?.innerText;
       alert("Selected Game: " + selectedGame);
   });
});
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const trailerButtons = document.querySelectorAll(".btn-secondary");
trailerButtons.forEach(btn => {
   btn.addEventListener("click", () => {
       modal.style.display = "flex";
   });
});
if (closeModal) {
   closeModal.addEventListener("click", () => {
       modal.style.display = "none";
   });
}
const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           entry.target.style.opacity = 1;
           entry.target.style.transform = "translateY(0)";
       }
   });
});
document.querySelectorAll("section").forEach(section => {
   section.style.opacity = 0;
   section.style.transform = "translateY(20px)";
   section.style.transition = "0.6s ease";
   observer.observe(section);
});
const hiddenInput = document.getElementById("selectedGameInput");
if (hiddenInput) {
   gameCards.forEach(card => {
       card.addEventListener("click", () => {
           selectedGame = card.querySelector("h3").innerText;
           hiddenInput.value = selectedGame;
       });
   });
}
const searchInput = document.getElementById("searchInput");
if (searchInput) {
   searchInput.addEventListener("keypress", function(event) {
       if (event.key === "Enter") {
           let search = searchInput.value.toLowerCase().trim();
           if (search === "home") {
               window.location.href = "index.html";
           }
           else if (search === "games" || search === "game library") {
               window.location.href = "gamelibrary.html";
           }
           else if (search === "booking") {
               window.location.href = "booking.html";
           }
           else if (search === "membership") {
               window.location.href = "membership.html";
           }
           else if (search === "accessibility") {
               window.location.href = "accessibility.html";
           }
           else if (search === "contact") {
               window.location.href = "contact.html";
           }
           else {
               alert("Page not found.");
           }
       }
   });
}
document.addEventListener("DOMContentLoaded", () => {
 const params = new URLSearchParams(window.location.search);
 const plan = params.get("plan");
 const select = document.getElementById("planSelect");
 if (plan && select) {
   select.value = plan;
 }
});
function toggleMore(id) {
 const el = document.getElementById(id);
 if (el.style.display === "block") {
   el.style.display = "none";
 } else {
   el.style.display = "block";
 }
}
