<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const { logout } = authStore
const { isLoggedIn, userInfo } = storeToRefs(authStore)

function someErrorLogger() {
  // TODO: do something
}
</script>

<template>
  <el-config-provider>
    <el-container class="min-h-screen">
      <el-header class="sticky top-0 left-0 bg-el z-10 border-b-1 border-solid border-gray-300 flex justify-between items-center">
        <h1 class="flex items-center">
          <el-icon size="25" class="mr-2">
            <el-icon-switch />
          </el-icon>
          Promo Code 貢獻平台
        </h1>
        <client-only>
          <div class="flex items-center">
            <ContributeModule />
            <DarkToggle />
            <el-dropdown trigger="click" :disabled="!isLoggedIn">
              <el-avatar
                class="ml-3"
                :class="{ 'cursor-pointer': isLoggedIn }"
                :src="userInfo?.user_metadata.avatar_url || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
              />

              <template #dropdown>
                <el-dropdown-menu>
                  <div class="px-4 py-1">
                    <div>Hi, {{ userInfo?.user_metadata.name }}</div>
                    <div class="text-xs">
                      {{ userInfo?.email }}
                    </div>
                  </div>
                  <el-dropdown-item divided>
                    <el-button class="w-full" type="danger" size="small" @click="logout">
                      登出
                    </el-button>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </client-only>
      </el-header>
      <el-main class="max-h-full">
        <NuxtPage />
        <!-- some content -->
        <NuxtErrorBoundary @error="someErrorLogger">
          <!-- You use the default slot to render your content -->
          <template #error="{ error }">
            {{ error }}
          </template>
        </NuxtErrorBoundary>
      </el-main>
      <el-footer class="sticky bottom-0 left-0 bg-el h-2 border-t-1 border-solid border-gray-300" height="auto">
        <div class="flex items-center justify-center text-xs py-1">
          &copy; david.jian@myfunnow.com
        </div>
      </el-footer>

      <LoginDialog />
    </el-container>
  </el-config-provider>
</template>
