class Tranzation {
  constructor(state = {}) {
    this.state = state;
    this.durTime = 1000;
  }
  onUpdate(func) {
    this.update = func;
  }
  to(state = {}) {
    this.endState = state;
    return this;
  }
  time(time = 1000) {
    this.durTime = time;
    return this;
  }

  start() {
    let starttime = new Date().getTime();
    let keysInfo = [];
    Object.keys(this.state).forEach((key) => {
      let value = this.endState[key];
      if (typeof value === "number" && !isNaN(value)) {
        keysInfo.push({
          key,
          start: this.state[key],
          end: this.endState[key],
        });
      }
    });

    if (keysInfo.length == 0) {
      return;
    }
    function animate() {
      if (this.hasStop) {
        return;
      }

      let now = new Date().getTime();
      let time = now - starttime;
      if (time > this.durTime) {
        return;
      }
      keysInfo.forEach((item) => {
        this.state[item.key] =
          ((item["end"] - item["start"]) * time) / this.durTime + item["start"];
      });

      if (this.update) {
        this.update(this.state);
      }
      requestAnimationFrame(() => {
        animate.call(this);
      });
    }
    animate.call(this);
  }
  stop() {
    this.hasStop = true;
  }
}

// function tranzation(start,end,time,func){
//     let startdata = new Date().getTime()
//     function animate(){
//         let durtime = new Date().getTime()-startdata
//         if(durtime>time){
//             func(end)
//             return
//         }
//         let durdata = (end-start)*durtime/time+start
//         func(durdata)
//         requestAnimationFrame(()=>{
//             animate()
//         })
//     }
//     animate()
// }

export default Tranzation;
