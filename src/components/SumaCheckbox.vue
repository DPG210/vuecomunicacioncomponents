<template>
    <div>
        <h1>Ejemplo checkboc</h1>
        <button @click="generarNumeros">Generar Numeros</button>
        <div v-for="(num,index) in numeros" :key="index">
            <label>{{ num }}
                <input type="checkbox" :key="num" :value="num" v-model="numeroSeleccionado"/>
            </label>
        </div>
        <h2>{{ suma }}</h2>

    </div>
</template>

<script>
    export default{
        name:"SumaCheckbox",
        data(){
            return{
                numeros:[],
                suma:0,
                numeroSeleccionado:[]
            }
        },
        methods:{
            generarNumeros(){
                var numero=0;
                var i=0
                for (i;i<6;i++){
                    numero=parseInt(Math.random()*100);
                    this.numeros.push(numero);
                    console.log(numero)
                    console.log(this.numeros)
                }
                
            },
            sumaNumeros(){
                var num=this.numeroSeleccionado[0];
                this.suma+=this.numeroSeleccionado;
            }
        }
    }
</script>