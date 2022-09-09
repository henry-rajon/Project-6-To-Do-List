function studentInfo(elementId) {
    const studentNameInput = document.getElementById(elementId);
    const studentName = studentNameInput.value;
    studentNameInput.value = "";
    return studentName;
}

let slNumber = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    slNumber++;
    const studentName = studentInfo('student-name');

    const studentIdString = studentInfo('student-id');
    const studentId = parseInt(studentIdString);

    const studentDept = studentInfo('student-dept');

    const studentGpaString = studentInfo('student-gpa');
    const studentGpa = parseFloat(studentGpaString);
    

    if (studentName == "") {
        alert('Please Enter Your Student Name');
    }
    else if (isNaN(studentId)) {
        alert('Please Enter Your Student Id');
    }
    else if (studentDept == "") {
        alert('Please Enter Your Student Info');
    }
    else if (isNaN(studentGpa)) {
        alert('Please Enter Your Student GPA');
    }
    else {
        const tableBody = document.getElementById('table-body');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${slNumber}</td>
            <td>${studentName}</td>
            <td>${studentId}</td>
            <td>${studentDept}</td>
            <td>${studentGpa}</td>
        `;
        tableBody.appendChild(tr);
    }

})