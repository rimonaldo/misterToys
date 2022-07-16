import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import axios from 'axios'
const KEY = 'toysDB'
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/toy/'
    : '//localhost:3030/api/toy/'
export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}



// TODO: support paging and filtering and sorting
async function query(filterBy) {
    try {
        const toys = await axios.get(BASE_URL, { params: filterBy })
        return toys.data
    }
    catch (err) {
        console.log(err);
    }

}

function getById(id) {
    return axios.get(BASE_URL + id).then(res => {
        console.log(res.data);
        return res.data
    })
}

// function remove(id) {
//     return axios.delete(BASE_URL + id).then(res => res.data)
// }


async function remove(id) {
    return axios.delete(BASE_URL + id)
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        })
    // try {
    //     const res = axios.delete(BASE_URL + id)
    //     // console.log(res.data);
    //     if (res.data) {
    //         return res.data
    //     }

    // } catch (err) {
    //     console.log('helsaffaso');
    //     console.log(err);
    // } finally {
    //     console.log('helo');
    // }
}



function save(toy) {
    if (toy._id) {
        return axios.put(BASE_URL, toy).then(res => res.data)
    } else {
        return axios.post(BASE_URL, toy).then(res => res.data)
    }
}


function getEmptyToy(name = '') {
    return new Promise((resolve, reject) => {
        resolve(
            {
                _id: null,
                name,
                price: null,
                labels: [],
                inStock: true,
                createdAt: Date.now(),
            }
        )
    })
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