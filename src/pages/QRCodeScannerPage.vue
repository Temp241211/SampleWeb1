<template>
  <q-page class="q-pa-md row items-start q-gutter-md">
    <QrcodeScanner
      :qrbox="250"
      :fps="10"
      style="width: 500px"
      @result="onScan"
    />
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  components: {
    QrcodeScanner: defineAsyncComponent(() =>
      import("components/QRcodeScanner.vue")
    ),
  },
  name: "TasksPage",
  methods: {
    onScan(t1, t2) {
      alert(t1, t2);
    },
  },
});
</script>
