<template>
    <div
        v-editable="blok"
        class="posts-container"
    >

        <component v-for="(post, index) in blok.posts"
                   :key="index"
                   :is="post.component"
                   :blok="post"
        />
    </div>
</template>

<script>
export default {
    name: 'PostsContainer',

    props: {
        blok: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped lang="scss">
.posts-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
}
</style>
