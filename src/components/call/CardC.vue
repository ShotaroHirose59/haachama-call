<template>
  <v-card
    elevation="4"
    style="background-color: #1e1e1e; border-radius: 8px"
    color="dark"
  >
    <ChamaImg />
    <h3 style="color: #bdbdbd; margin-top: 8px">泣いても逃げても</h3>
    <h3 style="color: #bdbdbd">むーだむだ</h3>
    <v-col style="margin-top: 16px">
      <v-btn
        fab
        style="margin-right: 8px; background-color: #ff1744"
        @click="stopC()"
      >
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
      <v-btn fab style="margin-left: 8px; background-color: #00bfa5">
        <v-icon color="white">mdi-phone-in-talk</v-icon>
      </v-btn>
    </v-col>
  </v-card>
</template>

<script>
import ChamaImg from '@/components/call/ChamaImg'

export default {
  components: {
    ChamaImg,
  },
  methods: {
    stopC() {
      this.$emit('stop-c')
    },
  },
}
</script>
