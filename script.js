function generateCV() {
  document.getElementById("form-section").style.display = "none";
  document.getElementById("cv-section").style.display = "block";

  document.getElementById("r-name").innerText = document.getElementById("name").value;
  document.getElementById("r-father").innerText = document.getElementById("father").value;
  document.getElementById("r-mother").innerText = document.getElementById("mother").value;
  document.getElementById("r-permanent").innerText = document.getElementById("permanent").value;
  document.getElementById("r-present").innerText = document.getElementById("present").value;
  document.getElementById("r-mobile").innerText = document.getElementById("mobile").value;
  document.getElementById("r-dob").innerText = document.getElementById("dob").value;
  document.getElementById("r-sex").innerText = document.getElementById("sex").value;
  document.getElementById("r-height").innerText = document.getElementById("height").value;
  document.getElementById("r-religion").innerText = document.getElementById("religion").value;
  document.getElementById("r-nationality").innerText = document.getElementById("nationality").value;

  document.getElementById("r-exam1").innerText = document.getElementById("exam1").value;
  document.getElementById("r-group1").innerText = document.getElementById("group1").value;
  document.getElementById("r-board1").innerText = document.getElementById("board1").value;
  document.getElementById("r-gpa1").innerText = document.getElementById("gpa1").value;
  document.getElementById("r-year1").innerText = document.getElementById("year1").value;

  document.getElementById("r-exam2").innerText = document.getElementById("exam2").value;
  document.getElementById("r-group2").innerText = document.getElementById("group2").value;
  document.getElementById("r-board2").innerText = document.getElementById("board2").value;
  document.getElementById("r-gpa2").innerText = document.getElementById("gpa2").value;
  document.getElementById("r-year2").innerText = document.getElementById("year2").value;
}

function printCV() {
  window.print();
}

function editCV() {
  document.getElementById("form-section").style.display = "block";
  document.getElementById("cv-section").style.display = "none";
}
