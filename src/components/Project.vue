<template>
  <div class="project-card">
    <a :href="url" target="_blank"><h2 class="text-xl md:text-2xl mb-4">{{ title }}</h2></a>
    <div class="logo-container mb-4 flex">
      <img
        v-for="(technologyLogo, i) in technologyLogos"
        :key="i"
        :src="technologyLogo"
        class="rounded-full w-12 mr-2"
      />
    </div>
    <img class="shadow-lg bg-white rounded-md" :src="imagePath" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imagePath: String,
    technologyNames: Array,
    url: String,
  },
  mounted() {
    const promises = this.technologyNames.map((name) =>
      this.getTechnologyLogo(name)
    );
    Promise.all(promises).then((resAll) => {
      resAll.forEach(async (res) => {
        const resJson = await res.json();
        this.technologyLogos.push(resJson[0].logo);
      });
    });
  },
  data() {
    return {
      technologyLogos: [],
    };
  },
  methods: {
    getTechnologyLogo(name) {
      return fetch(
        `https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`
      );
    }
  },
};
</script>
