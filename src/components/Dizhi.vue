<template>
    <div>
<div class="dizhi">
  
  <van-area :area-list="areaList" :columns-num="3" ref="myArea"  @change="onChange" @confirm="onConfirm" @cancel="onCancel"/>

    </div>
    </div>
</template>
<script>
import areaList from '../../public/JS/area.js'
export default {
    data() {
        return {
            areaList,
            show:false,
            carmodel:''
        }
    },
    methods:{
     
        //value=0改变省，1改变市，2改变区
        onChange(picker, index, value){
            let val = picker.getValues();
            console.log(val)//查看打印
            let areaName = ''
            for (var i = 0; i < val.length; i++) {
                areaName = areaName+(i==0?'':'/')+val[i].name
            }
            this.carmodel = areaName
        },
        //确定选择城市
        onConfirm(val){
            this.value=val[0].name+","+val[1].name+','+val[2].name
           // console.log(this.value)
            this.$emit('bload',this.value)
        },
        //取消选中城市
        onCancel(){
             this.show = false
             this.$refs.myArea.reset()// 重置城市列表
        }

    },
  
}
</script>
<style scoped>
.dizhi{
    width: 100%;
margin: 2em 1em 0 0;
}
</style>