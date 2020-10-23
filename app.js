var leftBoxTabs = document.querySelectorAll(".leftBoxTabs button");
var leftActivities = document.querySelectorAll(".leftActivities");
var rightBoxTabs = document.querySelectorAll(".rightBoxTabs button");
var tabPanel = document.querySelectorAll(".tabPanel");

function switchTabs(tab, tab_index, tab_wraps) {
  tab_wraps.forEach(function (content, content_index) {
    if (content_index == tab_index) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}

leftBoxTabs.forEach(function (tab, tab_index) {
  tab.addEventListener("click", function () {
    leftBoxTabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    switchTabs(tab, tab_index, leftActivities);
  });
});

rightBoxTabs.forEach(function (tab, tab_index) {
  tab.addEventListener("click", function () {
    rightBoxTabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    switchTabs(tab, tab_index, tabPanel);
  });
});

