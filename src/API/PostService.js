import axios from "axios";

export default class PostService {
    static changeFetchedObjectFields = (object) => {
        object.data = object.data.map(item => ({
            id: item.id,
            title : item.title,
            description : item.body,
        }))
        return object
    }

    static async getAll(limit = 10, page = 1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return (this.changeFetchedObjectFields(response))
    }

    static async getByID(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return (this.changeFetchedObjectFields(response))
    }

    static async getCommentsByPostID(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return (response)
    }
}