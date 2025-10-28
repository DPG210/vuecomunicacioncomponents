<template>
    <div>
        <h1>Seleccionar elementos</h1>
        <select name="" id="" multiple v-model="opcionesSeleccionados">
            <option  v-for="elemento in array" :key="elemento" :value="elemento">{{ elemento }}</option>
        </select>
        <button @click="mostrarElementos()">Mostrar seleccionados</button>
        <h2 >{{ html }}</h2>
    </div>
</template>

<script>
    export default{
        name:"SeleccionMultiple",
        data(){
            return{
                array:["el 1","el 2","el 3","el 4","el 5","el 6"],
                opcionesSeleccionados:[],
                html:""
            }
        },
        methods:{
            mostrarElementos(){
                this.html="";
                this.html=''+this.opcionesSeleccionados+'';              
            }
        }
    }
</script>

<style>

</style>