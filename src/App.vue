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
          <Shortcut name="About">
            <UserIcon />
          </Shortcut>
          <Shortcut name="Blog">
            <TemplateIcon />
          </Shortcut>
          <Shortcut name="Projects">
            <CodeIcon />
          </Shortcut>
          <Shortcut name="Contact Me">
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
</template>

<script>
import Shortcut from "./components/Shortcut.vue";
import Tag from "./components/Tag.vue";
import {
  UserIcon,
  TemplateIcon,
  CodeIcon,
  PhoneIcon,
} from "@heroicons/vue/solid";

export default {
  components: {
    UserIcon,
    TemplateIcon,
    CodeIcon,
    PhoneIcon,
    Shortcut,
    Tag,
  },
};
</script>

<style></style>
