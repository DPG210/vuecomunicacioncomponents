<template>
    <div style="margin:auto;  background-color: gray; justify-content: center; text-align: center;">
        <h3 style="color:blue;">{{ comic.titulo }}</h3>
        <button @click="seleccionarFavorito()">Seleccionar favorito</button>
        <p>{{ comic.descripcion }}</p>
        <img :src="comic.imagen"/>
        <h4 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }"
        >Year: {{ comic.year }}</h4>
    </div>
</template>

<script>
    export default{
        name:"ComicComponent",
        props:["comic"],
        methods:{
            seleccionarFavorito(){
                console.log(this.comic)
                this.$emit("elegirFavorito",this.comic)
            }
        }
    }
</script>

<style>
    @import './../assets/css/comics.css';
</style>