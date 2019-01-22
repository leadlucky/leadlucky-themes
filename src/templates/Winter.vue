<template>
<div>
    <div id="backdrop"></div>
    <div id="content">
        <h1>{{customData.title}}</h1>
        <p>{{customData.description}}</p>
        <div id="input-stuff">
            <input type="text" placeholder="Email" id="emailInput" name="email" v-model="theEmail" />
            <div @click="validEmail && saveEmail(theEmail)" id="submitButton" :class="buttonClass">{{customData.buttonText}}</div>
        </div>
        <p style="color: red">{{errorText}}</p>
        <div id="social-media">

             <a :href="`https://facebook.com/${customData.facebookUrl}`" v-if="customData.facebookEnabled"><div id="facebook" class="soc-link"></div></a>
             <a :href="`https://twitter.com/${customData.twitterUrl}`" v-if="customData.twitterEnabled"><div id="twitter" class="soc-link"></div></a>
             <a :href="`https://instagram.com/${customData.instagramUrl}`" v-if="customData.instagramEnabled"><div id="instagram" class="soc-link"></div></a>
        </div>
    </div>
</div>
</template>
<script>

import themeMixin from '../mixins/themeMixin'
import validationMixin from '../mixins/validationMixin'

export default {
    name: "winter-theme",
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
            default: "Wintery Title"
        },
        description: {
            type: String,
            name: "Description",
            default: "This is my description"
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
#backdrop {
    background-image: url('http://studentweb.cdm.depaul.edu/~tbrew/personal-projects/leadlucky-res/adam-chang-231299-unsplash.jpg');
    background-size: cover;
    filter: contrast(40%)
            brightness(60%);
    height: 100vh;
    width: 100vw;
    z-index: -1;
}

#content {
    position: absolute;
    display: block;
    //background-color: black;
    margin: auto;
    width: 620px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 200px;
    color: white;
    text-align: center;
    font-family: Georgia,'Times New Roman', Times, serif;

    h1 {
        font-size: 50px;
        margin: 0px 0px 20px 0px;
    }

    p {
        font-size: 15px;
        margin: 10px 0px 30px 0px;
    }

    #submitButton {
        background-color: #90A4AE;
        height: 40px;
        line-height: 40px;
        border-radius: 0px 10px 10px 0px;
        transition: 500ms;
        padding: 0px 30px 0px 25px;
    }

    .disabled {
        filter: contrast(0.3);
        background-color: #B0BEC5;

        &:hover {
            cursor: not-allowed !important;
        }
    }

    .enabled {
        &:hover {
            //opacity: 0.6;
            cursor: pointer;
            background-color: #607D8B !important
        }
    }

    #emailInput {
        //margin-top: 20px;
        padding: 10px 15px 10px 15px;
        border-radius: 10px 0px 0px 10px;
        border: none;
        opacity: 1;
        background-color: white;
        color: #111;
        width: 250px;
        height: 40px;
    }

    #input-stuff {
        display: inline-flex;
        //background-color: black;
    }

    #social-media {
        //background-color: black;
        height: 30px;
        margin: 30px auto 0px auto;

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
}

</style>
