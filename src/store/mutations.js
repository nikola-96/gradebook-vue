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
    setLoadButtonStatus(state) {
        state.disableLoadButton = true;
    },
    setAllProfessors(state, response) {

        state.professors = response;
    },
    setSingleProfessor(state, response) {
        state.singleProfessor = response
    }
}