<template>
  <div class="breadcrumb__banner">
    <div class="wrapper">
      <div class="title__container">
        <router-link class="nav-link" to="/"
          ><img src="../assets/feather_arrow-left.png"
        /></router-link>
        <h3>{{ title }}</h3>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbNavbar',
  props: {
    title: String,
    description: String
  }

}
</script>

<style>
.breadcrumb__banner {
  margin-top: 75px;
  padding: 64px 0 40px 0;
  background: linear-gradient(90deg, #5e60ce 66.28%, #48bfe3 100%);
}
.breadcrumb__banner .wrapper {
  max-width: 1128px;
  width: 100%;
  position: relative;
  margin: auto;
}
.breadcrumb__banner .title__container {
  display: flex;
}

.breadcrumb__banner .title__container img {
  height: 24px;
  width: 24px;
  margin-top: 5px;
}
.breadcrumb__banner h3 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  color: #ffffff;
  margin-bottom: 16px;
}

.breadcrumb__banner p {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 0px;
}

@media only screen and (max-width: 991px) {
  .breadcrumb__banner {
    padding: 40px 20px;
  }
}
</style>
