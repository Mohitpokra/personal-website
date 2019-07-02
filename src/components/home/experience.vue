<template>
<v-container class="my-5">
    <h1 class="text-xs-center mb-5">Professional Experience</h1>
    <div class="pos-rlt">
        <v-layout>
            <v-flex md12 lg12>
                <v-timeline class="hidden-sm-and-down">
                    <v-timeline-item color="red lighten-2" large>
                        <template v-slot:opposite>
                            <span>Aug 2018-  Present</span>
                        </template>
                        <v-card class="elevation-2">
                            <v-card-title>
                                <div>
                                    <div class="headline"> ShakeDeal (B2B) Bengaluru, Karnataka</div>
                                    <div class="subheading pl-2">Full Stack Developer </div>
                                </div>
                            </v-card-title>
                            <v-card-text>
                                <ul>
                                    <li class="subheading text-align">My role is to work on front and back-end web development with several languages including PHP, HTML, CSS, JavaScript. Here, I worked with cskart, vue.js, Native script and Node.js frameworks.</li>
                                    <v-divider class="my-2" dark></v-divider>
                                    <li class="subheading text-align">I have also contributed to Shakedeal store (the main product of company), Aegon power website (Private label brand), Shakedeal API and a new version of Shakedeal store which is under development. </li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item color="red lighten-2" small>
                        <template v-slot:opposite>
                            <span>July 2017-  July 2018</span>
                        </template>
                        <v-card class="elevation-2">
                            <v-card-title>
                                <div>
                                    <div class="headline">Froiden Technologies Pvt. Ltd. , Jaipur </div>
                                    <div class="subheading pl-2">Software Developer </div>
                                </div>
                            </v-card-title>
                            <v-card-text>
                                <ul>
                                    <li class="subheading text-align">My role was to build high-quality, innovative and fully performing software that complies with coding standards and technical design.</li>
                                    <v-divider class="my-2" dark></v-divider>
                                    <li class="subheading text-align">In froiden I have worked on snaphrm (main product of company), hrm, coin-calendar projects for backend we adopted laravel and for frontend, we used JavaScript, jQuery, Ajax and a various plugin like data tables, full calendar, dompdf, excel sheet uploader, scrap data, image intervention, etc. </li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>

                <v-timeline class="hidden-md-and-up" align-top dense>
                    <v-timeline-item color="pink" small>
                        <v-layout pt-3>
                            <v-flex xs3>
                                <strong class="subheading">Aug 2018-  Present</strong>
                            </v-flex>
                            <v-flex>
                                <strong class="title">ShakeDeal (B2B) Bengaluru, Karnataka</strong>
                                <div class="blockquote">
                                    <ul>
                                        <li class="subheading text-align">My role is to work on front and back-end web development with several languages including PHP, HTML, CSS, JavaScript. Here, I worked with cskart, vue.js, Native script and Node.js frameworks.</li>
                                        <v-divider class="my-2" dark></v-divider>
                                        <li class="subheading text-align">I have also contributed to Shakedeal store (the main product of company), Aegon power website (Private label brand), Shakedeal API and a new version of Shakedeal store which is under development. • </li>
                                    </ul>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-timeline-item>
                    <v-timeline-item color="yellow" small>
                        <v-layout pt-3>
                            <v-flex xs3>
                                <strong class="subheading mr-2">July 2017 - July  2018</strong>
                            </v-flex>
                            <v-flex>
                                <strong class="title">  Froiden Technologies Pvt. Ltd. , Jaipur</strong>
                                <div class="blockquote">
                                    <ul>
                                        <li class="subheading text-align">My role was to build high-quality, innovative and fully performing software that complies with coding standards and technical design.</li>
                                        <v-divider class="my-2" dark></v-divider>
                                        <!-- <li>Here, I have also contributed to Shakedeal store (the main product of company), Aegon power website (Private label brand), Shakedeal API and a new version of Shakedeal store which is under development. • </li> -->
                                    </ul>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
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
</v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>
