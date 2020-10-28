<template>
  <section class="caixa-eletronico">
    <div class="nav" id="nav">
      <router-link to="/">voltar</router-link>
    </div>

    <div class="caixa-eletronico__container">

      <h1 class="caixa-eletronico__container__title">Banco do Dev</h1>

      <form>
        <h3>Digite o valor para saque:</h3>
        <div class="input-data">
          <input
            id="valor"
            class="valor"
            name="valor"
            type="text"
            required
            placeholder="R$300,00"
            value=""
            @keypress="somenteNumero($event)"
            @click="onClickInput"
          />
          <label for="name">Valor:</label>
        </div>
        <button
          class="modal-toggle"
          aria-label="sacar"
          @click="onClickSaque"
          id="submit"
          type="submit"
          value="Submit">
          Sacar
        </button>

        <p>* Notas Disponíveis: R$10,00 / R$20,00 / R$50,00 / R$100,00</p>
      </form>
    </div>

    <div class="caixa-eletronico__requisitos">
      <h5>requisitos:</h5>
      <ul>
        <li>O caixa deve entregar o menor número possível de notas;</li>
        <li>O caixa deve validar se é possível sacar o valor solicitado com as notas disponíveis;</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaixaEletronico',
  methods: {
    somenteNumero (e) {
      var tecla = window.event ? event.keyCode : e.which
      if (tecla > 47 && tecla < 58) {
        return true
      } else {
        if (tecla === 8 || tecla === 0) {
          return true
        } else {
          return false
        }
      }
    },
    onClickSaque () {
      var valor = document.getElementById('valor').value
      var number = valor.replace(/[^0-9-,]/g, '')
      var total = parseInt(number)
      var notasDisponiveis = [100, 50, 20, 10]
      var notasDeSaida = []
      notasDisponiveis.map(function (nota) {
        while (total >= nota) {
          notasDeSaida.push(Math.floor(nota))
          total -= nota
        }
      })
      var hundred = notasDeSaida.filter(function (elem, pos, self) {
        return elem === 100
      })
      var fifty = notasDeSaida.filter(function (elem, pos, self) {
        return elem === 50
      })
      var twenty = notasDeSaida.filter(function (elem, pos, self) {
        return elem === 20
      })
      var ten = notasDeSaida.filter(function (elem, pos, self) {
        return elem === 10
      })
      if (total === 0) {
        alert(
          'Notas de R$100,00: ' +
            hundred.length +
            '\nNotas de 50: ' +
            fifty.length +
            '\nNotas de 20: ' +
            twenty.length +
            '\nNotas de 10: ' +
            ten.length
        )
      } else {
        alert('Não temos notas disponíveis para concluir esse saque')
      }
    },
    onClickInput () {
      document.getElementById('valor').value = 'R$'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.caixa-eletronico {
  padding: 0 40px;

  .nav {
    margin-top: 40px;
    a {
      font-size: 16px;
      &::before {
        content: '';
        background-image: url('../assets/images/left-arrow.svg');
        background-repeat: no-repeat;
        width: 15px;
        height: 15px;
        background-size: 100% auto;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        cursor: pointer;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__container {
    text-align: center;
    margin-top: 100px;

    &__title {
      color: $rust;
      font-size: 32px;
      line-height: 36px;
      font-weight: $semi-bold;
    }

    h3 {
      color: $white;
      font-weight: $regular;
      font-size: 20px;
      margin: 32px 0;
    }

    .input-data {
      height: 40px;
      width: 100%;
      position: relative;
      max-width: 240px;
      margin: 0 auto 32px;
    }

    .input-data input {
      background-color: transparent;
      width: 100%;
      border: none;
      font-size: 17px;
      font-family: $font;
      color: $blue;
      border-bottom: 2px solid $blue;
      margin-top: 15px;
      padding: 0 0 3px 3px;
    }

    .input-data input:focus {
      border-bottom: 2px solid $blue;
    }

    ::-webkit-input-placeholder {
      color: $blue;
      padding-left: 45px;
      padding-bottom: 10px;
    }

    input:focus::-webkit-input-placeholder {
      color: transparent;
    }

    .input-data label {
      font-size: 17px;
      position: absolute;
      bottom: 6px;
      left: 0;
      color: $blue;
      pointer-events: none;
      transition: all 0.3s ease;
    }

    .input-data input:focus ~ label,
    .input-data input:valid ~ label {
      transform: translateY(-25px);
      font-size: 15px;
      color: $blue;
    }

    button {
      border: 0;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      vertical-align: middle;
      white-space: nowrap;
      width: 100px;
      padding: 6px 0;
      background-color: #007cb0;
      color: white;
      border-radius: 4px;
      margin-bottom: 32px;
      transition: all 0.3s;
    }

    button:hover {
      background-color: $blue;
    }

    p {
      color: $yellow;
      font-size: 16px;
      font-weight: $medium;
    }
  }

  &__requisitos {
    max-width: 450px;
    margin: 80px auto 0;
    width: 100%;

    h5 {
      color: $terra;
      font-weight: $regular;
      font-size: 18px;
      text-align: center;

    }

    ul {
      list-style: disc;
      list-style-position: inside;

      li {
        color: $pastel;
        margin-top: 12px;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
}

</style>
