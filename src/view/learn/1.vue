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
  name: '1'
}
</script>

<style scoped>
  .padding {
    padding: 30px;
  }

  .item {
    position: relative;
    width: 200px;
    height: 60px;
    background: #ddd;
  }

  .item + .item {
    margin-top: 20px;
  }

  .item:nth-child(1) {
    border-left:5px solid deeppink;
  }

  .item:nth-child(2):after{
    content:"";
    width:5px;
    height:60px;
    position:absolute;
    top:0;
    left:0;
    background:deeppink;
  }

  .item:nth-child(3){
    box-shadow:-5px 0px 0 0 deeppink;
  }

  .item:nth-child(4){
    box-shadow:inset 5px 0px 0 0 deeppink;
  }

  .item:nth-child(5){
    filter:drop-shadow(-5px 0 0 deeppink);
  }

  .item:nth-child(6){
    background-image:linear-gradient(90deg, deeppink 0px, deeppink 5px, transparent 5px);
  }

  .item:nth-child(7){
    outline:5px solid deeppink;
  }

  .item:nth-child(7):after{
    position:absolute;
    content:"";
    top:-5px;
    bottom:-5px;
    right:-5px;
    left:0;
    background:#ddd;
  }

  .item:nth-child(8){
    width:205px;
    background:deeppink;
    overflow-y:scroll;
  }
  .item:nth-child(8)::-webkit-scrollbar{
    width: 200px;
    background-color:#ddd;
  }
</style>
