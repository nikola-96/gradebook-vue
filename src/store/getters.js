export default {
    getUserStatus: state => state.isUserLogin,
    //gradebooks geters
    getAllGradebooksFromState: state => state.gradebooks,
    getMyGradebookFromState: state => state.myGradebook,
    getLoadedGradebooks: state => state.loadedGradebooks,
    getLoader: state => state.loader,
    getLoadButtonStatus: state => state.disableLoadButton,

    getAllProfessorsFromState: state => state.professors,
    getSingleProfessorFromState: state => state.singleProfessor,
    getLoadedProfessors: state => state.loadedProfessors,
    getAvalibleProfessorsFromState: state => state.avalibleProfessors,
    getAvalibleGradebooksFromState: state => state.avalibleGradebooks
}