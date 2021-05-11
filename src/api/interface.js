import request from '@/utils/request'

export function product(data) {     //获取产品列表,即为所有冷藏车与司机信息
    return request({
        url: '/api/v1/product',
        method: 'GET',
        data
    })
}

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
                "refrigeration": {
                    "Name": "冷机数量",
                    "Value": data.num2
                },
                "capacity": {
                    "Name": "容量监测设备数量",
                    "Value": data.num3
                },
                "load": {
                    "Name": "载重监测设备数量",
                    "Value": data.num4
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
export function refrigerator(data) {   //批量注册车辆冷机设备
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number2),
            "netType": "4G",
            "deviceType": "冷机设备",
            "extraInfo": {}
        }
    })
}
export function capacity(data) {   //批量注册车辆容量监测设备
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number3),
            "netType": "4G",
            "deviceType": "容量监测设备",
            "extraInfo": {}
        }
    })
}
export function load(data) {   //批量注册车辆载重监测设备
    return request({
        url: "/api/v1/batchDevice",
        method: "POST",
        data: {
            "productKey": data.productKey,
            "deviceCount": parseInt(data.number4),
            "netType": "4G",
            "deviceType": "载重监测设备",
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
