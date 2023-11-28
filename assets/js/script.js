document.addEventListener("DOMContentLoaded", function () {
  console.log("HTML prêt. Lancement du script !!!");

  const btn = document.querySelector(".btn_more");
  const more = document.querySelector(".more_information");
  const languageBefore = document.querySelector(".language_before");
  const languageAfter = document.querySelector(".language_after");

  // Détection click sur le bouton
  btn.addEventListener("click", (e) => {
    console.log(e);
    more.classList.add("mouve-up");
    languageAfter.classList.add("move-left");
    btn.classList.add("hidden");
    languageBefore.classList.add("hidden");
  });
});
