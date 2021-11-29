<template>
    <div class="default">
        <HeaderNavigation />
        <Nuxt />
    </div>
</template>

<script>
import HeaderNavigation from '../components/app/HeaderNavigation';

export default {
    name: 'default',

    components: {
        HeaderNavigation
    }
}
</script>

<style scoped lang="scss">

.default {
    @apply flex flex-col p-8;
}

</style>
