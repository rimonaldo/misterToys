import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import toys from '../../data/toys.json'
const KEY = 'toysDB'
const gToys = toys

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

console.log(toys)
_createToys()

// TODO: support paging and filtering and sorting
function query() {

    return storageService.query(KEY)
}

function getById(id) {
    return storageService.get(KEY, id)
}

function remove(id) {
    return storageService.remove(KEY, id)
}


function save(toy) {
    if (toy._id) {
        return storageService.put(KEY, toy)
    } else {
        return storageService.post(KEY, toy)
    }
}


function getEmptyToy() {
    return {
        _id: '',
        label: { sticker: '⚪', txt: null },
        task: null,
        importance: null,
        due: null,
        createdAt: Date.now(),
        status: 'active',
        user: {},
        isDone: false,
    }
}

function _createToys() {
    var toys = utilService.loadFromStorage(KEY)
    if (!toys || !toys.length) {
        storageService.postMany(KEY, gToys)
    }
    return gToys
}

function _createToy(task) {
    return {
        _id: utilService.makeId(),
        label: { sticker: '⚪', txt: 'Study' },
        task,
        createdAt: Date.now(),
        due: 'tomorrow',
        importance: 'urgent',
        user: {},
        status: 'active',
    }
}