const loadUsers= () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
const displayUsers = users =>{
const userContainer = document.getElementById('container');
for(const user of users){
    console.log(user);
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML=`
    <h2>userName:${user.id.name}</h2>
    <h2>Email:${user.email}</h2>
    <h3>UserLocation:${user.location.city} ${user.location.country}</h3>
    `;
    userContainer.appendChild(userDiv)
}

}

loadUsers();