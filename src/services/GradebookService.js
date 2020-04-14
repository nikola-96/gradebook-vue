import HTTP from './BaseService';

class GradebookService {

    async getAll() {
        const response = await HTTP.get('/gradebooks')

        return response.data
    }
    async getFiltredGradebooks(term) {
        const response = await HTTP.get(`/gradebooks?term=${term}`)

        return response.data
    }
    async getAvalibleProf() {
        const response = await HTTP.get('/gradebooks/create');

        return response.data;
    }
    async postGradebook(gradebook) {
        const response = await HTTP.post('/gradebooks/store', gradebook)

        return response.data
    }
    async getMyGradebook() {
        const response = await HTTP.get('/my-gradebook');

        return response.data
    }
    async getSingleGradebook(id) {
        const response = await HTTP.get(`/gradebook/${id}`);

        return response.data
    }
}
const gradebookService = new GradebookService();
export default gradebookService;