<template>
  <v-app dark>
    <v-main>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-main>
    <footer>
      <v-col v-if="!$vuetify.breakpoint.xs" style="text-align: right">
        <span style="color: #bdbdbd"
          >created by
          <a
            href="https://twitter.com/destino591211"
            target="_blank"
            style="color: #bdbdbd"
            class="mr-4"
            >@destino591211</a
          ></span
        >
      </v-col>
      <v-col v-if="$vuetify.breakpoint.xs" style="text-align: center">
        <span style="color: #bdbdbd"
          >created by
          <a
            href="https://twitter.com/destino591211"
            target="_blank"
            style="color: #bdbdbd"
            >@destino591211</a
          ></span
        >
      </v-col>
    </footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
