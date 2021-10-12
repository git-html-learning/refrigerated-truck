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

