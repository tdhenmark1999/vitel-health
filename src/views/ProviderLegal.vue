<template>
  <Navbar></Navbar>
  <BreadCrumbNavbar
    title="Provider Legal"
    description="We stay up to date on current legal news and industry regulations to keep our members in the know. "
  ></BreadCrumbNavbar>

  <div class="wrapper">
    <div class="row">
      <div
        class="col-md-12 col-lg-6 col-sm-12 left__container order-2 order-lg-1"
      >
        <form>
          <h6>About Provider Legal</h6>
          <p>
            Healthcare providers face enormous pressure to provide great care,
            take care of their employees, keep the lights on, and run a
            successful practice. Provider Legal is dedicated to helping
            providers avoid liability, defend them when needed, and help their
            practice grow.
          </p>
          <p class="txt__name">Matt Stevens Esq</p>

          <h5>Ask a Question</h5>
          <textarea rows="5"></textarea>
          <div class="d-flex">
            <button type="submit" class="btn bg__green">Submit</button>
          </div>
        </form>
      </div>
      <div
        class="col-md-12 col-lg-6 col-sm-12 right__container order-1 order-lg-2"
      >
        <img src="../assets/img_providerlegal.png" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="txt__title01">Need to Speak to Our Legal Team?</h1>
        <p class="txt__desc">
          Whether you have specific questions regarding telehealth, employee
          issues, or general medical practice provider legal, our FAQs provide
          answers to many of today’s most commonly asked questions. As an
          Essentials Member, you may ask our legal department questions using
          our online “Ask a Question” form. Our
          <a href="#">Enhanced Member Subscription</a> includes up to 1 hr. per
          month in phone consultations.
        </p>
        <h1 class="txt__title01">Frequently Asked Questions</h1>
      </div>
      <div class="col-md-12">
        <Accordion
          title="HIPAA and Privacy Concerns"
          id="HIPAAConcerns"
          v-bind:accordionData="HIPAAConcerns"
        ></Accordion>
      </div>
      <div class="col-md-12">
        <Accordion
          title="Patient Consent"
          id="PatientConsent"
          v-bind:accordionData="PatientConsent"
        ></Accordion>
      </div>
      <div class="col-md-12">
        <Accordion
          title="Licensing"
          id="Licensing"
          v-bind:accordionData="Licensing"
        ></Accordion>
      </div>
      <div class="col-md-12">
        <Accordion
          title="Malpractice Insurance"
          id="MalpracticeInsurance"
          v-bind:accordionData="MalpracticeInsurance"
        ></Accordion>
      </div>
      <div class="col-md-12">
        <Accordion
          title="Reimbursement"
          id="Reimbursement"
          v-bind:accordionData="Reimbursement"
        ></Accordion>
      </div>
      <div class="col-md-12">
        <Accordion
          title="Prescribing Through Telehealth"
          id="PrescribingTelehealth"
          v-bind:accordionData="PrescribingTelehealth"
        ></Accordion>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import BreadCrumbNavbar from '../components/BreadCrumbNavbar.vue'
import Accordion from '../components/Accordion.vue'

export default {
  name: 'PageProviderLegal',
  components: {
    Navbar,BreadCrumbNavbar,Accordion
  },
  data: function () {
    return {
      HIPAAConcerns: [
        { id: 1, title: "What type of technology is allowed for face-to-face visits?", desc: 'Due to the pandemic the typical requirements for telehealth visits have been suspended. Any use of audio and/or video telecommunications system that permits real-time communication is allowed for face-to-face visits is permitted. <br><br>In pre-pandemic times Office of Civil Rights (OCR, the body in charge of enforcing HIPAA) enforces requirements on the type of systems that could be used for telehealth. During the pandemic, they have given “discretion” in enforcing those guidelines. Those guidelines did not allow for zoom, facetime, and many of the other common video conferencing platforms. It’s unclear if those regulations will change at all as a result of the pandemic. When the pandemic is over it is possible that OCR will begin enforcement of HIPAA as normal and all telehealth services will need to be on HIPAA compliant platforms. Check back for updates as this topic evolves. '},
        { id: 2, title: "Can I record my face-to-face visit with the patient?",  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 3, title: "Does there have to be any special encryption for any saved data I do have?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        { id: 4, title: "Will I have to change the technology I use to see patients after the health emergency?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
      ],
      PatientConsent: [
        { id: 5, title: "Do I need a special consent for patients I see in telehealth?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
      ],
      Licensing: [
        { id: 6, title: "I’ve heard that because of COVID that I can see patients in any state, is that right?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 7, title: "How do I know if a state licensing board waiver applies to me?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 8, title: "Can I see a patient for the first time in a telehealth setting?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 9, title: "Can I get licensed in another state so that I can continue my health practice after the pandemic?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
      ],
      MalpracticeInsurance: [
        { id: 10, title: "Do I need to inform my carrier that I’m doing telehealth?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 11, title: "Is performing telehealth going to raise my malpractice rates?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 12, title: "Is there a higher risk of malpractice because of telehealth?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
      ],
      Reimbursement: [
        { id: 13, title: "Can I get reimbursed for telehealth visits under Medicare?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 14, title: "What services can I get reimbursed for under Medicare?	", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 15, title: "Can I get reimbursed for telehealth visits under Medicaid?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 16, title: "Are private payers reimbursing for the same telehealth services that Medicare and Medicaid are?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 17, title: "What about telehealth parity laws? Don’t they force private payors to pay for telehealth services?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
      ],
      PrescribingTelehealth: [
        { id: 18, title: "Can I prescribe to patients that I have only seen via telehealth?", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
      ],
    }
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

.txt__title01 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #292929;
  margin-bottom: 8px;
}

.txt__desc {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9a9a9a;
  margin-bottom: 40px;
}

.txt__desc a {
  color: #48bfe3;
  text-decoration: none;
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

.wrapper .left__container .txt__name {
  font-weight: 700;
  margin-bottom: 24px;
}

.wrapper .left__container textarea {
  background: #eeeeee;
  border-radius: 8px !important;
  width: 504px;
  padding: 16px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #9a9a9a;
  border: none;
  resize: none;
  margin-bottom: 16px;
}

.wrapper .left__container h5 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #292929;
  margin-bottom: 5px;
}

@media only screen and (max-width: 991px) {
  .wrapper .left__container .d-flex .btn {
    width: 100%;
    justify-content: center;
  }

  .wrapper .left__container textarea {
    width: 100%;
  }
  .wrapper .right__container {
    margin-top: 40px;
  }
}
</style>
