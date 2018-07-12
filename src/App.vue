<template>
  <v-app>
    <main-navigation/>
    <v-toolbar
      app :clipped-left="true"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>eject</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
  name: 'App',
  components: {
    'main-navigation' : MainNavigation
  },
  data () {
    return {
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
