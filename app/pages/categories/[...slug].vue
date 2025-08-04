<script setup lang="ts">
const route = useRoute()
// データがない場合は空配列を返す
const slugs = route.params.slug || [];
</script>

<template>
<!-- 取得したslugを表示させる -->
 <div>
    <h1>カテゴリーの表示</h1>
    <p>現在のカテゴリー構造：</p>
    <ul>
        <li v-for="item in slugs" :key="item">{{ item }}</li>
    </ul>
 </div>
</template>