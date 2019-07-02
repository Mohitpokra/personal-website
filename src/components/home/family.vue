<template>
<div class="grey lighten-3">
    <v-container class="mb-5 pb-5">
        <h1 class="text-xs-center mb-2">Family means the world to me</h1>
        <h2 class="text-xs-center mb-5"> Here are a few snaps I took</h2>
        <v-layout row wrap>
            <v-flex class="px-2 img-run-ops" xs12 sm4 lg2>
                <v-card class="my-2">
                    <v-img :src="require('@/assets/family/gudan.jpg')" height="200px" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="subheading">Sweet Sis!</div>
                            <span class="grey--text">Dr. Asmita Gupta</span>
                        </div>
                    </v-card-title>

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text class="subheading" v-show="show">Our love is different which start with an everyday fight. She’s the one who starts the fight... I am the one to continue it. She recently completed her M.B.B.S degree. Now I would like to say her doctor.</v-card-text>
                    </v-slide-y-transition> -->
                </v-card>
            </v-flex>

            <v-flex class="px-2 img-run" xs12 sm4 lg2>
                <v-card class="my-2">

                    <v-img :src="require('@/assets/family/nikbro.jpg')" height="200px" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="subheading">Smart bro</div>
                            <span class="grey--text">Nikhil Gupta</span>
                        </div>
                    </v-card-title>

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text class="subheading" v-show="show">
                            He is the most loving person in the family. Everyone loves him so much that if you want to talk to him you need to take an appointment because he has solutions for any problems and always surrounded by his fans. He worked in Oracle as a software engineer. Now he is preparing for civil services. </v-card-text>
                    </v-slide-y-transition> -->
                </v-card>
            </v-flex>

            <v-flex class="px-2 img-run-ops" xs12 sm4 lg2>
                <v-card class="my-2">
                    <v-img :src="require('@/assets/family/papa.jpg')" height="200px" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="subheading">Best Father</div>
                            <span class="grey--text">Narsing Gupta</span>
                        </div>
                    </v-card-title>

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text class="subheading" v-show="show">
                            He is a very hard working and smart businessman. He always inspires me to think like a businessman. He is the lighthouse of our family. Till date, he doesn't care what he is wearing and how he is eating, but when it comes to us, he will try to give the best </v-card-text>
                    </v-slide-y-transition> -->
                </v-card>
            </v-flex>

            <v-flex class="px-2 img-run" xs12 sm4 lg2>
                <v-card class="my-2">
                    <v-img :src="require('@/assets/family/mom.jpg')" position="20% 20%" height="200px" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="subheading">Loving mom</div>
                            <span class="grey--text">Savitri Gupta</span>
                        </div>
                    </v-card-title>

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text class="subheading" v-show="show">
                            She is the Sherlock of our house because she mapped each item location in her mind. She can sense when you’re about to sneak out of your home at night. She will taunt you, scold you, beat you but if anything happens to you she will fight against the whole world for you. </v-card-text>
                    </v-slide-y-transition> -->
                </v-card>
            </v-flex>

            <v-flex class="px-2 img-run-ops hidden-sm-and-down" xs12 sm4 lg2>
                <v-card class="my-2">

                    <v-img :src="require('@/assets/family/family1.jpg')" height="200px" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="subheading">Togetherness</div>
                            <!-- <span class="grey--text">1,000 miles of wonder</span> -->
                        </div>
                    </v-card-title>

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text class="subheading" v-show="show">
                            Big bro always makes a plan to reunion us. Pic from Hyderabad diary.
                        </v-card-text>
                    </v-slide-y-transition> -->
                </v-card>
            </v-flex>

            <v-flex class="px-2 img-run hidden-sm-and-down" xs12 sm4 lg2>
                <v-card class="my-2">

                    <v-img :src="require('@/assets/family/tripling.jpg')" height="200px" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <div class="subheading">Tripling</div>
                            <!-- <span class="grey--text">1,000 miles of wonder</span> -->
                        </div>
                    </v-card-title>

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text class="subheading" v-show="show">
                            I and Asmita fight a lot most of the time of big bro goes to teach us. Whenever we meet, we do a long discussion on a variety of topics. </v-card-text>
                    </v-slide-y-transition> -->
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
        show: false
    })
}
</script>

<style scoped>
</style>
