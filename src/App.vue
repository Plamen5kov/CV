<template>
  <div class="main-page text-center position-relative" ref="content">
    <div class="main-page-inner mx-auto text-start bg-white shadow-lg position-relative">
      <button
        type="button"
        class="btn btn-sm download-pdf-btn"
        @click="downloadPdf"
        aria-label="Download PDF"
      >
        <i class="fa fa-download"></i> Download PDF
      </button>
      <Intro
        :introInfo="data.introInfo"
        :contactInfo="data.contactInfo"
        :socialMediaInfo="data.socialMediaInfo"
      />
      <div class="p-5">
        <Summary :summaryInfo="data.summaryInfo" />
        <div class="row">
          <div class="col-lg-7">
            <Experience :experinceInfo="data.experinceInfo" />
            <Projects :projectsInfo="data.projectsInfo" />
          </div>
          <div class="col-lg-5">
            <Skill :skillInfo="data.skillInfo" :otherSkillInfo="data.otherSkillInfo" />
            <Education :educationInfo="data.educationInfo" />
            <Language :languageInfo="data.languageInfo" />
            <Interest :interestInfo="data.interestInfo" />
            <Achievements :achievementsInfo="data.achievementsInfo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Intro from "@/components/Intro.vue";
import Summary from "@/components/Summary.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";
import Language from "@/components/Language.vue";
import Interest from "@/components/Interest.vue";
import Achievements from "@/components/Achievements.vue";
import Skill from "@/components/Skill.vue";

import data from "./data";

export default {
  components: {
    Intro,
    Summary,
    Education,
    Experience,
    Projects,
    Language,
    Interest,
    Achievements,
    Skill,
  },
  data() {
    return {
      data: data
    };
  },
  methods: {
    downloadPdf() {
      window.print();
    }
  }
};
</script>

<style>
@import "./assets/css/font-awesome/css/font-awesome.css";

.download-pdf-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

@media print {
  .download-pdf-btn {
    display: none !important;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
</style>
