/* VentureVerse 2026 — progressive enhancement for navigation and demo form. */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector("#primary-nav");
  const navLinks = primaryNav ? primaryNav.querySelectorAll("a") : [];
  const interestForm = document.querySelector("#interest-form");
  const formMessage = document.querySelector("#form-message");

  // Mobile navigation: expose the menu state to assistive technology.
  const closeMenu = () => {
    if (!menuToggle || !primaryNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    primaryNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
      );
      primaryNav.classList.toggle("is-open", !isExpanded);
      document.body.classList.toggle("menu-open", !isExpanded);
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  
  if (interestForm && formMessage) {
    const nameInput = interestForm.elements.namedItem("name");
    const emailInput = interestForm.elements.namedItem("email");

    const showMessage = (message, type) => {
      formMessage.textContent = message;
      formMessage.classList.remove("success", "error");
      if (type) formMessage.classList.add(type);
    };

    interestForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const emailIsValid = emailInput.validity.valid && email.length > 0;

      nameInput.setAttribute("aria-invalid", String(name.length < 2));
      emailInput.setAttribute("aria-invalid", String(!emailIsValid));

      if (name.length < 2) {
        showMessage("Please enter a name with at least 2 characters.", "error");
        nameInput.focus();
        return;
      }

      if (!emailIsValid) {
        showMessage("Please enter a valid email address.", "error");
        emailInput.focus();
        return;
      }

      showMessage(
        `Thanks, ${name}! This demo form is validated, but no details were sent or saved.`,
        "success"
      );
      interestForm.reset();
      nameInput.removeAttribute("aria-invalid");
      emailInput.removeAttribute("aria-invalid");
    });
  }
});
