<template>
  <div>
    <h1>Daftar User :</h1>
    <div class="card">
      <table class="user-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAMA</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.id || "-" }}</td>
            <td>{{ user.name || "-"}}</td>
            <td>{{ user.email || "-" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/user.service';

export default {
  name: 'UserList',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.getAllUser();

  },
  methods: {
    async getAllUser() {
      await UserService.getAllUser().then(response => {
        this.users = response.data.data
      })
      .catch(() => {
        alert("Sesi habis, mohon login kembali")
        this.$store.dispatch('auth/logout');
        this.$router.push('/');
      })
    }
  }
}
</script>
<style scoped>
table.user-list {
  margin: auto;
  border-collapse: collapse;
}
table.user-list tr td, table.user-list tr th {
  padding: 8px;
  border: 1px solid #ccc;
}
</style>