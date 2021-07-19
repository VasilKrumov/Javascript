function main(){
    getStudents();

    document.getElementById('submit').addEventListener('click', createStudent)
}

main();

async function createStudent(event){
    event.preventDefault();
    const formData = new FormData(event.target.parentNode);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    if(firstName === '' || lastName === '' || facultyNumber === '' || grade === '' || isNaN(facultyNumber) || isNaN(grade)){
        alert('Please enter a valid input');
        throw new Error('Please enter a valid input');
    }
    let student = {
        facultyNumber,
        firstName,
        grade,
        lastName
    }

    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    });

    event.target.parentNode.reset();
    getStudents();

}

async function getStudents(){
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    const url = `http://localhost:3030/jsonstore/collections/students`;

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).map(appendStudents)
}

function appendStudents({facultyNumber, firstName, grade, lastName, _id}){
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tr.id = _id;

    const th1 = document.createElement('th');
    th1.textContent = firstName;

    const th2 = document.createElement('th');
    th2.textContent = lastName;

    const th3 = document.createElement('th');
    th3.textContent = facultyNumber;

    const th4 = document.createElement('th');
    th4.textContent = grade;

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);

    tbody.appendChild(tr);
}