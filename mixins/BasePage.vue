<template>
    <section>
        <component
            v-if="story.content.component"
            :key="story.content._uid"
            :blok="story.content"
            :is="story.content.component"
        />
    </section>
</template>

<script>

export default {
    name: 'BasePage',

    data () {
        return {
            story: { content: {} }
        }
    },

    mounted () {
        this.$storybridge(() => {
            const storyblokInstance = new StoryblokBridge()

            storyblokInstance.on('input', (event) => {
                console.log(this.story.content)
                if (event.story.id === this.story.id) {
                    this.story.content = event.story.content
                }
            })

            storyblokInstance.on(['published', 'change'], (event) => {
                this.$nuxt.$router.go({
                    path: this.$nuxt.$router.currentRoute,
                    force: true,
                })
            })
        })
    },
    asyncData (context) {
        const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        return context.app.$storyapi.get(`cdn/stories/${context.route.name}`, { version }).then((res) => {
            return res.data
        }).catch((res) => {
            if (!res.response) {
                context.error({
                    statusCode: 404,
                    message: 'Failed to receive content form api'
                })
            } else {
                context.error({
                    statusCode: res.response.status,
                    message: res.response.data
                })
            }
        })
    }
}
</script>

<style scoped>

</style>
