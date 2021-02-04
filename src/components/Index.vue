<template>
  <div class="hello">
    <el-row>
      <el-col :span="24">
        <div class="">
          <div class="flex">
            <img src="../assets/logo.png" alt="" class="log" />
            <h2>TodoList</h2>
          </div>
          <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <div class="mb">
                <h4>添加待办事项</h4>
                <el-input
                  placeholder="请输入内容"
                  v-model="input"
                  clearable
                  @keyup.enter.native="add()"
                >
                </el-input
                ><span class="text">回车即可生效</span>
              </div>
              <el-tab-pane label="WaitList" name="first"> </el-tab-pane>
              <el-tab-pane label="EndList" name="second"></el-tab-pane>
              <el-tab-pane label="DelList" name="third"></el-tab-pane>
              <router-view />
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import '../store/index'
export default {
  data() {
    return {
      activeName: 'first',
      input: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab)
      console.log(tab.label)
      console.log(event)
      if (tab.label === 'WaitList') {
        this.$router.push('/wait-list')
      } else if (tab.label === 'EndList') {
        this.$router.push('/end-list')
      } else {
        this.$router.push('/del-list')
      }
    },
    add() {
      console.log(2333)
      this.$store.commit('AddWaitList', this.input)
      this.input = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-card__body {
  padding: 20px;
}

.text {
  font-size: 12px;
  color: #666666;
}

.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.mb {
  margin-bottom: 10px;
}

h4 {
  margin-top: 0;
  margin-bottom: 15px;
}

.log {
  width: 50px;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
