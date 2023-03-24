<template>
  <div class="jumpDomain-container public-container">
    <public-header
      @refreshFun="refreshFun"
      @addFun="addFun"
      @editFun="editFun"
      @deleteFun="deleteFun"
    />
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :stripe="true"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="ID">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="项目名" />
      <el-table-column prop="name" label="跳转域名" />
      <el-table-column prop="name" label="是否正常">
        <template slot-scope="scope">
          <i
            :class="[
              'public-circle',
              { greenBg: scope.row.date },
              { paleredBg: !scope.row.date },
            ]"
          />
          <span
            :class="[
              { greenColor: scope.row.date },
              { paleredColor: !scope.row.date },
            ]"
          >{{ scope.row.date ? "正常" : "隐藏" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span class="ft-icon greenBg" @click="changeProject(scope)">
            <i class="el-icon-edit" />
          </span>
          <el-popconfirm
            :title="`确定删除${scope.row.name}吗？`"
            @onConfirm="deleteProject(scope)"
          >
            <span slot="reference" class="ft-icon paleredBg">
              <i class="el-icon-delete" />
            </span>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="public-pagination"
      background
      layout=" sizes, prev, pager, next, slot"
      :total="page.total"
      :page-sizes="pageSizes"
    >
      <p class="public-pagination-text">
        显示第
        {{ page.first }}
        到第
        {{ page.end }}
        条记录， 总共
        {{ page.total }}
        条记录
      </p>
    </el-pagination>
    <domain
      v-if="addVisible"
      :visible="addVisible"
      :project="projectData"
      domain-text="出口域名"
      @sureDialogFun="sureDialogFun"
      @refreshDialogFun="refreshDialogFun"
      @closeDialogFun="closeDialogFun"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PublicHeader from '@/components/PublicHeader'
import domain from './add/domain.vue'

export default {
  name: 'JumpDomain',
  components: { PublicHeader, domain },
  data() {
    return {
      addVisible: false,
      projectData: undefined,
      page: {
        first: 1,
        end: 10,
        total: 335
      },
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: []
    }
  },
  computed: {
    ...mapGetters(['roles', 'pageSizes'])
  },
  created() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    changeProject(data) {
      const { row } = data
      this.projectData = row
      this.addVisible = true
    },
    deleteProject(data) {
      const { $index, row } = data
      this.tableData.splice($index, 1)
      this.$notify({
        title: '成功',
        message: `删除${row.name}成功`,
        type: 'success'
      })
    },
    refreshFun() {},
    addFun() {
      this.addVisible = true
    },
    editFun() {},
    deleteFun() {},
    sureDialogFun() {
      this.closeDialogFun()
    },
    refreshDialogFun() {},
    closeDialogFun() {
      this.addVisible = false
      this.projectData = undefined
    }
  }
}
</script>
