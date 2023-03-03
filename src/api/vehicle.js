import request from '@/utils/request'

export function registerVeh(data) {   //注册车辆
    return request({
        url: "/api/v1/product",
        method: "POST",
        data: {
            "protocolType": "MQTT",
            "productName": data.productName,
            "productType": 1,
            "typeIdentify": "tylcc",
            "description": "此产品为通宇用户目录下的冷藏车产品",
            "extraInfo": {
                "tempAndHumi": {
                    "Name": "温湿度传感器数量",
                    "Value": data.num1
                },
                "oil": {
                    "Name": "油位监测设备数量",
                    "Value": data.num5
                },
                "light01": {
                    "Name": "照明灯数量",
                    "Value": data.num6
                },
                "light02": {
                    "Name": "杀菌灯数量",
                    "Value": data.num7
                },
                "tireTempPress": {
                    "Name": "胎温胎压传感器数量",
                    "Value": data.num8
                },
                "door": {
                    "Name": "门数量",
                    "Value": data.num9
                },
                "shake01": {
                    "Name": "横向震动监测数量",
                    "Value": data.num10
                },
                "shake02": {
                    "Name": "纵向震动监测数量",
                    "Value": data.num11
                }

            }
        }
    })
}

export function registerDriver(data) {   //注册司机
  return request({
      url: "/api/v1/product",
      method: "POST",
      data: {
          "protocolType": "MQTT",
          "productName": data.productName,
          "productType": 1,
          "typeIdentify": "tysj",
          "description": "此产品为通宇用户目录下的司机",
          "extraInfo": {
              "age": data.age,
              "driverAge": data.driverAge,
              "phone":data.phone,
              "idNumber":data.idNumber,
              "account": data.account

          }
      }
  })
}

export function tempAndHumi(data) {   //批量注册车辆温湿度设备
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number1),
            "netType": "4G",
            "deviceType": "温湿度设备",
            "extraInfo": {}
        }
    })
}



export function oil(data) {   //批量注册车辆油位监测设备
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number5),
            "netType": "4G",
            "deviceType": "油位监测设备",
            "extraInfo": {}
        }
    })
}
export function light01(data) {   //批量注册车辆照明灯
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number6),
            "netType": "4G",
            "deviceType": "照明灯",
            "extraInfo": {}
        }
    })
}
export function light02(data) {   //批量注册车辆杀菌灯
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number7),
            "netType": "4G",
            "deviceType": "杀菌灯",
            "extraInfo": {}
        }
    })
}
export function tireTempPress(data) {   //批量注册车辆胎温胎压传感器
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number8),
            "netType": "4G",
            "deviceType": "胎温胎压传感器",
            "extraInfo": {}
        }
    })
}
export function door(data) {   //批量注册门
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number9),
            "netType": "4G",
            "deviceType": "门",
            "extraInfo": {}
        }
    })
}
export function shake01(data) {   //批量注册横向震动监测设备
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number10),
            "netType": "4G",
            "deviceType": "横向震动监测设备",
            "extraInfo": {}
        }
    })
}
export function shake02(data) {   //批量注册纵向震动监测设备
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number11),
            "netType": "4G",
            "deviceType": "纵向震动监测设备",
            "extraInfo": {}
        }
    })
}

export function deleteProduct(data) {     //删除车辆
    return request({
        url: '/api/v1/product?productKey=' + data.key,
        method: 'DELETE',
        data
    })
}

export function updateProduct(data) {     //修改车辆信息
  return request({
      url: '/api/v1/product',
      method:'PUT',
      data
  })
}

export function productMessage(pk) {     //修改车辆信息
  return request({
      url: '/api/v1/productDetail?productKey='+pk,
      method:'GET',
  })
}
