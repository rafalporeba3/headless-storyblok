<template>
    <header class="header-navigation">
        <nav class="navigation">
            <ul class="navigation-list">
                <li v-for="{ name, title } in routes"
                    :key="name"
                    class="navigation-item">

                    <nuxt-link :to="{ name }">{{ title }}</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { routes } from '../../configs/routes';

export default {
    name: 'HeaderNavigation',

    beforeCreate () {
        this.routes = routes;
    }
}
</script>

<style scoped lang="scss">
.header-navigation {
    @apply mb-20;

    &,
    .navigation,
    .navigation-list {
        @apply flex justify-center;
    }

    .navigation-item {
        @apply text-2xl cursor-pointer;

        &:hover {
            text-shadow: 0 0 1px #000;
        }

        &:not(:last-child) {
            @apply mr-4;
        }

    }

    .nuxt-link-active {
        color: #e6b545;
        text-shadow: 0 0 1px #e6b545;
    }
}
</style>
