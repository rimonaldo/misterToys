import { storageService as syncService } from './storage.service.js'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

// import { storageService } from './async-storage.service.js'

const KEY = 'userDB'

export const userService = {
    getLoggedInUser,
    save

}

createUser()

function getLoggedInUser() {
    return new Promise((resolve, reject) => {
        let user = syncService.load(KEY)
        user ? resolve(user) : reject('could not get user')
    })
}

function createUser() {
    let user = syncService.load(KEY)
    if (!user) {
        user = _createUser()
        syncService.store(KEY, user)
    }
}

function _createUser(fname = 'Puki ben david') {
    return {
        _id: utilService.makeId(),
        fname,
        activites: { action: '', at: '' },
        todos: []
    }
}

function save(user) {
    return new Promise((resolve, reject) => {
        syncService.store(KEY, user)
        user ? resolve(user) : reject('could not get updated user')
    })
}

