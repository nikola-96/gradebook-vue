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
    async getAvalibleGradebooks() {
        const response = await HTTP.get('professors/create');

        return response.data;
    }
    async postProfessor(professor) {
        const response = await HTTP.post('professors/create', professor)

        return response.data
    }
}
const professorService = new ProfessorService();

export default professorService;