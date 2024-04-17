import axios from 'axios';

const instance = axios.create({
    baseURL: "https://newsapi.org/v2"
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
export { nyt };