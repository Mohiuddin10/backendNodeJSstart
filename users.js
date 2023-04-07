const loadUsers = () => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => showUsers(data))
};
loadUsers();

const showUsers = (users) => {
    users.map((user) => {
        const {ID:id, name, email} = user;
        const userArea = document.getElementById('user');
        const singleUser = document.createElement('div');
        singleUser.classList.add('col');
        singleUser.innerHTML = `
        <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">User Name: ${name}</h5>
                  <p class="card-text">Id: ${id}, email: ${email}</p>
                </div>
              </div>
        `;
        userArea.appendChild(singleUser);
    })};
    
    