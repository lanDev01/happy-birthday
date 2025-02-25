import { Component } from "@angular/core";

@Component({
  selector: "app-message",
  imports: [],
  templateUrl: "./message.component.html",
  styleUrl: "./message.component.scss",
})
export class MessageComponent {
  name = "Jéssica";
  isFinishedReading = false;
  showFireworks = false;

  handleFinishedReading(): void {
    this.isFinishedReading = true;
    this.showFireworks = true;

    setTimeout(() => {
      this.showFireworks = false;
    }, 50000);
  }
}
