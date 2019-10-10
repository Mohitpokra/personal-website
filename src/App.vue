<template>
  <v-app app id="top" :dark=isDark>
    <div class="control-nav v-card v-sheet theme--light" v-if="ids">
      <v-tooltip color="rgb(25, 118, 210)"  v-for="(item, index) in titles" :key="index" left>
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="primary" v-on="on" @click="scroll(ids[index], index)">
            <v-icon dark>{{icons[index]}}</v-icon>
          </v-btn>
        </template>
        <span class="ft-16">{{item}}</span>
      </v-tooltip>
    </div>
    <TheHeader app />
    <v-content>
      <router-view></router-view>
    </v-content>
    <TheFooter app />
  </v-app>
</template>

<script>
import TheFooter from "./components/layout/TheFooter";
import TheHeader from "./components/layout/TheHeader";

export default {
  name: "App",
  components: {
    TheFooter,
    TheHeader
  },
  data: () => ({
    options: {
      duration: 800,
      offset: 0,
      easing: "easeInOutQuint"
    }
  }),
  computed: {
    ids() {
      let data = this.$store.getters.getNavData(this.$route.name);
      return  data ? data.ids : null;
    },
    titles() {
     let data = this.$store.getters.getNavData(this.$route.name);
      return data ? data.titles : null;
    },
    icons() {
     let data = this.$store.getters.getNavData(this.$route.name);
      return data ? data.icons : null;
    },
    isDark() {
      return this.$store.state.isDark;
    }
  },
  methods: {
    scroll(target, index) {
      // eslint-disable-next-line
      console.log(this, index);
      this.$vuetify.goTo(target, this.options);
    }
  }
};
</script>

<style scoped>
.control-nav {
  position: fixed;
  top: 70%;
  transform: translate(-50%, -50%);
  background: transparent;
  right: 0%;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.ft-16 {
    font-size: 16px;
}
</style>