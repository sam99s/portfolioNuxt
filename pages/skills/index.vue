<template>
  <v-container>
    <h2>Skills & tools</h2>
    <v-row>
      <v-col cols="12">
        <p>
          This is the section dedicated to the technical. In it you will find
          detailed information about my work tools. Among them you can see how
          long they have been incorporated and you will have the possibility to
          access my learning routes, estimated time and the certificates
          obtained.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <SplitCarousel :interval="2000" :showArrows="false" class="my-5">
          <SplitCarouselItem v-for="item in items" :key="item.key">
            <img :src="item.picture" alt="tool" />
          </SplitCarouselItem>
        </SplitCarousel>
        <p>
          Without a doubt, all developers have more facilities for a specific
          field, in relation to their peers. Currently, that area I feel is from
          the Front End side, specifically with JavaScript Vanilla and VUE JS.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="py-0">
        <v-container class="d-flex justify-content-between">
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/sam99s2021.png" height="70%" contain></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="pl-0">
              <ul>
                <li class="my-3">
                  My greatest strength: <br />
                  <v-icon color="#efd81d">{{
                    "mdi-language-javascript"
                  }}</v-icon>
                  JavaScript
                </li>
                <li class="my-3">
                  My current approach: <br />
                  <v-icon color="#9638ad">{{ "mdi-language-csharp" }}</v-icon>
                  .NET
                </li>
                <li class="my-3">
                  My tool lost in the time: <br />
                  <v-icon color="#366996">{{ "mdi-language-python" }}</v-icon>
                  Python
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="py-0 text-center">
        <p>
          In fact, this site is made with <span class="text-color__primary">NUXT JS</span>,
          that is, based on VUE JS and JavaScript, and you can visit its code by
          clicking the following button, to go to the GitHub site.
        </p>
        <a href="https://github.com/sam99s" target="_blank">
          <v-btn outlined elevation="2" color="#40e5a1">Go to repository</v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SplitCarousel from "../../components/SplitCarousel.vue";
import SplitCarouselItem from "../../components/SplitCarouselItem.vue";
// Documentation: https://github.com/Aaron00101010/vue-split-carousel/tree/1.x

export default {
  components: { SplitCarousel, SplitCarouselItem },
  data() {
    return {
      items: [
        {
          picture: "/tools/sqlLogo.png",
          key: 1,
        },
        {
          picture: "/tools/vueLogo.png",
          key: 2,
        },
        {
          picture: "/tools/dotnetLogo.png",
          key: 3,
        },
        {
          picture: "/tools/javascriptLogo.png",
          key: 4,
        },
        {
          picture: "/tools/nuxtLogo.png",
          key: 5,
        },
        {
          picture: "/tools/csharpLogo.png",
          key: 6,
        },
        {
          picture: "/tools/bootstrapLogo.png",
          key: 7,
        },
        {
          picture: "/tools/pugLogo.png",
          key: 8,
        },
        {
          picture: "/tools/postmanLogo.png",
          key: 9,
        },
        {
          picture: "/tools/firebaseLogo.png",
          key: 10,
        },
        {
          picture: "/tools/gitLogo.png",
          key: 11,
        },
        {
          picture: "/tools/htmlLogo.png",
          key: 12,
        },
        {
          picture: "/tools/linuxLogo.png",
          key: 13,
        },
        {
          picture: "/tools/reactLogo.png",
          key: 14,
        },
        {
          picture: "/tools/sassLogo.png",
          key: 15,
        },
        {
          picture: "/tools/vuetifyLogo.png",
          key: 16,
        },
        {
          picture: "/tools/wordpressLogo.png",
          key: 17,
        },
        {
          picture: "/tools/cssLogo.png",
          key: 18,
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
