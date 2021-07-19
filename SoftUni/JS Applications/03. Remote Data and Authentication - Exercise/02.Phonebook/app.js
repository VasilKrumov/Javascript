function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getContacts);
    document.getElementById('btnCreate').addEventListener('click', createContact);
}

attachEvents();

async function getContacts(){
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';
    const response = await fetch(`http://localhost:3030/jsonstore/phonebook`);
    const data = await response.json();

    Object.values(data).map(createLis)
}

function createLis({person, phone, _id}){
    const ul = document.getElementById('phonebook');
    const li = document.createElement('li');
    li.textContent = `${person}: ${phone}`;
    li.id = _id;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', delPhone)
    ul.appendChild(li);
    li.appendChild(delBtn);
}

async function delPhone(event){
    const id = event.target.parentNode.id

    const response = await fetch(`http://localhost:3030/jsonstore/phonebook/` + id, {
        method: 'delete',
    });
    getContacts();
}

async function createContact(event){
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    if(personInput.value === '' || phoneInput.value === ''){
        alert('Please fill the input properly!');
        throw new Error('Please fill the input properly!');
    }

    let phone = {
        person: personInput.value,
        phone: phoneInput.value
    }

    await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(phone)
    });
    personInput.value = '';
    phoneInput.value = '';
    getContacts()
}


