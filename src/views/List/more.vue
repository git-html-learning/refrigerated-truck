<template>
<div>
    <div>
     <el-row style="height:250px">
      <el-col :span="16">
      <a-card title="箱内温湿度监测" :bordered="false" style="width: 666px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
      <el-col :span="8">
       <a-card title="皖A222" :bordered="false" style="width: 320px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
    </el-row>
         <el-row style="height:200px">
      <el-col :span="8">
      <a-card title="车门" :bordered="false" style="width:320px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
        <el-col :span="8">
      <a-card title="灯开关" :bordered="false" style="width: 320px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
      <el-col :span="8">
       <a-card title="报警装置" :bordered="false" style="width: 320px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
    </el-row>
         <el-row style="height:250px">
      <el-col :span="16">
      <a-card title="胎温胎压" :bordered="false" style="width: 666px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
      <el-col :span="8">
       <a-card title="冷机" :bordered="false" style="width: 320px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
    </el-row>
     <el-row style="height:250px">
      <el-col :span="12">
      <a-card title="皖A222" :bordered="false" style="width: 500px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
      <el-col :span="12">
       <a-card title="车辆震动曲线图" :bordered="false" style="width: 495px">
         <p>Card content</p>
         <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
      </el-col>
    </el-row>
    </div>

    <div v-show="showPage==='2'">
      <div>
        <i class="el-icon-back" style='font-size:40px' @click='back()'></i>
      </div>
      
            <div align="center" class='warehouse'>
              {{warehouseName}}
            </div>

    <el-table
      :data="
        table3
      "
      :span-method="objectSpanMethod"
      border
      style="width: 100%"
    >

      <el-table-column
        v-for="{ prop, label } in colConfigs"
        :key="prop"
        :prop="prop"
        :label="label"
        align="center"
      >
      </el-table-column>
      </el-table>
        
    </div>

</div>
</template>

<script>
import store from '@/store'
import {product,getdeviceList,getdeviceData} from '@/api/data'

export default{
    name:'queryList1',
    data(){
      (this.colConfigs = [
        { prop: "cable", label: "电缆" },
        { prop: "layer", label: "层" },
        { prop: "temp1", label: "第1个点" },
        { prop: "temp2", label: "第2个点" },
        { prop: "temp3", label: "第3个点" },
        { prop: "temp4", label: "第4个点" },
        { prop: "temp5", label: "第5个点" },
        { prop: "temp6", label: "第6个点" },
        { prop: "temp7", label: "第7个点" },
        { prop: "temp8", label: "第8个点" },
       
      ]);

        return{
            showPage:'1',
            productList:[], //仓库数据
            warehouseName:'',   //仓库名
            table1:[],    //每个粮仓的设备列表
            table2:[],    //每个粮仓的各个电缆数据
            table3:[],    //需要展示的数据
            productkey:'',
            devicekey:[],
            a:[],    //存放各个电缆温度
            j:[],   //每个电缆实际值需要的层数
            max:'',   //各个电缆层数最大值
            b:[],   //拷贝a
            c:[],   //每条电缆的温度
            deviceInfo:[],     //第一次输出信息
            deviceData:[],     //第二次输出信息


        }
    },
    created(){
        this.getproductList()
    },
    methods:{
      back(){
        this.showPage='1'
        this.table1=[]
        this.table2=[]
        this.table3=[]
      },
        // async getproductList(){
        //     var _this=this
        //     console.log('111');
        //     const res=await product()
        //     console.log(res);
        //     _this.productList=res.data.productInfo
        // },
        getproductList(){   //获取仓库信息
            var _this=this
            product().then((res)=>{
                //  console.log(res);
                _this.productList=res.data.productInfo
            })
        },
        more(data){
            // console.log(data);
            this.showPage='2'
            this.warehouseName=data.productName
            this.productkey=data.productKey
            this.getDeviceList()
        },
        async getDeviceList(){
            var _this=this
            const res=await getdeviceList({
                key:_this.productkey
            })
                // console.log(res);
                // console.log(res.data.deviceInfo);
                _this.deviceInfo=res.data.deviceInfo
                _this.table1=res.data.deviceInfo
                // console.log(_this.table1);
                for(var i=0;i < _this.table1.length;i++){
                    _this.devicekey.push(_this.table1[i].deviceKey)
                    // _this.productkey=_this.table1[i].productKey

                }
                _this.getDeviceData()

                // console.log(_this.productkey);
                // console.log('111');
                // console.log(_this.devicekey);
            
        },
        async getDeviceData(){
            var _this=this
            // console.log(_this.productkey);
            // console.log('111111');
            // console.log(_this.devicekey);
            const res=await getdeviceData({
                productKey:_this.productkey,
                deviceKey:_this.devicekey
            })
            // console.log(res);
            // console.log(res.data.deviceData);
            _this.deviceData=res.data.deviceData
            _this.table2=res.data.deviceData


            for(var i = 0; i < _this.deviceInfo.length; i++){
              var obj1 = _this.deviceInfo[i];
              var name = obj1.deviceName;
              var isExist = false;
              for(var j = 0; j < _this.deviceData.length; j++){
                var aj = _this.deviceData[j];
                var n = aj.deviceName;
                if(n == name){
                    isExist = true;
                    break;
                }
              }
              if(!isExist){
                var obj2={
                  deviceName:obj1.deviceName,
                  cableTemp:['*']
                }
              _this.table2.push(obj2);
              }
            }
            // console.log(_this.deviceData);
            // console.log(_this.table2);

            
            for(var i=0;i<_this.table2.length;i++){
                // console.log(_this.table2[i].cableTemp);
                _this.a[i]=_this.table2[i].cableTemp
                // console.log(_this.a[i]);
                // console.log(_this.a[i].length);
                _this.j[i]=Math.ceil(_this.a[i].length/8)
                // console.log(_this.j[i]);

            }

            // console.log(_this.j);
            _this.max = Math.max(..._this.j);
            // console.log(_this.max);
            // _this.b=JSON.parse(JSON.stringify(_this.a))    //深拷贝
             _this.b=_this.a.concat()     //深拷贝？循环迭代没问题，但是最后结果a与b相同
            // _this.b.push("*")
            // console.log(_this.a);
            // console.log(_this.b);

            for(var i=0;i<_this.table2.length;i++){
                // console.log(_this.a[i]);
                // console.log((_this.max*8)-(_this.a[i].length));
                var length=(_this.max*8)-(_this.a[i].length)
                for(var x=0;x<length;x++){
                    // console.log(x);
                    _this.b[i].push('*')
                }
                // console.log(_this.a[i]);
                // console.log(_this.b[i]);
            }

            for(var i=0;i<_this.table2.length;i++){
              _this.c=_this.a[i]
              // console.log(_this.c); 
              for(var y=0;y<_this.max*8;y++){
                if (_this.c[y]!='*'){
                  _this.c[y]=_this.c[y]+'℃'
                }
              }  
              // console.log(_this.c); 
              for(var x=0;x<_this.max;x++){
                  // console.log(x+1);
                  // console.log(_this.c[x*8]);
                  // console.log(_this.table2[i].deviceName);
                  var obj={
                    cable:_this.table2[i].deviceName,
                    layer:'第'+(x+1)+'层',
                    temp1:_this.c[x*8+0],
                    temp2:_this.c[x*8+1],
                    temp3:_this.c[x*8+2],
                    temp4:_this.c[x*8+3],
                    temp5:_this.c[x*8+4],
                    temp6:_this.c[x*8+5],
                    temp7:_this.c[x*8+6],
                    temp8:_this.c[x*8+7],
                  } 
                  // console.log(obj);
                  _this.table3.push(obj)               
              }
            }
            console.log(_this.table3);  


        },


        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 3 === 0) {
                    return [3,1]
                } else {
                    return [0,0];
                }
            }
        }        


    }
}
</script>

<style>
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
 