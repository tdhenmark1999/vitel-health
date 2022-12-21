<template>
  <div class="accordion__wrapper">
    <h2 class="txt__title">{{ title }}</h2>
    <div class="accordion" :id="id">
      <div
        class="accordion-item"
        v-for="(item, index) in accordionData"
        v-bind:key="index"
      >
        <h2 class="accordion-header" :id="'panelsStayOpen-heading'+item.id">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#panelsStayOpen-collapse' +item.id"
            aria-expanded="false"
            :aria-controls="'panelsStayOpen-collapse'+item.id"
          >
            {{item.title}}
          </button>
        </h2>
        <div
          :id="'panelsStayOpen-collapse'+item.id"
          class="accordion-collapse collapse"
          :aria-labelledby="'panelsStayOpen-heading'+item.id"
        >
          <div class="accordion-body">
            <p class="txt__accordionDesc" v-html="item.desc"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    id:String,
      title: String,
      accordionData: Array,
      accordionNo:Number
  }

}
</script>

<style>
.accordion-body {
  padding-top: 0px !important;
}

.txt__accordionDesc {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9a9a9a;
}
.accordion-button:focus {
  outline: none !important;
  border: none;
  box-shadow: initial;
  color: #292929 !important;
}

.accordion-button:not(.collapsed)::before {
  background-image: url("../assets/ico_minus.png") !important;
}
.accordion-button::before {
  transform: initial;
  background-image: url("../assets/ico_plus.png") !important;
}

.accordion-button:not(.collapsed),
.accordion-button {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #292929 !important;
  background: white !important;
  outline: none;
  box-shadow: initial !important;
}
.accordion__wrapper {
  margin-bottom: 40px;
}
.accordion-item {
  border: 1px solid transparent !important;
}
.txt__title {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #48bfe3;
  margin-bottom: 16px;
}

.accordion-button::before {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: 0px;
  margin-right: 18px;
  content: "";
  background-image: var(--bs-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
}

.accordion-button::after {
  content: none !important;
}

.accordion-button:not(.collapsed)::before {
  background-image: var(--bs-accordion-btn-active-icon);
  transform: var(--bs-accordion-btn-icon-transform);
}
</style>
