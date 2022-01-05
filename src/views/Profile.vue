<template>
  <div class="home">
    <h1>Profile</h1>
    <div>
      Nama kamu : {{ currentUser.name || "-" }}
    </div>
    <div>
      Email kamu : {{ currentUser.email || "-" }}
    </div>
    
    <button @click="logOut">Logout</button>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.getters['auth/currentUser'];
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
      alert("Berhasil keluar!")
    }
  },
}
</script>

<style scoped>
button {
  margin: 16px;
  padding: 4px 16px;
  cursor: pointer;
}
</style>
