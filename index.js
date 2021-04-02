
const creation = document.querySelector("#creation")
const dropdown = document.querySelector(".creation")
creation.addEventListener("click", () => {
    dropdown.classList.toggle("fade1")
    mouseOverWebEssentials.classList.remove("fade3")
    creationPlatformHover.style.backgroundColor = "#E3F2FD";
})


const webEssentials = document.querySelector("#web-essentials")
const mouseOverWebEssentials = document.querySelector(".web-essentials")
webEssentials.addEventListener("mouseover", () => {
    mouseOverWebEssentials.classList.toggle("fade3")
    creationPlatformHover.style.backgroundColor = "";
})


const creationPlatformHover = document.querySelector("#creation-platform")
creationPlatformHover.addEventListener("mouseover", () => {
    mouseOverWebEssentials.classList.remove("fade3")
})


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
