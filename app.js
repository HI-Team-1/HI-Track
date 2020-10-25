var leftBoxTabs = document.querySelectorAll(".leftBoxTabs button");
var leftActivities = document.querySelectorAll(".leftActivities");
var rightBoxTabs = document.querySelectorAll(".rightBoxTabs button");
var tabPanel = document.querySelectorAll(".tabPanel");
var autogenButton=document.querySelector(".autoGenModule");
autogenButton.addEventListener("click",autoGenModule);




function autoGenModule(){
  console.log("i am here");
  const module1=`
  
      <div class="container card">
        <div class="card-content align-wrapper">
          <span class="card-title activator">
            <span><i class="material-icons right">more_vert</i></span>
            <p class="">Goal</p>
          </span>
          <p>Event Frequency</p>
          <form action="#">
            <p>
              <label>
                <input type="checkbox" class="filled-in" />
                <span></span>
              </label>
            </p>
          </form>
        </div>
        <div class="card-reveal">
          <span class="card-title"
            ><i class="material-icons right">close</i></span
          >
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </div>
    `;
console.log(module1);
const position="beforeend";

leftActivities[0].insertAdjacentHTML(position,module1);






}
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
