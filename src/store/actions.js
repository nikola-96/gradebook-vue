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
    //
    getIntitalLoadedGradebooks({ commit }) {
        commit("setInitialLoadedGradebooks")
    },
    handleLoadingGradebooks({ commit }, value) {
        commit('setLoadedGradebooks', value)
    },
    handleLoadButtonStatus({ commit }) {
        commit('setLoadButtonStatus')
    },
    //Professor actions
    async getAllProfessors({ commit }) {

        const reponse = await professorService.getAll()
        commit('setAllProfessors', reponse)
    }


}