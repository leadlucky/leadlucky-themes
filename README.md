# Leadlucky - Themes


### Adding a Theme

#### 1. Create a Vue component in `src/templates/`

The following is a template for creating a theme.

A theme must have all of the following: 

- themeMixin
- dataContract
- input that binds `theEmail` as it's v-model
- button that calls `saveEmail(theEmail)` when it's clicked

```vue
<template>
  <div>
    <h3>{{customData.title}}</h3>
    <input v-model="theEmail"/>
    <button @click="saveEmail(theEmail)">submit</button>
  </div>
</template>
<script>
  import themeMixin from "../mixins/themeMixin";
  
  export default: {
    name: 'sample-theme',
    mixins: [themeMixin],
    dataContract: {
      title: {
        type: String,
        name: 'Title',
        default: "Enter Your Email"
      }
    }
  }
</script>
```

#### 2. Register the theme

Edit `src/themes.js`, and add your theme along with a friendly name, description, and screenshot to allow it to be used. 
The name of the property will also the the theme's route. 
```
export default {
  ..., // other themes here
  'sample': {
    component: SampleTheme,
    imageUrl: '/static/sample_screenshot.png',
    name: 'Sample Theme',
    description: 'This is a sample, to show how to add additional themes. '
  }
}
```
