<template>
    <div>
        <div v-if="products == null">
            No Products
        </div>
        <div v-else>
            <NuxtLink
                v-for="product in products"
                class="flex flex-col shadow-md bg p-6 rounded-md"
                :to="`/dataFetching/${product.id}`">
                    <img class="w-[75px] h-auto self-center" :src="product.image" alt="">
                    <h2 class="text-black mt-auto text-sm">{{ product.title }}</h2>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const products = ref([{}]);

    const GetProducts = async () =>  {
        const response = await $fetch('/api/dataFetch/products')
        products.value = response
        return response
    }

onMounted(async() => {
     await GetProducts()
})

</script>
