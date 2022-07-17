<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon v-if="clipped">mdi-arrow-collapse-horizontal</v-icon>
        <v-icon v-else>mdi-arrow-split-vertical</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title class="text-center text-color__primary" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="fixed" app>
      <v-col cols="3" class="pa-0">
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-col>
      <v-spacer />
      <v-col cols="1" class="py-0 text-center">
        <a href="https://github.com/sam99s" target="_blank"
          ><v-icon color="#40e5a1">{{ footerIcons.GitHub }}</v-icon></a
        >
      </v-col>
      <v-col cols="1" class="py-0 text-center">
        <a href="https://www.linkedin.com/in/sam99s/" target="_blank"
          ><v-icon color="#40e5a1">{{ footerIcons.LinkedIn }}</v-icon></a
        >
      </v-col>
      <v-col cols="1" class="py-0 text-center">
        <a href="https://www.instagram.com/samu_schulz/" target="_blank"
          ><v-icon color="#40e5a1">{{ footerIcons.Instagram }}</v-icon></a
        >
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Sam99S",
          to: "/",
        },
        {
          icon: "mdi-face-man-shimmer",
          title: "About me",
          to: "/about",
        },
        {
          icon: "mdi-code-tags-check",
          title: "Skills",
          to: "/skills",
        },
        {
          icon: "mdi-desktop-classic",
          title: "Experience",
          to: "/experience",
        },
        {
          icon: "mdi-contacts",
          title: "Contact",
          to: "/contact",
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Samuel Schulz - Full stack developer",
      footerIcons: {
        GitHub: "mdi-github",
        LinkedIn: "mdi-linkedin",
        Instagram: "mdi-instagram",
      },
    };
  },
};
</script>
<style scoped>
footer a {
  text-decoration: none;
}
</style>
