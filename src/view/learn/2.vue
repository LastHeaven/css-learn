<template>
  <div class="padding">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script>
export default {
  name: '2'
}
</script>

<style scoped>
  .padding {
    padding: 30px;
  }

  .item {
    position:relative;
    width: 180px;
    height: 180px;
  }

  .item + .item {
    margin-top: 20px;
  }

  .item:nth-child(1) {
    background:#9c27b0;
    border:20px dashed #2196f3;
  }

  .item:nth-child(1):after {
    content:"";
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#fff;
  }

  .item:nth-child(2) {
    background:#fff;
    background-clip:padding-box;
    border:20px dashed #cccc99;
  }

  .item:nth-child(2):before{
    content:"";
    position:absolute;
    top:-20px;
    left:-20px;
    bottom:-20px;
    right:-20px;
    background:#996699;
    z-index:-1;
  }

  .item:nth-child(3){
    border:20px dashed #2196f3;
    border-radius:50%;
    background-image:
        radial-gradient(#fff 90px, transparent 90px);
    background-repeat:no-repeat;
  }

  .item:nth-child(3):after {
    content:"";
    position:absolute;
    top:-20px;
    left:-20px;
    right:-20px;
    bottom:-20px;
    background:deeppink;
    z-index:-1;
    border-radius:50%;
  }

  .item:nth-child(4) {
    border:20px dashed #2196f3;
    background:yellowgreen;
    box-shadow:inset 180px 0 0 0 #fff;
  }

  .item:nth-child(5) {
    border:20px solid #2196f3;
  }

  .item:nth-child(5):before {
    content:"";
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    outline:20px dashed #ffc107;
  }

</style>
