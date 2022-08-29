const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

const onTabClick = (e) => {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove("border-softRed", "border-b-4", "md:border-b-0");
  });
  // activate a new tab and panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  //   Hide all panels
  panels.forEach((panel) => {
    if (panel.classList.contains(classString)) return panel.classList.remove("hidden");
    return panel.classList.add("hidden");
  });

  //   document
  //     .getElementById("panels")
  //     .getElementsByClassName(classString)[0]
  //     .classList.remove("hidden");
};

// Toggle Mobile Menu
const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
};

// Check if Click Outside
const clickOutside = (event) => {
  const el = event.target;
  if (menu.contains(el) || btn.contains(el)) {
    if (el.hasAttribute("href")) return navToggle();
    return;
  }
  return btn.classList.contains("open") && navToggle();
};

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// hamburger button listener
btn.addEventListener("click", navToggle);

// click outside
window.addEventListener("click", clickOutside);
