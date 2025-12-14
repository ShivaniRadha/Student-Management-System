let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
    });

    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const course = document.getElementById("course").value;

    if (!name || !roll || !course) {
        alert("Please fill all fields");
        return;
    }

    students.push({ name, roll, course });
    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

displayStudents();
