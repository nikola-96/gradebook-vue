import gradebookService from '@/services/GradebookService'
import professorService from '@/services/ProfessorService'


export default {
    changeUserStatus({ commit }, status) {
        commit('setUserStatus', status);
    },
    //Gradebook action
    async getAllGradebooks({ commit }) {
        const reponse = await gradebookService.getAll();
        commit('setAllGradebooks', reponse);
    },
    async getFiltredGradebooks({ commit }, term) {
        const response = await gradebookService.getFiltredGradebooks(term);
        commit('setFiltredGradebooks', response);
    },
    // async postGradebook({ commit }, gradebook){
    //     const response = await gradebookService.postGradebook(gradebookService)

    // },
    //
    getIntitalLoadedGradebooks({ commit }) {
        commit("setInitialLoadedGradebooks")
    },
    handleLoadingGradebooks({ commit }, value) {
        commit('setLoadedGradebooks', value)
    },
    handleLoadButtonStatus({ commit }, value) {
        commit('setLoadButtonStatus', value)
    },
    //Professor actions
    async getAllProfessors({ commit }) {
        const reponse = await professorService.getAll()
        commit('setAllProfessors', reponse)
    },
    async getSingleProessor({ commit }, id) {
        const response = await professorService.getSingleProf(id)
        commit('setSingleProfessor', response)
    },
    async getFiltredProfessors({ commit }, term) {
        const response = await professorService.getFiltredProf(term);
        commit('setFiltredProfesors', response)
    },
    getIntitalLoadedProfessors({ commit }) {
        commit("setInitialLoadedProfessors")
    },
    handleLoadingProfessors({ commit }, value) {
        commit('setLoadedProfessors', value)
    },
    async getAvalibleProfessors({ commit }, ) {
        const response = await gradebookService.getAvalibleProf();
        commit('setAvalibleProfessors', response)
    }



}