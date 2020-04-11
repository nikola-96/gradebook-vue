export default {
    setUserStatus(state, status) {
        state.isUserLogin = status;
    },
    //gradebook mutations
    setAllGradebooks(state, response) {
        state.gradebooks = response;
    }
}