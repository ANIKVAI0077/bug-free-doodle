function generateCV() {
  const name = document.getElementById('name').value;
  const father = document.getElementById('father').value;
  const mother = document.getElementById('mother').value;
  const address = document.getElementById('address').value;
  const mobile = document.getElementById('mobile').value;
  const dob = document.getElementById('dob').value;
  const sex = document.getElementById('sex').value;
  const height = document.getElementById('height').value;
  const religion = document.getElementById('religion').value;
  const nationality = document.getElementById('nationality').value;

  const ssc_exam = document.getElementById('ssc_exam').value;
  const ssc_group = document.getElementById('ssc_group').value;
  const ssc_board = document.getElementById('ssc_board').value;
  const ssc_gpa = document.getElementById('ssc_gpa').value;
  const ssc_year = document.getElementById('ssc_year').value;

  const hsc_exam = document.getElementById('hsc_exam').value;
  const hsc_group = document.getElementById('hsc_group').value;
  const hsc_board = document.getElementById('hsc_board').value;
  const hsc_gpa = document.getElementById('hsc_gpa').value;
  const hsc_year = document.getElementById('hsc_year').value;

  const photo = document.getElementById('photo').files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const output = document.getElementById('cv-output');
    output.innerHTML = `
      <img src="${e.target.result}" alt="Photo">
      <h2 style="text-align:center;">Curriculum Vitae</h2>
      <strong>Full Name:</strong> ${name}<br>
      <strong>Father's Name:</strong> ${father}<br>
      <strong>Mother's Name:</strong> ${mother}<br>
      <strong>Address:</strong> ${address}<br>
      <strong>Mobile Number:</strong> ${mobile}<br>
      <strong>Date of Birth:</strong> ${dob}<br>
      <strong>Sex:</strong> ${sex}<br>
      <strong>Height:</strong> ${height}<br>
      <strong>Religion:</strong> ${religion}<br>
      <strong>Nationality:</strong> ${nationality}<br><br>

      <strong>Educational Qualification:</strong>
      <table>
        <tr>
          <th>Name of Exam</th>
          <th>Group</th>
          <th>Board</th>
          <th>GPA</th>
          <th>Year</th>
        </tr>
        <tr>
          <td>${ssc_exam}</td>
          <td>${ssc_group}</td>
          <td>${ssc_board}</td>
          <td>${ssc_gpa}</td>
          <td>${ssc_year}</td>
        </tr>
        <tr>
          <td>${hsc_exam}</td>
          <td>${hsc_group}</td>
          <td>${hsc_board}</td>
          <td>${hsc_gpa}</td>
          <td>${hsc_year}</td>
        </tr>
      </table>
    `;
  };

  if (photo) {
    reader.readAsDataURL(photo);
  }
}

function saveAsPDF() {
  window.print();
}
