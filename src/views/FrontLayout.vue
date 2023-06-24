<script>
export default {
  methods: {
    switchToEnglish() {
      this.$i18n.locale = 'en';
    },
    switchToChinese() {
      this.$i18n.locale = 'zh-TW';
    }
  }
};
</script>

<template>
  <header class="d-flex">
    導覽列
    <RouterLink to="/"> home </RouterLink>
    <RouterLink to="about"> about </RouterLink>
    <RouterLink to="login"> login </RouterLink>
    <div>
      <button @click="switchToEnglish">English</button>
      <button @click="switchToChinese">中文</button>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>footer</footer>
</template>

<style lang="scss"></style>
