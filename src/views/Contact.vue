<template>
<div>
    <v-layout>
        <v-flex>
            <v-card class="elevation-0">
                <v-parallax :height="$vuetify.breakpoint.smAndDown ? 200 : 400">
                    <v-img class="avatar grey lighten-2 pa-0 ma-0" :height="$vuetify.breakpoint.smAndDown ? 200 : 400" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-parallax>

                <v-card-title primary-title style="justify-content: center">
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>phone</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>8696352164</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-divider inset></v-divider>

                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>email</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>mohitpokra@gmail.com</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider inset></v-divider>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>fas fa-home</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title class="mt-2">124, AECS Layout - A Block, AECS Layout</v-list-tile-title>
                                <v-list-tile-sub-title>Marathahalli, Bengaluru, Karnataka 560037</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
