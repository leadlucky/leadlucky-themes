<template>
<v-app>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list>
            <v-list-tile @click="$router.history.push(`/${themeId}`)" v-for="themeId in Object.keys(themes)" :key="`${themeId}-link`">
                <v-list-tile-content>
                    <v-list-tile-title>{{themes[themeId].name}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
   </v-layout>
</v-app>
</template>
<script>
import themes from './themes'

export default {
    name: 'theme-list',
    computed: {
        themes: () => themes
    }
}
</script>