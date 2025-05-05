<template>
    <div>
        <div>
            <header>Product List</header>
        </div>
        <!-- show page content -->
         <div>
            <slot />
         </div>
         <footer>
            <li><NuxtLink to="/products">products</NuxtLink></li>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active{
        color:aquamarine;
    }
</style>