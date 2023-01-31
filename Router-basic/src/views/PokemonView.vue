<script setup>
import { useGetData } from '@/composables/getData'
const { data, getData, loading,errorData } = useGetData()
getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>

<div class="alert alert-danger" v-if="errorData">
{{ errorData }}
</div>
<p v-if="loading">
    Cargando informacion...
  </p>
  <div v-if="data != null">
    <h1>Pokemons</h1>
    <ul>
      <li v-for="poke in data.results">
        <router-link :to="`/pokemons/${poke.name}`">
          {{ poke.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
