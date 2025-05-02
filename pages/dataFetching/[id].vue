<template>
    <div>
        <h1>This is the product page</h1>
    </div>
</template>

<script setup>
    const route = useRoute();
    const param = ref(route.params.id)
    const product = ref({})

    const GetProductById = async() => {
        const response = await $fetch(`/api/dataFetch/${param.value}`)
        console.log('product', response)
        product.value = response
    }

    onMounted(async() => {
        await GetProductById()
    })
</script>
