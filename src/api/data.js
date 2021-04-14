import request from '@/utils/request'

export function product(data) {     //产品列表,即为所有冷藏车与司机信息
  return request({
    url: '/api/v1/product',
    method: 'GET',
    data
  })
}
export function getdeviceList(data) {//设备devicekey列表
  return request({
    url: '/api/v1/productDetail?productKey=' + data.key,
    method: 'GET',
    data
  })
}
export function getdeviceData(data) {//获取设备全部信息
  return request({
    //   url: '/api/v1/deviceDetail?productKey='+data. productKey+'&deviceKey='+data.deviceKey,
    url: '/api/v1/batchDeviceData',
    method: 'POST',
    data: {
      'productKey': data.productKey,
      "deviceKeyList": data.deviceKey
    }
  })
}
export function getdeviceDetail(data) {//获取设备全部信息
  return request({
    url: '/api/v1/deviceDetail?productKey=' + data.productKey + '&deviceKey=' + data.deviceKey,
    //   url: '/api/v1/deviceDetail',
    method: 'get',
    // //   data
    //   data:{
    //     'productKey':data.productKey,
    //     "deviceKeyList":data.deviceKey
    //   }
  })
}
export function gethistorynumData(data) {
  return request({
    //   url: '/api/v1/deviceDetail?productKey='+data. productKey+'&deviceKey='+data.deviceKey,
    url: '/api/v1/recentData',
    method: 'POST',
    //   data
    data: {
      "productKey": data.key1,
      'deviceKey': data.key,
      'num': 12,
      "asc": 0
    }
  })
}
export function gethistorydeviceData(data) {
  // console.log(data)
  return request({
    // url: '/api/v1/deviceDetail?productKey='+data. productKey+'&deviceKey='+data.devicekey,
    url: '/api/v1/historyData',
    method: 'POST',
    data: {
      "deviceKey": data.historydevicekey,
      "startTime": data.starttime,
      "endTime": data.endtime,
      "asc": 0  //逆序
    }
  })
}
//报警总数
export function getalerttotal(data) {
  // console.log(data)
  return request({
    // url: '/api/v1/unreadAlertCount?username="漳州港招商码头"'+,
    url: '/api/v1/unreadAlertCount',
    // method: 'post',
    method: 'get',
    data: {
      // "username": data.username,
      // "username":"漳州港招商码头"
    }
  })
}
// 指定用户的所有产品设备的报警消息
export function getuseralert(data) {
  // console.log(data)
  return request({
    // url: '/api/v1/deviceDetail?productKey='+data. productKey+'&deviceKey='+data.devicekey,
    url: '/api/v1/userAlertInfos',
    method: 'post',
    data: {
      // "username": data.username,
      // "username": "漳州港招商码头",
      "pageIndex": data.pageindex,
      "pageSize": data.pagesize,
      "asc": 0,     //0：倒序，1：正序    
      "unRead": data.unread  //0：已读；1：未读；2：全部 
    }
  })
}

//查看用户某个时间段内所有设备的报警数量排行  按照count倒叙排列
export function devicealertlist(data) {
  // console.log(data)
  return request({
    // url: '/api/v1/deviceDetail?productKey='+data. productKey+'&deviceKey='+data.devicekey,
    url: '/api/v1/deviceRankList',
    method: 'post',
    data: {
      // "username": data.username,
      "startTime": data.starttime,
      "endTime": data.endtime,
    }
  })
}

// 获取用户/设备报警时间分布
export function alerttimelist(data) {
  return request({
    // url: '/api/v1/deviceDetail?productKey='+data. productKey+'&deviceKey='+data.devicekey,
    url: '/api/v1/alertDistribution',
    method: 'post',
    data: {
      // "username": data.username,
      "startTime": data.starttime,
      "endTime": data.endtime,
      "interval":data.interval,
    }
  })
}
//获取用户设备状态统计信息
//统计在线不在线状态
export function devicestatus(data) {
  return request({
    // url: '/api/v1/deviceDetail?productKey='+data. productKey+'&deviceKey='+data.devicekey,
    url: '/api/v1/allStatus?timeout=10800',
    // method: 'post',
    method: 'get',
    data: {
      // "username": data.username,
      // "username": "漳州港招商码头",
    }
  })
}
//批量更新alertId报警记录的已读状态
export function alertstatus(data) {
  return request({
    // url: '/api/v1/deviceDetail?productKey='+data. productKey+'&deviceKey='+data.devicekey,
    url: '/api/v1/productAlertInfos',
    method: 'post',
    data: {
      "alertIds":data.alertId
    }
  })
}
// 获取指定产品的所有设备状态统计信息
export function onlinestatus(data) {
  return request({
    url: '/api/v1/productStatus?timeout='+data.timeout+'&productKey='+data.productKey,
    // url: '/api/v1/productAlertInfos',
    method: 'get'
  })
}
//获取当前用户设备状态统计信息
export function useronlinestatus(data) {
  return request({
    url: '/api/v1/allStatus?timeout='+data.timeout,
    // url: '/api/v1/productAlertInfos',
    method: 'get'
  })
}
//获取产品的历史节点信息
export function productdetail(data) {
  return request({
    url: '/api/v1/productDataPoint',
    method: 'post',
    data: {
      "productKey":data.productkey,
      "startTime":data.starttime,//选择的时间节点的前半小时时间，比如7:30
      "endTime":data.endtime//选择的时间节点的后半小时时间，比如8:30
    }
  })
}
//修改产品信息
export function updateproduct(data) {
  return request({
    url: '/api/v1/product',
    method: 'put',
    data: {
      "productKey": data.productkey, // 此字段不可修改!!
      "protocolType": data.protocoltype, // 可修改
      "productName": data.productname,
      "productType": data.producttype,
      "typeIdentify": data.typeidentify,
      "description": data.description,
      "extraInfo": data.extrainfo
    }
  })
}