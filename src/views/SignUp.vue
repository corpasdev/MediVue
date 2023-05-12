<script>
import { ref } from 'vue'
import {useStore} from 'vuex'
import store from '../stores/index.js'
import Button from '../components/common/Button.vue'
import Input from '../components/Form/Input.vue'
import Picture from '../components/Form/Picture.vue'

export default {
  name: 'SignUp',
  components: {
    Button,
    Input,
    Picture
  },
  setup() {
    const store = useStore();
    const userData = ref({
      email: '',
      password: '',
      name: ''
    })

    function redirect() {
      this.$router.push({ name: 'Login' })
    }

    function resetData() {
      userData.value.email = userData.value.password = userData.value.name =''
    }

    async function doRegister() {
      console.log(userData.value.email +""+userData.value.password)
      try {
        await store.dispatch('user/doRegister', {
          email: userData.value.email,
          name: userData.value.name,
          password: userData.value.password
        })

        console.log('Usuario Registrado!')
        resetData()
        redirect()
      } catch (error) {
        console.error(error.message);
      }
    }

    return {
      userData,
      doRegister
    }
  }
}
</script>

<template>
  <Picture  class="hero">
    <h1>Register</h1>
    <nav class="nav"><a href="http://">Home</a><span>></span><a href="http://">Register</a></nav>
  </Picture>
  <!-- Formulario de Inicio de Sesión -->
  <main class="container-login">
    <article class="login">
        <Picture class="picture"/>
        <div class="wrappaper">
          <form action="" class="form-login" @submit.prevent="doRegister">
            <h3>Register Here</h3>
            <p>Already have an account ? <a href="#" class="lost-pass">Login Here</a></p>
            <div class="inpust-primary">
              <Input type="text" v-model="userData.name" placeholder="First Name"/>
              <Input type="email" v-model="userData.email" placeholder="Your Email"/>
            </div>
            <div class="inpust-secondary">
              <Input type="phome"   placeholder="Phome"/>
              <Input type="email"  placeholder="Email"/>
            </div>
            <div class="inpust-tree">
              <Input type="password" v-model="userData.password" placeholder="Password"/>
              <Input type="password" placeholder="Confirm Password"/>
            </div>
            <Button label="Login" type="submit"/>
            <p class="other">
              <label  class="form-check-label" for="flexCheckDefault"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">Remember me</label>
            <a href="#" class="lost-pass">Lost your password ?</a>
            </p>
            
        </form>
        </div>      
    </article>
  </main>
</template>

<style scoped>
.hero {
  font-family: 'Poppins', sans-serif;
  display: flex;
  width: 100%;
  height: 330px;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/bread-bg.jpg);
  background-position: center center;
  z-index: 0;
}

.hero h1 {
  color:white;
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 1.3rem;
}

.hero a {
  color:white;
  text-decoration: none;
  font-weight: 500;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1a76d1aa;
  z-index: 1;
}

.nav, h1{
  z-index: 2;
}
.nav span {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 1rem;
  
}


.picture {
    flex: 1;
    width: 540px;
    height: 100%;
    box-shadow: -3px 0 5px rgba(0, 0, 0, 0.171);
    background-image: url(../assets/signup-bg.jpg);
}


.container-login {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 6rem 0;
}

.login {
    display: flex;
    width: 90%;
}

h3 {
  font-family: 'Poppins' sans-serif;
  font-weight: bold;
  font-size: 2rem;
}

h3::after {
  content: '';
  width: 54px;
  border: 1.2px solid blue;
  display: block;
  margin-top: 8px;
}

.wrappaper {
  flex: 1;
  display: flex;
  justify-content: end;
  border-radius: 0px 10px 10px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.171);
}
.form-login {
  display: flex;
  flex-direction: column;
  padding: 3rem;
}

.inpust-primary, .inpust-secondary, .inpust-tree{
    display: flex;
    gap: 1.8rem;
    justify-content: space-between;
    margin-top: 2rem;
}

.inpust-tree {
  margin: 0;
  margin-bottom: 2rem;
}

.inpust-secondary {
  margin: 1.5rem 0;
}

.other {
  display: flex;
  margin-top: 1rem;
  justify-content: start;
  align-items: center;
  gap: 1.5rem;
}
.form-check-input {
  margin-right: .5rem;
}

.form-check-label {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 991px) {
  .hero {
    height: 30vh;
    transition: .2s height ease-in;
  }

  .hero h1 {
    font-size: 1.5rem;
  }

  .hero a {
    font-size: 1rem;
  }
  
  .login {
    flex-direction: column;
    width: 690px;
  }

  .picture, .form-login {
    flex:none;
    width: 100%;
  }

  .picture {
    height: 340px;
  }



  .inpust-primary, .inpust-secondary, .inpust-tree {
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .login {
    flex-direction: column;
    width: 510px;
  }
}
</style>
