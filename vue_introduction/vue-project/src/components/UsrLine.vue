<template>
  <div>
  <div class="UsrLine">
    <usr-avatar :avatarSrc="avatarSrc"></usr-avatar>
    <div class='details'>
      <div>{{detailsNome}}</div>
      <div>{{detailsCognome}}</div>
    </div>
    <slot name="franco"></slot>
    <slot></slot>
    <div class="dinamicElements">
      <usr-badge :firstLine="firstLine" :secondLine="secondLine"></usr-badge>
      <usr-button :buttons="buttons" @clickEventBusCustomEvent></usr-button>
    </div>

  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UsrAvatar from './UsrAvatar.vue';
import UsrBadge from './UsrBadge.vue';
import UsrButton from './UsrButton.vue';
import EventBus from '../main'

interface usrDetails{
  avatarSrc: string;
  detailsNome: string;
  detailsCognome: string;
  firstLine: string;
  secondLine: string;
  buttons: {name: string;}[]
}

@Component({
  components: {
    UsrAvatar,
    UsrBadge,
    UsrButton
  }
})

export default class UsrLine extends Vue {
  @Prop() private usrDetails!: usrDetails;
  private avatarSrc: string = this.usrDetails.avatarSrc;
  private detailsNome: string = this.usrDetails.detailsNome;
  private detailsCognome: string = this.usrDetails.detailsCognome;
  private firstLine: string = this.usrDetails.firstLine;
  private secondLine: string = this.usrDetails.secondLine;
  private buttons: {[key: string]: string}[] = this.usrDetails.buttons;

  clickEventBusCustomEvent(){
    EventBus.$emit('eventBusCustomEvent', 'xxxx');
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.UsrLine{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 3px dotted orangered;
  padding: 5px;
  margin-bottom: 10px;

  .details{
    width: 100%;
    text-align: left;
    margin-left: 10px;
  }
  
  .dinamicElements{
    display: flex;
    flex-direction: column;
    align-content: stretch;
  }
}
</style>
