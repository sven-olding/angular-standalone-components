import { Component } from "@angular/core";
import { DetailsComponent } from "./details/details.component";

@Component({
  selector: "app-welcome",
  standalone: true,
  templateUrl: "./welcome.component.html",
  imports: [DetailsComponent],
})
export class WelcomeComponent {}
