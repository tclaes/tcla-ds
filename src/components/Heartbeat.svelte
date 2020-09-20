<script>

</script>

<div class="fullscreen">
  <div class="heartbeat">
    <svg viewBox="0 0 602 246">
      <path d="
        M388.33 216.06L383.99 1.01001L381 0.820007L364.05 111.99H349.6L340.96 136.8L334.61 48.01L319.69 111.99H296.19H268.67H209.73L201 216.06L196.65 1.01001L193.67 0.820007L176.71 111.99H162.27L153.62 136.8L147.28 48.01L132.36 111.99H0.47998V114.99H134.74L145.7 67.99L151.67 151.52L164.4 114.99H179.29L194.01 18.51L198.58 244.96L201.58 245.05L212.49 114.99H268.67H296.19H322.07L333.03 67.99L339 151.52L351.73 114.99H366.62L381.34 18.51L385.92 244.96L388.91 245.05L399.82 114.99H602V111.99H397.06L388.33 216.06Z" fill="white"/>
    </svg>
  </div>
</div>

<style>
  .fullscreen {
    background: #333;
    display: grid;
    height: 100vh;
    margin: 0;
    place-content: center;
    padding: 0;
    width: 100vw;
  }

  svg {
    animation: animate2 linear 10s infinite;
    position: absolute;
    left: 0;
    display: block;
    width: 205%;
  
  }

  .heartbeat {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
  }

  .heartbeat::before {
    background: rgb(16, 241, 16);
    content:'';
    display: inline-block;
    height: 100%;
    position: absolute;
    width: 3px;
    z-index: 1;
  }

  @keyframes animate2 {
    0% {
      transform: translate(-5%);
    }
    100% {
      transform: translate(-36%);
    }
  }
</style>  