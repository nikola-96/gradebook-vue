import HTTP from './BaseService';

class ProfessorService {
    async getAll() {
        const reposnse = await HTTP.get('/professors');

        return reposnse.data;
    }
    async getSingleProf(id) {
        const response = await HTTP.get(`/professor/${id}`);
        console.log(response.data);

        return response.data
    }
}
const professorService = new ProfessorService();

export default professorService;