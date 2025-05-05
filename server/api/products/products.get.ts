export default defineEventHandler(async (event) => {

    // const config = useRuntimeConfig()

    // console.log('Runtime config:', config.public.msg)  
    // console.log('Runtime config:', config.apiSecret)  

    const products = await $fetch("https://fakestoreapi.com/products", {
        method: 'GET'
    })
    return products;
});