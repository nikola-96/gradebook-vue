import HTTP from './BaseService';

class ProfessorService {
    async getAll() {
        const reposnse = await HTTP.get('/professors')

        return reposnse.data
    }
}
const professorService = new ProfessorService();

export default professorService;