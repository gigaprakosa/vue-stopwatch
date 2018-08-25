const app = new Vue({
  el: "#app",
  data() {
    return {
      timeSet: 0,
      timeTick: 0,
      timeInterval: {},
      isTicking: false,
      isStopped: false,
      isTimeUp: false
    };
  },
  methods: {
    startStopwatch() {
      if(this.timeSet > 0) {
        this.tickStopwatch();
      } else {
        alert('Warning: The time cannot be set below 1 second')
      }
    },
    tickStopwatch() {
      this.isStopped = false;
      this.isTimeUp = false;
      this.isTicking = true;
      
      this.timeTick = 0;
      
      this.timeInterval = setInterval(() => {
        this.timeTick ++; 
        
        if (this.timeSet === this.timeTick) {
          this.finishStopwatch();
        }
      }, 1000);      
    },
    stopStopwatch() {
      clearInterval(this.timeInterval);
      
      this.isStopped = true;
      this.isTicking = false;
    },
    finishStopwatch() {
      clearInterval(this.timeInterval);
      
      this.isTimeUp = true;
      this.isTicking = false;
      
      this.timeSet = 0;
    }
  }
});
