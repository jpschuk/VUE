<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "../composables/getData";

const { data, getData, loading } = useGetData();
const route = useRoute();
const router = useRouter();

const back = () => router.push("/pokemons");
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Cargando informacion</p>
  <div v-if="data">
    <h1>
      {{ $route.params.name }}
    </h1>
    <img :src="data.sprites.front_default" alt="" />
    <button @click="back">volver</button>
  </div>
</template>
