<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in WaitList"
        :key="'todo-' + index"
        :style="WaitList.length === 1 ? 'border-radius: 5px !important;' : ''"
        @dblclick="twoclick($event, index)"
      >
        <div>
          {{ item }}<input type="text" @keyup.enter="chan($event, index)" />
        </div>
        <div>
          <el-button type="success" round @click="suc_but(index)"
            >完成</el-button
          ><el-button type="danger" round @click="del_but(index)"
            >删除</el-button
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取vuex内待办事项数据
      WaitList: this.$store.state.todo,
      flag: 0
    }
  },
  mounted() {},
  methods: {
    suc_but(e) {
      this.$store.commit('AddSucList', this.WaitList[e])
      this.WaitList.splice(e, 1)
      console.log(this.$store.state.todo)
    },
    del_but(e) {
      console.log(e)
      this.$store.commit('AddDelList', this.WaitList[e])
      this.WaitList.splice(e, 1)
      console.log(this.$store.state.todo)
    },
    twoclick(e, index) {
      e.target.querySelector('input').style.display = 'inline'
      e.target.querySelector('input').value = this.WaitList[index]
      e.target.querySelector('input').focus()
      console.log(e.target.querySelector('input'))
    },
    chan(e, i) {
      this.WaitList[i] = e.target.value
      console.log(this.WaitList[i])
      e.target.style.display = 'none'
      this.$forceUpdate() // 强制重新渲染数据
    }
  }
}
</script>

<style lang="less" scoped>
input {
  margin-left: -10px;
  display: none;
}
ul {
  padding: 0;
  li {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
