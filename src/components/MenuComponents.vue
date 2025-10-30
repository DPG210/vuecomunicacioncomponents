<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Deportes</router-link>
            </li>
            <li>
                <router-link to="/comics">Comics</router-link>
            </li>
            <li>
                <router-link to="/numeros">Numeros</router-link>
            </li>
            <li>
                <router-link to="/suma">Suma Check</router-link>
            </li>
            <li>
                <router-link to="/doble">Numero Doble</router-link>
            </li>
            <li>
                <router-link to="/doble/14">Numero Doble 14</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"MenuComponents"
    }
</script>

<style>
    
</style>