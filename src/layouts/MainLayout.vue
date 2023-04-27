<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-center">
          OO儲運系統車行APP
        </q-toolbar-title>

        <q-btn round dense flat color="white" icon="info">
          <q-menu>
            <q-card class="text-center no-shadow no-border">
              <q-list>
                <q-item>
                  <q-item-section class="text-left">
                    <q-item-label overline>XX車行</q-item-label>
                    <q-item-label overline>OOO-FFFF車號</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-menu>
        </q-btn>
      </q-toolbar>

      <q-tabs v-model="tab">
        <q-route-tab
          :to="'/tasks'"
          exact
          replace
          label="任務"
          name="tasks"
          icon="task"
        >
          <q-badge color="red" text-color="white" floating> 3 </q-badge>
        </q-route-tab>
        <q-route-tab
          :to="'/tasks/current'"
          exact
          replace
          label="裝車"
          name="carrying"
          icon="local_shipping"
          disable
        />
        <!-- <q-tab disable name="articles" label="..." /> -->
        <q-route-tab
          :to="'/qrcodescanner'"
          exact
          replace
          label="QRCode"
          name="qrcodescanner"
          icon="qr_code_scanner"
        />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      tab: ref("tasks"),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
