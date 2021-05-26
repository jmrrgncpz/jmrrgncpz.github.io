<template>
    <span class="text-xs md:text-sm tag bg-primary-500 text-white mr-2 mb-2 rounded-3xl flex-shrink-0 capitalize" :class="customClass">
        <img v-if="!!imgSrc" :src="imgSrc" class="rounded-full w-8 mr-2 shadow-lg inline">
        {{ label }}
    </span>
</template>

<script>
export default {
    props: ['label', 'imgSrc'],
    computed: {
        customClass() {
            return [
                !this.imgSrc ? 'p-3' : 'p-1 pr-3'
            ]
        }
    }
}
</script>