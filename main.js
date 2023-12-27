const personImage = document.getElementById('person-img')
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phoe');
const locationUser = document.getElementById('location');
const age = document.getElementById('age');

function fetchUser() {
    fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
        getUser(data.results[0]);
    });
}

function getUser(user) {
    console.log(user)
    const userInfo = document.querySelector('#user-info');
    userInfo.innerHTML = `
    <div class="flex">
        <img id="person-img" src="${user.picture.large}">
            <div class="user-details">
                <p id="name" class="name"><span>Name:</span> ${user.name.first} ${user.name.last} </p>
                <p id="email" class="email"><span>Email:</span> ${user.email} </p>
                <p id="phone" class="phone"><span>Phone:</span> ${user.cell} </p>
                <p id="location" class="location"><span>Location:</span> ${user.location.city}, ${user.location.state} </p>
                <p id="age" class="age"><span>Age:</span> ${user.dob.age}</p>
            </div>
    </div>
    `;
}


document.querySelector('#btn-gen').addEventListener('click', fetchUser);

