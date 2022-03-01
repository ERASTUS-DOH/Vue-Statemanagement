import {createStore} from "vuex";
import rootMutators from "./mutators";
import rootActions from "./actions";
import rootGetters from "./getters";
import counterModule from "./counter/index"

const store = createStore({
    modules: {
        number: counterModule,
    },
    state(){
        return {
            auth: false,
        };
    },
    mutations: rootMutators,
    getters:rootGetters,
    actions: rootActions
});

export default store;