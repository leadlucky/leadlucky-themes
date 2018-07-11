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
      const pageId =  this.$route.params.id;
      if(pageId) {
        axios.get(window.leadlucky.apiUrl + 'public/pageData/' + pageId)
          .then((resp) => {
            const myObjStr = JSON.stringify(resp.data);
            this.customData = JSON.parse(myObjStr)

            // Only count it as a real view if we successfully load the custom data
            window.ga('send', {
              'hitType': 'pageview',
              'page': pageId
            });

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
      const pageId =  this.$route.params.id;
      if(pageId) {
          let data = {
            email: theEmail,
            gaClientId: window.ga.getAll()[0].get('clientId')
          }
          axios.post(`${window.leadlucky.apiUrl}public/${pageId}/email`, data)
            .then(function(response){
              window.location.href = self.customData.redirectUrl
            }).catch((err) => {
            console.log('Loading page data failed or invalid redirect.')
          });
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
