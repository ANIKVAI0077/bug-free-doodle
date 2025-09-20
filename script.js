// Height options dynamically generate
const heightSelect = document.getElementById("height");
for (let ft = 4; ft <= 7; ft++) {
  for (let inch = 0; inch < 12; inch++) {
    if (ft === 4 && inch < 6) continue;
    if (ft === 7 && inch > 8) break;
    let opt = document.createElement("option");
    opt.textContent = `${ft}ft ${inch}in`;
    heightSelect.appendChild(opt);
  }
}

document.getElementById("cvForm").addEventListener("submit", function(e){
  e.preventDefault();

  // Personal info
  document.getElementById("cv-name").textContent = document.getElementById("name").value;
  document.getElementById("cv-father").textContent = document.getElementById("father").value;
  document.getElementById("cv-mother").textContent = document.getElementById("mother").value;
  document.getElementById("cv-permanent").textContent = document.getElementById("permanent").value;
  document.getElementById("cv-present").textContent = document.getElementById("present").value;
  document.getElementById("cv-mobile").textContent = document.getElementById("mobile").value;

  const dobValue = document.getElementById("dob").value;
  document.getElementById("cv-dob").textContent = new Date(dobValue).toLocaleDateString();

  document.getElementById("cv-gender").textContent = document.getElementById("gender").value;
  document.getElementById("cv-height").textContent = document.getElementById("height").value;
  document.getElementById("cv-religion").textContent = document.getElementById("religion").value;
  document.getElementById("cv-nationality").textContent = document.getElementById("nationality").value;

  // Education info
  const hscGroup = document.getElementById("hsc-group").value;
  const hscBoard = document.getElementById("hsc-board").value;
  const hscGpa = document.getElementById("hsc-gpa").value;
  const hscYear = document.getElementById("hsc-year").value;

  const sscGroup = document.getElementById("ssc-group").value;
  const sscBoard = document.getElementById("ssc-board").value;
  const sscGpa = document.getElementById("ssc-gpa").value;
  const sscYear = document.getElementById("ssc-year").value;

  const eduTable = document.querySelector(".edu-box table");
  eduTable.rows[1].cells[1].textContent = hscGroup;
  eduTable.rows[1].cells[2].textContent = hscBoard;
  eduTable.rows[1].cells[3].textContent = hscGpa;
  eduTable.rows[1].cells[4].textContent = hscYear;

  eduTable.rows[2].cells[1].textContent = sscGroup;
  eduTable.rows[2].cells[2].textContent = sscBoard;
  eduTable.rows[2].cells[3].textContent = sscGpa;
  eduTable.rows[2].cells[4].textContent = sscYear;

  // Hide form & service-box
  document.getElementById("form-section").style.display = "none";
  document.querySelector(".service-box").style.display = "none";

  // Show CV section
  document.getElementById("cv-section").style.display = "flex";

});
const textArray = ["My Website", "My Portfolio", "My World"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = textArray[index];
  let displayText = currentText.substring(0, charIndex);
  document.querySelector(".typing").textContent = displayText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % textArray.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
