import { defineEventHandler } from "h3";

function delay(){
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default defineEventHandler(async () => {
    const products = await $fetch("https://fakestoreapi.com/products");

    await delay();
    return {
        data: products
    };
});