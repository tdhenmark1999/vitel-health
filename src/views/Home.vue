<template>
  <Navbar></Navbar>
  <div class="wrapper__home">
    <h1 class="title__header">Apps</h1>
    <p class="desc__header">Manage all your apps on Vitel Access</p>
    <div class="row__cards">
      <div class="cards__container">
        <router-link class="nav-link" to="/">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>Physician Vault</h5>
            <p>Powered by Intiva</p>
          </div>
        </router-link>

        <router-link class="nav-link" to="/">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>Doctors Lounge</h5>
            <p>Powered by Handzin</p>
          </div>
        </router-link>

        <router-link class="nav-link" to="/">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>TeleBoard</h5>
            <p>Full-Time, Part-Time, Shift Work</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row__cards">
      <div class="cards__container">
        <router-link class="nav-link" to="/credentialing">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>Credentialing</h5>
            <p>Digital Credentialing</p>
          </div>
        </router-link>

        <router-link class="nav-link" to="/">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>Telehealth EHR Platform</h5>
            <p>Anywhere, Anytime</p>
          </div>
        </router-link>

        <router-link class="nav-link" to="/">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>Telehealth Education</h5>
            <p>Webinars and Online Modules</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row__cards">
      <div class="cards__container">
        <router-link class="nav-link" to="/">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>Accredited CME</h5>
            <p>Continuing Medical Education</p>
          </div>
        </router-link>

        <router-link class="nav-link" to="/">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>RPM/CCM</h5>
            <p>Remote Patient Monitoring</p>
          </div>
        </router-link>

        <router-link class="nav-link" to="/provider-legal">
          <div class="item__card">
            <img src="../assets/icon1.png" />
            <h5>Provider Legal</h5>
            <p>Knowledge is Power</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'PageHome',
  components: {
    Navbar
  }
}
</script>

<style>
.title__header {
  color: #292929;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
}

.desc__header {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #9a9a9a;
  margin-bottom: 48px;
}

.wrapper__home {
  max-width: 840px;
  width: 100%;
  position: relative;
  margin: auto;
  text-align: center;
  margin-top: 156px !important;
  text-align: center !important;
}
.row__cards {
  margin-top: 24px;
}
.cards__container {
  display: flex;
  justify-content: center;
}

.cards__container .item__card {
  padding: 24px;
  width: 264px;
  height: auto;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  text-align: center;
}

.cards__container a:nth-child(2) .item__card {
  margin: 0px 24px;
}

.cards__container .item__card img {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
}

.cards__container .item__card h5 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #292929;
  margin-bottom: 8px;
}

.cards__container a:hover .item__card {
  background: #eeeeee;
}

.cards__container .item__card p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #9a9a9a;
  margin-bottom: 0px;
}

@media only screen and (max-width: 991px) {
  .wrapper {
    padding: 0px 20px;
  }
  .cards__container {
    display: block;
  }
  .cards__container a:nth-child(2) .item__card {
    margin: 0px 0px 20px;
  }

  .cards__container .item__card {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
}
</style>
