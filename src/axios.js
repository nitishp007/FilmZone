import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"  //we don't have to write for example(www.google) every time  
})

export default instance;