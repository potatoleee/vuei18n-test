<script setup>
import { useI18n } from 'vue-i18n';

const { t, rt, tm } = useI18n();
const articles = tm('article');
console.log(articles);
</script>

<template>
  <h1>首頁</h1>
  <p>{{ t('menu.aboutUs') }}</p>
  <p>{{ t('menu.productContent') }}</p>
  <p>{{ t('menu.blog') }}</p>
  <p>{{ t('menu.faq') }}</p>
  <font-awesome-icon icon="fa-solid fa-house" />
  <a href="https://www.google.com.tw/?hl=zh_TW">google</a>

  <div class="container">
    <ul class="row">
      <li v-for="article in tm('article')" :key="article.id" class="col-6 col-md-4">
        <p>{{ rt(article.title) }}</p>
        <img :src="article.imgSrc" alt="Article Image" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/all.scss';
</style>
