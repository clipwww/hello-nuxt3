<script setup lang="ts">
import { Download } from '@element-plus/icons-vue'

const contributeDate = useDateFormat(new Date(), 'YYYY/MM/DD HH:mm')
</script>

<template>
  <div class="w-full flex items-center border-b border-gray-300 py-4">
    <el-tooltip placement="top-end" :content="`本月已貢獻 ${9} 張`">
      <el-badge class="mr-5" type="primary" :value="9">
        <el-avatar size="large" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </el-badge>
    </el-tooltip>
    <div class="flex-1">
      <div class="mb-1">
        2月 餐酒
      </div>
      <div class="text-xs mb-1">
        david.jian@myfunnow.com
      </div>
      <div class="text-xs text-gray-500">
        {{ contributeDate }}
      </div>
    </div>
    <div>
      <el-button type="primary" size="small" plain :icon="Download">
        領取
      </el-button>
    </div>
  </div>
</template>
