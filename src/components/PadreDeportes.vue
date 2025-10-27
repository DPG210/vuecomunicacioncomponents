<template>
    <div>
        <h1 style="color:blue">Padre Deportes</h1>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
                <HijoDeportes :nombresport="deporte"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoDeportes from './HijoDeportes.vue'

export default {
    name:"PadreDeportes",
    components:{
        HijoDeportes
    },
    data(){
        return{
            deportes:["futbol","baloncesto","padel","tenis"]
        }
    }
}
</script>

<style>

</style>