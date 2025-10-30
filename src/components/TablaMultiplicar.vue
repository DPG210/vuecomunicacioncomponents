<template>
    <div>
        <h1>tabla del {{ numero }}</h1>
    </div>
    <table>
        <thead>
            <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody v-html="tabla"></tbody>
    </table>
    <table>
        <thead>
            <tr>
                <th>Operacion2</th>
                <th>Resultado2</th>
            </tr>
        </thead>
        <tbody v-html="tabla2"></tbody>
    </table>
</template>

<script>
    export default{
        name:"TablaMultiplicar",
        data(){
            return{
                numero:0,
                tabla:"",
                tabla2:""
            }
        },
        methods:{
            generarTabla(){
                let aux="";
                this.numero=parseInt(this.$route.params.num);
                for(var i = 0; i<=10; i++){
                    aux+="<tr>";
                    aux+="<td>"+this.numero + "*"+i+"</td>";
                    aux+="<td>"+(this.numero*i)+"</td>"
                    aux+="</tr>"
                }
                this.tabla2=aux;
            }
        },
        mounted(){
            console.log("Mi numero es: "+this.$route.params.num)
            var num=this.$route.params.num
            var html=""
            var operacion="";
            var resultado=0

            for(let i=0; i<=10;i++){
                operacion=num+"*"+i;
                resultado= parseInt(num)*i;

                html+="<tr>"
                html+="<td>"+operacion+"</td>"
                html+="<td>"+resultado+"</td>"
                html+="</tr>"
            }

            this.tabla=html

            this.generarTabla();

        },
        watch:{
            '$route.params.num'(nextVal,oldVal){
                if(nextVal!= oldVal){
                    this.numero=this.$route.params.num
                    var num=this.$route.params.num
                    var html=""
                    var operacion="";
                    var resultado=0

                    for(let i=0; i<=10;i++){
                        operacion=num+"*"+i;
                        resultado= parseInt(num)*i;

                        html+="<tr>"
                        html+="<td>"+operacion+"</td>"
                        html+="<td>"+resultado+"</td>"
                        html+="</tr>"
                    }

                    this.tabla=html
                    this.generarTabla();
                        }
                    }
        }


    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

/* Fondo general */
body {
  background-color: #0b0b0b;
  background-image: radial-gradient(#1a1a1a 1px, transparent 1px);
  background-size: 20px 20px;
  color: #f5f5f5;
  font-family: 'Creepster', cursive;
  text-shadow: 2px 2px 4px #000;
  position: relative;
  overflow-x: hidden;
}

/* Título */
h1 {
  text-align: center;
  color: #ff7518; /* Naranja calabaza */
  text-shadow: 0 0 10px #ff7518, 0 0 20px #ffae42;
  margin-top: 30px;
  font-size: 2.5em;
}

/* Tabla */
table {
  text-align: center;
  margin: 40px auto;
  width: 60%;
  border-collapse: collapse;
  box-shadow: 0 0 25px rgba(255, 117, 24, 0.8);
  background-color: rgba(20, 20, 20, 0.9);
  border: 3px solid #ff7518;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 2; /* aseguramos que quede encima de las calaveras */
}

/* Encabezados */
th {
  background-color: #ff7518;
  color: #111;
  padding: 10px;
  font-size: 1.2em;
  text-transform: uppercase;
  border-bottom: 3px solid #ffae42;
}

/* Filas */
td {
  padding: 10px;
  border-bottom: 1px solid #444;
  color: #f5f5f5;
  font-size: 1.1em;
}

/* Efecto hover en filas */
tr:hover {
  background-color: #2a2a2a;
  color: #ffae42;
  cursor: pointer;
  transform: scale(1.02);
  transition: all 0.3s ease;
}

/* Calabazas decorativas en los lados del título */
div::before,
div::after {
  content: "🎃";
  font-size: 2.5em;
  position: absolute;
  top: 10px;
  animation: float 3s ease-in-out infinite;
}

div::before {
  left: 10%;
}

div::after {
  right: 10%;
}

/* 💀 Calaveras decorativas flotando fuera de la tabla */
body::before,
body::after {
  content: "💀💀💀";
  position: absolute;
  font-size: 2em;
  color: rgba(255, 255, 255, 0.25); /* blancas translúcidas */
  z-index: 1;
  animation: spin 10s linear infinite;
}

body::before {
  top: 10%;
  left: 5%;
}

body::after {
  bottom: 10%;
  right: 5%;
  animation-direction: reverse;
}

/* Animaciones */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>