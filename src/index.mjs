
function addNewTimer() {
  // create elements
  const timers = document.querySelector('#timers');
  const timer = document.createElement('li');

  const div_timer_buttons = document.createElement('div');
  div_timer_buttons.classList.add('timer-buttons');

  const startButton = document.createElement('button');
  startButton.innerHTML = "Start";
  const stopButton = document.createElement('button');
  stopButton.innerHTML = "Stop";
  const resetButton = document.createElement('button');
  resetButton.innerHTML = "Reset";
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete";

  
  const clock = document.createElement('p');
  clock.classList.add('clock');
  const convert_format = (seconds) => {
    return new Date(seconds * 1000)
      .toISOString()
      .slice(11, 19);
  };
  // timer functionality
  let time = 0;
  clock.innerHTML = convert_format(time);
  
  let interval_id;
  let timer_running = false;
  // startButton.addEventListener('click', () => {});
  startButton.addEventListener('click', () => {  
      if (!timer_running) {
        timer_running = true;
        interval_id = setInterval(() => {
          time += 1;
          clock.innerHTML = convert_format(time);
        }, 1000)
    }
  });

  stopButton.addEventListener('click', () => {
    if (timer_running) {
      timer_running = false;
      clearInterval(interval_id);
    }
  })

  resetButton.addEventListener('click', () => {
    time = 0;
    clock.innerHTML = convert_format(time);
  });

  // add elements
  div_timer_buttons.appendChild(startButton);
  div_timer_buttons.appendChild(stopButton);
  div_timer_buttons.appendChild(resetButton);
  div_timer_buttons.appendChild(deleteButton);

  timer.appendChild(clock);
  timer.appendChild(div_timer_buttons);

  timers.append(timer)

  deleteButton.addEventListener('click', () => {
    timers.removeChild(timer);
  });

}

const newTimerButton = document.querySelector("#add-timer");
newTimerButton.addEventListener('click', addNewTimer);