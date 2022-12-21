<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo_health.png"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Membership</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Access</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Calendar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Logout</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link bg__green" to="/">Upgrade</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',


}
</script>

<style>
.nav-item .nav-link.bg__green {
  background: #02e864;
  color: #ffffff !important;
  padding: 16px 24px !important;
  font-size: 16px;
  line-height: 16px;
  border-radius: 8px;
}
nav {
  padding-left: 80px;
  padding-right: 80px;
  background: white;
}

.nav-item .nav-link {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #292929 !important;
  padding: 0px;
}

.nav-item {
  display: flex;
  align-items: center;
  margin-right: 40px;
}
.navbar-toggler-icon {
  background-image: url("../assets/toggle.svg") !important;
}
</style>
