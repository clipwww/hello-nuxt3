<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
const { login } = authStore
const { isLoggedIn } = storeToRefs(authStore)


</script>

<template>
  
  <el-dialog
    :model-value="!isLoggedIn"
    title="登入"
    top="35vh"
    append-to-body
    center
    :before-close="() => {}"
    :show-close="false"
  >
    <div class="text-center" >
      <div class="mb-4">
        <el-image src="/api/mfa" />
      </div>
      <el-button @click="login">登入</el-button>
    </div>

    <template #footer>
      <DarkToggle />
    </template>
  </el-dialog>
</template>

<style lang="scss"></style>
