var leftBoxTabs = document.querySelectorAll(".leftBoxTabs button");
var leftActivities = document.querySelectorAll(".leftActivities");
var rightBoxTabs = document.querySelectorAll(".rightBoxTabs button");
var tabPanel = document.querySelectorAll(".tabPanel");
var checkOffAct = document.querySelector(".checkOffAct");
var checkOffForm = document.querySelector(".checkOffForm");
var saveButton = document.querySelector(".saveButton");
var activityTitle = document.querySelector("#name");
var colorActivity = document.querySelector(".colorSelected");
var leftBoxList = document.querySelector("#leftBoxList");
console.log(leftActivities);
saveButton.addEventListener("click", submitForm);
checkOffAct.addEventListener("click", formOpen);
tabPanel[1].style.display = "block";
function submitForm() {
  checkOffForm.style.display = "none";
  var title = activityTitle.value;
  var color = colorActivity.value;

  console.log(title);
  console.log(color);
  autoGenModule(title, color);
}
function formOpen() {
  checkOffForm.style.display = "block";
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
function autoGenModule(title, color) {
  const allA = `<li class="text collection-item">
    <i class="material-icons text">sort</i>${title}
</li>`;

  const module1 = `
    
      <li class=" container card today">
        <div class="card-content align-wrapper">
          <span class="#">
            <span><i class="material-icons right">more_vert</i></span>
            <p class="">${title}</p>
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
      </li>
     
    `;
  console.log(module1);
  const position = "beforeend";

  leftActivities[0].insertAdjacentHTML(position, module1);
  leftActivities[1].insertAdjacentHTML(position, allA);
}
