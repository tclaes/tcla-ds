<script>

</script>

<div class="fullscreen">
  <div class="loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<style>
  .fullscreen {
    background: #333;
    display: grid;
    place-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  .loader {
    animation: animate linear 5s infinite;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    border-radius: 50%;
    height: 100px;
    position: relative;
    width: 100px;
  }

  .loader::after {
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    bottom: 15px;
    right: 15px;
    background: #333;
  }

  .loader span {
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    border-radius: 50%;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .loader span:nth-child(1) {
    filter: blur(5px);
  }
    .loader span:nth-child(2) {
    filter: blur(10px);
  }
    .loader span:nth-child(3) {
    filter: blur(25px);
  }
    .loader span:nth-child(4) {
    filter: blur(50px);
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>