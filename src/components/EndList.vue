<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in EndList"
        :key="'todo-' + index"
        :style="EndList.length === 1 ? 'border-radius: 5px !important;' : ''"
      >
        {{ item }}
        <el-button type="danger" round @click="del_but(index)">删除</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      EndList: this.$store.state.suc
    }
  },
  methods: {
    del_but(e) {
      console.log(e)
      this.$store.commit('AddDelList', this.EndList[e])
      this.EndList.splice(e, 1)
      console.log(this.$store.state.todo)
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
