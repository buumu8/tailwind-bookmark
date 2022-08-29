const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

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

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));
