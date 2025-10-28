<template>
	<div>
		<h2 style="color: green">{{ nombresport }}</h2>
		<button @click="seleccionarFavorito()">Seleccionar favorito</button>
	</div>
</template>

<script>
	export default {
		name: "HijoDeportes",
		props: ["nombresport"],

		mounted() {
			console.log(this.nombresport);
		},
		methods: {
			seleccionarFavorito() {
				console.log("Soy el hijo " + this.nombresport);
				//PARA ENVIAR INFORMACION SE REALIZA A PARTIR DE LA LLAMADA
				//CON CADA PARAMETRO SEPARADO CON COMAS, DENTRO DEL METODO
				//$emit
				this.$emit("seleccionarFavoritoParent", this.nombresport);
			},
		},
	};
</script>

<style></style>
