import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./page/message/message.component").then(c => c.MessageComponent),
  },
];
