
var leftBoxTabs = document.querySelectorAll(".leftBoxTabs button");
var leftBoxList = document.querySelectorAll(".leftBoxList");

leftBoxTabs.forEach(function (tab, tab_index) {
  tab.addEventListener("click", function () {
    leftBoxTabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tab.classList.add("leftActivies");

    leftBoxList.forEach(function (content, content_index) {
      if (content_index == tab_index) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});


