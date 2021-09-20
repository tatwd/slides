<!--
A simple wrapper for embeded Bilibili videos
Usage:
<Bilibili id="BV1tJ41167Ai" />
-->

<script setup lang="ts">
defineProps<{
  id: string;
  width?: number;
  height?: number;
}>();
</script>

<template>
  <iframe
    ref="bv"
    :width="width"
    :height="height"
    :src="`//player.bilibili.com/player.html?bvid=${id}`"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
  >
    >
  </iframe>
</template>
