import HTTP from './BaseService';

class AuthService {

    constructor() {
        this.setAxiosDefaultAuthorizationHeader();

    }
    async register(user) {
        const response = await HTTP.post('/register', user);

        return response.data;
    }
    login(email, password) {

        return HTTP.post('login', { email, password }).then(response => {
            window.localStorage.setItem('loginToken', response.data.token);
            this.setAxiosDefaultAuthorizationHeader();
        });
    }

    setAxiosDefaultAuthorizationHeader() {
        const TOKEN = window.localStorage.getItem('loginToken');
        if (!TOKEN) {

            return;
        }

        HTTP.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
    }

    logout() {
        window.localStorage.removeItem('loginToken');
        delete HTTP.defaults.headers.common['Authorization'];
    }

    isAuthenticated() {

        return !!window.localStorage.getItem('loginToken');
    }
}

const authService = new AuthService();
export default authService;





