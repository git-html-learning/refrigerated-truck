<template>
<div>
    <div >
     <el-row style="height:240px">
      <el-col :span="24">
 <el-row>
      <el-col :span="5">
 <a-card title="总报警数" :bordered="false" style="width: 200px">
      <a-statistic title="累计报警数" :value="112893" style="margin-right: 50px" />
    <a-statistic title="本周报警数" :precision="2" :value="556" />
    <br>
    </a-card>
      </el-col>
      <el-col :span="19">
       <a-card title="近一周活动发布" :bordered="false" style="width: 100%">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>   
      <p>Card content</p>   
      
    </a-card>
      </el-col>
    </el-row>
      </el-col>
    </el-row>
         <el-row style="height:300px">
      <el-col :span="24">
        <a-card
      style="width:100%"
      title="所属类目"
      :tab-list="tabList"
      :active-tab-key="key"
      @tabChange="key => onTabChange(key, 'key')"
    >
      <span slot="customRender" slot-scope="item"> <a-icon type="home" />{{ item.key }} </span>
      <a slot="extra" href="#">More</a>
      {{ contentList[key] }}
       <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
    </a-card>
      </el-col>
    </el-row>
    </div>


</div>
</template>

<script>
import store from '@/store'
import {product,getdeviceList,getdeviceData} from '@/api/data'

export default{
data() {
    return {
       data,
      columns,
      tabList: [
        {
          key: 'tab1',
          tab:'全部',
          scopedSlots: { tab: 'customRender' },
        },
        {
          key: 'tab2',
          tab: '胎温',
        },
           {
          key: 'tab3',
          tab: '胎压',
        },
           {
          key: 'tab4',
          tab: '温湿度',
        },
           {
          key: 'tab5',
          tab: '震动',
        },
           {
          key: 'tab6',
          tab: '油位',
        },
      ],
      contentList: {
        tab1: 'content1',
        tab2: 'content2',
        tab3: 'content3',
        tab4: 'content4',
        tab5: 'content5',
        tab6: 'content6',
      },
      key: 'tab1',
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
  },
};
const columns = [
  {
    title: '车牌号',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '时间',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: '报警位置',
    dataIndex: 'address1',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: '数值',
    dataIndex: 'address2',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: '司机',
    dataIndex: 'address3',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'address4',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: '皖A2222',
    age: "2020-01-01 09:00",
    address1: '轮胎1',
    address2: '100°C',
    address3: '某某某',
    address4: '通知',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '皖A2223',
    age: "2020-01-01 09:00",
    address1: '油位',
    address2: '1%',
    address3: '某某某',
    address4: '通知',
    tags: ['nice', 'developer'],
  },
  {
    key: '3',
    name: '皖A2225',
    age: "2020-01-01 09:00",
    address1: '温湿度测量点1',
    address2: '55°C 30%',
    address3: '某某某',
    address4: '通知',
    tags: ['nice', 'developer'],
  },
   {
    key: '4',
    name: '皖A2225',
    age: "2020-01-01 09:00",
    address1: '温湿度测量点2',
    address2: '15°C',
    address3: '某某某',
    address4: '通知',
    tags: ['nice', 'developer'],
  },
];

</script>

<style lang="less">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 30px;
  }
  .bg-purple-light {
    background: #FFFFFF;
  }
  .grid-content {
    border-radius: 40px;
    min-height: 50px;
    font-size: 24px;
    font-weight: 700;
    line-height: 70px;
  }
  .grid-content1 {
    border-radius: 40px;
    min-height: 250px;
    margin: 15px 5px 15px 0px;
    box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .warehouse{
    font-size:30px;
    color:#409EFF
  }

</style>
