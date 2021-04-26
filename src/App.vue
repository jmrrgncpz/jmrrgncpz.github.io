<template>
  <svg
    height="400"
    width="400"
    class="absolute -z-10"
    style="top: 5rem; left: 1rem"
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
  </svg>
  <div id="hero" class="p-4 md:p-7 flex flex-col font-display h-screen w-screen overflow-hidden">
    <div id="header">
      <h4 id="brand" class="font-header text-xl md:text-3xl">paz</h4>
    </div>
    <div
      id="main"
      class="flex flex-1 flex-col md:flex-row p-3 md:p-7 xl:p-12 md:justify-between"
    >
      <div class="flex justify-center items-center flex-1">
        <div class="flex flex-col">
          <div class="font-header text-7xl md:text-8xl">
            <span>Jesmer</span>
            <br />
            <span>Paz</span>
          </div>
          <div class="mb-8">
            <span class="font-display text-primary-500 text-2xl md:text-3xl mb-1"
              >Full-stack web developer</span
            >
          </div>
          <div class="flex justify-center md:justify-start">
            <button
              class="bg-primary-500 text-white text-sm md:text-md p-2 rounded self-center"
            >
              Create something amazing with me
            </button>
          </div>
        </div>
      </div>
      <div
        id="shortcuts-section"
        class="flex items-end  md:items-center flex-1 justify-center md:justify-end"
      >
        <div
          id="shortcut-container"
          class="grid gap-2 grid-cols-4 md:grid-cols-2"
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
</template>

<script>
import Shortcut from "./components/Shortcut.vue";
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
  },
};
</script>

<style></style>
