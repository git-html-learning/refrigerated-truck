<template>
 <div>
     <el-row >
      <el-col :span="20">
       <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="用户名">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item label="电话">
        <a-input v-model="form.tel" />
    </a-form-model-item>
    <a-form-model-item label="密码">
        <a-input v-model="form.mima" />
    </a-form-model-item>
    <a-form-model-item label="邮箱">
        <a-input v-model="form.email" />
    </a-form-model-item>
    <a-form-model-item label="微信">
        <a-input v-model="form.vx" />
    </a-form-model-item>
  <a-form-model-item label="所在省市">
        <a-input v-model="form.省市" />
    </a-form-model-item>
  

    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        更新信息
      </a-button>
      <a-button style="margin-left: 10px;">
        取消
      </a-button>
    </a-form-model-item>
  </a-form-model>
      </el-col>
      <el-col :span="4">
 <a-upload
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <a-icon :type="loading ? 'loading' : 'plus'" />
      <div class="ant-upload-text">
        更换头像
      </div>  
    </div>
  </a-upload>
      </el-col>

    </el-row>
    </div>
 
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
  },
};
</script>
