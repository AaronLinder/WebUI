import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent implements OnDestroy {
  countdownSeconds: number = 0;
  displayTime: string = '';
  countdown: any;

  updateCountdownSeconds(event: Event) {
    const target = event.target as HTMLInputElement;
    this.countdownSeconds = parseInt(target.value);
  }

  startCountdown() {
    if (this.countdownSeconds <= 0 || isNaN(this.countdownSeconds)) {
      alert("Please enter a valid positive number.");
      return;
    }

    const endTime = Date.now() + this.countdownSeconds * 1000;

    this.countdown = setInterval(() => {
      const remainingTime = Math.round((endTime - Date.now()) / 1000);
      if (remainingTime < 0) {
        clearInterval(this.countdown);
        this.displayTime = "Time's up!";
      } else {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        this.displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.countdown);
  }
}