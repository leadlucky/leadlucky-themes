<template>
  <v-app class="background">
    <div class="spring-theme-content">
      <v-container fluid fill-height justify-center>
        <v-layout align-center>
          <v-flex xs6 offset-xs3 class="text-xs-center">
            <h1 class="white--text scale-font">{{ customData.title }}</h1>
            <h2 class="black--text" style="font-size: 2vw">{{ customData.description }}</h2>

            <v-divider class="my-3 white"></v-divider>
            <v-btn large color="primary" @click.stop="dialog2 = true" class="mx-0">
              {{customData.buttontext}}
            </v-btn>

            <v-dialog v-model="dialog2" max-width="500px">
              <v-card>
                <v-card-title>
                  <v-flex xs12>
                    <h3 class="display-2">{{customData.poptitle}}</h3>
                  </v-flex>
                </v-card-title>
                <h4>{{customData.popsub}}</h4>
                <v-form v-model="valid">
                  <v-flex xs12>
                    <v-text-field style="padding: 10px" :rules="emailRules" placeholder="example@mysite.com"
                                  v-model="theEmail"></v-text-field>
                    <p class="text-xs-left" v-text="errorText" style="color: red; padding-left: 10px"></p>
                  </v-flex>

                  <v-card-actions>
                    <v-flex xs6 offset-xs6>
                      <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
                      <v-btn color="primary" flat @click.stop="saveEmail(theEmail)">Submit</v-btn>
                    </v-flex>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
  import validations from '../mixins/validationMixin';
  import themeMixin from "../mixins/themeMixin";
  export default {
    mixins: [validations, themeMixin],
    props: ['propData'],
    data() {
      return {
        dialog2: false,
      }
    },
    created() {
      if (this.$route.params.id) {
        this.fetchData();
      } else {
        this.loadDefaults()
      }
    },
    dataContract: {
      title: {
        type: String,
        name: 'Title',
        default: "Spring is Here"
      },
      description: {
        type: String,
        name: 'Description',
        default: "Sign Up"
      },
      buttontext: {
        type: String,
        name: 'Button Text',
        default: "Sign Up"
      },
      poptitle: {
        type: String,
        name: 'Popup Title',
        default: "Sign Up Now"
      },
      popsub: {
        type: String,
        name: 'Popup Subtitle',
        default: "Get 10% off your next order!"
      }
    }
  }
</script>np

<style scoped>

  .spring-theme-content {
    position: absolute;
    width: 100%;
    margin: auto;
    top: 0;
    bottom: 0;
  }

  .background {
    background-image: url('/static/spring.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }

  .scale-font {
    font-size: 4vh
  }
</style>
