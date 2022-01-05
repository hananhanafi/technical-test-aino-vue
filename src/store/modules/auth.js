import UserService from '@/services/user.service';
import { getToken, saveToken, destroyToken } from "@/services/jwt.service";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    status: {
        loggedIn : user ? true : false,
    },
    user: user ? user : null,
    token: getToken()
}

    
export const auth = {
    namespaced: true,
    state: initialState,
    getters: {
        currentUser(state) {
            return state.user;
        },
        isAuthenticated(state) {
            return state.status.loggedIn;
        },
        token(state) {
            return state.token;
        },
    },
    actions: {
        login({ commit }, user) {
            return UserService.login(user).then(
                response => {
                commit('loginSuccess', response.data);
                    return Promise.resolve(response.data);
                },
                error => {
                commit('loginFailure');
                    return Promise.reject(error);
                }
        );
        },
        logout({ commit }) {
            UserService.logout();
            commit('logout');
        },
        register({ commit }, user) {
            return UserService.register(user).then(
                response => {
                commit('registerSuccess');
                return Promise.resolve(response.data);
                },
                error => {
                commit('registerFailure');
                return Promise.reject(error);
                }
        );
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            saveToken(user.token);
            state.token = user.token;
            state.user = user.user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            destroyToken();
            state.token = null;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            destroyToken();
            state.token = null;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};