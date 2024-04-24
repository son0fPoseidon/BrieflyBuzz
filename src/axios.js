import axios from 'axios';

const baseURL = "https://brieflybuzz-server-7be20bd602e1.herokuapp.com/"

const instance = axios.create({
    baseURL: "https://brieflybuzz-server-7be20bd602e1.herokuapp.com"
})

const nyt = {
    mostPopular: axios.create({
        baseURL: "https://api.nytimes.com/svc/mostpopular/v2/"
    }),
    topstories: axios.create({
        baseURL: "https://api.nytimes.com/svc/topstories/v2/"
    }),
}
export default instance;
export { baseURL };
export { nyt };