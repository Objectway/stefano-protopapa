import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('spinner-comp')
export class SpinnerComp extends LitElement {
  
  @property( { type : Number }  ) num = 0;

  render(){
    
    return html`
      <div>
      <button class="but" @click="${this.subUno}">-</button>
        <span class="num" >${this.num}</span>
      <button  class="but" @click="${this.addUno}">+</button>
      <div>
      <style>
        div{
          background-color: #2c3e50;
        }
        .but{
          font-size: 90px;
          font-weight: bold;
          color: #fff;
          width: 150px;
          background-color: #2c3e50;
          border: 1px solid #42b983;
        }
        .num{
          font-size: 90px;
          font-weight: bold;
          color: #fff;
          padding: 0px 30px;
        }
      </style>
      `;
  }
  
  subUno() {
    if(this.num > 0)
    {
      this.num--;
      this.change();
    }
  }

  addUno() {
    this.num++;
    this.change();
  }

  change() {
    let event = new CustomEvent('my-event', {
      detail: {
        num: this.num
      }
    });
    this.dispatchEvent(event);
  }
}