<template>
    <div class="card text-center">
        <img :src="product.image" alt="Product" class="productImage">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/dataFetching/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product'])
</script>

<style scoped>
    .productImage{
        max-width: 76%;
        max-height: 120px;
        margin: 0 auto;
    }
</style>