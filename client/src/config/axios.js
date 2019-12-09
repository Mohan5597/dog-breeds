import Axios from 'axios'

// 
const axios = Axios.create({
    //'http://localhost:3001' ||
    baseURL:    'https://dogsbreeds.herokuapp.com/' || '/'
})

export default axios