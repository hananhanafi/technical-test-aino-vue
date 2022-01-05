<template>
  <div class="login">
    <h1>Login</h1>
    <div class="container">
      <div class="card">
        <form @submit.prevent="login">
          <div class="form-control">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Masukkan Email" required v-model="email">
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Masukkan Password" required v-model="password">
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        email : "",
        password : "",
      }
    },
    methods: {
      login: function () {
        let user = {
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch('auth/login', user)
        .then(() => {
          alert("Berhasil login!")
          this.$router.push('/home')
        })
        .catch(err => {
          alert(err.response.data.message)
        })
      }
    }
  }
</script>