<template>
    <div>
        <header>
            <h1>My Application</h1>
        </header>
        <!-- ページ固有のコンテンツを挿入する -->
         <slot />
        <footer>
            <p>&copy; 2025 My Application</p>
        </footer>
    </div>
</template>

<style scoped>
header, footer{
    background-color: red;
    text-align: center;
    padding: 10px;
}
</style> 