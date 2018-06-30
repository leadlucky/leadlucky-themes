<template>
  <v-app>
    <v-container fluid fill-height justify-center>
      <v-layout align-center>
        <!--License: https://github.com/BlackrockDigital/startbootstrap-coming-soon/blob/master/LICENSE-->
          <video autoplay muted loop id="myVideo">
            <source src="/static/bgvid.mp4" type="video/mp4">
          </video>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- Custom fonts for this template -->
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

        <div class="overlay"></div>

        <div class="masthead">
          <div class="masthead-bg">
            <div class="container">
                  <div class="masthead-content white--text" style="position: absolute; top: 35%; left: 10%">
                    <h1 style="font-size: 3vw;white-space: nowrap;" class="mb-3">{{customData.title}}</h1>
                    <p class="mb-5" style="font-size: 1vw;">{{customData.description}}</p>
                    <div class="d-inline-flex">
                      <v-form v-model="valid">
                      <input v-model="theEmail" :rules="emailRules" id="styled-input" class="styled-input black--text theme--light" placeholder="Enter Email...">
                        <v-text-field v-model="theEmail" :rules="emailRules" class="hidden" v-show="false" placeholder=""></v-text-field>
                      </v-form>

                      <v-btn @click.stop="saveEmail(theEmail)" class="white--text" style="background: #cd9557; height: 5vh; width: 6vw; font-size: 1.75vh; margin: 0">
                        <b>{{customData.buttontext}}</b></v-btn>
                    </div>
                    <p class="text-xs-center" v-text="errorText" style="color: red"></p>
                  </div>
                  </div>
                  </div>
                </div>

        <div class="social-icons">
          <ul class="list-unstyled text-center mb-0">
            <v-btn v-if="customData.twitterEnabled" :href="'https://twitter.com/'+customData.twitterUrl" fab dark large color="blue">
              <i class="fab fa-twitter fa-3x"></i>
            </v-btn>
            <br/>
            <v-btn v-if="customData.facebookEnabled" :href="'https://www.facebook.com/'+customData.facebookUrl" fab dark large color="blue darken-4">
              <i class="fab fa-facebook-f fa-3x"></i>
            </v-btn>

            <br/>
            <v-btn v-if="customData.instagramEnabled" :href="'https://www.instagram.com/'+customData.instagramUrl" fab dark large color="deep-purple darken-1">
              <i class="fab fa-instagram fa-3x"></i>
            </v-btn>
          </ul>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

  import validationMixin from "../mixins/validationMixin";
  import themeMixin from "../mixins/themeMixin";

  export default {
    name: 'PageDrawing',
    mixins: [validationMixin, themeMixin],
    dataContract: {
      title: {
        name: 'Title',
        type: String,
        default: 'Coming Soon!'
      },
      description: {
        name: 'Description',
        type: String,
        default: 'We\'re working hard to finish the development of this site. Our target launch date is October 2018! Sign up for updates using the form below!'
      },
      buttontext: {
        name: 'Button Text',
        type: String,
        default: 'NOTIFY ME'
      },
      twitterEnabled: {
        name: 'Twitter',
        type: Boolean,
        default: true
      },
      twitterUrl: {
        name: 'Twitter URL',
        type: String,
        default: 'account',
        prefix: 'https://twitter.com/',
        dependsOn: 'twitterEnabled'
      },
      instagramEnabled: {
        name: 'Instagram',
        type: Boolean,
        default: true
      },
      instagramUrl: {
        name: 'Instagram URL',
        type: String,
        default: 'your.username',
        prefix: 'https://instagram.com/',
        dependsOn: 'instagramEnabled'
      },
      facebookEnabled: {
        name: "Facebook",
        type: Boolean,
        default: true
      },
      facebookUrl: {
        name: 'Facebook URL',
        type: String,
        default: 'your.name',
        prefix: 'https://facebook.com/',
        dependsOn: 'facebookEnabled'
      }
    }
  }
</script>


<style scoped>

  #myVideo {
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    z-index: 0; top: 100%; left: 50%; transform: translate(-50%, -50%);
    object-fit: fill;
  }

  .styled-input{
    height: 5vh;
    width: 15vw;
    font-size: 2vh;
    resize: both;
    min-height: 0;
    background-color: white;
    padding-left: 10px;
  }

  .overlay {
    position: absolute;
    height: 100%;
    min-height: 35rem;
    width: 100%;
    background-color: #cd9557;
    opacity: 0.75;
    z-index: 0;
  }

  @media (min-width: 768px) {
    .overlay {
      min-height: 0;
    }
  }

  .masthead {
    overflow: hidden;
    padding-bottom: 3rem;
    z-index: 1;
  }

  .masthead .masthead-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 35%;
    min-height: 35rem;
    height: 100%;
    background-color: rgba(0, 46, 102, 0.8);
    transform: skewY(4deg);
    transform-origin: bottom right;
  }


  @media (min-width: 768px) {
    .masthead {
      height: 100%;
      min-height: 0;
      width: 40.5rem;
      padding-bottom: 0;
    }
    .masthead .masthead-bg {
      min-height: 0;
      transform: skewX(-8deg);
      transform-origin: top right;
    }
    .masthead .masthead-content {
      padding-left: 3rem;
      padding-right: 10rem;
    }
    .masthead .masthead-content h1 {
      font-size: 3.5rem;
    }
    .masthead .masthead-content p {
      font-size: 1.3rem;
    }
  }

  .social-icons {
    position: absolute;
    margin-bottom: 2rem;
    width: 100%;
  }

  .social-icons ul {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
  }

  .social-icons ul > li {
    margin-left: 1rem;
    margin-right: 1rem;
    display: inline-block;
  }

  .social-icons ul > li > a {
    display: block;
    color: white;
    background-color: rgba(0, 46, 102, 0.8);
    border-radius: 100%;
    font-size: 2rem;
    line-height: 4rem;
    height: 4rem;
    width: 4rem;
  }

  @media (min-width: 768px) {
    .social-icons {
      margin: 0;
      position: absolute;
      right: 2.5rem;
      bottom: 2rem;
      width: auto;
    }
    .social-icons ul {
      margin-top: 0;
      width: auto;
    }
    .social-icons ul > li {
      display: block;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 2rem;
    }
    .social-icons ul > li:last-child {
      margin-bottom: 0;
    }
    .social-icons ul > li > a {
      transition: all 0.2s ease-in-out;
      font-size: 2rem;
      line-height: 4rem;
      height: 4rem;
      width: 4rem;
    }
    .social-icons ul > li > a:hover {
      background-color: #002E66;
    }
  }

  .btn-secondary {
    background-color: #cd9557;
    border-color: #cd9557;
  }

  .btn-secondary:active, .btn-secondary:focus, .btn-secondary:hover {
    background-color: #ba7c37 !important;
    border-color: #ba7c37 !important;
  }

  .input {
    font-weight: 300 !important;
  }
</style>
