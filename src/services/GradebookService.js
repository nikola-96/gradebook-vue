import HTTP from './BaseService';

class GradebookService {

    async getAll() {
        const response = await HTTP.get('/gradebooks')

        return response.data
    }
    async getFiltredGradebooks(term) {
        const response = await HTTP.get(`/gradebooks?term=${term}`)
        console.log(response.data)

        return response.data
    }
}
const gradebookService = new GradebookService();
export default gradebookService;