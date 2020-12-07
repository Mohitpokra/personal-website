<template>
  <div>
    <v-toolbar class="pa-1" fixed app :clipped-left="clipped">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items>
        <v-btn round outline flat to="/" class="display-1 web-name" color="orange">mohit</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-icon class="mx-2" @click="changeBg">fas fa-adjust</v-icon>
        <v-btn flat to="about">About-me</v-btn>
        <v-btn flat to="contact">Contact-me</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer"  fixed
      left
      clipped
      app>
      <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      ></v-img>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile  @click="changeBg">
          <v-list-tile-action>
            <v-icon>fas fa-adjust</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Change theme</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-for="item in items" :key="item.title" @click="goto(item.url)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    clipped: false,
    items: [
      {
        title: "Home",
        icon: "dashboard",
        url: "/"
      },
      {
        title: "About",
        icon: "question_answer",
        url: "/about"
      },
      {
        title: "Contact",
        icon: "far fa-address-book",
        url: "/contact"
      }
    ]
  }),
  methods: {
    goto(url) {
      this.$router.push(url);
    },
    changeBg() {
      this.$store.commit("changeBg");
    }
  }
};
</script>

<style>
.web-name {
  font-family: "Permanent Marker", cursive !important;
  border: 0px !important;
  background: white !important;
}
</style>
