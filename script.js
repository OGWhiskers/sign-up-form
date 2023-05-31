"use strict";

const passMsg = document.querySelector(".pass-msg");
const password = document.querySelector(".pass");

// WRITE BETTER CODE FOR NOT MACTHING PASSWORD:

password.addEventListener("click", () => {
  document.activeElement == password
    ? passMsg.classList.add("hidden")
    : passMsg.classList.remove("hidden");
});
