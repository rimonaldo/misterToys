
import axios from 'axios'
const STORAGE_KEY = 'loggedInUser'
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/login/'
    : '//localhost:3030/api/login/'

export const userService = {
    login,
    signup,
    logout,
}


// TODO: support paging and filtering and sorting
async function login(credentials) {
    axios.defaults.withCredentials = true
    try {
        const user = await axios.post(BASE_URL, credentials)
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        return user.data
    }
    catch (err) {
        console.log('could not log in ', err);
    }
}

async function logout() {
    try {
        await axios.post(BASE_URL + 'logout')
        sessionStorage.clear()
    } catch (err) {
        console.log(err)
    }

}

async function signup(newUser) {
    try {
        console.log('signin up', newUser);
        const user = await axios.post(BASE_URL + 'signup', newUser)
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        return user
    } catch (err) {
        console.log(err);
    }
}

