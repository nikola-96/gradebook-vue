import gradebookService from '@/services/GradebookService'

export default {
    changeUserStatus({ commit }, status) {
        commit('setUserStatus', status);
    },
    //Gradebook action
    async getAllGradebooks({ commit }) {
        const reponse = await gradebookService.getAll();

        commit('setAllGradebooks', reponse);
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
    }

}