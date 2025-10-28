<template>
	<div>
        <h2>Numero hijo {{ numero }}</h2>
        <button @click="sumarNumeros()">Sumar {{ numero }}</button>
        
        
    </div>
</template>

<script>
 export default{
    name:"NumerosHijo",
    props: ["numero"],

    data(){
        return{
            
        }
    },
    methods:{
        sumarNumeros(){
            
            this.$emit("sumaTotal",this.numero);
        }
    }
 }
</script>
