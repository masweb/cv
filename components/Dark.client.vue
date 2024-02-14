<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
    <button class="dark" @click="toggleDark()">
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
</template>
