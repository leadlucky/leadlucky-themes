<template>
    <v-app light id="app" class="theme--light">
      <v-toolbar class="white">
        <v-toolbar-title >{{customData.logo}}</v-toolbar-title>
      </v-toolbar>
        <section>
          <v-parallax src="/static/hero.jpeg" height="600">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <h1 class="white--text scale-font" style="font-family: 'Lucida Bright',Georgia,serif;">{{customData.title}}</h1>
              <!--<h1 class="white&#45;&#45;text mb-2 display-1 text-xs-center">Parallax Template</h1>-->
              <div class="mb-2 text-xs-center" style="font-size: 2vw">{{customData.description}}
                <v-form v-model="valid">
                <v-text-field solo placeholder="example@mysite.com" class="theme--light" v-model="theEmail" :rules="emailRules"></v-text-field>
                  <p class="text-xs-left" v-text="errorText" style="color: red"></p>

                <v-btn
                  class="blue lighten-2 mt-5"
                  dark
                  large
                  @click.stop="saveEmail(theEmail)">
                  {{customData.buttontext}}
                </v-btn>
                </v-form>
              </div>

            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">{{customData.headline}}</h2>
                <span class="subheading">
                  {{customData.subheading}}
                </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">{{customData.feature1}}</div>
                      </v-card-title>
                      <v-card-text >
                        {{customData.feature1text}}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">{{customData.feature2}}</div>
                      </v-card-title>
                      <v-card-text >
                        {{customData.feature2text}}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">{{customData.feature3}}</div>
                      </v-card-title>
                      <v-card-text >
                        {{customData.feature3text}}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

        <section>
          <v-parallax src="/static/section.jpg" height="380">
            <v-layout column align-center justify-center>
              <div class="headline white--text mb-3 text-xs-center">{{customData.bottomHeadline}}</div>
              <em >{{customData.bottomSubheading}}</em>

              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                @click="scrollup"
              >
                {{customData.bottomButton}}
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>
        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                Powered
                by <a class="white--text" href="#">LeadLucky</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
    </v-app>
</template>

<script>
  import axios from 'axios'
  import themeMixin from '../mixins/themeMixin'
  import validationMixin from '../mixins/validationMixin'

  export default {
    name: 'PagePara',
    mixins: [themeMixin, validationMixin],
    methods: {
      scrollup(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    },
    dataContract: {
      logo: {
          name:'Logo Text',
          type: String,
          default: 'Logo Text'
      },
      title: {
          name:'Title',
          type: String,
          default: 'Your Main Headline'
      },
      description: {
          name:'Description',
          type: String,
          default: 'Convincing SubHeading Here'
      },
      headline: {
          name:'Headline',
          type: String,
          default: 'More information about your product.'
      },
      subheading: {
          name:'Subheading',
          type: String,
          default: 'Remember to post important features'
      },
      buttontext: {
          name:'Button Text',
          type: String,
          default: 'GET STARTED'
      },
      feature1: {
          name:'Feature 1 Title',
          type: String,
          default: 'Material Design'
      },
      feature1text: {
          name:'Feature 1 Text',
          type: String,
          default: 'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.'
      },
      feature2: {
          name:'Feature 2 Title',
          type: String,
          default: 'Fast Development'
      },
      feature2text: {
          name:'Feature 2 Text',
          type: String,
          default: 'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.'
      },
      feature3: {
          name:'Feature 3 Title',
          type: String,
          default: 'Completely Open Sourced'
      },
      feature3text: {
          name:'Feature 3 Text',
          type: String,
          default: 'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.'
      },
      bottomHeadline: {
          name:'Bottom Headline',
          type: String,
          default: 'Web development has never been easier'
      },
      bottomSubheading: {
          name:'Bottom Subheading',
          type: String,
          default: 'Kick-start your application today'
      },
      bottomButton: {
          name:'Bottom Button Text',
          type: String,
          default: 'GET STARTED'
      },
    }
  }
</script>

<style scoped>
  .background {
    background-image: url('/static/beachBack.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .application--wrap{
    min-height: 0vh !important;
  }

  .scale-font{
    font-size: 4vw;
    /*zoom: 0.9;*/
    /*-moz-transform: scale(0.9);*/
  }
</style>
