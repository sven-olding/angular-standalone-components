import { Component } from "@angular/core";
import { TodayComponent } from "./today/today.component";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {}
