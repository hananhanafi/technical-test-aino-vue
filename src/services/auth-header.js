import store from "../store";

export default function authHeader() {
  const user = store.getters['auth/currentUser']
  const token = store.getters['auth/token']

  // return headers auth with jwt for request api if user logged in
  if (user && token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
}
