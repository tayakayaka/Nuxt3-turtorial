<script setup lang="ts">
const route = useRoute();
console.log("Post ID:", route.params.id);
</script>

<template>
    <div>
         <!-- ファイル名 [id].vue の id という名前は、URLから取得する変数として $route.params.id で使える -->
        <h1>Post {{ $route.params.id}}</h1>
    </div>
</template> 