<template>
    <div>
        <h1>this is the id: {{ param }} post page</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
const param = ref(route.params.id)
//console.log(route.params.id)


    //if using an object
    const {pending, data: products} = useFetch(`https://fakestoreapi.com/products/${param.value}`,
        {
            lazy: false,
            pick: ['id', 'title', 'image']
        }
    )

</script>

<style lang="scss" scoped>

</style>