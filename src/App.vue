<template>
  <!-- <svg
    class="absolute -z-10 "
    style="top: 5em; left: 1em;"
  >
    <circle cx="200" cy="200" r="200" stroke-width="3" fill="#FADDCE" />
  </svg>
  <svg
    height="560"
    width="560"
    class="absolute -z-10 "
    style="top: -13rem; left: 12rem"
  >
    <circle cx="280" cy="280" r="280" stroke-width="3" fill="#F5B59F" />
  </svg>
  <svg
    height="400"
    width="400"
    class="absolute -z-10 invisible xl:visible"
    style="top: 0; right: -15rem"
  >
    <circle cx="200" cy="200" r="200" stroke-width="3" fill="#FADDCE" />
  </svg>
  <svg
    height="300"
    width="700"
    class="absolute -z-10 invisible xl:visible"
    style="top: 0; right: 0"
  >
    <circle cx="700" cy="-400" r="615" stroke-width="3" fill="#F5B59F" />
  </svg> -->
  <div
    id="hero"
    class="p-4 md:p-7 flex flex-col font-display h-screen w-screen overflow-hidden text-black"
  >
    <div id="header">
      <h4 id="brand" class="font-header text-xl md:text-3xl">paz</h4>
    </div>
    <div
      id="main"
      class="flex flex-1 flex-col md:flex-row md:mx-40 h-4/5 p-10 md:p-0 items-center md:justify-between"
    >
      <div class="flex items-center flex-1">
        <div class="flex flex-col">
          <div class="font-header text-7xl md:text-8xl">
            <span>Jesmer</span>
            <br />
            <span>Paz</span>
          </div>
          <div class="mb-8">
            <span
              class="font-display text-primary-500 text-2xl md:text-3xl mb-1"
              >Full-stack web developer</span
            >
          </div>
          <div class="flex justify-center md:justify-start">
            <button
              class="bg-primary-500 text-white text-sm md:text-md w-full md:w-auto p-2 rounded self-center"
            >
              Create something amazing with me
            </button>
          </div>
        </div>
      </div>
      <div
        id="shortcuts-section"
        class="flex flex-1 w-full items-center justify-center md:justify-end"
      >
        <div
          id="shortcut-container"
          class="w-full md:w-6/12 grid gap-2 grid-cols-2"
        >
          <Shortcut name="About" v-on:shortcut-clicked="scrollToElement('about')">
            <UserIcon />
          </Shortcut>
          <Shortcut name="Blog" v-on:shortcut-clicked="scrollToElement('blog')">
            <TemplateIcon />
          </Shortcut>
          <Shortcut name="Projects" v-on:shortcut-clicked="scrollToElement('projects')">
            <CodeIcon />
          </Shortcut>
          <Shortcut name="Contact Me" v-on:shortcut-clicked="scrollToElement('contact-me')">
            <PhoneIcon />
          </Shortcut>
        </div>
      </div>
    </div>
  </div>
  <div id="about" class="p-10 md:mx-40 text-black flex flex-col">
    <div id="about-me" class="mb-12 md:w-3/6 md:p-5">
      <h1 class="font-header text-4xl md:text-5xl mb-6">About</h1>
      <p class="text-lg md:text-2xl mb-4">
        A full-stack developer with around
        <span class="text-primary-500 font-semibold"
          >3 years of experience</span
        >
        working with
        <span class="text-primary-500 font-semibold">web technologies.</span>
      </p>
      <p class="text-lg md:text-2xl mb-12">
        I pride myself as someone who's
        <span class="text-primary-500 font-semibold"
          >passionate on web development / software engineering</span
        >. Learned and practiced a lot since I was a student.
      </p>
      <p class="text-2xl md:text-4xl font-bold">
        <span class="text-primary-500">Challenges excite me.</span> <br />
        <span class="font-medium"
          >If you need a solution for your business, I might be able to
          help</span
        >.
      </p>
    </div>

    <div class="md:w-3/6 md:self-end md:p-5">
      <div id="key-technologies" class="mb-10">
        <h1 class="font-header text-4xl md:text-5xl">Key Technologies</h1>
        <p class="mb-6 text-lg">The tech I worked a lot with</p>
        <Tag label="Javascript" />
        <Tag label="C#" />
        <Tag label="T-SQL" />
      </div>
      <div id="technologies">
        <h1 class="font-header text-4xl md:text-5xl">Technologies</h1>
        <p class="mb-6 text-lg">
          Languages, frameworks, libraries, and tools I have used
        </p>
        <div class="flex flex-wrap">
          <Tag label="HTML / CSS / SAAS" />
          <Tag label="Vue / React / Aurelia / Angular" />
          <Tag label="Vuex / Vue Router" />
          <Tag label="C# / .Net 4.6^ / .Net Core 5" />
          <Tag label="Bulma CSS / Buefy / Material UI / Tailwind CSS" />
          <Tag label="T-SQL / Entity Framework 6 / Entity Framework Core" />
          <Tag label="Git / Azure Devops CI CD" />
          <Tag label="AJAX / Axios" />
          <Tag label="Node / NPM / Webpack / Parcel" />
        </div>
      </div>
    </div>
  </div>
  <div id="projects" class="p-10 md:mx-40 text-black">
    <h1 class="font-header text-4xl md:text-5xl mb-6">Projects / Sample Works</h1>

    <div id="projects-container" class="grid gap-12 grid-cols-1 md:grid-cols-2">
      <Project v-for="(project, i) in projects"
        :key="i"
        :title="project.title"
        :imagePath="project.imagePath"
        :technologies="project.technologies"
        :url="project.url"
      >
      </Project>
    </div>
  </div>
  <div id="blog" class="p-10 md:mx-40 text-black">
    <h1 class="font-header text-4xl md:text-5xl mb-6">Blog</h1>
  </div>
  <div id="contact-me" class="p-10 md:mx-40 bg-blue-900 text-white md:flex flex-wrap">
    <div id="contact-me-section" class="mb-6 md:mb-0 flex-1">
      <h1 class="font-header text-4xl md:text-5xl mb-6">Contact me</h1>
      <div class="flex">
        <PhoneIcon class="w-5 mr-4" />
        +63 977-461-9089
      </div>
      <div class="flex">
        <MailIcon class="w-5 mr-4"  />
        paz.jesr@gmail.com
      </div>
      <br/>
    </div>
    <div id="social" class="flex-1 mb-12 md:mb-0">
      <h1 class="font-header text-4xl md:text-5xl mb-6">Social</h1>
      <div class="flex">
        <a href="https://www.linkedin.com/in/jesmer-paz-24363b159/" class="w-12 mr-2">
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
import Shortcut from "./components/Shortcut.vue";
import Project from "./components/Project.vue";
import Tag from "./components/Tag.vue";
import {
  UserIcon,
  TemplateIcon,
  CodeIcon,
  PhoneIcon,
  MailIcon,

} from "@heroicons/vue/solid";
import agileValuesPrincipleImg from './assets/project-images/agile-values-principles.png'
import covid19ObserverImg from './assets/project-images/covid19-observer.png'

export default {
  data() {
    return {
      linkedIn : '',
      github : '',
      projects: [
        {
          title: 'Agile Values and Principles',
          imagePath: agileValuesPrincipleImg,
          technologies: [
            'vuejs',
            'vuetify',
            { logoName: 'firebase.events', name: 'firebase' },
            'jest'
          ],
          url: 'https://jmrrgncpz.github.io/agile-values-principles'
        },
        {
          title: 'Covid-19 Observer',
          imagePath: covid19ObserverImg,
          technologies: [
            'vuejs',
            {
              logoName: 'buefy.org',
              name: 'buefy'
            },
            'node',
            'heroku',
            'postgresql'
          ],
          url: 'https://jmrrgncpz.github.io/COVID19Observer'
        },
      ],
    } 
  },
  mounted() {
    fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=linkedin`, { method : 'get' })
    .then(res => res.json())
    .then(data => {
      this.linkedIn = data[0].logo;
    })

    fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=github`, { method : 'get' })
    .then(res => res.json())
    .then(data => {
      this.github = data[0].logo;
    })
  },
  components: {
    UserIcon,
    TemplateIcon,
    CodeIcon,
    PhoneIcon,
    MailIcon,
    Shortcut,
    Tag,
    Project
  },
  methods: {
    scrollToElement(elementId) {
      const el = document.querySelector('#' + elementId);
      el.scrollIntoView({ block: 'start', inline: 'nearest' });
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
