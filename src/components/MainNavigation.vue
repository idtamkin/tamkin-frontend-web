<template>
    <v-navigation-drawer
      app
      clipped
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="{path: item.path}"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'main-navigation',
  data () {
    return {
      items: [
        {
          icon: 'bubble_chart',
          title: 'Dashboard',
          path: '/dashboard'
        },
        {
          icon: 'info',
          title: 'About',
          path: '/about'
        }
      ]
    }
  }
}
</script>
