<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "../composables/getData";
import { useFavoritosStore } from "@/store/favoritos";

const useFavoritos = useFavoritosStore()

const { data, getData, loading,errorData } = useGetData();
const route = useRoute();
const router = useRouter();

const back = () => router.push("/pokemons");
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Cargando informacion</p>
  <div class="alert alert-danger" v-if="errorData">
    {{ errorData }}
  </div>
  <div v-if="data">
    <h1>
      {{ $route.params.name }}
    </h1>
    <button :disabled="useFavoritos.pokeFind(data.name)" class="btn btn-primary mb-2" @click="useFavoritos.addFavoritos(data)">
      Favorito
    </button>
    <img :src="data.sprites.front_default" alt="" />
    <button @click="back">volver</button>
  </div>
</template>
