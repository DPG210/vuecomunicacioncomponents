<template>
    <div>
        <h1>Ejemplo checkboc</h1>
        <button @click="generarNumeros">Generar Numeros</button>
        <div v-for="(num,index) in numeros" :key="index">
            <label>{{ num }}
                <input type="checkbox" :key="num" :value="num" v-model="numeroSeleccionado" 
                @change="actualizarSuma($event, num)"/>
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
                this.numeros=[]
                var numero=0;
                var i=0
                for (i;i<6;i++){
                    numero=parseInt(Math.random()*100);
                    this.numeros.push(numero);
                    console.log(numero)
                    console.log(this.numeros)
                }
                this.numeroSeleccionado=[];
                this.suma=0;
                
            },
           actualizarSuma(event, num) {
            // si el checkbox se marca → se suma
            // si se desmarca → se resta
            if (event.target.checked) {
                this.suma += num;
            } else {
                this.suma -= num;
            }
            },
        }
    }
</script>