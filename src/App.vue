<template>
  <div id="nav" v-if="isAuthenticated">
    <router-link to="/home">Home</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/user/list">Daftar User</router-link> |
    <router-link to="/" @click="logOut" >Logout</router-link>
  </div>
  <div id="nav" v-if="!isAuthenticated">
    <router-link to="/">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
      alert("Berhasil keluar!")
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  max-width: 80%;
  margin: auto;
}
.card {
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: fit-content;
  margin: auto;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.form-control {
  margin-bottom: 16px;
  display: flex;
}
.form-control label {
  font-weight: bold;
  width: 50%;
  text-align: left;
}
.form-control input {
  margin-left: 16px;
  /* width: 50%; */
}
</style>
