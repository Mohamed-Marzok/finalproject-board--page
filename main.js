let list = document.querySelector(".navigation ul");
let main = document.querySelector(".main");
let toggle = document.querySelectorAll(".toggle");
let navigation = document.querySelector(".navigation");
let container = document.querySelector(".container");
let listOpations = document.querySelectorAll(".navigation ul li");
let mainItems = document.querySelectorAll(".main-item");

list.addEventListener("mouseover", function (e) {
  if (e.target.closest("li")) {
    listOpations.forEach((option) => option.classList.remove("hovered"));
    mainItems.forEach((item) => item.classList.remove("active"));
    e.target.closest("li").classList.add("hovered");
    let pageName = e.target.closest("li").querySelector("p").textContent;
    document.querySelector(`.main-${pageName}`).classList.add("active");
  }
});

[...toggle].forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    main.classList.toggle("nonactive");
    navigation.classList.toggle("nonactive");
  });
});
