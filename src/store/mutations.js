export default {
    setUserStatus(state, status) {
        state.isUserLogin = status;
    },
    //gradebook mutations
    setAllGradebooks(state, response) { //dobavljanje svih dnevnika
        state.gradebooks = response;
    },
    setFiltredGradebooks(state, response) { //dobavljanje filtritanih dnevnika
        state.gradebooks = response
    },
    setInitialLoadedGradebooks(state) {
        state.loadedGradebooks = state.gradebooks.slice(0, 10)

    },
    setLoadedGradebooks(state, value) {
        const loaded = state.gradebooks.slice(value.start, value.end)

        loaded.forEach(element => {

            state.loadedGradebooks.push(element)
        });
    },
    setMyGradebook(state, response) {

        state.myGradebook = response;
    },
    setLoadButtonStatus(state, value) {
        state.disableLoadButton = value;
    },

    setAllProfessors(state, response) {

        state.professors = response;
    },
    setSingleProfessor(state, response) {
        state.singleProfessor = response
    },
    setFiltredProfesors(state, response) {
        state.professors = response;
    },
    setInitialLoadedProfessors(state) {
        state.loadedProfessors = state.professors.slice(0, 10)
    },
    setLoadedProfessors(state, value) {
        const loaded = state.professors.slice(value.start, value.end)

        loaded.forEach(element => {

            state.loadedProfessors.push(element)
        });
    },
    setAvalibleProfessors(state, response) {
        state.avalibleProfessors = response;
    },
    setAvalibleGradebooks(state, response) {
        state.avalibleGradebooks = response;
    },
    setSingleGradebook(state, response) {
        state.singleGradebook = response
    },
    setComments(state, response) {
        state.comments = response
    },
    setSingleStudent(state, response) {
        state.singleStudent = response
    },
    setErrors(state, errors) {
        state.errors = errors
    },
    setingMyGradebookToNull(state) {
        state.myGradebook = {}
    },
    setStudentToNull(state) {
        state.singleStudent = {}
    }

}