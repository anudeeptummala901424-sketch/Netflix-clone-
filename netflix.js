// netflix.js
// ========== FAQ Accordion ==========

// Manually handle accordion toggle (better than pure radio)
const accordionLabels = document.querySelectorAll(".accordion label");

accordionLabels.forEach((label) => {
  label.addEventListener("click", () => {
    const input = label.previousElementSibling;

    // If already checked, uncheck it (toggle)
    if (input.checked) {
      input.checked = false;
      return;
    }

    // Close other open items
    document.querySelectorAll('.accordion input[type="radio"]').forEach((i) => {
      i.checked = false;
    });

    // Open this one
    input.checked = true;
  });
});

// ========== Email Validation ==========

const emailForms = document.querySelectorAll(".email-signup");

emailForms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.querySelector("input").value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    alert("Email submitted: " + email);
  });
});

// ========== Scroll-to-Top Button ==========

const topBtn = document.createElement("button");
topBtn.id = "toTop";
topBtn.innerHTML = "⬆";
document.body.appendChild(topBtn);

Object.assign(topBtn.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px",
  background: "#db0001",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  display: "none",
  fontSize: "18px",
  zIndex: "1000",
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========== Sticky Header Effect ==========

const header = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currScroll = window.scrollY;

  if (currScroll > lastScroll) {
    header.style.opacity = "0.85";
  } else {
    header.style.opacity = "1";
  }

  lastScroll = currScroll;
});

// ========== Highlight "Sign In" Button When Clicked ==========

const signInBtn = document.querySelector("nav button:nth-child(2)");

signInBtn.addEventListener("click", () => {
  signInBtn.style.background = "#ff3a3a";
  setTimeout(() => {
    signInBtn.style.background = "#db0001";
  }, 500);
});

// ========== Language Dropdown Toggle (Fake UI) ==========

const languageBtn = document.querySelector(".language-btn");

languageBtn.addEventListener("click", () => {
  alert("Available Languages:\n• English\n• Hindi\n• Telugu\n• Tamil");
});
