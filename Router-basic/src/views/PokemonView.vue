<script setup>
import { useGetData } from "@/composables/getData";
const { data, getData, loading, errorData } = useGetData();
getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <p v-if="loading">Cargando informacion...</p>
  <div class="alert alert-danger" v-if="errorData">
    {{ errorData }}
  </div>
  <div v-if="data">
    <h1>Pokemons</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="poke in data.results">
        <router-link class="list-group-item" :to="`/pokemons/${poke.name}`">
          {{ poke.name }}
        </router-link>
      </li>
    </ul>
    <button
      class="btn btn-primary me-2"
      @click="getData(data.previous)"
      :disabled="!data.previous"
    >
      Anterior
    </button>
    <button class="btn btn-warning" @click="getData(data.next)">
      Siguiente
    </button>
  </div>
</template>
