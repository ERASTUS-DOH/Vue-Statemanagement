import counterMutators from "./mutators";
import counterActions from "./actions";
import counterGetters from "./getters";

export default {
    namespaced: true,
    state(){
        return {
            counter: 0,
        };
    },
    mutations:counterMutators,
    actions: counterActions,
    getters: counterGetters
};