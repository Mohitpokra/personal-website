<template>
<div>
    <div class="p-rel">
        <v-parallax :height="$vuetify.breakpoint.smAndDown ? 300 : 400">
            <v-img class="avatar grey lighten-2 pa-0 ma-0" :height="$vuetify.breakpoint.smAndDown ? 200 : 400" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1">
                <template v-slot:placeholder>
                    <v-layout fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </template>
            </v-img>
        </v-parallax>
        <h2 class="subtitle  mb-title">Discover who I am as a person</h2>
        <h1 class="title hidden-xs-only">My passsion and personality</h1>
    </div>
    <div class="grey lighten-3 py-5">
        <v-container>
            <v-layout>
                <v-flex class="xs12 sm6 offset-sm3">
                    <h1 class="text-xs-center">A few fun facts about myself</h1>
                    <h3 class="text-xs-center my-5 blockquote text-align px-0">I graduated as an electrical engineer but my interest was always in coding. At that time my brother was working in Oracle, he encouraged me to code so I started coding in my 3rd year of b.tech and finally placed in a startup (Froiden technology) since then I am rigorously working to improve my coding style and understanding user interaction with app and websites.</h3>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex class="xs12 md6">
                    <h1 class="text-xs-left">Educational Details</h1>
                    <v-timeline align-top dense>
                        <v-timeline-item color="pink" small>
                            <v-layout pt-3>
                                <v-flex xs2>
                                    <strong class="subheading">2013-17</strong>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="text-xs-center text-md-left"><strong class="blockquote font-weight-bold px-0">Government Engineering College, Kota</strong></p>
                                    <div class="blockquote px-0">
                                        <ul>
                                            <li class="text-align">My experience at college has taught me one fundamental thing – life is unpredictable. It might be good, it might be bad, it might be weird, and it might not interest you, but expect anything to happen.
                                                For example, I took admission in electrical branch but finally fall in love with computer science and joined a startup to start my career. Inspite of all this, I got honours degree with 70.72% in elctrical.
                                            </li>
                                            <!-- <li>Here, I have also contributed to Shakedeal store (the main product of company), Aegon power website (Private label brand), Shakedeal API and a new version of Shakedeal store which is under development. • </li> -->
                                        </ul>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-timeline-item>
                        <v-timeline-item color="pink" small>
                            <v-layout pt-3>
                                <v-flex xs2>
                                    <strong class="subheading">2012-13</strong>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="text-xs-center text-md-left"><strong class="blockquote font-weight-bold px-0">Senior Secondary Examination, BSER</strong></p>
                                    <div class="blockquote px-0">
                                        <ul>
                                            <li class="text-align"> I was in 2012 batch preparing for jee too , It was fun and terrifying at the ending because I didn't get in IITs. passed with 80.6%.Those moments are like french fries but the crisp lasts lifelong. I
                                            </li>
                                            <!-- <li>Here, I have also contributed to Shakedeal store (the main product of company), Aegon power website (Private label brand), Shakedeal API and a new version of Shakedeal store which is under development. • </li> -->
                                        </ul>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-timeline-item>

                        <v-timeline-item color="pink" small>
                            <v-layout pt-3>
                                <v-flex xs2>
                                    <strong class="subheading">2010</strong>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="text-xs-center text-md-left"><strong class="blockquote font-weight-bold">Secondary Examination, BSER </strong></p>
                                    <div class="blockquote px-0">
                                        <ul>
                                            <li class="text-align"> As I was good in studies and always scored more than 90% earlier. I used to sit most of the time in my father's shop (stationary) and in spare time I read lot of books there.
                                                Because of my parents blessings and study I scored 92%.
                                            </li>
                                            <!-- <li>Here, I have also contributed to Shakedeal store (the main product of company), Aegon power website (Private label brand), Shakedeal API and a new version of Shakedeal store which is under development. • </li> -->
                                        </ul>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-timeline-item>
                    </v-timeline>
                </v-flex>
                <v-flex :class="{'mt-4': $vuetify.breakpoint.smAndDown, 'mt-0': $vuetify.breakpoint.mdAndUp, 'xs12': true, 'md6': true}" height="100%">
                    <h1 class="text-xs-left mb-5">Professional skills</h1>
                    <template>
                        <v-tabs fixed-tabs color="grey lighten-3" slider-color="primary" centered show-arrows>
                            <v-tabs-slider color="primary"></v-tabs-slider>

                            <v-tab href="#tab-1">
                                Frameworks
                            </v-tab>

                            <v-tab href="#tab-2">
                                Languages
                            </v-tab>

                            <v-tab-item value="tab-2">
                                <v-card class="elevation-0 pa-3 pt-5" color="transparent">
                                    <div class="d-flex text-xs-center mb-5">
                                        <div>
                                            <v-progress-circular rotate="90" size="100" width="15" value="80" color="primary">
                                                80%
                                            </v-progress-circular>
                                            <h2>Front-end</h2>
                                        </div>
                                        <div>
                                            <v-progress-circular rotate="90" size="100" width="15" value="80" color="primary">
                                                85%
                                            </v-progress-circular>
                                            <h2>Back-end</h2>
                                        </div>
                                    </div>
                                    <v-card-text>
                                        <h4><strong class="subheading text-uppercase"> Html & css: </strong></h4>
                                        <v-progress-linear color="primary" buffer-value="100" value="95"></v-progress-linear>
                                    </v-card-text>
                                    <v-card-text>
                                        <h4><strong class="subheading text-uppercase"> Javascript</strong></h4>
                                        <v-progress-linear color="primary" buffer-value="100" value="90"></v-progress-linear>
                                    </v-card-text>
                                    <v-card-text>
                                        <h4><strong class="subheading text-uppercase">Php</strong></h4>
                                        <v-progress-linear color="primary" buffer-value="100" value="80"></v-progress-linear>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item value="tab-1">
                                <v-card class="elevation-0 pa-3 pt-5" color="transparent">
                                    <v-card-text>
                                        <h4 class="mb-2"><strong class="subheading text-uppercase"> Frontend </strong></h4>
                                        <v-chip outline color="primary">Vue.js</v-chip>
                                        <v-chip outline color="primary">React.js</v-chip>
                                        <v-chip outline color="primary">Bootstrap</v-chip>
                                        <v-chip outline color="primary">Vuetify</v-chip>
                                        <v-chip outline color="primary">Vue-Bootstrap</v-chip>
                                    </v-card-text>
                                    <v-card-text>
                                        <h4 class="mb-2"><strong class="subheading text-uppercase"> Backend </strong></h4>
                                        <v-chip outline color="primary">Node.js</v-chip>
                                        <v-chip outline color="primary">Express.js</v-chip>
                                        <v-chip outline color="primary">Laravel</v-chip>
                                    </v-card-text>
                                    <v-card-text>
                                        <h4 class="mb-2"><strong class="subheading text-uppercase"> Databases </strong></h4>
                                        <v-chip outline color="primary">Mysql</v-chip>
                                        <v-chip outline color="primary">Mogodb</v-chip>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                    </template>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <div>
        <v-container>
            <v-layout>
                <v-flex class="xs12" height="100%">
                    <h1 class="text-xs-center">Understand who I am as a person</h1>
                    <p class="mt-md-5   blockquote px-0 text-align">My path as a full stack developer leads me to focus on node.js, vue.js, react.js, and express.js development. I work hard every single day to sharpen my coding skills. In free time I love to read novels and listen to music. I am a big fan of Satya nadella and inspired by his thought that "Innovation comes from having a deep sense of empathy". I always take extra care to make a habit-forming product with rich user's experience
                    </p>
                    <p class="mt-md-5 blockquote text-align px-0">To understand the future of technology, user's experience I prefer to read novels. In this series recently I read "Hooked", "Hit refresh", "Crossing The Chasm", "Zero To One". </p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex class="xs6 sm4 md3" height="100%">
                    <v-img :src="require('@/assets/about/img1.jpg')" aspect-ratio="1.7" :lazy-src="require('@/assets/lazy.jpg')" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-flex>
                <v-flex class="xs6 sm4 md3" height="100%">
                    <v-img :src="require('@/assets/family/bro.jpg')" aspect-ratio="1.7" :lazy-src="require('@/assets/lazy.jpg')" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-flex>
                <v-flex class="xs6 sm4 md3" height="100%">
                    <v-img :src="require('@/assets/about/img4.jpg')" aspect-ratio="1.7" :lazy-src="require('@/assets/lazy.jpg')" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-flex>
                <v-flex class="xs6 sm4 md3" height="100%">
                    <v-img :src="require('@/assets/family/brosis.jpg')" aspect-ratio="1.7" :lazy-src="require('@/assets/lazy.jpg')" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-flex>
                <v-flex class="xs6 sm4 md3" height="100%">
                    <v-img :src="require('@/assets/about/img2.jpg')" aspect-ratio="1.7" :lazy-src="require('@/assets/lazy.jpg')" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-flex>
                <v-flex class="xs6 sm4 md3" height="100%">
                    <v-img :src="require('@/assets/about/img6.jpg')" aspect-ratio="1.7" :lazy-src="require('@/assets/lazy.jpg')" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-flex>
                <v-flex class="xs6 sm4 md3" height="100%">
                    <v-img :src="require('@/assets/about/img7.jpg')" aspect-ratio="1.7" :lazy-src="require('@/assets/lazy.jpg')" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-flex>
                <v-flex class="xs6 sm4 md3" height="100%">
                    <v-img :src="require('@/assets/about/img5.jpg')" aspect-ratio="1.7" :lazy-src="require('@/assets/lazy.jpg')" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-layout fill-height align-center justify-center ma-0>
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</div>
</template>

<script>
const COLORS = [
    'info',
    'primary',
    'error',
    'success'
]
const ICONS = {
    info: 'mdi-information',
    primary: 'mdi-alert',
    error: 'mdi-alert-circle',
    success: 'mdi-check-circle'
}

export default {
    data: () => ({
        interval: null,
        items: [{
            id: 1,
            color: 'info',
            icon: ICONS['info']
        }],
        nonce: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }),

    beforeDestroy() {
        this.stop()
    },

    methods: {
        addEvent() {
            let {
                color,
                icon
            } = this.genAlert()

            const previousColor = this.items[0].color

            while (previousColor === color) {
                color = this.genColor()
            }

            this.items.unshift({
                id: this.nonce++,
                color,
                icon
            })

            if (this.nonce > 6) {
                this.items.pop()
            }
        },
        genAlert() {
            const color = this.genColor()

            return {
                color,
                icon: this.genIcon(color)
            }
        },
        genColor() {
            return COLORS[Math.floor(Math.random() * 3)]
        },
        genIcon(color) {
            return ICONS[color]
        },
        start() {
            this.interval = setInterval(this.addEvent, 3000)
        },
        stop() {
            clearInterval(this.interval)
            this.interval = null
        }
    }
}
</script>

<style scoped>
.p-rel {
    position: relative;
}

.subtitle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}

.title {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px !important;
    text-align: center;
}

@media only screen and (max-width: 600px) {
    .mb-title {
        font-size: 30px !important;
    }
}

.text-align {
    text-align: justify
}
</style>
