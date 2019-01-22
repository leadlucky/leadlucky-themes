<template>
  <div>
    <div id="banner">
      <div id="banner-content">
        <h1>{{customData.title}}</h1>
        <p>{{customData.description}}</p>
        <div id="button1" class="button" @click="scrollToElement('cell7')">Learn More</div>
      </div>
      <div class="arrow-container">
        <div class="arrow arrow1"></div>
        <div class="arrow arrow2"></div>
      </div>
      <div id="main-container">
        <div id="cell2" class="cell">
          <h2>{{customData.header1}}</h2>
          <div class="divider"></div>
          <p>{{customData.paragraph1}}</p>
        </div>
        <div id="cell3" class="cell">
          <h2>{{customData.header2}}</h2>
          <div class="divider"></div>
          <p>{{customData.paragraph2}}</p>
        </div>
        <div id="cell6" class="cell">
          <h2>{{customData.header3}}</h2>
          <div class="divider"></div>
          <p>{{customData.paragraph3}}</p>
        </div>
        <div id="cell1" class="cell img-cell"></div>
        <div id="cell4" class="cell img-cell"></div>
        <div id="cell5" class="cell img-cell"></div>
        <div id="cell7" class="contact">
          <h2>Keep in contact</h2>
          <div id="input-stuff">
            <input type="text" placeholder="Email" id="emailInput" name="email" v-model="theEmail"/>
            <div @click="validEmail && saveEmail(theEmail)" id="submitButton" :class="buttonClass">
              {{customData.buttonText}}
            </div>
          </div>
          <p style="color: red">{{errorText}}</p>
          <div id="social-media">
            <a :href="`https://facebook.com/${customData.facebookUrl}`" v-if="customData.facebookEnabled">
              <div id="facebook" class="soc-link"></div>
            </a>
            <a :href="`https://twitter.com/${customData.twitterUrl}`" v-if="customData.twitterEnabled">
              <div id="twitter" class="soc-link"></div>
            </a>
            <a :href="`https://instagram.com/${customData.instagramUrl}`" v-if="customData.instagramEnabled">
              <div id="instagram" class="soc-link"></div>
            </a>
          </div>
        </div>

        <!--div id="cell6" class="cell" /-->
      </div>
    </div>
    <!--div id="banner3" class="banner">
    </div-->
  </div>
</template>
<script>

  import themeMixin from '../mixins/themeMixin'
  import validationMixin from '../mixins/validationMixin'

  export default {
    name: "chicago-theme",
    mixins: [validationMixin, themeMixin],
    computed: {
      validEmail() {
        return this.emailRules && this.emailRules[0](this.theEmail) === true;
      },
      buttonClass() {
        return this.validEmail ? "enabled" : "disabled";
      }
    },
    dataContract: {
      title: {
        type: String,
        name: "Title",
        default: "Welcome to Chicago"
      },
      description: {
        type: String,
        name: "Description",
        default: "This is a generalized modular template using SCSS variables and mixins in order to customize and modify the same template many times while still making it unique and fresh."
      },
      header1: {
        type: String,
        name: "Header 1",
        default: "This is Header 1"
      },
      paragraph1: {
        type: String,
        name: "Paragraph 1",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      header2: {
        type: String,
        name: "Header 2",
        default: "This is Header 2"
      },
      paragraph2: {
        type: String,
        name: "Paragraph 2",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      header3: {
        type: String,
        name: "Header 3",
        default: "This is Header 3"
      },
      paragraph3: {
        type: String,
        name: "Paragraph 3",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      buttonText: {
        type: String,
        name: "Button Text",
        default: "Submit"
      },
      facebookEnabled: {
        type: Boolean,
        name: "Facebook Enabled",
        default: true
      },
      facebookUrl: {
        type: String,
        name: "Facebook URL",
        default: "#",
        prefix: 'https://facebook.com/',
        dependsOn: "facebookEnabled"
      },
      twitterEnabled: {
        type: Boolean,
        name: "Twitter Enabled",
        default: true
      },
      twitterUrl: {
        type: String,
        name: "Twitter URL",
        default: "#",
        prefix: 'https://twitter.com/',
        dependsOn: "twitterUrl"
      },
      instagramEnabled: {
        type: Boolean,
        name: "Instagram Enabled",
        default: true
      },
      instagramUrl: {
        type: String,
        name: "Instagram URL",
        default: "#",
        prefix: 'https://instagram.com/',
        dependsOn: "instagramEnabled"
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import '../style-mixins/_global.scss';

  //fonts
  $FontTitle: $FontFancy;
  $FontPrimary: $FontSimple;

  //dimensions
  $GridColumns: 3;

  //styles
  $BodyWidth: 100%;
  $BorderRadius: 0px;
  $BoxShadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
  $FontSizeHeader1: 75px;
  $FontSizeHeader2: 35px;
  $FontSizeSubtitle: 15px;
  $ImageFilter: brightness(0.6) contrast(0.4);

  //colors
  $ColorPrimary: #4e90ac;
  $ColorSecondary: #3b484e;
  $ColorText: #757575;
  $ColorWhite: #FFFFFF;
  $ColorBlack: #000000;

  //images
  $ImageBanner: "http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/chicago/chicago-skyline2.jpg";
  $Image1: "http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/chicago/chicago-bean.jpg";
  $Image2: "http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/chicago/chicago-sculpture.jpg";
  $Image3: "http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/chicago/chicago-theatre.jpg";
  $Image4: "";
  $Image5: "";
  $Image6: "";

  @include animated-arrow(0px, 370px);

  #banner {
    background-image: url($ImageBanner);
    //height: 200vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: $FontPrimary;

    #banner-content {
      position: absolute;
      display: block;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 0;
      top: -230px;
      height: 150px;
      color: $ColorWhite;
      text-align: center;
      z-index: 1;

      h1 {
        font-size: 100px;
        margin: 0px 0px 40px 0px;
        transition: 600ms;
        font-family: $FontTitle;
        font-weight: lighter;
      }

      p {
        font-size: 15px;
        margin: 0px auto 0px auto;
        width: 500px;
      }

      .button {
        position: absolute;
        background-color: $ColorPrimary;
        height: 50px;
        width: 180px;
        top: 280px;
        left: 0;
        right: 0;
        margin: auto;
        line-height: 50px;
        border-radius: $BorderRadius;
        box-shadow: $BoxShadow;
        transition: 400ms;

        &:hover {
          //opacity: 0.5;
          cursor: pointer;
          width: 195px;
          height: 65px;
          line-height: 65px;
          top: 273px;
          border-radius: $BorderRadius + 5px;
          opacity: 0.8;
        }
      }
    }
  }

  #main-container {
    position: relative;
    display: grid;
    grid-template-columns: repeat($GridColumns, 1fr);
    left: 0;
    right: 0;
    width: $BodyWidth;
    margin: 0px auto 0px auto;
    padding: 100vh 0px 0px 0px;
    font-family: $FontPrimary;
    font-weight: lighter;

    .img-cell {
      background-color: $ColorPrimary;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 500px;
    }

    .cell {
      //height: 300px;
      padding: 50px 70px 40px 50px;
      background-color: $ColorWhite;
      text-align: center;

      h2 {
        font-family: $FontSimple;
        font-size: $FontSizeHeader2;
        color: $ColorPrimary;
        font-weight: lighter;
      }

      p {
        color: $ColorText;
        font-family: $FontSimple
      }
    }
  }

  #cell1 {
    background-image: url($Image1);
    border-radius: $BorderRadius 0px 0px 0px;
    grid-column: span 1;
  }

  #cell2 {
    line-height: 24px;
    border-radius: 0px $BorderRadius 0px 0px;
    grid-column: span 1;
    padding-left: 250px !important;
    padding-right: 0px !important;
  }

  #cell3 {
    line-height: 24px;
    grid-column: span 1;
    padding-right: 100px !important;
    padding-left: 100px !important;
  }

  #cell4 {
    background-color: $ColorPrimary;
    background-image: url($Image2);
    background-repeat: no-repeat;
    background-position: center;
    grid-column: span 1;
  }

  #cell5 {
    background-color: $ColorPrimary;
    background-image: url($Image3);
    background-repeat: no-repeat;
    background-position: 0px -120px !important;
    background-size: cover;
    grid-column: span 1;
  }

  #cell6 {
    line-height: 24px;
    grid-column: span 1;
    padding-right: 210px !important;
  }

  #cell7 {
    background-color: $ColorSecondary;
    grid-column: span 3;
    border-radius: 0px 0px $BorderRadius $BorderRadius;
  }

  .divider {
    background-color: $ColorPrimary;
    height: 1px;
    width: 130px;
    margin: 23px auto 20px auto;
    //opacity: 0.6;
  }

  .contact {
    text-align: center;
    background-color: $ColorSecondary;
    padding: 50px 0px 50px 0px;

    h2 {
      font-family: $FontPrimary;
      font-size: $FontSizeHeader2;
      color: $ColorWhite;
      opacity: 0.5;
      font-weight: lighter;
    }

    #input-stuff {
      display: inline-flex;
      margin: 30px auto 0px auto;
      width: 100%;
      left: 0;
      right: 0;
      font-family: $FontPrimary;

      #emailInput {
        padding: 10px 25px 10px 25px;
        border-radius: $BorderRadius 0px 0px $BorderRadius;
        border: none;
        opacity: 1;
        background-color: $ColorWhite;
        color: #111;
        width: 250px;
        height: 50px;
        margin: 0px 0px 30px auto;
      }

      #submitButton {
        background-color: $ColorPrimary;
        height: 50px;
        line-height: 50px;
        border-radius: 0px $BorderRadius $BorderRadius 0px;
        transition: 500ms;
        padding: 0px 30px 0px 30px;
        margin: 0px auto 0px 0px;
        color: $ColorWhite;
      }

      .disabled {
        background-color: $ColorPrimary;
        opacity: 0.5;

        &:hover {
          cursor: not-allowed !important;
        }
      }

      .enabled {
        &:hover {
          cursor: pointer;
          background-color: $ColorPrimary !important;
          filter: brightness(1.4);
        }
      }
    }
  }

  #social-media {
    height: 30px;
    width: 160px;
    margin: auto;

    &:hover {
      cursor: pointer;
    }

    .soc-link {
      filter: invert(1);
      background-position: center;
      background-size: cover;
      display: inline-flex;
      width: 20px;
      height: 20px;
      margin: 0px auto 0px auto;
      transition: 200ms;

      &:hover {
        opacity: 0.3;
      }
    }

    #facebook {
      margin: 0px 10px 0px 10px;
      background-image: url("https://image.flaticon.com/icons/svg/37/37564.svg");
    }

    #twitter {
      margin: 0px 10px 0px 10px;
      background-image: url("https://png.icons8.com/metro/1600/twitter.png");
    }

    #instagram {
      margin: 0px 10px 0px 10px;
      background-image: url("https://png.icons8.com/ios/1600/instagram-filled.png");
    }
  }
</style>
