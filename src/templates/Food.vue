<template>
<div>
    <div id="banner1" class="banner">
      <div id="content">
          <h1>{{customData.title}}</h1>
          <p>{{customData.description}}</p>
          <p style="color: red">{{errorText}}</p>
          <div id="button1" class="button">Learn More</div>
          <div class="arrow-container"><div class="arrow arrow1"></div><div class="arrow arrow2"></div></div>
      </div>
      <div id="content-card">
        <div id="cell1" class="cell"></div>
        <div id="cell2" class="cell">
          <h1>This is Header 1</h1>
          <div class="divider"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div id="cell3" class="cell">
          <h1>This is Header 2</h1>
          <div class="divider"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div id="cell4" class="cell"></div>
        <div id="cell5" class="cell">
          <h1>Keep in contact</h1>
          <div id="input-stuff">
            <input type="text" placeholder="Email" id="emailInput" name="email" v-model="theEmail" />
            <div @click="validEmail && saveEmail(theEmail)" id="submitButton" :class="buttonClass">{{customData.buttonText}}</div>
          </div>
        </div>
        <!--div id="cell6" class="cell" /-->
      </div>
      <div id="social-media">
           <a :href="`https://facebook.com/${customData.facebookUrl}`" v-if="customData.facebookEnabled"><div id="facebook" class="soc-link"></div></a>
           <a :href="`https://twitter.com/${customData.twitterUrl}`" v-if="customData.twitterEnabled"><div id="twitter" class="soc-link"></div></a>
           <a :href="`https://instagram.com/${customData.instagramUrl}`" v-if="customData.instagramEnabled"><div id="instagram" class="soc-link"></div></a>
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
    name: "food-theme",
    mixins: [validationMixin, themeMixin],
    computed: {
        validEmail() {
            return this.emailRules[0](this.theEmail) === true;
        },
        buttonClass() {
            return this.validEmail ? "enabled" : "disabled";
        }
    },
    dataContract: {
        title: {
            type: String,
            name: "Title",
            default: "Tasty Title"
        },
        description: {
            type: String,
            name: "Description",
            default: "This is a description / subtitle"
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
@import url('https://fonts.googleapis.com/css?family=Merienda');

$ColorOrange: #cd8768;
$ColorGreen: #648764;
$ColorRed: #94544f;

#content {
    position: absolute;
    display: block;
    //background-color: black;
    margin: auto;
    width: 620px;
    left: 0;
    right: 0;
    bottom: 300px;
    top: 0;
    height: 200px;
    color: white;
    text-align: center;
    font-family: 'Merienda', cursive, Times, serif;

    h1 {
        font-size: 90px;
        margin: 0px 0px 50px 0px;
    }

    p {
        font-size: 15px;
        margin: -20px 0px 60px 0px;
    }
}

.banner {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
}

#banner1 {
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/food/food.jpg");
  height: 1670px;
}

.arrow-container {
  position: absolute;
  //background-color: black;
  width:  130px;
  height: 100px;
  margin: auto;
  top: 340px;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  //z-index: -1;
}

.arrow {
  opacity: 0;
  position: relative;
  left: 42%;
  top: 75%;
  transition: visibility 500ms linear;
}

.arrow1 {
  animation: arrow-movement 2s ease-in-out infinite;
}
.arrow2 {
  animation: arrow-movement 2s 1s ease-in-out infinite;
}

.arrow:before,
.arrow:after {
  background: #FFFFFF;
  content: '';
  display: block;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
}

.arrow:before {
  transform: rotate(45deg) translateX(-23%);
  transform-origin: top left;
}

.arrow:after {
  transform: rotate(-45deg) translateX(23%);
  transform-origin: top right;
}

// Animation
@keyframes arrow-movement {
  0% {
    opacity: 0;
    top: 45%;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#content-card {
  display: grid;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  width: 800px;
  //height: 1200px;
  margin: 700px auto 0px auto;
  //border-radius: 10px;
  //filter: blur(15px);
  grid-template-columns: 1fr 1fr;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
}

.button {
  background-color: #cd8768;
  height: 50px;
  width: 150px;
  line-height: 50px;
  border-radius: 50px;
  margin: 0px auto 0px auto;
  box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.15);
  transition: 200ms;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
}

.cell {
  height: 300px;
  //border: black solid 2px;
  padding: 35px;

  h1 {
    //color: #BDBDBD;
    font-family: 'Merienda', cursive;
    font-size: 35px;
    color: $ColorGreen;
    opacity: 0.8;
  }

  p {
    color: #757575;
  }
}

#cell1 {
  background-color: $ColorGreen;
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/food/noms.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#cell2 {
  background-color: white;
}

#cell3 {
  background-color: white;
}

#cell4 {
  background-color: $ColorGreen;
  background-image: url("http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/food/bowl.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#cell5 {
  background-color: $ColorGreen;
  grid-column: span 2;
  text-align: center;
  padding: 70px 0px 0px 0px;

  h1 {
    font-size: 35px;
    color: white;
    font-weight: lighter;
    font-family: 'Merienda', cursive;
  }
}

.divider {
  background-color: $ColorGreen;
  height: 2px;
  width: 130px;
  margin: 10px 0px 20px 0px;
  opacity: 0.5;
}

#emailInput {
    //margin-top: 20px;
    padding: 10px 15px 10px 25px;
    border-radius: 8px 0px 0px 8px;
    border: none;
    opacity: 1;
    background-color: white;
    color: #111;
    width: 250px;
    height: 40px;
    margin: 0px 0px 30px auto;
}

#input-stuff {
    //position: absolute;
    display: inline-flex;
    //background-color: red;
    margin: 30px auto 0px auto;
    width: 100%;
    left: 0;
    right: 0;
}

#social-media {
    position: absolute;
    //background-color: black;
    height: 30px;
    width: 160px;
    margin: auto;
    left: 550px;
    bottom: -700px;

    .soc-link {
        filter: invert(1);
        background-position: center;
        background-size: cover;
        display: inline-flex;
        //background-color: red;
        width: 28px;
        height: 28px;
        margin: 0px auto 0px auto;
        transition: 200ms;

        &:hover {
            cursor: pointer;
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

#submitButton {
    background-color: $ColorOrange;
    height: 40px;
    line-height: 40px;
    border-radius: 0px 8px 8px 0px;
    transition: 500ms;
    padding: 0px 30px 0px 25px;
    margin: 0px auto 0px 0px;
    color: white;
}

.disabled {
    filter: contrast(0.6);
    background-color: $ColorOrange;

    &:hover {
        cursor: not-allowed !important;
    }
}

.enabled {
    &:hover {
        //opacity: 0.6;
        cursor: pointer;
        background-color: $ColorOrange !important;
        filter: brightness(0.7);
    }
}
</style>
