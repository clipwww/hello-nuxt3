<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'

const isDark = useDark()
</script>

<template>
  <el-switch v-model="isDark" :active-icon="Moon" :inactive-icon="Sunny" size="large" />
</template>

<style lang="scss"></style>
