import themes from '../themes'
import axios from 'axios'

export default {
  created() {
    this.$route.params.id ? this.fetchData() : this.loadDefaults()
  },
  props: {
    propData: {
      type: Object,
      default: () => ({})
    },
    themeName: {
      type: String,
      default: null
    }
  },
  data: () => ({
    customData: {},
    valid: false,
    errorText: '',
    theEmail: ''
  }),
  watch: {
    propData(val){
      this.customData = this.propData
    }
  },
  methods: {
    fetchData() {
      if(this.$route.params.id) {
        axios.get(window.leadlucky.apiUrl + 'public/pageData/' + this.$route.params.id)
          .then((resp) => {
            const myObjStr = JSON.stringify(resp.data);
            this.customData = JSON.parse(myObjStr)
          })
          .catch((err) => {
            console.log(err)
          })
      }else{
        this.demoMode = true
      }
    },
    saveEmail(theEmail){
      const self = this;
      if(this.$route.params.id != null) {
        if(this.valid){
          let data = { email: theEmail }
          axios.post(window.leadlucky.apiUrl +'public/' + this.$route.params.id + '/email', data)
            .then(function(response){
              window.location.href = self.customData.redirectUrl
            }).catch((err) => {
            console.log('Loading page data failed or invalid redirect.')
          });
        }else{
          this.errorText = 'Invalid Email.'
        }
      }else{
        this.errorText = 'You are in preview mode.'
      }
    },
    loadDefaults(){
      const obj = {};

      Object.keys(themes[this.themeName].component.dataContract).forEach((fieldName) => {
        obj[fieldName] = themes[this.themeName].component.dataContract[fieldName].default
      });

      this.customData = obj
    }
  }
}
