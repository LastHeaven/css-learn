<template>
  <div>
    <div v-for="(item, idx) in pages" :key="idx">
      <router-link :to="item.link">{{item.title}}</router-link>
    </div>
    <div class="padding">转载自<a href="https://www.cnblogs.com/coco1s/p/5893921.html" target="_blank">https://www.cnblogs.com/coco1s/p/5893921.html</a></div>
  </div>
</template>

<script>
export default {
  setup (props, { emit }) {
    return {
      pages: [
        {
          title: '1、左边竖条的实现方法',
          link: '/1'
        },
        {
          title: '2、从条纹边框的实现谈盒子模型',
          link: '/2'
        }
      ]
    }
  }
}
</script>

<style>
  .padding {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>
