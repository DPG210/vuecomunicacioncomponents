<template>
  <nav class="navbar-halloween">
    <div class="navbar-logo">
      🎃 Halloween Tables
    </div>
    <ul class="navbar-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="num in numeros" :key="num">
        <router-link :to="'/tabla/' + num">Tabla {{ num }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarHalloween",
  data() {
    return {
      numeros: []
    };
  },
  mounted() {
    // Generamos algunos números aleatorios
    this.numeros = [];
    for (let i = 0; i < 6; i++) {
      this.numeros.push(parseInt(Math.random() * 100));
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

/* 🔸 Navbar base */
.navbar-halloween {
  background-color: rgba(20, 20, 20, 0.9);
  border-bottom: 3px solid #ff7518;
  box-shadow: 0 0 20px rgba(255, 117, 24, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 40px;
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: 'Creepster', cursive;
  gap: 60px;
}

/* 🔸 Logo */
.navbar-logo {
  color: #ff7518;
  font-size: 1.8em;
  text-shadow: 0 0 10px #ff7518, 0 0 20px #ffae42;
  letter-spacing: 2px;
  animation: float 3s ease-in-out infinite;
}

/* 🔸 Enlaces */
.navbar-links {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  position: relative;
}

.navbar-links a {
  color: #ffae42;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.navbar-links a:hover {
  color: #fff;
  text-shadow: 0 0 10px #ff7518, 0 0 20px #ffae42;
  transform: scale(1.1);
}

/* 🎃 Calabazas decorativas con gorritos */
.navbar-halloween::before,
.navbar-halloween::after {
  content: "🎃";
  position: absolute;
  font-size: 1.8em;
  animation: float 3s ease-in-out infinite;
  opacity: 0.95;
}

.navbar-halloween::before {
  left: 25px;
}

.navbar-halloween::after {
  right: 25px;
}

/* 🎅 Gorrito encima de las calabazas */
.navbar-halloween::before::after,
.navbar-halloween::after::after {
  content: "";
  position: absolute;
  top: -12px;
  left: 5px;
  width: 18px;
  height: 12px;
  background: red;
  border-radius: 3px 3px 0 0;
  border: 2px solid white;
  z-index: 10;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
}

/* ❄️ Pompones blancos en los gorros de las calabazas */
.navbar-halloween::before::before,
.navbar-halloween::after::before {
  content: "";
  position: absolute;
  top: -18px;
  left: 18px;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 5px white;
}

/* 💀 Calaveras flotando con gorritos */
body::before,
body::after {
  content: "💀";
  position: absolute;
  font-size: 2.2em;
  color: rgba(255, 255, 255, 0.95);
  z-index: 1;
  animation: spin 10s linear infinite;
}

body::before {
  top: 15%;
  left: 6%;
}

body::after {
  bottom: 15%;
  right: 6%;
  animation-direction: reverse;
}

/* 🎅 Gorrito encima de las calaveras */
body::before::after,
body::after::after {
  content: "";
  position: absolute;
  top: -14px;
  left: 6px;
  width: 22px;
  height: 12px;
  background: red;
  border-radius: 4px 4px 0 0;
  border: 2px solid white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  z-index: 2;
}

/* ❄️ Pompones blancos en los gorros de las calaveras */
body::before::before,
body::after::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 20px;
  width: 7px;
  height: 7px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 5px white;
}

/* ⚙️ Animaciones */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 📱 Responsive */
@media (max-width: 700px) {
  .navbar-halloween {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .navbar-links {
    flex-direction: column;
    gap: 10px;
  }
}
</style>