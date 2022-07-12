import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import toys from '../../data/toys.json'
import axios from 'axios'
const KEY = 'toysDB'
const gToys = toys
const BASE_URL = '//localhost:3030/toy/'
export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

// console.log(toys)
_createToys()

// TODO: support paging and filtering and sorting
function query(filterBy) {
    return axios.get(BASE_URL, { params: filterBy }).then(res => res.data)
}

function getById(id) {
    return axios.get(BASE_URL + id).then(res => {
        console.log(res.data);
        return res.data
    })
}

function remove(id) {
    return axios.delete(BASE_URL + id).then(res => res.data)
}


function save(toy) {
    if (toy._id) {
        return axios.put(BASE_URL , toy).then(res => res.data)
    } else {
        return axios.post(BASE_URL , toy).then(res => res.data)
    }
}


function getEmptyToy(name = '') {
    const toy = {
        _id: null,
        name,
        price: null,
        labels: [],
        inStock: true,
        createdAt: Date.now(),
    }
    return new Promise((resolve, reject) => {
        resolve(toy)
    })
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