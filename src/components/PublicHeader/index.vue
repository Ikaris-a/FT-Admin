<template>
  <div class="public-header">
    <ul class="public-buttons">
      <li class="public-buttons-list darkgrayBg" @click="refreshFun">
        <el-button icon="el-icon-refresh" />
      </li>
      <li class="public-buttons-list darkgreenBg" @click="addFun">
        <el-button icon="el-icon-plus">添加</el-button>
      </li>
      <li class="public-buttons-list greenBg" @click="editFun">
        <el-button icon="el-icon-edit">编辑</el-button>
      </li>
      <li class="public-buttons-list paleredBg" @click="deleteFun">
        <el-button icon="el-icon-delete">删除</el-button>
      </li>
      <li class="public-buttons-list greyBg">
        <el-button icon="el-icon-setting">更多</el-button>
        <slot name="moreSetting" />
      </li>
    </ul>
    <div class="public-search">
      <el-input
        v-model="search"
        placeholder="搜索"
        suffix-icon="el-icon-search"
        clearable
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PublicHeader',
  props: {},
  data() {
    return {
      search: ''
    }
  },
  methods: {
    refreshFun() {
      this.$emit('refreshFun')
    },
    addFun() {
      this.$emit('addFun')
    },
    editFun() {
      this.$emit('editFun')
    },
    deleteFun() {
      this.$emit('deleteFun')
    }
  }
}
</script>
<style lang="scss" scoped>
.public-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 20px 10px;
}
.public-buttons {
  display: flex;
  align-items: center;
  align-content: center;
  .el-button {
    border: none;
    color: #fff;
    background: none;
  }
}

.public-buttons-list {
  margin-right: 5px;
  border-radius: 5px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
