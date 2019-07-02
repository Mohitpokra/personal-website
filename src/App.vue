<template>
<v-app app>
    <TheHeader app />
    <v-content>
        <router-view></router-view>
    </v-content>
    <TheFooter app />
</v-app>
</template>

<script>
import TheFooter from './components/layout/TheFooter'
import TheHeader from './components/layout/TheHeader'

export default {
    name: 'App',
    components: {
        TheFooter,
        TheHeader
    },
    data() {
        return {
            //
        }
    }
}
</script>
