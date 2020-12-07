<template>
<v-container fluid>
    <h1 class="text-xs-center mb-5">Here's what I've done so far</h1>
    <v-layout class="my-5" row wrap fill-height>
        <v-card height="100%">
            <v-card-title primary-title>
                <v-layout row wrap>
                    <v-flex md3 xs12>
                        <v-carousel hide-delimiters class="cursor-pointer"  :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" align-self-center>
                            <v-carousel-item contain  @click="openGallery(1, 0)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/shakedeal.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain  @click="openGallery(1, 1)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/shakedeal2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item  @click="openGallery(1, 2)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/sdMob.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(1, 3)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/sdMob2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                        <LightBox
                            ref="lightbox-1"
                            :media="media1"
                            :show-light-box="false"
                        />
                    </v-flex>
                    <v-flex md9 x12 :class="{'mt-4': $vuetify.breakpoint.smAndDown, 'mt-0 pl-4': $vuetify.breakpoint.mdAndUp}">
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
                                    <li class="subheading text-align">I have contributed in front-end to create templates for the buying-guide, corporate gifting, enterprise portal, brand promotion sections and also worked on lazy-loading, responsiveness of product listing and product pages. In the backend, I contributed in bulk inquiry, email-templates, custom APIs, brand and other filters on product listing page, promo code on cart and checkout page. Currently, we are working to improve performance and page loading speed. </li>
                                </ul>
                            </div>
                        </div>
                        <v-card-actions>
                            <v-btn color="orange" flat href="http://shakedeal.com" target="_blank">
                                <v-icon class="mx-2">fas fa-globe</v-icon> Visit
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-card-title>
        </v-card>
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>
        <v-card height="100%">
            <v-card-title primary-title>
                <v-layout  row wrap>
                    <v-flex md3 xs12>
                        <v-carousel hide-delimiters class="cursor-pointer"  height="250">
                            <v-carousel-item contain @click="openGallery(2, 0)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/snaphrm2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(2, 1)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/snaphrm.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                        <LightBox
                            ref="lightbox-2"
                            :media="media2"
                            :show-light-box="false"
                        />
                    </v-flex>
                    <v-flex md9  x12   :class="{'mt-4': $vuetify.breakpoint.smAndDown, 'mt-0 pl-4': $vuetify.breakpoint.mdAndUp}">
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
                                    <li class="subheading text-align">In the backend, I developed a feature to upload an excel sheet attendance record and save its data to the database, pdf generator for payslips, crone jobs for check-in and check-out, RestApi to fetch user's attendance record, profile records, APIs to submit leave applications, profile updations forms.
                                        In the frontend, I have created the various component, data-tables to show user's attendance and profile data. Also worked on dashboard part to show summary related to leaves and total working hours, check-in, checkout summary e.t.c</li>
                                </ul>
                            </div>
                            <v-card-actions>
                                <v-btn color="orange" flat href="https://www.snaphrm.com/" target="_blank">
                                    <v-icon class="mx-2">fas fa-globe</v-icon> Visit
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card-title>
        </v-card>
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>
        <v-card height="100%">
            <v-card-title primary-title>
                <v-layout  row wrap>
                    <v-flex md3 xs12>
                        <v-carousel hide-delimiters class="cursor-pointer"  height="250">
                            <v-carousel-item contain @click="openGallery(3, 0)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/mobileapp.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(3, 1)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/mobileapp2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(3, 2)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/hybrid.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(3, 3)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/hybrid2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                         <LightBox
                            ref="lightbox-3"
                            :media="media3"
                            :show-light-box="false"
                        />
                    </v-flex>
                    <v-flex  md9 x12 :class="{'mt-4': $vuetify.breakpoint.smAndDown, 'mt-0 pl-4': $vuetify.breakpoint.mdAndUp}">
                        <div>
                            <h3 class="headline mb-2">Mobile App </h3>
                            <div class="my-2 ml-2">
                                <v-chip>Nativescript-vue</v-chip>
                                <v-chip>Vuex</v-chip>
                                <v-chip>Node.js</v-chip>
                                <v-chip>Express.js</v-chip>
                            </div>
                            <div>
                                <ul>
                                    <li class="subheading text-align">We built a native application for Shakedeal internal uses.</li>
                                    <v-divider class="my-2" dark></v-divider>
                                    <li class="subheading text-align">Developed an android application that shows various pie and bar graphs to give the summary of orders, revenues, customers and product-related details according to selected filters. Due to dependency on the Shakedeal database, we employed MySQL with node and express.js for this app.</li>
                                </ul>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card-title>
        </v-card>
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>     
        <v-card height="100%">
            <v-card-title primary-title>
                <v-layout  row wrap>  
                    <v-flex md3 xs12>
                        <v-carousel hide-delimiters class="cursor-pointer"  height="250">
                            <v-carousel-item contain @click="openGallery(4, 0)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/sdnext2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(4, 1)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/sdnext3.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(4, 2)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/sdnext.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                        <LightBox
                            ref="lightbox-4"
                            :media="media4"
                            :show-light-box="false"
                        />
                    </v-flex>
                    <v-flex  md9 x12 :class="{'mt-4': $vuetify.breakpoint.smAndDown, 'mt-0 pl-4': $vuetify.breakpoint.mdAndUp}">
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
                                    <li class="subheading text-align">The VueStore front is an open source e-commerce project. We forked the repo and currently,developing it as a replacement of shake deal store.</li>
                                    <v-divider class="my-2" dark></v-divider>
                                    <li class="subheading text-align">In the backend, I modified the given "elastic-bridge" repo to upload data from cskart to the elastic-search database. Modified few vuestore front APIs like profile update, login, signup,  change password, recover password, cart and order summary to work seamlessly with cskart. In frontend developed custom theme without interfering with core them. Still, we are working on this as a pilot project.</li>
                                </ul>
                            </div>
                            <v-card-actions>
                                <v-btn color="orange" flat href="https://github.com/DivanteLtd/vue-storefront" target="_blank">
                                    <v-icon class="mx-2">fas fa-globe</v-icon> Visit
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </v-flex>
                    
                </v-layout>
            </v-card-title>
        </v-card>        
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>       
        <v-card height="100%">
            <v-card-title primary-title>
                <v-layout  row wrap>  
                    <v-flex md3 xs12>
                        <v-carousel hide-delimiters class="cursor-pointer"  height="250">
                            <v-carousel-item contain  @click="openGallery(5, 0)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/split-bill2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain  @click="openGallery(5, 1)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/split-bill.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain  @click="openGallery(5, 2)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/split-bill4.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                         <LightBox
                            ref="lightbox-5"
                            :media="media5"
                            :show-light-box="false"
                        />
                    </v-flex>
                    <v-flex  md9 x12 :class="{'mt-4': $vuetify.breakpoint.smAndDown, 'mt-0 pl-4': $vuetify.breakpoint.mdAndUp}">
                        <div>
                            <h3 class="headline mb-2">Split-bill (Practise project) </h3>
                            <div class="my-2 ml-2">
                                <v-chip>Laravel</v-chip>
                                <v-chip>Php</v-chip>
                                <v-chip>JQuery</v-chip>
                            </div>
                            <div>
                                <ul>
                                    <li class="subheading text-align">Developed Split-Bill (clone of split-wise) Web app using Laravel Framework.  </li>
                                    <v-divider class="my-2" dark></v-divider>
                                    <li class="subheading text-align">It has functionality for users to create group, add expenses in group, add individual expenses, add expenses paid by multiple users to figure out costs for a group vacation, or just to remember when a friend spots you for launch, you can view your balances, track spending trends. Added functionality to add expenses with various methods like add by shares, percentage, and exact amount. User can also make customize bill to add expenses. Added pdf download functionality so that users can download group related or individual month summary. </li>
                                </ul>
                            </div>
                        </div>
                    </v-flex>
                    
                </v-layout>
            </v-card-title>
        </v-card>       
    </v-layout>
    <v-layout class="my-5" row wrap fill-height>  
        <v-card height="100%">
            <v-card-title primary-title>
                <v-layout  row wrap>
                    <v-flex md3 xs12>
                        <v-carousel hide-delimiters class="cursor-pointer"  height="250">
                            <v-carousel-item contain  @click="openGallery(6, 0)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/aegon.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(6, 1)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/aegon2.png')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(6, 2)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/aegonMob.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(6, 3)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/aegonMob2.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item contain @click="openGallery(6, 4)">
                                <v-img class="grey lighten-2" :height="$vuetify.breakpoint.mdAndDown ? 200 : 250" :src="require('@/assets/projects/aegonMob3.jpg')" :lazy-src="require('@/assets/lazy.jpg')" contain>
                                    <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                    </template>
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                         <LightBox
                            ref="lightbox-6"
                            :media="media6"
                            :show-light-box="false"
                        />
                    </v-flex>
                    <v-flex  md9 x12 :class="{'mt-4': $vuetify.breakpoint.smAndDown, 'mt-0 pl-4': $vuetify.breakpoint.mdAndUp}">
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
                                    <li class="subheading text-align"> 
Developed a kind of statics website and PWA. For server-side rendering the javascript we used nuxt.js. Integrated Instagram and MailChimp API. In the backend, We used express.js to fetch product, product category, and home page data. </li>
                                </ul>
                            </div>
                        </div>
                        <v-card-actions>
                            <v-btn color="orange" flat href="https://www.aegonpower.com/" target="_blank">
                                <v-icon class="mx-2">fas fa-globe</v-icon> Visit
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-card-title>
        </v-card>       
    </v-layout>
</v-container>
</template>

<script>
import LightBox from 'vue-image-lightbox'
export default {
  components: {
    LightBox,
  },
  data() {
    return {
        media1: [
            { 
                thumb: require('@/assets/projects/shakedeal.png'),
                src: require('@/assets/projects/shakedeal.png')
            }, 
            { 
                thumb: require('@/assets/projects/shakedeal2.png'),
                src: require('@/assets/projects/shakedeal2.png')
            },
            { 
                thumb: require('@/assets/projects/sdMob.jpg'),
                src: require('@/assets/projects/sdMob.jpg')
            }, 
            { 
                thumb: require('@/assets/projects/sdMob2.jpg'),
                src: require('@/assets/projects/sdMob2.jpg'),
            }
        ],
        media2: [
            {
                thumb: require('@/assets/projects/snaphrm2.png'),
                src: require('@/assets/projects/snaphrm2.png')
            }, 
            {
                thumb: require('@/assets/projects/snaphrm.png'),
                src: require('@/assets/projects/snaphrm.png')
            }
        ],
        media3: [
            { 
                thumb: require('@/assets/projects/mobileapp.png'),
                src: require('@/assets/projects/mobileapp.png')
            }, 
            { 
                thumb: require('@/assets/projects/mobileapp2.png'),
                src: require('@/assets/projects/mobileapp2.png')
            }, 
            { 
                thumb: require('@/assets/projects/hybrid.jpg'),
                src: require('@/assets/projects/hybrid.jpg')
            }, 
            { 
                thumb: require('@/assets/projects/hybrid2.jpg'),
                src: require('@/assets/projects/hybrid2.jpg'),
            }
        ],
        media4: [
            { 
                thumb: require('@/assets/projects/sdnext2.png'),
                src: require('@/assets/projects/sdnext2.png')
            }, 
            { 
                thumb: require('@/assets/projects/sdnext3.png'),
                src: require('@/assets/projects/sdnext3.png')
            }, 
            { 
                thumb: require('@/assets/projects/sdnext.png'),
                src: require('@/assets/projects/sdnext.png')
            }
        ],
        media5: [
            { 
                thumb: require('@/assets/projects/split-bill2.png'),
                src: require('@/assets/projects/split-bill2.png')
            }, 
            { 
                thumb: require('@/assets/projects/split-bill.png'),
                src: require('@/assets/projects/split-bill.png')
            }, 
            { 
                thumb: require('@/assets/projects/split-bill4.png'),
                src: require('@/assets/projects/split-bill4.png')
            }
          ],
        media6: [
            { 
                thumb: require('@/assets/projects/aegon.png'),
                src: require('@/assets/projects/aegon.png')
            }, 
            { 
                thumb: require('@/assets/projects/aegon2.png'),
                src: require('@/assets/projects/aegon2.png')
            }, 
            { 
                thumb: require('@/assets/projects/aegonMob2.jpg'),
                src: require('@/assets/projects/aegonMob2.jpg')
            }, 
            { 
                thumb: require('@/assets/projects/aegonMob3.jpg'),
                src: require('@/assets/projects/aegonMob3.jpg')
            }, 
            { 
                thumb: require('@/assets/projects/aegonMob.jpg'),
                src: require('@/assets/projects/aegonMob.jpg')
            }
          ]      
    };
  },
    methods: {
        openGallery(refNo, index) {
            let refs = `lightbox-${refNo}`;
            if(this.$refs[refs] && refs) {
                this.$refs[refs].showImage(index);
            }
        }
    }
};
</script>

<style>
.text-align {
  text-align: justify;
}

.v-parallax__content {
  padding: 0px !important;
}

.cursor-pointer {
    cursor: pointer
}

.v-carousel__prev .v-btn,
.v-carousel__next .v-btn {
  color: #757575;
}
</style>
