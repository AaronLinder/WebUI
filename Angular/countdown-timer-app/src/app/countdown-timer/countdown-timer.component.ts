import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent {
  countdownValue!: number;
  displayTime!: string;

  startCountdown() {
    if (!this.countdownValue || this.countdownValue <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    let endTime = Date.now() + this.countdownValue * 1000;

    const countdownInterval = setInterval(() => {
      let remainingTime = Math.round((endTime - Date.now()) / 1000);
      if (remainingTime < 0) {
        clearInterval(countdownInterval);
        this.displayTime = "Time's up!";
      } else {
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;
        this.displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }
    }, 1000);
  }
}