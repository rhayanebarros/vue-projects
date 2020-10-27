<template>
  <section class="home-content">
    <!-- <img alt="Gif Programação" src="https://media.giphy.com/media/cNfIqjpCY1zqfaLmd8/giphy.gif"> -->
    <img class="home-content__img" src="../assets/images/programador-64.png" alt="programadora">

    <div class="home-content__header">

      <div class="home-content__header__col1">
        <h1>{{ msg }}</h1>
        <h2>Rhayane Cassemiro</h2>
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

    <div class="home-content__list">
      <ol>
        <li>
          <router-link to="/caixa">caixa eletrônico</router-link><span>2019</span>
        </li>
        <li>
          <router-link to="/about">todo list</router-link><span>2019</span>
        </li>
      </ol>

    </div>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
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
  padding: 0 40px;

  &__img {
    display: block;
    margin: 40px auto 0;
  }

  &__header {
    display: flex;
    padding-top: 40px;
    justify-content: space-between;

    &__col1 {
      h1 {
        color: $white;
        font-size: 28px;
        line-height: 32px;
        font-weight: $medium;
      }

      h2 {
        color: $rust;
        font-size: 28px;
        line-height: 32px;
      }

      h3 {
        color: $white;
        font-size: 20px;
        line-height: 24px;
        font-weight: $medium;
      }

      ul {
        display: flex;
        li a {
          color: $yellow;
          font-size: 20px;
          line-height: 24px;
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
      align-self: flex-end;
      h2 {
        color: $white;
        font-weight: $medium;
        font-size: 24px;
        line-height: 28px;

        span {
          color: $blue;
          font-weight: $regular;
          font-size: 14px;
          margin: 0 2px;
          display: inline-block;
          vertical-align: text-top;
        }
      }
      h3 a {
        color: $yellow;
        font-size: 24px;
        line-height: 28px;
        font-weight: $medium;

        span {
          color: $blue;
          font-weight: $regular;
          font-size: 14px;
          margin: 0 2px;
          display: inline-block;
          vertical-align: text-top;
        }
      }
    }
  }

  &__list {
    margin-top: 100px;
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
          top: -5px;
          left: 0;
          font-weight: $regular;
          font-size: 18px;
        }

        a {
          color: $yellow;
          margin-left: 12px;
          margin-right: 3px;
        }

        span {
          color: $blue;
          font-size: 14px;
          font-weight: $regular;
          position: absolute;
          top: -4px;
        }
      }
    }
  }
}

</style>
