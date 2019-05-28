<template>
  <div>
    <div class="div_overlay">
    </div>
      <div class="child">
          <div class="close" @click="closePopUp()"> 
            CHIUDI
          </div>

          <div class="popUpBody">
            {{msg}}
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class PopUp extends Vue {
  @Prop() private msg!: string;

  closePopUp(){
      this.$emit('closePopUp');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.child{
    width: 250px;
    height: 250px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -90%);
    display: block;
    z-index: 3;
    border: 3px solid #42b983;
    color: #2c3e50;
    background-color: white;
    box-sizing: border-box;
    
    .close{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        text-align: right;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
    }

    .popUpBody{
        font-size: 20px;
        font-weight: bold;
        padding: 40px;
        background-color: white;
        div{
            margin-bottom:60px;
            span{
                font-size: 20px;
                font-weight: bold;
                font-family: 'Roboto';
                font-weight: bold;
                font-style: normal;
            }
            span:first-child{
                color:black;
            }
            span:last-child{
                color: red;
                margin-left: 40px;
            }
        }
    }
}

.div_overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.7;
    display: block;
    z-index: 2;
    top: 0;
    left: 0;
}
</style>