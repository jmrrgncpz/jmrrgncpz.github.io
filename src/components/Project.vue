<template>
  <div class="project-card">
    <a
      :href="url"
      target="_blank"
      class="text-xl md:text-2xl md:hover:underline text-primary-500 font-semibold"
      >{{ title }}</a
    >

    <img class="shadow-lg bg-white rounded-md mt-2 object-cover" :src="imagePath" />
    <h6 class="mt-2 mb-1 text-xs">Technologies</h6>
    <div class="logo-container flex flex-wrap">
      <Tag
        v-for="(technologyLogo, i) in technologyLogos"
        :key="i"
        :label="technologyLogo.label"
        :imgSrc="technologyLogo.imgSrc"
      ></Tag>
    </div>
  </div>
</template>

<script>
import Tag from "./Tag.vue";

const replaceableLogoLink =
  "https://autocomplete.clearbit.com/v1/companies/suggest?query=";
export default {
  components: { Tag },
  props: {
    title: String,
    imagePath: String,
    technologies: Array,
    url: String,
  },
  mounted() {
    this.technologies.forEach((technology) =>
      this.getTechnologyLogo(technology)
    );
  },
  data() {
    return {
      technologyLogos: [],
    };
  },
  methods: {
    getTechnologyLogo(technology) {
      const isObject = typeof technology == "object";
      return fetch(
        `https://autocomplete.clearbit.com/v1/companies/suggest?query=${
          isObject ? technology.logoName : technology
        }`
      ).then(async (res) => {
        const resJson = await res.json();
        const logo =
          resJson[0]?.logo ||
          res.url.replace(replaceableLogoLink, "https://logo.clearbit.com/");
        this.technologyLogos.push({
          imgSrc: logo,
          label: isObject ? technology.name : technology,
        });
      });
    },
  },
};
</script>