<template>
    <div>
        <h2 style="color:green">{{nombresport}}</h2>
    </div>
</template>

<script>
export default {
    name:"HijoDeportes",
    props:["nombresport"],
    mounted(){
        console.log(this.nombresport)
    }
}
</script>

<style>

</style>