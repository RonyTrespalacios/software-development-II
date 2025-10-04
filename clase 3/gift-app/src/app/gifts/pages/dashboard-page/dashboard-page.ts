import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeader } from "../../components/side-menu/side-menu-header/side-menu-header";
import { SideMenuOptions } from "../../components/side-menu/side-menu-options/side-menu-options";

@Component({
  selector: 'gifts-dashboard-page',
  imports: [RouterOutlet, SideMenuHeader, SideMenuOptions],
  templateUrl: './dashboard-page.html',
  styles: ``
})
export default class DashboardPage {

}
