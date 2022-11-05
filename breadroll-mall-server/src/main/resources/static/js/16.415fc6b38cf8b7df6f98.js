webpackJsonp([16],{"62Xl":function(e,t){},NN8W:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"RoleList",data:function(){return{roleInfo:[],VAR:this.$VAR,roleInfoResource:[],roleDialogVisible:!1,handleIndex:0,insert:!1,roleInfoForm:{key:""},alterForm:{roleId:"",roleName:"",roleDescribe:"",roleState:1},alterRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:1,max:30,message:"名称长度不允许超过 30 个字符",trigger:"blur"}],roleDescribe:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:1,max:100,message:"描述信息长度不允许超过 100 个字符",trigger:"blur"}]}}},methods:{queryRoleInfo:function(){if(0!==this.roleInfoForm.key.length){this.roleInfo=[];for(var e=0,t=this.roleInfoResource.length;e<t;e++)-1!==this.roleInfoResource[e].roleName.indexOf(this.roleInfoForm.key)?this.roleInfo.push(this.roleInfoResource[e]):-1!==this.roleInfoResource[e].roleDescribe.indexOf(this.roleInfoForm.key)&&this.roleInfo.push(this.roleInfoResource[e])}else this.roleInfo=this.roleInfoResource},resetForm:function(e){this.$refs[e].resetFields()},openChange:function(e){this.handleIndex=e,this.insert=!1,this.alterForm=this.roleInfo[e],this.roleDialogVisible=!0},submitChange:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.insert?t.$http.post("/role/existRoleName?roleId=0&roleName="+t.alterForm.roleName).then(function(e){if(200===e.data.code)if(e.data.data)t.$alert("角色("+t.alterForm.roleName+")\t已存在，不能重复添加","警告",{confirmButtonText:"确定",type:"warning"});else{var o=t.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});t.$http.post("/role/add",t.$qs.stringify(t.alterForm)).then(function(e){o.close(),200===e.data.code?(t.roleDialogVisible=!1,t.reqInfo(),t.$notify({title:"成功",message:"角色("+t.alterForm.roleName+")\t添加成功",type:"success"})):t.$notify({title:"错误",message:e.data.message,type:"error"})}).catch(function(e){o.close(),t.$msg.error(e)})}}).catch(function(e){t.$msg.error(e)}):t.$http.post("/role/existRoleName?roleId="+t.roleInfo[t.handleIndex].roleId+"&roleName="+t.alterForm.roleName).then(function(e){if(200===e.data.code)if(e.data.data)t.$alert("角色("+t.alterForm.roleName+")\t已存在，无法完成修改操作","警告",{confirmButtonText:"确定",type:"warning"});else{var o=t.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});t.$http.post("/role/update",t.$qs.stringify(t.alterForm)).then(function(e){o.close(),200===e.data.code?(t.roleDialogVisible=!1,t.roleInfo[t.handleIndex]=t.alterForm,t.$notify({title:"成功",message:"角色("+t.roleInfo[t.handleIndex].roleName+")\t信息更新成功",type:"success"})):t.$notify({title:"错误",message:e.data.message,type:"error"})}).catch(function(e){o.close(),t.$msg.error(e)})}}).catch(function(e){t.$msg.error(e)})})},addRole:function(){delete this.alterForm.roleId,this.alterForm.roleName="",this.alterForm.roleDescribe="",this.insert=!0,this.roleDialogVisible=!0},cancelChange:function(e){this.roleDialogVisible=!1,this.$refs[e].resetFields(),this.$notify({title:"操作取消",message:"",type:"success"})},deleteRole:function(e,t){var o=this,r=this.roleInfo[e].roleName;this.$http.post("/userRole/existsRole?roleId="+this.roleInfo[e].roleId).then(function(l){200===l.data.code&&(l.data.data?o.$alert("角色("+r+")\t下存在用户，无法删除","警告",{confirmButtonText:"确定",type:"warning"}):o.$confirm("此操作将永久删除该角色信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var r=o.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});o.$http.post("/role/delete?roleId="+o.roleInfo[e].roleId).then(function(l){if(r.close(),200===l.data.code){var n=o.roleInfo[e].roleName;t.splice(e,1),o.$notify({title:"成功",message:"角色("+n+")\t移除成功",type:"success"})}else o.$notify({title:"错误",message:l.data.message,type:"error"})}).catch(function(e){r.close(),o.$msg.error(e)})}).catch(function(){o.$notify({title:"成功",message:"操作取消",type:"success"})}))}).catch(function(e){o.$msg.error(e)})},isRoleState:function(e){var t=this,o=this.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});this.$http.post("/role/update?roleId="+this.roleInfo[e].roleId+"&roleState="+this.roleInfo[e].roleState).then(function(r){o.close(),200===r.data.code&&(t.roleInfo[e].roleState?t.$notify({title:"成功",message:t.roleInfo[e].roleName+"\t已启用",type:"success"}):t.$notify({title:"成功",message:t.roleInfo[e].roleName+"\t已禁用",type:"success"}))}).catch(function(e){o.close(),t.$msg.error(e)})},reqInfo:function(){var e=this;this.$http.post("/role/findAll").then(function(t){200===t.data.code&&(e.roleInfoResource=e.roleInfo=t.data.data.filter(function(e){return e.roleName!==VAR.ordinaryRole}))}).catch(function(t){e.$msg.error(t)})}},created:function(){this.reqInfo()}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"role-list"},[o("el-card",{staticClass:"user-hd",attrs:{shadow:"never"}},[o("div",{staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[o("i",{staticClass:"el-icon-search"}),e._v(" "),o("span",[e._v("筛选搜索")]),e._v(" "),o("el-button",{staticClass:"el-button-search",staticStyle:{right:"111px"},attrs:{type:"primary"},on:{click:function(t){return e.queryRoleInfo()}}},[e._v("查询")]),e._v(" "),o("el-button",{staticClass:"el-button-search",staticStyle:{right:"20px"},on:{click:function(t){return e.resetForm("roleInfoForm")}}},[e._v("重置")])],1),e._v(" "),o("el-form",{ref:"roleInfoForm",staticClass:"query-form",attrs:{model:e.roleInfoForm,inline:""}},[o("el-form-item",{attrs:{label:"输入搜索：",prop:"key"}},[o("el-input",{attrs:{clearable:"",placeholder:"角色名称/描述"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.queryRoleInfo.apply(null,arguments)}},model:{value:e.roleInfoForm.key,callback:function(t){e.$set(e.roleInfoForm,"key",t)},expression:"roleInfoForm.key"}})],1)],1)],1),e._v(" "),o("el-card",{staticClass:"role-box",attrs:{shadow:"never"}},[o("div",{staticStyle:{"text-align":"left",position:"relative"},attrs:{slot:"header"},slot:"header"},[o("i",{staticClass:"el-icon-coin"}),e._v(" "),o("span",[e._v("数据列表")]),e._v(" "),o("el-button",{staticClass:"el-button-add",on:{click:e.addRole}},[e._v("添加")])],1),e._v(" "),o("el-table",{staticClass:"type-table",staticStyle:{width:"100%"},attrs:{data:e.roleInfo,height:"425",border:""}},[o("el-table-column",{attrs:{prop:"roleId",label:"编号",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"roleName",label:"角色",width:"300"}}),e._v(" "),o("el-table-column",{attrs:{prop:"roleDescribe",label:"描述",width:"500"}}),e._v(" "),o("el-table-column",{attrs:{label:"是否启用",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{attrs:{disabled:-1!==e.roleInfo[t.$index].roleName.indexOf(e.VAR.adminRole)||-1!==e.roleInfo[t.$index].roleName.indexOf(e.VAR.ordinaryRole)},on:{change:function(o){return e.isRoleState(t.$index)}},model:{value:e.roleInfo[t.$index].roleState,callback:function(o){e.$set(e.roleInfo[t.$index],"roleState",o)},expression:"roleInfo[scope.$index].roleState"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{staticStyle:{margin:"0 2%"},attrs:{size:"mini",disabled:-1!==e.roleInfo[t.$index].roleName.indexOf(e.VAR.adminRole)||-1!==e.roleInfo[t.$index].roleName.indexOf(e.VAR.ordinaryRole)},on:{click:function(o){return e.openChange(t.$index)}}},[e._v("编辑")]),e._v(" "),o("el-button",{staticStyle:{margin:"0 2%"},attrs:{slot:"reference",size:"mini",disabled:-1!==e.roleInfo[t.$index].roleName.indexOf(e.VAR.adminRole)||-1!==e.roleInfo[t.$index].roleName.indexOf(e.VAR.ordinaryRole),type:"danger"},on:{click:function(o){return e.deleteRole(t.$index,e.roleInfo)}},slot:"reference"},[e._v("删除")])]}}])})],1)],1),e._v(" "),o("el-dialog",{staticClass:"user-dialog",attrs:{title:"编辑角色信息","close-on-click-modal":!1,visible:e.roleDialogVisible,center:""},on:{"update:visible":function(t){e.roleDialogVisible=t}}},[o("el-form",{ref:"changeFrom",staticClass:"info-form",attrs:{inline:"",rules:e.alterRules,model:e.alterForm}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"角色名称：",prop:"roleName"}},[o("el-input",{attrs:{size:"small",placeholder:"角色名称"},model:{value:e.alterForm.roleName,callback:function(t){e.$set(e.alterForm,"roleName",t)},expression:"alterForm.roleName"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"角色描述：",prop:"roleDescribe"}},[o("el-input",{attrs:{size:"small",type:"textarea",autosize:"",placeholder:"角色描述"},model:{value:e.alterForm.roleDescribe,callback:function(t){e.$set(e.alterForm,"roleDescribe",t)},expression:"alterForm.roleDescribe"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{staticStyle:{padding:"12px 54px",margin:"0 55px"},attrs:{type:"primary"},on:{click:function(t){return e.submitChange("changeFrom")}}},[e._v("确 定")]),e._v(" "),o("el-button",{staticStyle:{padding:"12px 54px",margin:"0 55px"},on:{click:function(t){return e.cancelChange("changeFrom")}}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]};var n=o("VU/8")(r,l,!1,function(e){o("62Xl")},null,null);t.default=n.exports}});
//# sourceMappingURL=16.415fc6b38cf8b7df6f98.js.map