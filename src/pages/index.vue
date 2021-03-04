<template>
  <v-row style="text-align: center">
    <template v-if="!call" class="top">
      <v-col cols="12" sm="12" md="12">
        <a href="https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg">
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwniwFyaWXOPJEGqA3afhSvRsiPDb0sYt8TlCMMWIig=s176-c-k-c0x00ffffff-no-rj"
            style="text-align: center; border-radius: 50%; width: 96px"
          />
        </a>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h1 class="font-weight-thin">はあちゃまコール</h1>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <h3>はあちゃまからの着信を体験しよう</h3>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <iframe
          v-if="!$vuetify.breakpoint.xs"
          width="530"
          height="285"
          src="https://www.youtube.com/embed/6H2MBid-CTc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          v-if="$vuetify.breakpoint.xs"
          src="https://www.youtube.com/embed/6H2MBid-CTc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col>
        <v-btn
          style="
            height: 48px;
            min-width: 64px;
            padding: 0 16px;
            margin-top: 8px;
            background-color: #00bfa5;
            border-radius: 16px;
          "
          @click="startCall()"
        >
          <h2 style="font-family: 'Truculenta', sans-serif">Start!!</h2>
        </v-btn>
      </v-col>
    </template>
    <template v-if="call" class="call">
      <v-col cols="6" sm="4" md="2">
        <v-card
          elevation="4"
          style="background-color: #1e1e1e; border-radius: 8px"
          color="dark"
        >
          <ChamaImg />
          <h3 style="color: #bdbdbd; margin-top: 8px">HAACHAMA</h3>
          <h3 style="color: #bdbdbd">着信中...</h3>
          <v-col style="margin-top: 16px">
            <v-btn
              fab
              style="margin-right: 8px; background-color: #ff1744"
              @click="stopX()"
            >
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
            <v-btn
              fab
              style="margin-left: 8px; background-color: #00bfa5"
              @click="startA()"
            >
              <v-icon color="white">mdi-phone-in-talk</v-icon>
            </v-btn>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardA v-if="a" @prepare-b="startB()" @stop-a="stopA()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardB v-if="b" @prepare-c="startC()" @stop-b="stopB()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <CardC v-if="c" @stop-c="stopC()" />
      </v-col>
      <v-col>
        <v-btn
          style="
            height: 48px;
            min-width: 64px;
            padding: 0 16px;
            margin-top: 8px;
            background-color: #00bfa5;
            border-radius: 16px;
          "
          @click="stopAllCall()"
        >
          <h2 style="font-family: 'Truculenta', sans-serif">逃げる</h2>
        </v-btn>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import CardA from '@/components/call/CardA'
import CardB from '@/components/call/CardB'
import CardC from '@/components/call/CardC'
import ChamaImg from '@/components/call/ChamaImg'
import clickSound from '~/assets/sound/call.mp3'
const audioX = new Audio(clickSound)
const audioA = new Audio(clickSound)
const audioB = new Audio(clickSound)
const audioC = new Audio(clickSound)

export default {
  components: {
    CardA,
    CardB,
    CardC,
    ChamaImg,
  },
  data() {
    return {
      call: false,
      a: false,
      b: false,
      c: false,
      backCount: 0,
    }
  },
  // 音声は３つまでにする
  methods: {
    startCall() {
      // １つ目のカードを表示
      this.call = true
      audioX.volume = 1.0
      audioX.loop = true
      audioX.play()
    },
    stopAllCall() {
      // 全ての音声を停止。currentTime = 0により次回再生時は最初から
      this.call = false
      audioX.pause()
      audioX.currentTime = 0
      audioA.pause()
      audioA.currentTime = 0
      this.a = false
      audioB.pause()
      audioB.currentTime = 0
      this.b = false
      audioC.pause()
      audioC.currentTime = 0
      this.c = false
    },
    stopX() {
      audioX.pause()
      audioX.currentTime = 0
    },
    startA() {
      // CardA表示
      this.a = true
      audioA.volume = 1.0
      audioA.loop = true
      audioA.play()
    },
    stopA() {
      audioA.pause()
      audioA.currentTime = 0
    },
    startB() {
      // CardB表示
      this.b = true
      audioB.volume = 1.0
      audioB.loop = true
      audioB.play()
    },
    stopB() {
      audioB.pause()
      audioB.currentTime = 0
    },
    startC() {
      // CardC表示
      this.c = true
      audioC.volume = 1.0
      audioC.loop = true
      audioC.play()
    },
    stopC() {
      audioC.pause()
      audioC.currentTime = 0
    },
  },
}
</script>

<style scoped></style>
