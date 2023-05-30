// Grubbing elements from Html
const inputEls = document.querySelectorAll(".field__input");
const passwordInputEl = document.querySelector(".password__input");
const showPasswordEl = document.querySelector(".show-password");

inputEls.forEach((inputEl) => {
  inputEl.addEventListener("keyup", (e) => {
    if (inputEl.value.length > 0) {
      inputEl.previousElementSibling.classList.add("placeholder-move");
    } else {
      inputEl.previousElementSibling.classList.remove("placeholder-move");
    }
  });
});
showPasswordEl.addEventListener("click", (e) => {
  passwordInputEl.type === "password"
    ? (passwordInputEl.type = "text")
    : (passwordInputEl.type = "password");
});
