import HTTP from './BaseService';

class ProfessorService {
    async getAll() {
        const reposnse = await HTTP.get('/professors');

        return reposnse.data;
    }
    async getFiltredProf(term) {
        const response = await HTTP.get(`/professors?term=${term}`)

        return response.data
    }
    async getSingleProf(id) {
        const response = await HTTP.get(`/professor/${id}`);

        return response.data
    }
}
const professorService = new ProfessorService();

export default professorService;