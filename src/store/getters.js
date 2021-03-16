const getters = {  
    token: state => state.user.token,
    token1: state => state.user.token1,
    productList:state => state.user.productList,
    deviceList:state => state.user.deviceList,
    total:state=>state.user.total,
  }
  export default getters
  