<template>
  <div class="NewPF">
    <div class="NewPF__subtitle">
      Inserisci i dati anagrafici della persona fisica.
    </div>
    <div class="NewPF__body">
      <div class="NewPF__typeBox" @click="$emit('goPF')">
        <i class="fas fa-user"></i>
        <span>
          Persona fisica
        </span>
      </div>
      <div class="NewPF__form">
        <div class="NewPF__nameSurname">
          <div class="NewPF__infoBlock NewPF__infoBlock--paddRight">
            <div class="label">NOME</div>
            <input class="input" type="text" placeholder="Nome" v-model="usrName" @focus="viewErrName = false">
            <div class="spiceErrMsg" v-if="!viewErrName"></div>
            <div class="errMsg" v-if="viewErrName">{{errName}}</div>
          </div>
          <div class="NewPF__infoBlock NewPF__infoBlock--paddLeft">
            <div class="label">COGNOME</div>
            <input class="input" type="text" placeholder="Cognome" v-model="usrSurname" @focus="viewErrSurname = false">
            <div class="spiceErrMsg" v-if="!viewErrSurname"></div>
            <div class="errMsg" v-if="viewErrSurname">{{errSurname}}</div>
          </div>
        </div>
        <div class="NewPF__infoBlock">
          <div class="label">CODICE FISCALE</div>
          <input class="input input--upper" type="text" maxlength="16" placeholder="Codice fiscale" v-model="usrCf" @focus="viewErrCf = false">
          <div class="spiceErrMsg" v-if="!viewErrCf"></div>
          <div class="errMsg" v-if="viewErrCf">{{errCf}}</div>
        </div>
        <div class="NewPF__infoDisabled">
          <input type="checkbox" @click="usrDisabled ? usrDisabled = false : usrDisabled = true"><span>Persona con disabilità</span>
        </div>
        <div class="NewPF__privacyPolicy">
          <div class="title">Informatica ai sensi del decreto</div>
          <div class="normativa">Il cliente dichiara di aver preso atto di quanto indicato nell'informativa consegnatagli in data odierna e consapevole dei diritti previsti dal decreto legislativo n.196 del 30/06/2003, presta il suo consenso</div>
          <div class="radioBox">
            <div>
              <input id="agree" type="radio" name="privacypolicy" :value="true" v-model="usrAgree" @focus="viewErrPolicy = false">
              <label for="agree">Presta il consenso</label>
            </div>

            <div>
              <input id="disagree" type="radio" name="privacypolicy" :value="false" v-model="usrAgree" @focus="viewErrPolicy = false">
              <label for="disagree">Nega il consenso</label>
            </div>
          </div>
          <div class="spiceErrMsg" v-if="!viewErrPolicy"></div>
          <div class="errMsg" v-if="viewErrPolicy">{{errPolicy}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { eventBus } from '@/main.ts';

@Component

export default class NewUserPersonaFisica extends Vue {
  private usrName : string = '';
  private viewErrName : boolean = false;
  private errName : string = "Inserisci il nome del Prospect.";
  private usrSurname : string = '';
  private viewErrSurname : boolean = false;
  private errSurname : string = "Inserisci il cognome del Prospect.";
  private usrCf : string = '';
  private viewErrCf : boolean = false;
  private errCf : string = "Codice fiscale inesatto.";
  private usrDisabled : boolean = false;
  private usrAgree : boolean = null;
  private viewErrPolicy: boolean = false;
  private errPolicy : string = "Dare il consenso all'informativa sulla privacy.";

  created() {
    eventBus.$on('i-got-clicked', () => {

      //valido gli elementi fel form

      let validate: boolean = true;

      if(!!!this.usrName){
        validate = false;
        this.viewErrName = true;
      }
      if(!!!this.usrSurname){
        validate = false;
        this.viewErrSurname = true;
      }

      let regex = /^(?:(?:[B-DF-HJ-NP-TV-Z]|[AEIOU])[AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[1256LMRS][\dLMNP-V])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i;
      let matches = regex.exec(this.usrCf);

      if(matches === null){
        validate = false;
        this.viewErrCf = true;
      }

      if(!this.usrAgree){
        console.log(this.usrAgree);
        validate = false;
        this.viewErrPolicy = true;
      }

      if(validate) {

        //eseguo l'inseromento del nuovo elemento

        let newUser = {
          "id": null,
          "name": this.usrName + " " + this.usrSurname,
          "address": {
            "zipcode": this.usrCf
          },
          "disabled": this.usrDisabled,
        }

        this.$store.commit('addItem', newUser);
        this.$store.commit('setSuccessNewUser', true);
        this.$router.push('/prospect');
        eventBus.$off('i-got-clicked');
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.NewPF {

  &__subtitle {
    font-size: 16px;
    color: #bdbebf;
  }

  &__body {
    padding-top: 16px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__typeBox {
    width: 30%;
    height: 160px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);

    i {
      font-size: 48px;
      margin-bottom: 8px;
    }

    span {
      font-weight: bold;
      font-size: 16px;
    }
  }

  &__form {
    background-color: #fff;
    border-radius: 4px;
    width: 60%;
    padding: 16px;
  }

  &__infoBlock{
    text-align: left;
    width: 100%;
    margin-bottom: 16px;

    &--paddRight{
      padding-right: 4px;
    }

    &--paddLeft{
      padding-left: 4px;
    }

    .label{
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 4px;
    }

    .input{
      width: 100%;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #bdbebf;
      color: #bdbebf;
      text-transform: capitalize;
      outline: none;

      &--upper{
        text-transform: uppercase;
      }
    }

    .errMsg{
      color: #ec0f0f;
      font-size: 12px;
      padding: 2px 0 0 0;
    }

    .spiceErrMsg{
      height: 14px;
    }

  }

  &__nameSurname {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__infoDisabled{
    text-align: left;
    width: 100%;
    margin-bottom: 18px;
    display:flex;
    flex-direction: row;
    align-items: center;

    input{
      width: 16px;
      height: 16px;
      margin: 0px 4px 0px 0px;
      outline: none;

    }

    span{
      font-size: 12px;
    }
  }

  &__privacyPolicy{
    text-align: left;
    width: 100%;

    .title{
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 4px;
    }

    .normativa{
      font-size: 14px;
      color: #bdbebf;
      margin-bottom: 8px;
    }

    .radioBox{
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      input{
       margin: 0px 4px 0px 0px;
       outline: none;
      }

      label {
        font-size: 12px;
        font-weight: bold;
      }
    }

    .errMsg{
      color: #ec0f0f;
      font-size: 12px;
      padding: 2px 0 0 0;
    }

    .spiceErrMsg{
      height: 14px;
    }
  }
}
</style>
