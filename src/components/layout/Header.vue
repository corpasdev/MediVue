<script setup lang="ts">
import nombreDeLaImagen from '../../assets/medical.png'
import 'boxicons'
import Button from '../common/Button.vue'
import { ref } from 'vue'
const showMenu = ref(false)
</script>

<template>
  <header class="header">
    <section class="topbar">
      <div class="container">
        <ul class="top-link">
          <li><a href="#">About</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <ul class="top-contact">
          <li><i class="fa fa-phone"></i>+880 1234 56789</li>
          <li>
            <i class="fa fa-envelope"></i
            ><a href="mailto:support@yourmail.com">support@yourmail.com</a>
          </li>
        </ul>
      </div>
    </section>
    <nav class="nav">
      <div class="logo">
        <img :src="nombreDeLaImagen"/>
        <p><span class="slogan">Medi</span>Vue</p>
      </div>
      <ul class="menu">
        <li>
          <a href=""><router-link :to="{ name: 'home' }">Home</router-link></a>
        </li>

        <li>
          <a class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn bg-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'home' }">Órdenes Médicas</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'medicines' }">Medicamentos</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'paciente' }">Pacientes</router-link></a
                >
              </li>
            </ul>
          </a>
        </li>
        <li>
          <a href=""><router-link :to="{ name: 'signUp' }">Sign Up</router-link></a>
        </li>
        <li>
          <a href="#" class="button"><router-link style="color: white" :to="{ name: 'login' }">Login</router-link></a>
        </li>
      </ul>
      <box-icon
        @click="showMenu = !showMenu"
        class="icon-menu"
        name="menu"
        color="#1a76d1"
      ></box-icon>
    </nav>
    <ul v-show="showMenu" class="menu-mobile">
      <li><a href=""><router-link :to="{ name: 'home' }">Home</router-link></a></li>

      <li>
        <a class="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            class="btn bg-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </button>
          <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li><a class="dropdown-item" href="#">Órdenes Médicas</a></li>
            <li><a class="dropdown-item" href="#">Medicamentos</a></li>
            <li><a class="dropdown-item" href="#">Pacientes</a></li>
            <li><a class="dropdown-item" href="#">Informes</a></li>
          </ul>
        </a>
      </li>
      <li>
        <a href=""><router-link :to="{ name: 'signUp' }">Sign Up</router-link></a>
      </li>
      <li><a href="#" class="button"><router-link style="color: white" :to="{ name: 'login' }">Login</router-link></a></li>
    </ul>
  </header>
</template>

<style scoped>
/* General */
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
}

.button {
  text-decoration: none;
  outline: none;
  border: none;
  background-color: #1a76d1;
  color: white;
  padding: 25px;
  font-weight: 500;
  font-size: 0.9rem;
}

.dropdown-item {
  padding: 0 !important;
}

a {
  text-decoration: none;
  color: #392d3f;
}

.fa {
  color: #1a76d1;
  margin-right: 10px;
}

.topbar {
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  padding: 15px 0;
}

.topbar .container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 15px;
}

.top-link a,
.top-contact a {
  transition: 0.2s color ease-in;
}

.top-link a:hover,
.top-contact a:hover {
  color: #1a76d1;
}
.top-link,
.top-contact {
  display: flex;
  gap: 20px;
  font-size: 14px;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

/* Menu del header */
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}

.icon-menu {
  display: none;
  width: 2rem;
  cursor: pointer;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 40px;
  height: 40px;
}

.logo p {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.logo p .slogan {
  color: #1a76d1;
}

/* links de navegación */
.menu {
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  align-items: center;
}

.menu-mobile {
  width: 100%;
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  transition: 0.2s display ease-out;
}

.menu a {
  display: flex;
  font-weight: 400;
}

/*Media queries para el diseño Responsibe */
@media screen and (max-width: 991px) {
  .topbar .container {
    justify-content: space-around;
  }
}

@media screen and (max-width: 767px) {
  .topbar .container {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .icon-menu {
    display: block;
  }

  .nav {
    justify-content: space-between;
    padding: 10px 1.2rem;
  }

  .menu {
    display: none;
  }

  .menu-mobile {
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 405px) {
  .top-contact {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}
</style>
