let button = document.getElementById("button");
button.addEventListener("click", () => {
  let name = window.prompt("Enter your name");
  document.getElementById("replace-me").innerText = name;
});
