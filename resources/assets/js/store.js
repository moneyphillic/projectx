export default {
    state: {
        defaultState: true
    },
    getters: {
        defaultState(state) {
            return state.defaultState;
        }
    },
    mutations: {
        defaultStateToFalse(state) {
            state.defaultState = false;
        },
        defaultStateToTrue(state) {
            state.defaultState = true;
        },
    },
    actions: {
        defaultStateToFalse(context) {
            context.commit('defaultStateToFalse');
        },
        defaultStateToTrue(context) {
            context.commit('defaultStateToTrue');
        },
    }
}