// Dark mode + font toggles
document.querySelector("#dark-mode-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("latex-dark");
});
document.querySelector("#font-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("libertinus");
});
