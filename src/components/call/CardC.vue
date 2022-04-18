<template>
  <v-card
    elevation="4"
    style="background-color: #1e1e1e; border-radius: 8px"
    color="dark"
  >
    <ChamaImg />
    <h3 style="color: #bdbdbd; margin-top: 8px">HAACHAMA</h3>
    <h3 style="color: #bdbdbd">着信中...</h3>
    <v-col style="margin-top: 16px">
      <v-btn fab style="margin-right: 8px; background-color: #ff1744">
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
}
</script>
