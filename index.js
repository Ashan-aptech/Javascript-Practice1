const TaskName = document.getElementById("TaskName");
const TaskDesc = document.getElementById("TaskDescription");
const TaskDate = document.getElementById("taskDate");

let Collections = JSON.parse(localStorage.getItem("Task")) || [];
let index = 0;

document.querySelector('#addTask').addEventListener("click", function () {

  if (!TaskName.value || !TaskDesc.value || !TaskDate.value) {
    alert("Please fill all fields!");
    return;
  }

  Collections.push({
    Name: TaskName.value,
    Desc: TaskDesc.value,
    Date: TaskDate.value
  });

  localStorage.setItem("Task", JSON.stringify(Collections));

  GetDataFromLocalStorage();

  TaskName.value = "";
  TaskDesc.value = "";
  TaskDate.value = "";
});

function GetDataFromLocalStorage() {
  const tableBody = document.querySelector("#taskTable tbody");
  tableBody.innerHTML = "";
  index = 0;

  Collections.forEach((e) => {
    index++;
    tableBody.innerHTML += `
      <tr>
        <th scope="row">${index}</th>
        <td>${e.Name}</td>
        <td>${e.Date}</td>
      </tr>
    `;
  });
}

GetDataFromLocalStorage();
