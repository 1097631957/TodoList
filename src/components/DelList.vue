<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in DelList"
        :key="'todo-' + index"
        :style="DelList.length === 1 ? 'border-radius: 5px !important;' : ''"
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
      DelList: this.$store.state.del
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
