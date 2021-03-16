<template>

  <div style="background-color: #ececec; padding: 20px;">
   <a-space style="padding-right:30px">
     <a-button  @click="() => setModal1Visible(true)">
      上传司机信息
    </a-button>
    <a-modal
      title="填写司机信息"
      cnetered
      :visible="modal1Visible"
      @ok="() => setModal1Visible(false)"
      @cancel="() => setModal1Visible(false)"
    >
      <p>姓名...</p>
      <p>电话...</p>
     
    </a-modal>
  </a-space>
  <br>
  <br>
    <a-row :gutter="16">
      <a-col :span="8">
     <a-card hoverable style="width: 300px">

    <template slot="actions" class="ant-card-actions">
     
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
    <a-card-meta title="某某某" description="Tel：xxxxx">

      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
      </a-col>
      <a-col :span="8">
       <a-card hoverable style="width: 300px">

    <template slot="actions" class="ant-card-actions">
     
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
      <a-card-meta title="某某某" description="Tel：xxxxx">

      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
      </a-col>
      <a-col :span="8">
       <a-card hoverable style="width: 300px">

    <template slot="actions" class="ant-card-actions">
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
      <a-card-meta title="某某某" description="Tel：xxxxx">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
      </a-col>
    </a-row>
    <br>
     <a-row :gutter="16">
          <a-col :span="8">
       <a-card hoverable style="width: 300px">

    <template slot="actions" class="ant-card-actions">
     
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
       <a-card-meta title="某某某" description="Tel：xxxxx">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
      </a-col>
         <a-col :span="8">
       <a-card hoverable style="width: 300px">

    <template slot="actions" class="ant-card-actions">
     
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
      <a-card-meta title="某某某" description="Tel：xxxxx">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
      </a-col>
           <a-col :span="8">
       <a-card hoverable style="width: 300px">

    <template slot="actions" class="ant-card-actions">
     
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
       <a-card-meta title="某某某" description="Tel：xxxxx">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
      </a-col>
    </a-row>

  </div>
  
</template>
<script>
export default {
  data() {
    return {
      modal1Visible: false,
    };
  },
  methods: {
    setModal1Visible(modal1Visible) {
      this.modal1Visible = modal1Visible;
    },
  },
};
</script>
