<template>
  <Hero v-on:shortcut-clicked="(elementId) => scrollToElement(elementId)" />
  <div id="about" class="p-10 md:mx-20 text-black flex flex-col">
    <div id="about-me" class="lg:min-h-screen mb-12 lg:w-3/6 md:p-5">
      <h1 class="font-header text-4xl md:text-5xl mb-6 tracking-wider">About</h1>
      <p class="text-lg md:text-2xl mb-4 tracking-wide">
        A full-stack developer approaching
        <span class="text-primary-500 font-semibold"
          >4 years of experience</span
        >
        working with
        <span class="text-primary-500 font-semibold">web technologies.</span>
      </p>
      <p class="text-lg md:text-2xl mb-12 tracking-wide">
        I pride myself as someone who's
        <span class="text-primary-500 font-semibold"
          >passionate on web development / software engineering</span
        >. Learned and practiced a lot since I was a student.
      </p>
      <p class="text-2xl md:text-4xl font-bold text-primary-500 tracking-widest mb-6">Challenges excite me.</p>
      <span class="text-2xl md:text-4xl font-medium"
        >If you need a solution for your business, I might be able to
        help.</span
      >
    </div>

    <div class="lg:w-3/6 md:self-end md:p-5 lg:min-h-screen">
      <div id="key-technologies" class="mb-10">
        <h1 class="font-header text-4xl md:text-5xl">Key Technologies</h1>
        <p class="mb-6 text-lg">The tech I have worked a lot with</p>
        <Tag label="Javascript" />
        <Tag label="C#" />
        <Tag label="T-SQL" />
      </div>
      <div id="technologies">
        <h1 class="font-header text-4xl md:text-5xl">Technologies</h1>
        <p class="mb-6 text-lg">
          Most recent technology stack
        </p>
        <div class="flex flex-wrap">
          <Tag label="React" />
          <Tag label="Jest & React Testing Library" />
          <Tag label="Material UI w/ styled components" />
          <Tag label="Tailwind CSS" />
          <Tag label="React Redux Toolkit w/ RTK Query" />
        </div>
        <p class="mb-6 text-lg">
          Languages, frameworks, libraries, and tools I have used
        </p>
        <div class="flex flex-wrap">
          <Tag label="HTML / CSS / SAAS" />
          <Tag label="Next JS" />
          <Tag label="Vue / Aurelia / Angular" />
          <Tag label="Vuex / Vue Router" />
          <Tag label="C# / .Net 4.6^ / .Net Core 5" />
          <Tag label="Bulma CSS / Buefy" />
          <Tag label="T-SQL / Entity Framework 6 / Entity Framework Core" />
          <Tag label="Git / Azure Devops CI CD" />
          <Tag label="AJAX / Axios" />
          <Tag label="Node / NPM / Webpack / Parcel" />
          <Tag label="Strapi" />
        </div>
      </div>
    </div>
  </div>
  <div id="projects" class="p-10 md:mx-20 text-black">
    <h1 class="font-header text-4xl md:text-5xl mb-6">
      Projects / Sample Works
    </h1>

    <div id="projects-container" class="grid gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <Project
        v-for="(project, i) in projects"
        :key="i"
        :title="project.title"
        :imagePath="project.imagePath"
        :technologies="project.technologies"
        :url="project.url"
      >
      </Project>
    </div>
  </div>
  <div v-if="blog.length" id="blog" class="p-10 md:mx-20 text-black">
    <h1 class="font-header text-4xl md:text-5xl mb-6">Blog</h1>
  </div>
  <div
    id="contact-me"
    class="p-10 md:mx-20 bg-blue-900 text-white md:flex flex-wrap"
  >
    <div id="contact-me-section" class="mb-6 md:mb-0 flex-1">
      <h1 class="font-header text-4xl md:text-5xl mb-6">Contact me</h1>
      <div class="flex">
        <PhoneIcon class="w-5 mr-4" />
        +63 977-461-9089
      </div>
      <div class="flex">
        <MailIcon class="w-5 mr-4" />
        paz.jesr@gmail.com
      </div>
      <br />
    </div>
    <div id="social" class="flex-1 mb-12 md:mb-0">
      <h1 class="font-header text-4xl md:text-5xl mb-6">Social</h1>
      <div class="flex">
        <a
          href="https://www.linkedin.com/in/jesmer-paz-24363b159/"
          class="w-12 mr-2"
        >
          <img v-bind:src="linkedIn" class="rounded-full" />
        </a>
        <a href="https://github.com/jmrrgncpz" class="w-12">
          <img v-bind:src="github" class="rounded-full" />
        </a>
      </div>
    </div>
    <div class="text-center md:text-left w-full">
      © 2021, Jesmer Regencia Paz
    </div>
  </div>
</template>

<script>
import Hero from './Hero.vue'
import Project from "./components/Project.vue";
import Tag from "./components/Tag.vue";
import {
  MailIcon,
  PhoneIcon
} from "@heroicons/vue/solid";
import agileValuesPrincipleImg from "./assets/project-images/agile-values-principles.png";
import covid19ObserverImg from "./assets/project-images/covid19-observer2.png";
import underTheShelves from './assets/project-images/under-the-shelves2.png'
export default {
  data() {
    return {
      linkedIn: "",
      github: "",
      projects: [
        {
          title: '[Ongoing] Under the Shelves',
          imagePath: underTheShelves,
          technologies: [
            'React',
            'tailwind Css',
            'Strapi',
            {
              logoName: 'https://nextjs.org/',
              name: 'Next JS'
            }
          ],
          url: 'https://undertheshelves.vercel.app'
        },
        {
          title: "Agile Values and Principles",
          imagePath: agileValuesPrincipleImg,
          technologies: [
            "vuejs",
            "vuetify",
            { logoName: "https://firebase.com", name: "firebase" },
            "jest",
          ],
          url: "https://jmrrgncpz.github.io/agile-values-principles",
        },
        {
          title: "Covid-19 Observer",
          imagePath: covid19ObserverImg,
          technologies: [
            "vuejs",
            // {
            //   logoName: "buefy.org",
            //   name: "buefy",
            // },
            "node",
            "heroku",
            "postgresql",
          ],
          url: "https://jmrrgncpz.github.io/COVID19Observer",
        },
      ],
      blogs: [],
    };
  },
  mounted() {
    fetch(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=linkedin`,
      { method: "get" }
    )
      .then((res) => res.json())
      .then((data) => {
        this.linkedIn = data[0].logo;
      });

    fetch(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=github`,
      { method: "get" }
    )
      .then((res) => res.json())
      .then((data) => {
        this.github = data[0].logo;
      });
  },
  components: {
    Hero,
    MailIcon,
    PhoneIcon,
    Tag,
    Project,
  },
  methods: {
    scrollToElement(elementId) {
      const el = document.querySelector("#" + elementId);
      el.scrollIntoView({ block: "start", inline: "nearest" });
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
  background-color: #fff1eb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(165,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23faddce'/%3E%3Cstop offset='1' stop-color='%23f5b59f'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(167,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23f5b59f'/%3E%3Cstop offset='1' stop-color='%23faddce'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='53.79'%3E%3Cpath transform='translate(-218.75 8) rotate(-6.25 1409 581) scale(0.848625)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='17.930000000000003' transform='translate(-282.5 170) rotate(13.5 800 450) scale(1.009224)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(33 -172.5) rotate(97.5 401 736) scale(1.009224)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='16.3'%3E%3Cpath transform='translate(1020 7) rotate(-1.75 150 345) scale(0.9728749999999999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='35.86000000000001' transform='translate(-267.5 -462.5) rotate(72 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-600 160) rotate(12 1400 132) scale(0.625)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
