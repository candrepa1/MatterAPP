import Request from './Request.js';

export default class Auth {
    static login(user) {
        Request.login(user)
        .then(response => {
            if(response.status === 200) {
                localStorage.setItem('authenticated', 'true');
                window.location.href = '/index.html';
            } else if(response.status === 401) {
                alert('incorrect credentials');
            } else {
                alert('there was an error, we do not know what it is');
            }
            return response.json();
        })
        .then(data => localStorage.setItem('user', JSON.stringify(data)))
    }
    static register(user) {
        Request.register(user)
            .then(response => {
                if(response.status === 201) {
                    localStorage.setItem('authenticated', 'true');
                    window.location.href = '/index.html';
                } else if(response.status === 422) {
                    alert('the email address has already been used');
                } else {
                    alert('there was an error, we do not know what it is');
                }
            })
    }
    static user() {
        return JSON.parse(localStorage.getItem('user'));
    }
}