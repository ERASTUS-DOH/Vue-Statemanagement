export default {
    //They permit the use of asynchronous code.
    login(context){
    context.commit('login', {isAuth: true});
},
    logout(context){
    context.commit('logout', {isAuth: false});
}

}