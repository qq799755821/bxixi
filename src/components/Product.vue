<template>
  <div>
    <div class="box">

      <div class="all" v-for="(v,i) of  this.$store.state.commodity" :key="i">
        <router-link :to="`/details/${v.pid}`">
          <div class="all_img">
            <img
              :src="v.img"
              alt=""
            />
            <span class="biaofu">{{v.shoptype}}</span>
            <div class="title">
              <p>{{v.subject}}</p>
            </div>
            <span class="jianjie">{{v.short}}</span>
            <p class="price">￥{{v.price}}</p>
            <p class="btn">看相似</p>
          </div>
        </router-link>
      </div>

       
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 3,    
    };
  },
  mounted() {
     this.$store.state.commodity=[]
    this.$store.dispatch('getcommodity')
  },
  methods: {
    getHouse() {
      this.$bus.emit("bload", this.id);
    },
  },
};
</script>
<style>
.box {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 55px;
}
.all {
  position: relative;
  width: 40%;
}
.all_img {
  width: 100%;
  background-color: #fff;
  margin-bottom: 13px;
  padding: 10px;
  border-radius: 10px;
  margin-left: -0.5em;
  
}
.all_img > img {
  width: 100%;
  height: 100%;
}
.title {
  overflow-y: hidden;
}
.title > p {
  height: 30px;
  line-height: 15px;
  margin-top: 10px;
  font-size: 12px;
  font-family: inherit;
}
::-webkit-scrollbar {
  width: 0px;
}
.jianjie {
  font-size: 8px;
  color: #ff4000;
  background: #f6cece;
  display: inline-block;
  margin: 6px 0 6px 0;
}
.price {
  color: #ff0000;
  font-family: Arial, Helvetica, sans-serif;
}
.btn {
  position: absolute;
  top: 88%;
  right: 0%;
  margin-right: -10px;
  font-size: 12px;
  background: #e6e6e6;
  color: #a4a4a4;
  display: inline-block;
  padding: 3px;
  border-radius: 5px;
}
a {
  color: #000;
}
</style>
