import HTTP from './BaseService';

class StudentService {
    async post(student) {
        const response = await HTTP.post('/gradebooks/students/store', student);

        return response;
    }
    async deleteStudent(id) {
        await HTTP.delete(`/gradebooks/students/${id}`)
    }
    async getSingleStudent(id) {
        const response = await HTTP.get(`/gradebooks/student/edit/${id}`)
        return response.data
    }
    async updateStudent(student, id) {
        const response = await HTTP.post(`/gradebooks/student/edit/${id}`, student)

        return response.data
    }

}
const studentService = new StudentService();
export default studentService; 