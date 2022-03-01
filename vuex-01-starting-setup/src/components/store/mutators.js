export default {
    login(state, payload){
        state.auth = payload.isAuth;
    } ,
    logout(state, payload){
        state.auth = payload.isAuth;
    }
}