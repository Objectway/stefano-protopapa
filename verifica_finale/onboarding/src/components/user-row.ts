import { LitElement, html, customElement, property} from 'lit-element';


@customElement('user-row')
export class UserRow extends LitElement {
    @property({type: String}) name = '';
    @property({type: String}) thumb = '';
    @property({type: String}) thumbTitle = '';

    render(){

      if(!this.thumb){
          this.thumb = "default-avatar.png";
      }

      return html`
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
        <div class="UserRow">
            <img class="UserRow__usrImg" src="${this.thumb}" title="${this.thumbTitle}">
            <div class="UserRow__usrName">${this.name}</div>
            <div class="UserRow__usrProfile"><i class="fas fa-chevron-right"></i></div>
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
                width: 100%;
                text-align: left;
                text-transform: capitalize;
            }
            
            .UserRow__usrProfile{
                font-size: 18px;
                cursor: pointer;
                color: #999;
            }

        </style>
        `;
    }
  }