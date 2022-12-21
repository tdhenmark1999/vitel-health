<template>
  <Navbar></Navbar>
  <BreadCrumbNavbar
    title="Credentialing"
    description="ViTel provides Digital Credentialing services for medical groups, physician and payor networks, and for employment."
  ></BreadCrumbNavbar>

  <div class="wrapper">
    <div class="row">
      <div
        class="col-md-12 col-lg-6 col-sm-12 left__container order-2 order-lg-1"
      >
        <h6>
          ViTel provides expedited digital credentialing for physicians into
          provider and payor networks on a per network basis or you may upgrade
          to our Enhanced Membership Subscription which includes unlimited
          credentialing.
        </h6>
        <p>
          Click the button below to request a per network credentialing quote
        </p>
        <div class="d-flex">
          <button class="btn bg__green">Request Quote</button>
        </div>
        <div class="d-flex">
          <button class="btn bg__blue">Meeting Request</button>
        </div>
      </div>
      <div
        class="col-md-12 col-lg-6 col-sm-12 right__container order-1 order-lg-2"
      >
        <img src="../assets/img_credentialing.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import BreadCrumbNavbar from '../components/BreadCrumbNavbar.vue'
export default {
  name: 'PageCredentialing',
  components: {
    Navbar,BreadCrumbNavbar
  }
}
</script>

<style>
.wrapper {
  max-width: 1128px;
  width: 100%;
  margin: auto;
  text-align: left;
}

.left__container {
  margin-top: 40px !important;
}

.left__container h6 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #292929;
  margin-bottom: 16px;
}

.left__container p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9a9a9a;
  margin-bottom: 16px;
}

.wrapper .left__container .d-flex .bg__green {
  background: #02e864;
  border-radius: 8px;
  padding: 16px 40px;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-bottom: 16px;
}
.wrapper .left__container .d-flex .bg__blue {
  background: #48bfe3;
  border-radius: 8px;
  padding: 16px 40px;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-bottom: 16px;
}

.right__container img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 991px) {
  .wrapper .left__container .d-flex .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
