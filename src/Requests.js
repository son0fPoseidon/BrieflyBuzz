import API_KEY from './API_KEY';


const requests = {
    fetchTopHeadlinesIndia: {
        country: 'in',
        pageSize: 40,
        apiKey: process.env.REACT_APP_API_KEY || API_KEY
    },
    fetchTopHeadlinesUS: {
        country: 'us',
        apiKey: process.env.REACT_APP_API_KEY || API_KEY
    },
    fetchTopHeadlinesDutch: {
        country: 'nl',
        apiKey: process.env.REACT_APP_API_KEY || API_KEY
    },
    fetchTopHeadlinesKorea: {
        country: 'kr',
        apiKey: process.env.REACT_APP_API_KEY || API_KEY
    },
    fetchTopHeadlinesBusiness: {
        category: 'business',
        language: 'en',
        apiKey: process.env.REACT_APP_API_KEY || API_KEY
    },
}

export default requests;