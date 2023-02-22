<script setup lang="ts">
import dayjs from 'dayjs'
// import { Database } from '@/types/database.types'

// const client = useSupabaseClient<Database>()
// const user = useSupabaseUser()

// const { data: contributes } = await useAsyncData('contributes', async () => {
//   const { data } = await client.from('contributes').select('*').is('received_user_id', null).eq('category', 1).order('created_at')
//   return data
// }, {  })


const type = ref('1')
const now = ref(dayjs())

const expiredDate = computed(() =>  +now.value +dayjs().endOf('month').diff(now.value))

function onFinish() {
  now.value = dayjs()
}

// async function addTask () {
//   if (!user.value) return

//   const { data } = await client.from('contributes')
//     .insert({
//       user_id: user.value.id,
//       promo_code_url: 'https://www.nuxtjs.org.cn/usage/data-fetching.html#%E5%9C%A8%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE',
//       category: 1,
//       expired_at: dayjs().endOf('month').toISOString()
//     })
//     .select('*')
//     .single()

//     console.log(data)
// }
</script>

<template>
  <div class="text-center mb-5">
    <el-countdown :value="expiredDate" format="DD [天] H [時] mm [分]" @finish="onFinish">
      <template #title>
        <div class="text-lg">
          距離本月使用期限還有
        </div>
      </template>
    </el-countdown>
  </div>

  <el-row :gutter="16">
    <el-col :sm="12" class="mb-4">
      <el-card>
        <template #header>
          <div class="flex justify-between items-center">
            <div>尚未領取</div>
            <el-select v-model="type">
              <el-option label="餐酒" value="1" />
            </el-select>
          </div>
        </template>
        <PromoListItem v-for="n in 10" :key="n" />
      </el-card>
    </el-col>
    <el-col :sm="12" class="mb-4">
      <el-card header="已領取">
        ???
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss"></style>
