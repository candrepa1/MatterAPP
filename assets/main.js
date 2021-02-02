import Auth from '../assets/js/classes/Auth.js';
import Request from '../assets/js/classes/Request.js';

// login
let loginForm = document.getElementById('login-form');
if(loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let user = { email, password };
        // let user = {
        //     email : email, 
        //     password : password,
        // };
        Auth.login(user);
    });
}

// register
let registerForm = document.getElementById('register-form');
if(registerForm) {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let user = { email, password };
        Auth.register(user);
    });
}

// invite user
let inviteForm = document.getElementById('invite-form');
if(inviteForm) {
    inviteForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let email = document.getElementById('email').value;
        let userInvited = { email };
        Request.inviteUser(userInvited)
            .then(response => {
                if(response.status === 201) {
                    alert('the email has been sent');
                } else {
                    alert('there was an error sending the email');
                }
            }); 
    });
}

// edit profile and show profile onchange
let updateUser = document.getElementById('name-form');
if(updateUser) {
    updateUser.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const fullName = firstName.concat(' ', lastName);
        const user = Auth.user();
        user.name = fullName;
        console.log(user);
        Request.updateUser(user)
            .then(response => {
                if(response.status === 200) {
                    alert('Your profile has been updated');
                } else {
                    alert('There was an error updating your profile');
                }
                return response.json();
            })
            .then(data => {
                let username = document.getElementById('username');
                username.innerHTML = data.name;
            });
        updateUser.reset();
    });
}


// show profile onload
const showProfile = () => {
    Request.showUser()
        .then(response => response.json())
        .then(data => {
            let username = document.getElementById('username');
            username.innerHTML = data.name;
        })
}
showProfile();




