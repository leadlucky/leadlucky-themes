<template>
  <v-app class="background">
      <v-container fluid>
      <v-layout>
          <div class="optin">
            <v-flex xs12>

                <h1 class="white--text scale-font" style="font-family: 'Lucida Bright',Georgia,serif;">{{customData.title }}</h1>
                <h2 style="font-family: 'Lucida Bright',Georgia,serif; font-size: 2vw; color: #a2b1c4">{{customData.description }}</h2>

                <v-divider class="my-3 white"></v-divider>

              <v-form v-model="valid">
            <v-flex xs12 class="text-xs-right">
              <v-text-field solo placeholder="example@mysite.com" class="theme--light" v-model="theEmail" :rules="emailRules"/>
            </v-flex>
                <p class="text-xs-left" v-text="errorText" style="color: red"></p>
                <br/>
            <v-btn large color="primary" @click.stop="saveEmail(theEmail)" class="mx-0">{{customData.buttontext}}</v-btn>
              </v-form>
            </v-flex>
              </div>
            </v-layout>
      </v-container>
  </v-app>
</template>

<script>
  import validationMixin from "../mixins/validationMixin";
  import themeMixin from "../mixins/themeMixin";

  export default {
    name: 'PageBeach',
    mixins: [validationMixin, themeMixin],
    data() {
      return {
        dialog2: false
      }
    },
    dataContract: {
      title: {
        name: "Title",
        type: String,
        default: "Relax."
      },
      description: {
        name: "Description",
        type: String,
        default: "Receive 10% off your Hotel right now.",
      },
      buttontext: {
        name: "Button Text",
        type: String,
        default: "Save Now"
      },
    }
  }
</script>

<style scoped>
  .background {
    background-image: url('/static/beachBack.jpg');
    background-size: cover;
    height: 100%;
    width: 100%;
  }
  .application--wrap{
    min-height: 0vh !important;
  }
  .optin{
    zoom: 0.9;
    -moz-transform: scale(0.9);
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    -o-border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    text-align: center;
    background: rgba(0, 0, 0, 0.75);
  }
  .scale-font{
    font-size: 4vw;
  }
</style>
