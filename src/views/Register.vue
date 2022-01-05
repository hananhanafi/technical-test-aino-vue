<template>
  <div class="register">
    <h1>Register</h1>

    <div class="container">
      <div class="card">
        <form @submit.prevent="register">
          <div class="form-control">
            <label for="name">Nama</label>
            <input type="text" name="name" id="name" placeholder="Masukkan Nama" required v-model="name">
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Masukkan Email" required v-model="email">
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Masukkan Password" required v-model="password">
          </div>
          <div class="form-control">
            <label for="password-confirm">Konfirmasi Password</label>
            <input type="password" name="password-confirm" id="password-confirm" placeholder="Masukkan Ulang Password" required v-model="passwordConfirmation">
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name : "",
        email : "",
        password : "",
        passwordConfirmation : "",
      }
    },
    methods: {
      register: function () {
        if(this.password !== this.passwordConfirmation){
          alert("Konfirmasi password harus sama dengan password!")
        }else{
          let newUser = {
            name: this.name,
            email: this.email,
            password: this.password,
          }
          this.$store.dispatch('auth/register', newUser)
          .then(() => {
            alert("Berhasil register!")
            this.$router.push('/')
          })
          .catch(err => {
            alert("Terjadi kesalahan, mohon coba lagi nanti!")
            console.log(err)
          })
        }

      }
    }
  }
</script>

