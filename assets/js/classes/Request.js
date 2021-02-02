const BASE_URL = 'https://matter-app.herokuapp.com/api/v1';
import Auth from './Auth.js';

export default class Request {
    static login(user) {
        return fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })  
    }
    static register(user) {
        return fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    static inviteUser(userInvited) {
        const user = Auth.user();
        return fetch(`${BASE_URL}/users/${user.id}/invite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userInvited)
        })
    }
    static updateUser(userUpdated) {
        return fetch(`${BASE_URL}/users/${userUpdated.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userUpdated)
        })
    }
    static showUser() {
        const user = Auth.user();
        return fetch(`${BASE_URL}/users/${user.id}`)
    }
}