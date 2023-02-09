<script setup>
import { useCounterStore } from "@/store/counter";

const useCounter = useCounterStore()
</script>

<template>
  <main>
    <h1>
      Home: {{ useCounter.count }}
      <button @click="useCounter.increment">incremento</button>
    </h1>
    <h2>
      Double : {{ useCounter.double }}
    </h2>
  </main>
</template>
