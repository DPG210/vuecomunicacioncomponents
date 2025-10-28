<template>
	<div>
		<h1 style="color: blue">Padre Deportes</h1>
		<h2 v-if="favorito">Su deporte favorito es {{ favorito }}</h2>
		<ul>
			<li v-for="deporte in deportes" :key="deporte">
				<HijoDeportes
					:nombresport="deporte"
					v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
	import HijoDeportes from "./HijoDeportes.vue";

	export default {
		name: "PadreDeportes",
		components: {
			HijoDeportes,
		},
		data() {
			return {
				deportes: ["futbol", "baloncesto", "padel", "tenis"],
				favorito: null,
			};
		},
		methods: {
			seleccionarFavoritoParent(deportefavorito) {
				console.log("Yo soy tu padre");
				this.favorito = deportefavorito;
			},
		},
	};
</script>

<style></style>
