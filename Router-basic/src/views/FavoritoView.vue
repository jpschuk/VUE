<script setup>
import { useFavoritosStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos)
const {remove} = useFavoritos
</script>

<template>
  <h1 text-center>Favoritos</h1>
      <ul class="list-group">
        <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
            <div>
                {{ poke.name }}
            </div>
        <div>
            <button class="btn btn-danger" @click="remove(poke.id)">Remover Favorito</button>
        </div>
    </li>
</ul>
</template>
