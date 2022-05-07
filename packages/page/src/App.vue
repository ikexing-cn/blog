<template>
  <input
    v-model="a"
    type="text"
  >
  <input
    v-model="b"
    type="text"
  >
  <button @click="click">
    确认输入
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { client } from './utils/client'

const a = ref('')
const b = ref('')

const click = async() => {
    await client.callApi('Test', {
        username: a.value,
        password: b.value
    }).then(res => {
        alert(res.isSucc ? '测试成功' : '测试失败')
    })
}
</script>
