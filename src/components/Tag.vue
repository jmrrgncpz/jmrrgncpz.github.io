<template>
    <span class="text-xs md:text-sm tag p-3 bg-primary-500 text-white mr-2 mb-2 rounded-3xl flex-shrink-0">
        {{ label }}
    </span>
</template>

<script>
export default {
    props: ['label']
}
</script>