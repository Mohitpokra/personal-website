<template>
  <div>
    <div class="p-rel">
      <v-parallax :height="$vuetify.breakpoint.smAndDown ? 300 : 400">
        <v-img
          class="avatar grey lighten-2 pa-0 ma-0"
          :height="$vuetify.breakpoint.smAndDown ? 200 : 400"
          :src="parallex"
          :lazy-src="require('@/assets/lazy.jpg')"
          aspect-ratio="1"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-parallax>
      <h2 class="subtitle mb-title">Discover who I am as a person</h2>
      <h1 class="title hidden-xs-only">My passsion and personality</h1>
    </div>
    <div :class="{'grey': !isDark,  'lighten-3' : !isDark}" id="fun-facts">
      <v-container fluid>
        <v-layout>
          <v-flex class="xs12 sm6 offset-sm3">
            <h1 class="text-xs-center">A few fun facts about myself</h1>
            <h3
              class="text-xs-center my-5 blockquote text-align px-0"
            >I graduated as an electrical engineer but my interest was always in coding. At that time my brother was working in Oracle, he encouraged me to code so I started coding in my 3rd year of b.tech and finally placed in a startup (Froiden technology) since then I am rigorously working to improve my coding style and understanding user interaction with app and websites.</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container fluid id="education">
        <v-layout row wrap>
          <v-flex class="xs12">
            <h1 class="text-xs-left">Educational Details</h1>
            <v-timeline
              :align-top="$vuetify.breakpoint.smAndDown"
              :dense="$vuetify.breakpoint.smAndDown"
            >
              <v-timeline-item v-for="(item, index) in education" :key="index" large>
                <template v-slot:icon>
                  <v-avatar>
                    <img :src="item.image" />
                  </v-avatar>
                </template>
                <template v-slot:opposite>
                  <span>{{item.timeline}}</span>
                </template>
                <v-card class="elevation-2">
                  <v-card-title class="headline">{{item.heading}}</v-card-title>
                  <v-card-text class="blockquote">{{item.text}}</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container fluid id="whoIAm">
        <v-layout>
          <v-flex class="xs12" height="100%">
            <h1 class="text-xs-center">Understand who I am as a person</h1>
            <p
              class="mt-md-5 blockquote px-0 text-align"
            >My path as a full stack developer leads me to focus on node.js, vue.js, react.js, and express.js development. I work hard every single day to sharpen my coding skills. In free time I love to read novels and listen to music. I am a big fan of Satya nadella and inspired by his thought that "Innovation comes from having a deep sense of empathy". I always take extra care to make a habit-forming product with rich user's experience</p>
            <p
              class="mt-md-5 blockquote text-align px-0"
            >To understand the future of technology, user's experience I prefer to read novels. In this series recently I read "Hooked", "Hit refresh", "Crossing The Chasm", "Zero To One".</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container fluid id="gallery">
        <v-layout row wrap>
          <v-flex class="xs6 sm4 md3" height="100%" v-for="(image, index) in media" :key="index">
            <v-img
              :src="image.src"
              aspect-ratio="1.7"
              :lazy-src="require('@/assets/lazy.jpg')"
              class="grey lighten-2"
              @click="openGallery(index)"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-flex>
        </v-layout>
        <LightBox
          ref="lightbox"
          :media="media"
          :show-caption="true"
          :show-light-box="false"
        />
      </v-container>
    </div>
  </div>
</template>

<script>
import LightBox from 'vue-image-lightbox'
const COLORS = ["info", "primary", "error", "success"];
const ICONS = {
  info: "mdi-information",
  primary: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle"
};

export default {
  components: {
    LightBox,
  },
  data: () => ({
    interval: null,
    items: [
      {
        id: 1,
        color: "info",
        icon: ICONS["info"]
      }
    ],
    media: [{ 
			thumb: require('@/assets/about/img1.jpg'),
			src:  require('@/assets/about/img1.jpg')
  	}, { 
			thumb: require('@/assets/family/bro.jpg'),
			src:  require('@/assets/family/bro.jpg')
  	}, { 
			thumb: require('@/assets/family/brosis.jpg'),
			src:  require('@/assets/family/brosis.jpg')
  	},{ 
			thumb: require('@/assets/about/img2.jpg'),
			src:  require('@/assets/about/img2.jpg')
  	},{ 
			thumb: require('@/assets/about/img6.jpg'),
			src:  require('@/assets/about/img6.jpg')
  	},{ 
			thumb: require('@/assets/about/img7.jpg'),
			src:  require('@/assets/about/img7.jpg')
  	},{ 
			thumb: require('@/assets/about/img5.jpg'),
			src:  require('@/assets/about/img5.jpg')
  	},{ 
			thumb: require('@/assets/about/img4.jpg'),
			src:  require('@/assets/about/img4.jpg')
  	}],
    nonce: 2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    education: [
      {
        image:
          "https://getmyuni.azureedge.net/college-image/big/rajasthan-technical-university-rtu-kota.jpg",
        timeline: "2013-17",
        heading: "Government Engineering College, Kota",
        text:
          "My experience at college has taught me one fundamental thing – life is unpredictable. It might be good, it might be bad, it might be weird, and it might not interest you, but expect anything to happen. For example, I took admission in electrical branch but finally fall in love with computer science and joined a startup to start my career. Inspite of all this, I got honours degree with 70.72% in elctrical."
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZrFsTv2WYgyP2hXbaZlZ_Sla7rYn2H3bL_XY_bhnDHwdkB1M",
        timeline: "2012-13",
        heading: "Senior Secondary Examination, BSER",
        text:
          "I was in 2012 batch preparing for jee too , It was fun and terrifying at the ending because I didn't get in IITs. passed with 80.6%.Those moments are like french fries but the crisp lasts lifelong."
      },
      {
        image:
          "https://s3-ap-southeast-1.amazonaws.com/khaskhabar/khaskhabarimages/img500/10-57-1509611043-268294-khaskhabar.jpg",
        timeline: "2010",
        heading: "Secondary Examination, BSER ",
        text:
          "As I was good in studies and always scored more than 90% earlier. I used to sit most of the time in my father's shop (stationary) and in spare time I read lot of books there. Because of my parents blessings and study I scored 92%."
      }
    ]
  }),

  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    parallex() {
      let isDark = this.$store.state.isDark;
      return isDark
        ? "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        : "https://cdn.vuetifyjs.com/images/parallax/material2.jpg";
    }
  },

  beforeDestroy() {
    this.stop();
  },

  methods: {
    openGallery(index) {
			console.log("I am in open gallery");
      this.$refs.lightbox.showImage(index)
    },
    addEvent() {
      let { color, icon } = this.genAlert();

      const previousColor = this.items[0].color;

      while (previousColor === color) {
        color = this.genColor();
      }

      this.items.unshift({
        id: this.nonce++,
        color,
        icon
      });

      if (this.nonce > 6) {
        this.items.pop();
      }
    },
    genAlert() {
      const color = this.genColor();

      return {
        color,
        icon: this.genIcon(color)
      };
    },
    genColor() {
      return COLORS[Math.floor(Math.random() * 3)];
    },
    genIcon(color) {
      return ICONS[color];
    },
    start() {
      this.interval = setInterval(this.addEvent, 3000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
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
  text-align: justify;
}
</style>
