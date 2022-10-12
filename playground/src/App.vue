<script setup lang="ts">
import { simplifyZIP } from '../../src'
import picture from '../public/favicon.jpg'
simplifyZIP({
  'image': {
    content: {
      'favicon.jpg': {
        content: picture,
        type: 'image',
      },
    },
    type: 'folder',
  },
  'hello.txt': {
    content: 'hello world',
    type: 'text',
  },
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
</style>
