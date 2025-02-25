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

  handleFinishedReading() {
    this.isFinishedReading = true;
  }
}
