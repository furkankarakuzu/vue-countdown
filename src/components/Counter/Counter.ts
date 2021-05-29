export default {
  name: "Counter",
  data(){
    return{
      isActive : false,
      isCompleted:false,
      time : {
        days:0,
        hours:0,
        minutes:0,
        seconds:0
      }
    }
  },
  methods : {
    startCountdown(){
      this.isActive = true;
      this.countDownTimer();
    },
    countDownTimer(){
      let seconds = parseInt(this.time.seconds);
      let minutes = parseInt(this.time.minutes);
      let hours = parseInt(this.time.hours);
      let days = parseInt(this.time.days);
      let timer = setInterval(() => {
        if(seconds>0){
          seconds--;
        }else{
          if(minutes>0){
            minutes--;
            seconds=59;
          }else{
            if(hours>0){
              hours--;
              minutes=60;
            }else{
              if(days>0){
                days--
                hours=24
              }
              else{
                this.isCompleted = true
                clearInterval(timer)
              }
            }
          }
        }
        this.time.seconds=seconds
        this.time.minutes=minutes
        this.time.hours=hours
        this.time.days=days
      }, 1000);
    }
  }
};