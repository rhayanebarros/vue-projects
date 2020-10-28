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
          <router-link to="/caixa" title="caixa eletrônico">caixa eletrônico</router-link><span>2020</span>
        </li>
        <li>
          <router-link to="/about" title="todo list">todo list</router-link><span>2020</span>
        </li>
        <li>
          <a href="https://www.toyotagazooracing.com.br/" title="gazoo racing" target="_blank">toyota gazoo racing</a>
          <span>2020</span>
          <p>design by</p>
          <a class="design" href="https://www.sapientag2.com.br/prodigious/" title="Prodigious" target="_blank">Prodigious</a>
        </li>
        <li>
          <a href="https://banco.bradesco/html/classic/veloe/index.shtm" title="bradesco - veloe" target="_blank">bradesco veloe</a>
          <span>2019</span>
          <p>design by</p>
          <a class="design" href="https://one.com.br/" title="One" target="_blank">One</a>
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
    padding: 40px;

    &__img {
      max-width: 400px;
      width: 100%;
      margin-left: 100px;
    }

    &__cols,
    &__img {
      vertical-align: middle;
    }

    &__col1,
    &__col2,
    &__img,
    &__cols {
      display: inline-block;
    }

    &__col1 {
      h2 {
        color: $white;
        font-size: 28px;
        line-height: 32px;
        font-weight: $regular;
      }

      h1 {
        color: $rust;
        font-size: 32px;
        line-height: 36px;
        font-weight: $bold;
      }

      h3 {
        color: $white;
        font-size: 20px;
        line-height: 28px;
        font-weight: $regular;
      }

      ul {
        display: flex;
        margin-top: 5px;
        li a {
          color: $yellow;
          font-size: 22px;
          line-height: 26px;
        }

        span {
          color: $blue;
          font-weight: $regular;
          font-size: 14px;
          margin: 0 6px;
        }
      }
    }

    &__col2 {
      margin-left: 150px;
      text-align: right;
      h2 {
        color: $white;
        font-weight: $regular;
        font-size: 20px;
        line-height: 24px;

        span {
          color: $blue;
          font-weight: $regular;
          font-size: 14px;
          margin: 0 2px;
          display: inline-block;
          vertical-align: super;
        }
      }
      h3 a {
        color: $yellow;
        font-size: 22px;
        line-height: 26px;
        font-weight: $medium;

        span {
          color: $blue;
          font-weight: $regular;
          font-size: 14px;
          margin: 0 2px;
          display: inline-block;
          vertical-align: super;
        }
      }
    }
  }

  &__list {
    padding: 40px;
    background: $jobs url('../assets/images/oval-2.png') no-repeat right bottom;
    min-height: 594px;

    ol {
      counter-reset: li;
      display: block;
      li {
        position: relative;
        counter-increment: li;
        margin-bottom: 10px;

        &::before {
          content: counter(li);
          color: $blue;
          position: absolute;
          top: -3px;
          left: 0;
          font-weight: $regular;
          font-size: 18px;
        }

        a {
          color: $yellow;
          margin-left: 12px;
          margin-right: 3px;
          font-size: 24px;
        }

        span {
          color: $blue;
          font-size: 16px;
          font-weight: $regular;
          position: absolute;
          top: -3px;
        }

        p {
          display: inline-block;
          margin-left: 40px;
          color: $white;
          font-size: 24px;
        }

        .design {
          color: $rust;
          font-weight: $semi-bold;
        }
      }
    }
  }
}

</style>
