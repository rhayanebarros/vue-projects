<template>
  <section class="home-content">

    <div class="home-content__header">
      <img class="home-content__header__img" src="../assets/images/rhay.png" alt="programadora">

      <div class="home-content__header__cols">
        <div class="home-content__header__col1">
          <h2>{{ msg }}</h2>
          <h1>Rhayane Cassemiro</h1>
          <h3>front end developer</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/rhayanebarroscassemiro/" title="linkedin" target="_blank">
              linkedin
              </a>
            </li>
            <span>slash</span>
            <li>
              <a href="https://github.com/rhayanebarros" title="github" target="_blank">
                github
              </a>
            </li>
          </ul>
        </div>

        <div class="home-content__header__col2">
          <h2>Bom Retiro<span>dash</span>São Paulo</h2>
          <h3>
            <a href="mailto:rhayanebarros@gmail.com" title="email">
              rhayanebarros<span>at</span>gmail<span>dot</span>com
            </a>
          </h3>
        </div>
      </div>
    </div>

    <div class="home-content__list">
      <ol>
        <li>
          <router-link to="/bank" title="caixa eletrônico">caixa eletrônico</router-link><span>2020</span>
        </li>
        <li>
          <router-link to="/todo-list" title="todo list">todo list</router-link><span>2020</span>
        </li>
        <li>
          <a href="https://www.toyotagazooracing.com.br/" title="gazoo racing" target="_blank">toyota gazoo racing</a>
          <span>2020</span>
          <p>design by</p>
          <a class="design" href="https://www.sapientag2.com.br/prodigious/" title="prodigious" target="_blank">Prodigious</a>
        </li>
        <li>
          <a href="https://banco.bradesco/html/classic/veloe/index.shtm" title="bradesco - veloe" target="_blank">bradesco veloe</a>
          <span>2019</span>
          <p>design by</p>
          <a class="design" href="https://one.com.br/" title="one" target="_blank">One</a>
        </li>
        <li>
          <a href="https://www.bradescard.com.br/SiteBradescard" title="bradescard" target="_blank">bradescard</a>
          <span>2019</span>
          <p>design by</p>
          <a class="design" href="https://one.com.br/" title="one" target="_blank">One</a>
        </li>
        <li>
          <a href="https://banco.bradesco/html/classic/promocoes/aplicativo-bradesco-cartoes/index.shtm" title="app bradesco cartões" target="_blank">App Bradesco Cartões</a>
          <span>2019</span>
          <p>design by</p>
          <a class="design" href="https://one.com.br/" title="one" target="_blank">One</a>
        </li>
        <li>
          <a href="https://banco.bradesco/cartoesempresariais/" title="cartões empresariais" target="_blank">Cartões Empresariais</a>
          <span>2021</span>
          <p>design by</p>
          <a class="design" href="https://one.com.br/" title="one" target="_blank">One</a>
        </li>
        <li>
          <a href="https://banco.bradesco/beneficioscartoes/" title="benefícios cartões" target="_blank">Benefícios Cartões</a>
          <span>2022</span>
          <p>design by</p>
          <a class="design" href="https://one.com.br/" title="one" target="_blank">One</a>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-content {
  background-color: $jobs;

  &__header {
    background: $header url('../assets/images/oval-1.png') no-repeat left top;
    background-size: contain;
    padding: 20px;

    @include above(md) {
      padding: 40px 20px;
      background-size: inherit;
    }

    @include above(lg) {
      padding: 40px;
    }

    @include above(xl) {
      padding: 100px;
    }

    &__img {
      max-width: 230px;
      width: 100%;
      margin: 60px auto 0;

      @include above(md) {
        max-width: 349px;
        margin: 0;
      }

      @include above(xl) {
        max-width: 480px;
      }
    }

    &__cols,
    &__img {
      vertical-align: middle;
    }

    &__col1,
    &__col2,
    &__img,
    &__cols {
      display: block;

      @include above(md) {
        display: inline-block;
      }
    }

    &__cols {
      width: 100%;
      max-width: 250px;
      margin: 40px auto 0;

      @include above(md) {
        margin: 20px 0 0 0;
        max-width: 100%;
      }

      @include above(lg) {
        max-width: 595px;
        margin: 60px 0 0 0;
        vertical-align: middle;
      }

      @include above(xl) {
        max-width: 600px;
        margin: 100px 0 60px;
      }
    }

    &__col1 {
      h2 {
        color: $white;
        font-size: 20px;
        line-height: 24px;
        font-weight: $regular;

        @include above(md) {
          font-size: 28px;
          line-height: 32px;
        }
      }

      h1 {
        color: $rust;
        font-size: 26px;
        line-height: 30px;
        font-weight: $bold;

        @include above(md) {
          font-size: 32px;
          line-height: 36px;
        }
      }

      h3 {
        color: $white;
        font-size: 18px;
        line-height: 26px;
        font-weight: $regular;

        @include above(md) {
          font-size: 20px;
          line-height: 28px;
        }
      }

      ul {
        display: flex;
        margin-top: 5px;
        li a {
          color: $yellow;
          font-size: 18px;
          line-height: 22px;

          @include above(md) {
            font-size: 22px;
            line-height: 26px;
          }
        }

        span {
          color: $blue;
          font-weight: $regular;
          font-size: 13px;
          margin: 0 6px;

          @include above(md) {
            font-size: 14px;
          }
        }
      }
    }

    &__col2 {
      margin-top: 15px;

      @include above(md) {
        margin-top: 0;
        text-align: right;
      }

      h2 {
        color: $white;
        font-weight: $regular;
        font-size: 18px;
        line-height: 22px;

        @include above(md) {
          font-size: 20px;
          line-height: 24px;
        }

        span {
          color: $blue;
          font-weight: $regular;
          font-size: 13px;
          margin: 0 2px;
          display: inline-block;
          vertical-align: super;

          @include above(md) {
            font-size: 14px;
          }
        }
      }
      h3 a {
        color: $yellow;
        font-size: 18px;
        line-height: 22px;
        font-weight: $medium;

        @include above(md) {
          font-size: 22px;
          line-height: 26px;
        }

        span {
          color: $blue;
          font-weight: $regular;
          font-size: 13px;
          margin: 0 2px;
          display: inline-block;
          vertical-align: super;
          @include above(md) {
            font-size: 14px;
          }
        }
      }
    }
  }

  &__list {
    padding: 20px;
    background: $jobs url('../assets/images/oval-2.png') no-repeat right bottom;
    background-size: contain;

    @include above(md) {
      padding: 40px 20px;
      min-height: 400px;
      background-size: inherit;;
    }

    @include above(lg) {
      padding: 40px;
    }

    @include above(xl) {
      padding: 100px;
    }

    ol {
      counter-reset: li;
      display: block;
      width: 100%;
      max-width: 250px;
      margin: 0 auto;

      @include above(md) {
        width: inherit;
        max-width: inherit;
      }

      li {
        position: relative;
        counter-increment: li;
        margin-bottom: 15px;

        &::before {
          content: counter(li);
          color: $blue;
          display: inline-block;
          vertical-align: super;
          font-weight: $regular;
          font-size: 16px;

          @include above(md) {
            font-size: 18px;
          }
        }

        a {
          color: $yellow;
          margin-left: 3px;
          margin-right: 3px;
          font-size: 20px;
          text-transform: lowercase;

          @include above(md) {
            font-size: 24px;
          }
        }

        span {
          color: $blue;
          font-size: 16px;
          font-weight: $regular;
          display: inline-block;
          vertical-align: super;
        }

        p {
          display: inline-block;
          margin-left: 12px;
          color: $white;
          font-size: 20px;
          line-height: 28px;

          @include above(md) {
            margin-left: 10px;
            font-size: 24px;
            line-height: 24px;
          }
        }

        .design {
          color: $rust;
          font-weight: $semi-bold;
          margin-left: 5px;
          line-height: 28px;

          @include above(md) {
            margin-left: 12px;
            line-height: 24px;
          }
        }
      }
    }
  }
}

</style>
