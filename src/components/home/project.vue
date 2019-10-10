<template>
<v-container fluid>
    <h1 class="text-xs-center mb-5">Here's what I've done so far</h1>
    <v-layout class="my-5" row wrap fill-height>
        <v-flex md3 hidden-sm-and-down>
            <v-carousel hide-delimiters :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" align-self-center>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/shakedeal.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/shakedeal2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/sdMob.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/sdMob2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex sm12 md9>
            <v-card :class="{'pl-5': $vuetify.breakpoint.mdAndUp, 'ml-4': $vuetify.breakpoint.mdAndUp}" height="100%">
                <v-carousel class="elevation-0 hidden-sm-and-up" dark hide-delimiters :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" align-self-center>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/shakedeal.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/shakedeal2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/sdMob.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/sdMob2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-2">Shakedeal Store</h3>
                        <div class="my-2 ml-2">
                                <v-chip>Php</v-chip>
                                <v-chip>CsKart</v-chip>
                                <v-chip>Bootstrap</v-chip>
                        </div>
                        <div>
                            <ul>
                                <li class="subheading text-align">Shakedeal Store is an e-commerce website built on cs-kart.</li>
                                <v-divider class="my-2" dark></v-divider>
                                <li class="subheading text-align">I have contributed in front-end to create templates for the buying-guide section as well as in backend to add filter stuff on Product listing page, promo code, mobile responsiveness, etc. Currently, we are working to improve performance and page loading speed. </li>
                            </ul>
                        </div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn color="orange" flat href="http://shakedeal.com" target="_blank">
                        <v-icon class="mx-2">fas fa-globe</v-icon> Visit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>
        <v-flex md3 hidden-sm-and-down>
            <v-carousel hide-delimiters height="350">
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/aegon.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/aegon2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/aegonMob.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/aegonMob2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/aegonMob3.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex sm12 md9>
            <v-card :class="{'pl-5': $vuetify.breakpoint.mdAndUp, 'ml-4': $vuetify.breakpoint.mdAndUp}" height="100%">
                <v-carousel class="elevation-0 hidden-sm-and-up" dark hide-delimiters :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" align-self-center>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/aegon.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/aegon2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/aegonMob.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/aegonMob2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/aegonMob3.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-2">Aegon (Website + PWA)</h3>
                        <div class="my-2 ml-2">
                                <v-chip>Vue.js</v-chip>
                                <v-chip>Express.js</v-chip>
                                <v-chip>Node.js</v-chip>
                                <v-chip>Vue-Bootstrap</v-chip>
                        </div>
                        <div>
                            <ul>
                                <li class="subheading text-align">Aegon is a home-grown private label of Shakedeal. </li>
                                <v-divider class="my-2" dark></v-divider>
                                <li class="subheading text-align"> I created Aegon website and PWA, for front-end, we used Nuxt.js with Vue-bootstrapfor server side rendering and for backend we used Node.js, We also used inatagram and mailchip api in this project. </li>
                            </ul>
                        </div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn color="orange" flat href="https://www.aegonpower.com/" target="_blank">
                        <v-icon class="mx-2">fas fa-globe</v-icon> Visit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>
        <v-flex md3 hidden-sm-and-down>
            <v-carousel hide-delimiters height="350">
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/mobileapp.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/mobileapp2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/hybrid.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/hybrid2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex sm12 md9>
            <v-card :class="{'pl-5': $vuetify.breakpoint.mdAndUp, 'ml-4': $vuetify.breakpoint.mdAndUp}" height="100%">
                <v-carousel class="elevation-0 hidden-sm-and-up" dark hide-delimiters :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" align-self-center>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/mobileapp.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/mobileapp2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/hybrid.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/hybrid2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-2"> Hybrid Mobile App </h3>
                          <div class="my-2 ml-2">
                                <v-chip>Nativescript-vue</v-chip>
                                <v-chip>Vuex</v-chip>
                                <v-chip>Node.js</v-chip>
                                <v-chip>Express.js</v-chip>
                        </div>
                        <div>
                            <ul>
                                <li class="subheading text-align">Recently, I worked on a hybrid application for Shakedeal internal uses.</li>
                                <v-divider class="my-2" dark></v-divider>
                                <li class="subheading text-align">We adopted Nativscript-vue for front-end and node.js + express.js for the backend. Due to dependency on Shakedeal database, we employed MySQL for this app. It is a kind of analytics app which includes various pie and bar graphs on the dashboard to show order, revenue, product and category summary.</li>
                            </ul>
                        </div>
                    </div>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>
        <v-flex md3 hidden-sm-and-down>
            <v-carousel hide-delimiters height="350">
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/snaphrm2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/snaphrm.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex sm12 md9>
            <v-card :class="{'pl-5': $vuetify.breakpoint.mdAndUp, 'ml-4': $vuetify.breakpoint.mdAndUp}" height="100%">
                <v-carousel class="elevation-0 hidden-sm-and-up" dark hide-delimiters :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" align-self-center>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/snaphrm2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/snaphrm.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-2">Snaphrm</h3>
                          <div class="my-2 ml-2">
                                <v-chip>Vue.js</v-chip>
                                <v-chip>Vuex</v-chip>
                                <v-chip>Php</v-chip>
                                <v-chip>Laravel</v-chip>
                                <v-chip>Vuetify</v-chip>
                        </div>
                        <div>
                            <ul>
                                <li class="subheading text-align">Snaphrm is a main product of froiden pvt ltd. </li>
                                <v-divider class="my-2" dark></v-divider>
                                <li class="subheading text-align">I worked on backend part (Laravel) to upload excel sheet and save its data to database, pie and bar graphs for the dashboard and various small tasks like to handle attendance record, payslips and added some front-end (Vue.js) functionalities and forms.</li>
                            </ul>
                        </div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn color="orange" flat href="https://www.snaphrm.com/" target="_blank">
                        <v-icon class="mx-2">fas fa-globe</v-icon> Visit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>
        <v-flex md3 hidden-sm-and-down>
            <v-carousel hide-delimiters height="350">
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/sdnext2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/sdnext3.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
                <v-carousel-item contain>
                    <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 350 : 300" :src="require('@/assets/projects/sdnext.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex sm12 md9>
            <v-card :class="{'pl-5': $vuetify.breakpoint.mdAndUp, 'ml-4': $vuetify.breakpoint.mdAndUp}" height="100%">
                <v-carousel class="elevation-0 hidden-sm-and-up" dark=true hide-delimiters :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" align-self-center>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/sdnext2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/sdnext3.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                    <v-carousel-item contain>
                        <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 300" :src="require('@/assets/projects/sdnext.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                            <template v-slot:placeholder>
                                <v-layout fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-2">Vue Store front </h3>
                         <div class="my-2 ml-2">
                                <v-chip>Vue.js</v-chip>
                                <v-chip>Vuex</v-chip>
                                <v-chip>Express.js</v-chip>
                                <v-chip>Node.js</v-chip>
                                <v-chip>Elastic Search</v-chip>
                                <v-chip>Vue-Bootstrap</v-chip>
                        </div>
                        <div>
                            <ul>
                                <li class="subheading text-align">The VueStore front is an open source e-commerce project. We forked the repo and currently, we are developing it as a replacement of shake deal store.</li>
                                <v-divider class="my-2" dark></v-divider>
                                <li class="subheading text-align">In this project I have worked on elastic-search and Vue-store front API which uses express + node.js. I have also worked on a node.js app to push data from shake deal store to elastic search.</li>
                            </ul>
                        </div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn color="orange" flat href="https://github.com/DivanteLtd/vue-storefront" target="_blank">
                        <v-icon class="mx-2">fas fa-globe</v-icon> Visit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style>
.text-align {
    text-align: justify;

}

.v-parallax__content {
    padding: 0px !important;
}

.v-carousel__prev .v-btn,
.v-carousel__next .v-btn {
    color: #757575;

}
</style>
