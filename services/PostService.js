import axios from 'axios';

const getPosts = () => {
    return axios({
        method : 'get',
        url : 'https://douglascabral.com.br/fiapgram/posts.json'
    })
}

export {getPosts}