<template>
  <section class="mb-5">
    <h3 class="section-title-small" style="margin-left: 10px">Achievements</h3>
    <ul class="right-list">
      <li
        class="right-list-item"
        v-for="(ach, index) in achievementsInfo"
        :key="index"
      >
        <p style="margin-bottom: 0; font-size: 16px">{{ ach.title }}</p>
        <small
          style="color: #7a7d80; font-style: italic; font-size: 15px"
          >{{ ach.duration }}</small
        >
        <section>
          <a v-for="(link, index) in ach.links" :key="index" :href="link">
            <i :class="`fa-${link} mb-2`"></i> <span> {{ link }}</span>
          </a>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    achievementsInfo: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
