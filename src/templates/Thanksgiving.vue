<template>
<div>
    <div id="banner">
      <div id="banner-content" class="contact">
          <h1 v-bind:class="{titleActive: titleTriggered}">{{customData.title}}</h1>
          <p>{{customData.description}}</p>
          <p style="color: red">{{errorText}}</p>
          <!--h2>Keep in contact</h2-->
          <div id="input-stuff">
            <input type="text" placeholder="Email" id="emailInput" name="email" v-model="theEmail" />
            <div @click="validEmail && saveEmail(theEmail)" id="submitButton" :class="buttonClass">{{customData.buttonText}}</div>
          </div>
          <div id="social-media">
               <a :href="`https://facebook.com/${customData.facebookUrl}`" v-if="customData.facebookEnabled"><div id="facebook" class="soc-link"></div></a>
               <a :href="`https://twitter.com/${customData.twitterUrl}`" v-if="customData.twitterEnabled"><div id="twitter" class="soc-link"></div></a>
               <a :href="`https://instagram.com/${customData.instagramUrl}`" v-if="customData.instagramEnabled"><div id="instagram" class="soc-link"></div></a>
          </div>
      </div>
      <div class="arrow-container"><div class="arrow arrow1"></div><div class="arrow arrow2"></div></div>
      <div id="main-container">
        <div id="cell1" class="cell img-cell"></div>
        <div id="cell2" class="cell">
          <h2>This is Header 1</h2>
          <div class="divider"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div id="cell4" class="cell img-cell"></div>
        <div id="cell3" class="cell">
          <h2>This is Header 3</h2>
          <div class="divider"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div id="cell5" class="cell img-cell"></div>
        <div id="cell6" class="cell">
          <h2>This is Header 4</h2>
          <div class="divider"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div id="button1" class="button">Learn More</div>
        <!--div id="cell6" class="cell">
          <h2>This is Header 4</h2>
          <div class="divider"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div-->
        <!--div id="cell7" class="cell">7</div-->
      </div>
    </div>
</div>
</template>
<script>

import themeMixin from '../mixins/themeMixin'
import validationMixin from '../mixins/validationMixin'

export default {
    name: "thanksgiving-theme",
    mixins: [validationMixin, themeMixin],
    computed: {
      validEmail() {
        return this.emailRules[0](this.theEmail) === true;
      },
      buttonClass() {
        return this.validEmail ? "enabled" : "disabled";
      }
    },
    data() {
      return {
        titleTriggered: false
      }
    },
    methods: {
      handleScroll() {
        if(window.scrollY > 200) {
          this.titleTriggered = true;
        }
        else {
          this.titleTriggered = false;
        }

        console.log(this.titleTriggered);
    },
    autoScroll() {
      window.scrollY = 500;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  dataContract: {
      title: {
        type: String,
        name: "Title",
        default: "Give Thanks"
      },
      description: {
        type: String,
        name: "Description",
        default: "This is a generalized modular template using SCSS variables and mixins in order to customize and modify the same template many times while still making it unique and fresh."
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
$BodyWidth: 1500px;
$BorderRadius: 50px;
$BoxShadow: 0px 6px 10px 0px rgba(0,0,0,0.15);
$FontSizeHeader1: 75px;
$FontSizeHeader2: 35px;
$FontSizeSubtitle: 15px;
$ImageFilter: brightness(0.8) contrast(0.5);

//colors
$ColorPrimary: #d18a19;
$ColorSecondary: #8A8A8F;
$ColorText: #757575;
$ColorWhite: #FFFFFF;
$ColorBlack: #000000;

//images
$ImageBanner: "http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/thanksgiving/banner.jpg";
$Image1: "http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/thanksgiving/squash.jpg";
$Image2: "http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/thanksgiving/pumpkins.jpg";
$Image3: "http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/thanksgiving/leaves.jpg";
$Image4: "";
$Image5: "";
$Image6: "";

@include animated-arrow(0px, 300px);

#banner {
  background-image: url($ImageBanner);
  //height: 200vh
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
    top: -460px;
    height: 150px;
    color: $ColorWhite;
    text-align: center;
    z-index: 1;

    h1 {
      font-size: 80px;
      margin: 0px 0px 40px 0px;
      transition: 600ms;
      font-family: $FontTitle;
    }

    p {
      font-size: 15px;
      margin: 0px auto 0px auto;
      width: 500px;
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
  padding: 85vh 0px 200px 0px;
  //box-shadow: $BoxShadow;
  font-family: $FontPrimary;
  font-weight: lighter;

  .img-cell {
    background-color: $ColorPrimary;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: $ImageFilter;
  }

  .cell {
    //height: 300px;
    padding: 50px 70px 40px 50px;
    background-color: $ColorWhite;

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
  border-radius: 0px 0px 0px 0px;
  grid-column: span 1;
}

#cell3 {
  line-height: 24px;
  grid-column: span 1;
  border-radius: 0px 0px 0px $BorderRadius;
}

#cell4 {
  background-image: url($Image2);
  border-radius: 0px $BorderRadius 0px 0px;
  grid-column: span 1;
  //height: 270px;
}

#cell5 {
  background-image: url($Image3);
  border-radius: 0px 0px 0px 0px;
  grid-column: span 1;
}

#cell6 {
  line-height: 24px;
  grid-column: span 1;
  border-radius: 0px 0px $BorderRadius 0px;
  //background-color: black !important;
}

#cell7 {
  background-color: $ColorSecondary;
  grid-column: span 3;
  border-radius: 0px 0px $BorderRadius $BorderRadius;
  //background-color: black !important;
}

.divider {
  background-color: $ColorPrimary;
  height: 1px;
  width: 130px;
  margin: 23px 0px 20px 0px;
  //opacity: 0.6;
}

.contact {
  text-align: center;
  //background-color: $ColorSecondary;
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

.button {
  position: absolute;
  background-color: $ColorPrimary;
  height: 50px;
  width: 180px;
  top: 1350px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  line-height: 50px;
  border-radius: $BorderRadius;
  box-shadow: $BoxShadow;
  transition: 500ms;
  text-align: center;
  color: $ColorWhite;

  &:hover {
    //opacity: 0.5;
    cursor: pointer;
    border-radius: 5px;
    opacity: 0.8;
  }
}
</style>
