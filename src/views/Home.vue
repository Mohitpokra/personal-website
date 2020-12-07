<template>
  <v-flex>
    <Parallax id="introduction" />
    <Experience id="experience" />

    <v-container fluid id="skills">
      <v-layout row wrap>
        <v-flex class="xs-12">
            <h1 class="text-xs-center mb-4">Skills</h1>
           <div class="d-flex text-xs-center">
          <v-card class="elevation-0" color="transparent">
            <v-card-text>
              <h4>
                <strong class="subheading text-uppercase">Frontend</strong>
              </h4>
              <v-chip outline color="primary">Vue.js</v-chip>
              <v-chip outline color="primary">React.js</v-chip>
              <v-chip outline color="primary">Bootstrap</v-chip>
              <v-chip outline color="primary">Vuetify</v-chip>
              <v-chip outline color="primary">Vue-Bootstrap</v-chip>
            </v-card-text>
            <v-card-text>
              <h4>
                <strong class="subheading text-uppercase">Backend</strong>
              </h4>
              <v-chip outline color="primary">Node.js</v-chip>
              <v-chip outline color="primary">Express.js</v-chip>
              <v-chip outline color="primary">Laravel</v-chip>
            </v-card-text>
            <v-card-text>
              <h4>
                <strong class="subheading text-uppercase">Databases</strong>
              </h4>
              <v-chip outline color="primary">Mysql</v-chip>
              <v-chip outline color="primary">Mogodb</v-chip>
            </v-card-text>
          </v-card>
           </div>
        </v-flex>
      </v-layout>
    </v-container>

    <Project id="projects" />
  </v-flex>
</template>

<script>
import Parallax from "../components/home/parallax";
import Experience from "../components/home/experience";
import Project from "../components/home/project";
export default {
  components: {
    Parallax,
    Experience,
    Project
  },
  data: () => ({})
};
</script>
