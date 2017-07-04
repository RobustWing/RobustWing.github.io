<template>
  <div id="app">
    <NavHeader></NavHeader>
    <el-carousel :interval="4000" type="card" height="600px">
      <el-carousel-item v-for="item in images" :key="item">
        <img style="width: auto; height: 600px;" :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import NavHeader from 'components/public/NavHeader.vue'

  export default {
    name: 'app',
    components: {
      NavHeader
    },
    data() {
      return {
        images:[
          'http://img000.hc360.cn/m7/M09/07/0D/wKhQpFZFS8mEeGUNAAAAANDx-40569.jpg',
          'http://img.mp.itc.cn/upload/20160730/6c3d63655c6948389b711633aa4fd4f6_th.jpg',
          'http://f2.c.hjfile.cn/pic/201408/1d66d90e-24f6-4a4d-9aa2-3fc41a9b8d30_n.jpg',
          'http://qcloud.dpfile.com/pc/W2rbvv6YbsNK09zNe7y2VFEiOjvKDjBZD-b_tbNrJ4ubBI9M86czpewAp1hb5qoLTYGVDmosZWTLal1WbWRW3A.jpg'
        ]
      }
    }
  }
</script>

