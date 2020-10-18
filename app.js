const sideBoxTabs=document.querySelectorAll(".sideNavBox .sideBoxTabs button");
const tabPanels=document.querySelectorAll(".sideNavBox .tabPanel");

function openTab(evt, tabContent) {

  for (let i = 0; i < tabPanels.length; i++) {
    tabPanels[i].style.display = "none";
  }
  for (i = 0; i < sideBoxTabs.length; i++) {
    sideBoxTabs[i].className = sideBoxTabs[i].className.replace(" active", "");
  }
  document.getElementById(tabContent).style.display = "block";
  evt.currentTarget.className += " active";
}
