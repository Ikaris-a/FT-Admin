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
      <el-form-item label="ID" prop="id">
        <el-select v-model="form.id" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用" prop="enable">
        <el-radio-group v-model="form.enable">
          <el-radio :label="false">隐藏</el-radio>
          <el-radio :label="true">正常</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="domainText" prop="domain">
        <el-input v-model="form.domain" />
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
  name: 'EntryDomainAdd',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    project: Object,
    domainText: {
      type: String,
      default: '入口域名'
    }
  },
  data() {
    return {
      form: { id: '', enable: true, domain: '' },
      title: '添加',
      rules: {
        id: [
          {
            required: true,
            message: '请选择ID',
            trigger: ['blur', 'change']
          }
        ],
        enable: [
          {
            required: true,
            message: '请选择是否启用',
            trigger: ['blur', 'change']
          }
        ],
        domain: [
          {
            required: true,
            message: `请填写${this.domainText}`,
            trigger: ['blur', 'change']
          }
        ]
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  },
  created() {
    const { project, form } = this
    if (project) {
      this.title = '修改'
      this.form = Object.assign(form, {
        id: project.id,
        enable: project.enable,
        domain: project.domain
      })
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
