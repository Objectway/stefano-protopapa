import { LitElement, html, customElement, property} from 'lit-element';


@customElement('user-row')
export class UserRow extends LitElement {
    @property({type: String}) name = '';
    @property({type: String}) thumb = '';
    @property({type: String}) thumbTitle = '';

    render(){
      return html`
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
        <div class="UserRow">
            <img class="UserRow__usrImg" src="${this.thumb}" title="${this.thumbTitle}">
            <div class="UserRow__usrName">${this.name}</div>
            <i class="fas fa-chevron-right"></i>
        </div>
        <style>
            .UserRow{
                display: flex;
                flex-direction: row;
                align-items: center;
                background-color: #fff;
                padding: 16px;
                border-radius: 4px;
                font-size: 12px;
            }

            .UserRow__usrImg{
                width: 50px;
                heigth: 50px;
                border-radius: 200px;
                margin-right: 16px;
            }

            .UserRow__usrName{
                font-size: 12px;
                font-weight: bold;
                color: #000;
            }

        </style>`;
    }
  }