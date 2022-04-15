<template>
  <section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px">Projects</h3>
    <ul class="timeline">
      <li
        v-for="(proj, index) in projectsInfo"
        :key="index"
        class="timeline-item rounded ml-3 p-4 shadow"
      >
        <div class="timeline-arrow"></div>
        <p class="h5 bold">{{ proj.name }}</p>
        <span style="font-style: italic">{{ proj.duration }}</span>
        <!-- <div>link: <a :href="proj.link">{{proj.link}}</a></div> -->
        <section>
          <p v-for="(link, index) in proj.links" :key="index">
            <a :href="link"><i :class="`fa-${link} mb-2`"></i> <span> {{ link }}</span></a>
          </p>
        </section>
        <p
          v-if="proj.description != null && proj.description != undefined"
          class="mt-2"
          v-html="proj.description"
        ></p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    projectsInfo: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
