<template>
    <div class="layout">
           <component :is="currentRole"></component>
    </div>
</template>
<script>
import admin from "./admin/index.vue";
import loading from "./loading/index.vue";
import user from "./user/index.vue";
import { person } from "@/api/user";
export default {
    name:"index",
  components: {
    admin,
    user,
    loading
  },
    data() {
        return {
            currentRole: "loading"
        }
    },
    // created() {
    //     var username = window.sessionStorage.getItem("username")
    //     console.log(username)
    //     person(username).then((res)=>{
    //         console.log(res)
    //         if (res.msg == "ok") {
    //             var role = res.data.extraInfo.role
    //             console.log(role)
    //             if (role == "admin") {
    //                 this.currentRole = "admin"
    //             } else if (role == "user") {
    //                 this.currentRole ="user"
    //             }
    //         }
    //     })
    // }
}
</script>