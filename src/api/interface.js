import request from '@/utils/request'

export function product(data) {     //获取产品列表,即为所有冷藏车与司机信息
    return request({
        url: '/api/v1/product',
        method: 'GET',
        data
    })
}

export function getDevice(data) {       //获取设备列表
    return request({
        url: '/api/v1/productDetail?productKey='+data.productKey,
        method: 'GET',
        data
    })
}

export function editProduct(data) {       //更新指定产品信息
    return request({
        url: '/api/v1/product',
        method: 'PUT',
        data
    })
}




export function getDeviceData(data) {       //获取设备最新数据
    return request({
        url: '/api/v1/batchDeviceData',
        method: 'POST',
        data:{
            "productKey":data.productKey,
            "deviceKeyList":data.deviceKeyList
        }
    })
}

export function getDeviceHisData(data) {       //获取设备历史数据
    return request({
        url: '/api/v1/historyData',
        method: 'POST',
        data:{
            "deviceKey":data.deviceKey,
            "startTime":data.startTime, // 开始时间
            "endTime":data.endTime, // 截止时间，一定要大于起始时间
            "asc":1 // 0 逆序 1 升序
            }
    })
}

export function changeLight(data) {       //灯下发
    return request({
        url: '/api/v1/newDownRaw?deviceType=kbox1&bodyType=json&timeout=2',
        method: 'POST',
        data:data
    })
}


export function driver(data) { //获取司机信息（查询指定产品）
    return request({
        url: '/api/v1/productDetail?productKey=' + data.key,
        method: 'GET',
        data
    })
}

export function registerDri(data) {   //注册司机(创建设备)
    return request({
        url: '/api/v1/device?productKey=' + data.pKey,
        method: 'POST',
        data:
        {
            "deviceName": "通宇司机" + data.deviceName,
            "nickname": "", //打算使用司机的身份证
            "netType": "BlueTooth",
            "deviceType": "Driver",
            "extraInfo": {
                "Name": {
                    "Name": "司机姓名",
                    "Value": data.deviceName,
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true
                },
                "ID": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "司机身份证号码",
                    "Value": data.name1,
                },
                "PhoneNumber": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "司机手机号码",
                    "Value": data.num1
                },
                "Age": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "司机年龄",
                    "Value": data.num2
                },
                "DriveYear": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "驾龄",
                    "Value": data.num3
                },
                "Account": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "银行账户",
                    "Value": data.num4
                }
            }

        }
    })
}

export function founddriver(data) {   //详情(查询指定设备详情)
    return request({
        url: '/api/v1/productDetail?productKey=' + data.pKey,
        method: 'GET',
        data
    })
}

export function editdriver(data) {  //修改司机信息（更新指定设备信息）
    return request({
        url: '/api/v1/device',
        method: 'PUT',
        data:
        {
            "productKey": data.productKey,
            "deviceKey": data.dKey,
            "deviceName": "通宇司机" + data.name,
            "nickname": data.dKey, //打算使用司机的身份证
            "netType": "BlueTooth",
            "deviceType": "Driver",
            "extraInfo": {
                "Name": {
                    "Name": "司机姓名",
                    "Value": data.name,
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true
                },
                "ID": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "司机身份证号码",
                    "Value": data.ID,
                },
                "PhoneNumber": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "司机手机号码",
                    "Value": data.phnum
                },
                "Age": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "司机年龄",
                    "Value": data.agenum
                },
                "DriveYear": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "驾龄",
                    "Value": data.drinum
                },
                "Account": {
                    "userEditable": true,
                    "userVisible": true,
                    "adminEditable": true,
                    "adminVisible": true,
                    "Name": "银行账户",
                    "Value": data.monnum
                }
            }

        }
    })
}

export function allProductData(data) {       //查询多个产品下所有设备最新数据
  return request({
      url: '/api/v1/batchProductData',
      method: 'POST',
      data
  })
}

export function registerDevice(data,pk) {       //创建设备
    return request({
        url: '/api/v1/device?productKey='+pk,
        method: 'POST',
        data
    })
}
