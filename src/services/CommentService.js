import HTTP from './BaseService';

class CommentService {
    async postComment(comment) {
        const response = await HTTP.post("/gradebooks/comments/store", comment);

        return response.data
    }
    async getAll(id) {
        const response = await HTTP.get(`/gradebooks/comments/${id}`)

        return response.data
    }
    async delete(id) {
        await HTTP.delete(`/gradebooks/comments/${id}`)

    }
}
const commentService = new CommentService();

export default commentService;