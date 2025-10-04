import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "../../components/side-menu/side-menu";

@Component({
  selector: 'gifts-dashboard-page',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard-page.html',
  styles: ``
})
export default class DashboardPage {

}
