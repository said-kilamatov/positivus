const teamButton = document.querySelector(".team__button");

teamButton.addEventListener("click", handleShowAllTeam);

function handleShowAllTeam() {
  if (window.innerWidth >= 768) return;

  const hiddenTeam = document.querySelectorAll(".team__item.hidden-mobile");

  hiddenTeam.forEach((teammate) => {
    teammate.classList.remove("hidden-mobile");
  });

  teamButton.style.display = "none";
}
