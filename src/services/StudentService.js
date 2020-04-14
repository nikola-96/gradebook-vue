import HTTP from './BaseService';

class StudentService {
    async post(student) {
        const response = await HTTP.post('/gradebooks/students/store', student);

        return response;
    }
}
const studentService = new StudentService();
export default studentService; 