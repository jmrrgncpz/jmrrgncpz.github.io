<template>
  <div
    id="hero"
    class="
      p-4
      md:p-7
      flex flex-col
      font-display
      h-screen
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
        md:flex-row md:mx-40
        h-4/5
        p-10
        md:p-0
        items-center
        md:justify-between
      "
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
          <article id="project-showcase" class="relative mb-6">
            <img class="project-image w-9/12 lg:w-full" :src="covid19ObserverImg" />
            <img class="project-image absolute top-0 left-10 lg:left-18 xl:left-24 h-full" :src="agileValuesPrincipleImg" />
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

.project-image:last-child {
    -webkit-box-shadow: -20px -2px 20px 0px rgb(63 63 63 / 60%);
    box-shadow: -20px -2px 20px 0px rgb(63 63 63 / 60%);
}

@media only screen  and (min-width: 768px) {
    .project-image:last-child {
        -webkit-box-shadow: -34px -4px 25px 0px rgb(63 63 63 / 70%);
        box-shadow: -34px -4px 25px 0px rgb(63 63 63 / 70%);
    }
}



</style>
