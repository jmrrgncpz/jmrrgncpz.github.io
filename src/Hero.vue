<template>
  <div
    id="hero"
    class="
      p-4
      md:p-7
      flex flex-col
      font-display
      min-h-screen
      w-screen
      overflow-hidden
      text-black
    "
  >
    <div id="header">
      <h4 id="brand" class="font-header text-xl md:text-3xl">paz</h4>
    </div>
    <div
      id="main"
      class="
        flex flex-1 flex-col
        md:flex-row md:mx-20 lg:mx-40
        h-4/5
        p-10
        md:p-0
        items-center
        md:justify-between
      "
    >
      <div class="flex items-center flex-1">
        <div class="flex flex-col">
          <div class="font-header text-7xl lg:text-8xl">
            <span>Jesmer</span>
            <br />
            <span>Paz</span>
          </div>
          <div class="mb-8">
            <span
              class="font-display text-primary-500 text-2xl lg:text-3xl mb-1"
              >Full-stack web developer</span
            >
          </div>
          <div class="flex justify-center md:justify-start">
            <button
              class="
                bg-primary-500
                text-white text-sm
                md:text-md
                w-full
                md:w-auto
                p-2
                rounded
                self-center
              "
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
        <section id="hero-right" class="flex flex-col">
          <article id="project-showcase" class="mb-6 flex">
            <img class="project-image w-3/4 shadow-2xl"  :src="covid19ObserverImg" />
            <img class="project-image w-3/4 shadow-2xl transform -translate-x-3/4 -translate-y-6" :src="agileValuesPrincipleImg" />
            <img class="project-image w-3/4 shadow-2xl transform -translate-x-2/4 -translate-y-12" :src="underTheShelves" />
          </article>
          <nav id="shortcut-container" class="w-full flex flex-row flex-1">
            <Shortcut
              v-for="(shortcut, i) in shortcuts"
              :key="`shortcut-${i}`"
              :name="shortcut.name"
              class="flex-1"
              v-on:shortcut-clicked="$emit('shortcut-clicked', shortcut.link)"
            >
              <component :is="shortcut.icon" />
            </Shortcut>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import agileValuesPrincipleImg from "./assets/project-images/agile-values-principles.png";
import covid19ObserverImg from "./assets/project-images/covid19-observer.png";
import underTheShelves from './assets/project-images/under-the-shelves.png'

import Shortcut from "./components/Shortcut.vue";
import {
  UserIcon,
  TemplateIcon,
  CodeIcon,
  PhoneIcon,
} from "@heroicons/vue/solid";

export default {
  data() {
    return {
      agileValuesPrincipleImg,
      covid19ObserverImg,
      underTheShelves,
      shortcuts: [
        {
          name: "About",
          link: "about",
          icon: UserIcon,
        },
        {
          name: "Blog",
          link: "blog",
          icon: TemplateIcon,
        },
        {
          name: "Projects",
          link: "projects",
          icon: CodeIcon,
        },
        {
          name: "Contact",
          link: "contact-me",
          icon: PhoneIcon,
        },
      ],
    };
  },
  components: {
    UserIcon,
    TemplateIcon,
    CodeIcon,
    PhoneIcon,
    Shortcut,
  },
};
</script>

<style scoped>

.project-image {
  transform: rotate3d(26, 47, -5, 20deg);
  border-radius: 1em;
}

.project-image:nth-child(2) {
  transform:  rotate3d(26, 47, -5, 20deg) translateX(-90%) translateY(-24px);
}

.project-image:nth-child(3) {
  transform:  rotate3d(26, 47, -5, 20deg) translateX(-180%) translateY(-48px);
}

@media only screen and (min-width:670px ) {
  #project-showcase {
    transform: scale(.8);
  }
}

@media only screen and (min-width:768px ) {
  #project-showcase {
    transform: scale(.7);
  }
}

@media only screen and (min-width:1280px ) {
  #project-showcase {
    transform: scale(1);
  }
}

</style>
