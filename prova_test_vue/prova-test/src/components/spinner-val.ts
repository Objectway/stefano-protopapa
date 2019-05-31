import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('spinner-val')
export class SpinnerVal extends LitElement {
  
  @property( { type : Number }  ) mynumber = 0;
  
  render(){
    
    return html`
        <span class='valore'>${this.mynumber} €</span>
        <style>
          .valore{
            font-size: 250px;
            font-weight: bold;
            color: #42b983;
          }
        </style>
      `;
  }
}