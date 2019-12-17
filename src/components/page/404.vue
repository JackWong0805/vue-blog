<template>
    <div>
        <div class="container">
            <h1>404</h1>
            <p class='explanation' id="exp1">页面走丢啦。</p>
            <p class='explanation' id='exp2'>这意味着一件事。</p>
            <p class='explanation' id='exp3'>你好，外星人。</p>
        </div>
        <!-- end container -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .container{
    text-align: center;
  }

  h1{
    font-size: 3.85rem;
    font-weight: 600;
    line-height: 1.2em;
    letter-spacing: -.01em;
  }

  p.explanation{
    font-size: 1.6rem;
    line-height: 1.2em;
    margin-top: .25em;
    font-weight: 200;
    letter-spacing: -.01em;

    animation: fadeIn;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: backwards;
  }

  p.explanation#exp1 {
    animation-delay: .5s;
  }

  p.explanation#exp2 {
    animation-delay: 1.5s;
  }

  p.explanation#exp3 {
    animation-delay: 3s;
    font-weight: 600;
  }
</style>
