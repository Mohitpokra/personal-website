<template>
<div>
    <v-parallax :height="$vuetify.breakpoint.smAndDown ? 200 : 300">
        <v-img class="avatar grey lighten-2 pa-0 ma-0" :height="$vuetify.breakpoint.smAndDown ? 200 : 400" :src="parallex" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1">
            <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
            </template>
        </v-img>
    </v-parallax>
    <div class="pos-rlt">
        <v-container fluid>
            <v-layout row wrap >
                <v-flex lg3 offset-lg1 xs12>
                    <v-layout row wrap align-content-center style="height: 100%">
                        <v-flex class="center" md12 xs6>
                            <div class="user-avatar">
                                <v-img class="avatar grey lighten-2" :src="require('@/assets/profile.jpg')" position="top center" :lazy-src="require('@/assets/lazy.jpg')" aspect-ratio="1">
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </div>
                        </v-flex>
                        <v-flex class="center" md12 xs5 offset-xs1 offset-md0>
                            <div class="text-xs-center">
                                <p class="subheading mt-2 mb-0"><strong>Follow on Social</strong></p>
                                <v-btn dark icon href="https://www.linkedin.com/in/mohit-gupta-a8007398/" target="_blank">
                                    <v-icon size="24px" color="black">fab fa-linkedin</v-icon>
                                </v-btn>
                                <v-btn dark icon href="https://www.facebook.com/mohit.pokra" target="_blank">
                                    <v-icon size="24px" color="black">fab fa-facebook</v-icon>
                                </v-btn>
                                <v-btn dark icon href="https://www.instagram.com/mohit_gupta__1/" target="_blank">
                                    <v-icon size="24px" color="black">fab fa-instagram</v-icon>
                                </v-btn>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex lg7 xs12>
                    <div class="mt-1">
                        <h1>Mohit Gupta </h1>
                        <hr />
                        <h2 class="font-weight-regular mt-2 text-align">I am a software developer who is always ready to build software that complies with coding standard and technical design. When I don't have
                            any projects in hand, I love to read the novel and do a lot more discussion on entrepreneurship topics.
                        </h2>
                        <div class="mt-4">
                            <v-btn color="info" to="/about" outline round :larger="$vuetify.breakpoint.smAndUp ? true : false">About-me</v-btn>
                            <v-btn color="info" target="_blank" href="https://1drv.ms/b/s!AhYy4_8-3vmagd5xDkuOrkzPv0Wo_w?e=ccDICs" :larger="$vuetify.breakpoint.smAndUp ? true : false" round>Download Resume</v-btn>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <div class="hidden-sm-and-down">
            <img class="img-run" style="position:absolute; top: 20%; right: 15%" :src="require('@/assets/icons/asana-icon.png')" />
            <img class="img-run-ops" style="position:absolute; top: 20%; right: 30%" :src="require('@/assets/icons/blue-chat-icon.png')" />

            <img class="img-run" style="position:absolute; botttom: 5%; right: 30%" :src="require('@/assets/icons/atlassian-icon.png')" />
            <img class="img-run-ops" style="position:absolute; botttom: 5%; right: 8%" :src="require('@/assets/icons/dropbox-icon.png')" />

            <img class="img-run" style="position:absolute; top: 20%; left: 5%" :src="require('@/assets/icons/blue-chat-icon.png')" />
            <img class="img-run-ops" style="position:absolute; top: 20%; left: 15%" :src="require('@/assets/icons/asana-icon.png')" />

            <img class="img-run" style="position:absolute; botttom: 5%; left: 8%" :src="require('@/assets/icons/dropbox-icon.png')" />
            <img class="img-run-ops" style="position:absolute; botttom: 5%; left: 20%" :src="require('@/assets/icons/atlassian-icon.png')" />

            <img class="img-run" style="position:absolute; top: 50%; right: 20%" :src="require('@/assets/icons/gdrive-icon.png')" />
            <img class="img-run-ops" style="position:absolute;  top: 50%; left: 10%" :src="require('@/assets/icons/hubspot-icon.png')" />
            <img class="img-run" style="position:absolute; botttom: 5%; left: 50%" :src="require('@/assets/icons/zendesk-icon.png')" />
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        isMobile: false
    }),
    computed: {
        parallex () {
            let isDark = this.$store.state.isDark;
            return isDark ? 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg' : 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
        }
    },
    beforeDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize, {
                passive: true
            })
        }
    },

    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize, {
            passive: true
        })
    },

    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 600
        }
    }
}
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
}

.user-avatar {
    display: flex;
    justify-content: center;
    height: 200px;
    width: 200px;
    margin-top: -125px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center
}

.img-run {
    animation-name: floating;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    height: 20px;
}

.img-run-ops {
    animation-name: floating-ops;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    height: 20px;
}

@keyframes floating-ops {
    from {
        transform: translate3d(0, 0, 0);
    }

    50% {
        transform: translate3d(-6px, -18px, -3px);
    }

    75% {
        transform: translate3d(-40px, -18px, -3px);
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes floating {
    from {
        transform: translate3d(0, 0, 0);
    }

    50% {
        transform: translate3d(6px, 18px, 3px);
    }

    75% {
        transform: translate3d(45px, 20px, 25px);
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}

.pos-rlt {
    position: relative;
}

.social {
    width: 300px;
    text-align: center;
}

@media screen and (max-width: 600px) {
    .user-avatar {
        position: relative;
        height: 150px;
        width: 150px;
        margin-top: -60px;
        border-radius: 50%;
        overflow: hidden;
    }

    .social {
        width: 150px;
        text-align: center;
    }
}

.user-avatar>.avatar {
    height: 100%;
    width: 100%
}

.v-parallax__content {
    padding: 0px !important;
}
</style>
