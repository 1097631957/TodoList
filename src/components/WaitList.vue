<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in WaitList"
        :key="'todo-' + index"
        :style="WaitList.length === 1 ? 'border-radius: 5px !important;' : ''"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取vuex内待办事项数据
      WaitList: this.$store.state.todo
    }
  },
  mounted() {
    this.log()
  },
  methods: {
    log() {
      console.log(23333)
      console.log(this.WaitList.length)
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  padding: 0;
  li {
    padding: 15px 10px;
    border: 1px solid #666666;
    border-bottom: none;
    &:first-child {
      border-radius: 5px 5px 0 0;
    }
    &:last-child {
      border-bottom: 1px solid #666666;
      border-radius: 0 0 5px 5px;
    }
  }
}
</style>
