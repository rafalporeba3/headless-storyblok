<template>
    <div
        v-editable="blok"
        class="post"
    >

        <img :src="blok.source"
                :alt="blok.title"
                class="post-image" />

        <div class="post-content">
            <h2 class="post-title">{{ blok.title }}</h2>
            <p class="post-content-text">{{ blok.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',

    props: {
        blok: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped lang="scss">
.post {
    display: grid;
    grid-template-areas: "image content";

    .post-image {
        @apply h-full w-full;
        max-width: 260px;
        max-height: 200px;
        grid-area: image;
    }

    .post-content {
        @apply ml-4;
        grid-area: content
    }

    .post-title {
        @apply font-semibold text-3xl mb-4;
    }

    .post-content-text {
        @apply text-lg;
        color: #1c1c1c;
    }
}
</style>
