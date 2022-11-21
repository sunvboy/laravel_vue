import axiosClient from "../axios";
export function getCurrentUser({ commit }) {
    return axiosClient.get('auth/user')
        .then(({ data }) => {
            console.log(2)

            commit('setUser', data);
            return data;
        }).catch((response) => {
            console.log(response)
        })
}
export function login({ commit }, data) {
    return axiosClient.post('auth/login', data)
        .then(({ data }) => {
            console.log(1)
            commit('setUser', data.user);
            commit('setToken', data.token)
            return data;
        })
}
export function logout({ commit }) {
    return axiosClient.post('auth/logout')
        .then((response) => {
            commit('setToken', null)

            return response;
        })
}