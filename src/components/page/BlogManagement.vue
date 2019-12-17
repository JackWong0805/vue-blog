<template>
  <b-container fluid class="pl-4 pr-4">
    <div class="b-card shadow mt-4 mb-4 border">
      <div class="b-card-header py-3">
        <h6>博客管理</h6>
      </div>

      <div class="b-card-body">
        <div class="table-responsive">
          <div class="dataTables_wrapper">
            <!-- 搜索 -->
            <b-row>
              <b-col lg="6" class="my-1">
                <b-input-group size="sm">
                  <b-form-input v-model="filter" type="search" id="filterInput" placeholder="搜你所想"></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">
                      清空
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-col>

              <b-col sm="5" md="6" class="my-1">
                <b-form-group
                  label="每页数量"
                  label-cols-sm="6"
                  label-cols-md="4"
                  label-cols-lg="3"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="perPageSelect"
                  class="mb-0"
                >
                  <b-form-select
                    v-model="perPage"
                    id="perPageSelect"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>

            <!-- 表格 -->
            <b-row>
              <b-table
                show-empty
                hover
                small
                fixed
                stacked="md"
                :items="items"
                :fields="fields"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                :filterIncludedFields="filterOn"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                :busy="isLoading"
                @filtered="onFiltered"
              >
                <template v-slot:cell(title)="row">
                  <b-link :to="{ name: 'eb', query: { articleId: row.item.articleId } }" class="titleLink">
                    {{ row.item.title }}
                  </b-link>
                </template>

                <template v-slot:cell(actions)="row">
                  <b-button
                    size="sm"
                    @click="deleteConfirm(row.item, row.index, $event.target)"
                    class="mr-1"
                  >
                    <svg class="icon-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                      <path data-v-4935e0c5="" fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" class=""></path>
                    </svg>
                  </b-button>
                  <b-button
                    size="sm"
                    class="mr-1"
                    @click="editBlog(row.item, row.index, $event.taget)"
                  >
                    <svg class="icon-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path data-v-4935e0c5="" fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" class=""></path>
                    </svg>
                  </b-button>

                  <b-button
                    size="sm"
                    class="mr-1"
                    @click="toggleActive(row.item, row.index, $event.target)"
                  >
                    <svg class="icon-eye" v-if="row.item.active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path data-v-4935e0c5="" fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" class=""></path>
                    </svg>
                    <svg v-else class="icon-eye-slash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" class=""></path>
                    </svg>
                  </b-button>
                </template>

                <template v-slot:table-busy>
                  <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                    <strong>加载中...</strong>
                  </div>
                </template>
              </b-table>
            </b-row>

            <!-- 分页 -->
            <b-row>
              <b-col sm="7" md="6" class="my-1 mx-auto">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import dateutil from '../../utils/date'
import Swal from 'sweetalert2'

export default {
  name: 'ManagementPost',
  data () {
    return {
      items: [],
      fields: [
        {
          key: 'title',
          label: '文章标题',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'time',
          label: '发布时间',
          sortable: true,
          class: 'text-center',
          formatter: value => {
            return dateutil.dateStringToShow(value)
          }
        },
        {
          key: 'actions',
          label: '操作',
          class: 'text-center'
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    this.axios({
      method: 'get',
      url: '/articles'
    }).then(response => {
      this.items = response.data.results
      this.totalRows = this.items.length
      this.isLoading = false
    })
  },
  methods: {
    // 删除警告提示
    deleteConfirm (item, index, button) {
      let self = this
      Swal.queue([{
        title: '删除后将无法恢复!',
        text: '确认删除？',
        icon: 'warning',
        showCloseButton: false,
        showCancelButton: true,
        cancelButtonText: '取消',
        confirmButtonText: '删除',
        cancelButtonColor: '#3f0',
        confirmButtonColor: '#d33',
        focusCancel: true,
        allowOutsideClick: false,
        showLoaderOnConfirm: true,
        preConfirm: (result) => {
          return self.axios({
            method: 'delete',
            url: '/articles/' + item.articleId
          }).then(response => {
            if (response.data.success) {
              this.items.splice(index, 1)
              Swal.insertQueueStep({
                icon: 'success',
                title: '删除成功',
                text: item.title
              })
            } else {
              Swal.insertQueueStep({
                icon: 'error',
                title: '删除失败',
                text: item.title
              })
            }
          })
        }
      }])
    },
    // 筛选
    onFiltered (filteredItems) {
      // 搜索时更新分页栏
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },

    // 显示或隐藏博客
    toggleActive (item, index, button) {
      this.axios({
        method: 'put',
        url: '/articles/' + item.articleId,
        data: {
          active: !item.active
        }
      }).then(response => {
        if (response.data.success) {
          item.active = response.data.attributes.active
        } else {
          Swal.fire({
            toast: false,
            position: 'top',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            icon: 'error',
            title: item.title,
            text: '修改是否可见失败!'
          })
        }
      })
    },

    // 编辑博客
    editBlog (item, index, button) {
      this.$router.push({
        name: 'eb',
        query: {
          articleId: item.articleId
        }
      })
    }
  },
  watch: {
    items: {
      handler () {

      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped>
div.table-responsive > div.dataTables_wrapper > div.row {
  margin: 0;
}

p.deleteInfo {
  font-weight: 700;
  font-size: 1.2rem
}

.titleLink {
  color: #212529;
}

.icon-delete {
  width: 0.85rem;
}

.icon-edit {
  width: 1rem;
}

.icon-eye {
  width: 1.1rem;
}

.icon-eye-slash {
  width: 1.1rem;
}
</style>
