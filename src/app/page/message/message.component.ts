import { Component, type OnDestroy } from "@angular/core";
import confetti from "canvas-confetti";

@Component({
  selector: "app-message",
  imports: [],
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent implements OnDestroy {
  name = "Jéssica";
  isFinishedReading = false;
  showFireworks = false;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  timeoutId: any;

  handleFinishedReading(): void {
    this.isFinishedReading = true;
    this.showFireworks = true;

    this.launchConfetti(); // Dispara os confetes 🎉

    this.timeoutId = setTimeout(() => {
      this.showFireworks = false;
    }, 50000);
  }

  launchConfetti(): void {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const colors = ["#B03052", "#740938", "#FFD700", "#FF4500", "#00FF00"];

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 5,
        spread: 120,
        colors: colors,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
      });
    }, 200);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
