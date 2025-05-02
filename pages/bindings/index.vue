<template>
    <div class="">
        <h1 :id="idToBind">Current H1 Id is: {{ idToBind }}  </h1>
        <div class="flex gap-x-4 m-2">
            <Button class="" label="Increment H1" @click="IncrementId"/>
            <Button :disabled="isButtonDisabled" class="bg-red-800 border-red-800" label="Button to disable" />
        </div>
    </div>
    
</template>

<script setup>
    const idToBind = ref(0)
    const isButtonDisabled = ref(false)
    function IncrementId(){
        idToBind.value++;
        isButtonDisabled.value = !isButtonDisabled.value; 
    }

</script>

<style  scoped>

</style>