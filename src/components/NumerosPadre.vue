<template>
	<div>
        <h1>Soy el padre</h1>
        <h3 v-if="suma">La suma es {{ suma }}</h3>
        <button @click="nuevoNumero()">Nuevo numero</button>
        <div v-for="numero in numeros" :key="numero">
            <NumerosHijo 
            :numero="numero"
            v-on:sumaTotal="sumaTotal">
            </NumerosHijo>
        </div>
    </div>
</template>

<script>
import NumerosHijo from './NumerosHijo.vue';
    export default{
        name:"NumerosPadre",
        components:{
        NumerosHijo
        },
        data(){
            return{
                suma:null,
                numeros:[],
            }
        },
        methods:{
            sumaTotal(numero){
                console.log("El numero recibido es "+numero);
                this.suma+=numero
            },
            nuevoNumero(){
                var numero=parseInt(Math.random()*100)+1;

                this.numeros.push(numero)

            }
        }
    }
</script>
