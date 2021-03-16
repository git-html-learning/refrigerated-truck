<template>
  <div class="baojing">
    <div class="baojing-item">
      <div class="table">
        <a-table :columns="columns" :data-source="data" bordered>
          <div
            slot="filterDropdown"
            slot-scope="{
              setSelectedKeys,
              selectedKeys,
              confirm,
              clearFilters,
              column,
            }"
            style="padding: 8px"
          >
            <a-input
              v-ant-ref="(c) => (searchInput = c)"
              :placeholder="`Search ${column.dataIndex}`"
              :value="selectedKeys[0]"
              style="width: 188px; margin-bottom: 8px; display: block"
              @change="
                (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
              "
              @pressEnter="
                () => handleSearch(selectedKeys, confirm, column.dataIndex)
              "
            />
            <a-button
              type="primary"
              icon="search"
              size="small"
              style="width: 90px; margin-right: 8px"
              @click="
                () => handleSearch(selectedKeys, confirm, column.dataIndex)
              "
              >Search</a-button
            >
            <a-button
              size="small"
              style="width: 90px"
              @click="() => handleReset(clearFilters)"
              >Reset</a-button
            >
          </div>
          <a-icon
            slot="filterIcon"
            slot-scope="filtered"
            type="search"
            :style="{ color: filtered ? '#108ee9' : undefined }"
          />
          <template
            v-for="col in ['name', 'time', 'status', 'address', 'operation']"
            :slot="col"
            slot-scope="text, record, index"
          >
            <span v-if="searchText && searchedColumn === column.dataIndex">
              <template
                v-for="(fragment, i) in text
                  .toString()
                  .split(
                    new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')
                  )"
              >
                <mark
                  v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                  :key="i"
                  class="highlight"
                  >{{ fragment }}</mark
                >
                <template v-else>{{ fragment }}</template>
              </template>
            </span>
            <template v-else>{{ text }}</template>
          </template>
          <!-- <template slot="operation" slot-scope="text, record">
          <a-button v-if="weidu" type="primary" @click="queren1()">未读</a-button>
          <a-button v-else @click="queren2()" style="color:green">已读</a-button>
          </template>-->
        </a-table>
      </div>
    </div>
  </div>
</template>


<script>
const columns = [
  {
    title: "设备名",
    dataIndex: "name",
    width: "20%",
    // sorter: true,
    scopedSlots: {
      filterDropdown: "filterDropdown",
      filterIcon: "filterIcon",
      customRender: "name",
    },
    onFilter: (value, record) =>
      record.name.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus();
        }, 0);
      }
    },
  },
  {
    title: "报警时间",
    dataIndex: "time",
    width: "15%",
    sorter: (a, b) => {
      return Date.parse(a.updateTimer) > Date.parse(b.updateTimer) ? 1 : -1;
    },
    // render: name => `${name.first} ${name.last}`,
    scopedSlots: { customRender: "time" },
  },
  {
    title: "级别",
    dataIndex: "status",
    width: "15%",
    customRender: (text, row, index) => {
      if (text == "严重") {
        return (
          <a style="color:rgba(0, 0, 0, 0.65)">
            <span class="dot"></span>
            {text}
          </a>
        );
      } else if (text == "紧急") {
        return (
          <a style="color:rgba(0, 0, 0, 0.65)">
            <span class="dot1"></span>
            {text}
          </a>
        );
      } else if (text == "预警") {
        return (
          <a style="color:rgba(0, 0, 0, 0.65)">
            <span class="dot2"></span>
            {text}
          </a>
        );
      } else {
        return (
          <a style="color:rgba(0, 0, 0, 0.65)">
            <span class="dot3"></span>
            {text}
          </a>
        );
      }
    },
    scopedSlots: { customRender: "status" },
  },
  {
    title: "详细信息",
    dataIndex: "address",
    width: "30%",
    scopedSlots: { customRender: "address" },
  },
  {
    title: "操作",
    dataIndex: "operation",
    width: "20%",
    scopedSlots: { customRender: "operation" },
  },
];

const data = [];
for (let i = 1; i < 19; i++) {
  data.push({
    key: i.toString(),
    name: `设备 ${i}${i - 1}`,
    time: "2020-04-28 15:57:5" + i,
    status: "通知",
    address: `安徽省合肥市蜀山区 no. ${i}`,
    operation: "未读",
  });
}
export default {
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      data,
      columns,
      editingKey: "",
      weidu: true,
      searchText: "",
      searchInput: null,
      searchedColumn: "",
      select: ["预警", "紧急", "严重", "通知"],
      form: {
        name: "",
        status: "",
      },
    };
  },
  computed: {
    data() {
      return this.data;
    },
  },
  methods: {
    sousuo() {
      // console.log(this.form);
      var form = this.form;
      if (form.name == "" && form.status == "") {
        return this.data;
        // console.log(this.data);
      } else {
        if (form.name != "" && form.status == "") {
          // console.log(form.name);
          return this.data.filter((item) => {
            return item.name.indexOf(form.name > -1);
          });
          // console.log(this.data);
        } else if (form.name == "" && form.status != "") {
          return this.data.filter((item) => {
            return item.status.indexOf(form.status > -1);
          });
        } else {
          return this.data.filter((item) => {
            return item.status.indexOf(this.form.status > -1);
          });
        }
      }
    },
    chongzhi() {
      this.form.name = "";
      this.form.status = "";
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    queren1() {
      this.weidu = false;
    },
    queren2() {
      this.weidu = true;
    },
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },
  },
};
</script>



<style lang="less" scoped>
.baojing {
  .baojing-item {
    margin: 10px auto;
    width: 100%;
    background: #ffffff;
    // .form {
    //   margin: 20px 0px 10px 20px;
    //   padding: 10px;
    // }
    .table {
      // margin: 10px 20px 0px 20px;
      padding: 10px;
    }
  }
  .editable-row-operations a {
    margin-right: 8px;
  }
}
.dot {
  width: 7px;
  height: 7px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}
.dot1 {
  width: 7px;
  height: 7px;
  background-color: #ff9900;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}
.dot2 {
  width: 7px;
  height: 7px;
  background-color: #1890ff;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}
.dot3 {
  width: 7px;
  height: 7px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}
</style>
