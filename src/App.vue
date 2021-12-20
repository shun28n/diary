<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img
        class="pa-4 pt-7"
        height="170"
        primary
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <p class="">日記アプリ</p>
        <v-container>
          <v-row>
            <v-col cols="3">
              <v-avatar color="indigo" size="50" class="mb-2">
                <v-icon dark size="40"> mdi-account-circle </v-icon>
              </v-avatar>
            </v-col>
            <v-col cols="9">
              <div class="white--text text-subtitle-1 font-weight-bold">
                Shunya Nakamichi
              </div>
              <div class="white--text text-subtitle-2">@shunya_naka</div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark prominent height="170">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row>
        </v-row>
        <v-row>
          <div>
            <live-datetime />
          </div>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "ホーム", icon: "mdi-format-list-checks", to: "/" },
      { title: "詳細", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  components: {
    "live-datetime": require("@/components/Tools/LiveDateTime.vue").default,
  },
};
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>
