<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    width="30%"
    :before-close="closeDialogFun"
    center
  >
    <el-form
      ref="form"
      :model="form"
      label-width="auto"
      :rules="rules"
      hide-required-asterisk
    >
      <el-form-item label="项目名" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="sureDialogFun">确定</el-button>
      <el-button @click="refreshDialogFun">重置</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'ProjectAdd',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    project: Object
  },
  data() {
    return {
      form: { name: '' },
      title: '添加',
      rules: {
        name: [
          {
            required: true,
            message: '请输入项目名',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  created() {
    const { project, form } = this
    if (project) {
      this.title = '修改'
      this.form = Object.assign(form, { name: project.name })
    }
  },
  methods: {
    closeDialogFun() {
      this.$emit('closeDialogFun')
    },
    refreshDialogFun() {
      this.$emit('refreshDialogFun')
    },
    sureDialogFun() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const { form, title } = this
          this.$notify({
            title: '成功',
            message: `${form.name}${title}成功`,
            type: 'success'
          })
          this.$emit('sureDialogFun')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
