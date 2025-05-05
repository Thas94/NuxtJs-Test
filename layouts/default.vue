<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/bindings">Bindings</NuxtLink></li>
                    <li><NuxtLink to="/dataFetching">dataFetching</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">products</NuxtLink></li>

                </ul>
            </nav>
        </header>
        <!-- show page content -->
         <div>
            <slot />
         </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active{
        color:aquamarine;
    }
</style>