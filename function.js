function welcomeUser() {
  alert("Welcome to the User/Student.");
}

window.onload = welcomeUser;

function printInfo() {
  var studentId = document.getElementById("studentId").value;
  var studentName = document.getElementById("studentName").value;
  var studentGrade = document.getElementById("studentGrade").value;

  var tableBody = document.getElementById("tableBody");

  var newRow = tableBody.insertRow(tableBody.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML = studentId;
  cell2.innerHTML = studentName;
  cell3.innerHTML = studentGrade;

  document.getElementById("studentId").value = "";
  document.getElementById("studentName").value = "";
  document.getElementById("studentGrade").value = "";
}
