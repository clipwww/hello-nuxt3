<script setup lang="ts">
import { Present } from '@element-plus/icons-vue'

const showDrawer = ref(false)
</script>

<template>
  <el-button class="mr-3" type="success" :icon="Present" text size="large" @click="showDrawer = true">
    我要貢獻
  </el-button>
  <el-drawer
    v-model="showDrawer"
    title="我要貢獻"
    size="320"
  >
    <el-form label-position="top">
      <el-form-item label="Region">
        <el-input />
      </el-form-item>
      <el-form-item label="Category">
        <el-input />
      </el-form-item>
      <el-form-item label="DynamicLink">
        <el-input />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="flex items-center justify-between">
        <el-button type="default" size="large" class="w-1/4" @click="showDrawer = false">
          取消
        </el-button>
        <el-button type="success" size="large" class="w-3/4">
          送出
        </el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style lang="scss"></style>
