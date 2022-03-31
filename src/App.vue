<template>
  <div class="main-page text-center position-relative" ref="content">
    <div class="main-page-inner mx-auto text-start bg-white shadow-lg">
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
            <Education :educationInfo="data.educationInfo" />
            <Skill :skillInfo="data.skillInfo" :otherSkillInfo="data.otherSkillInfo" />
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
  }
};
</script>

<style>
@import "./assets/css/font-awesome/css/font-awesome.css";
</style>
