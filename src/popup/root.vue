<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark" @click="tab">ABC</div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {
    tab() {
      window.chrome.tabs.create({ url: 'pages/app.html' })
    },
  },
}
</script>
<style></style>
