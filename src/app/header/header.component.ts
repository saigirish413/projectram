import { Component } from '@angular/core';
import { faUserCheck, faVectorSquare, faCopy, faGears, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public faUserCheck = faUserCheck;
  public faVectorSquare = faVectorSquare
  public faCopy= faCopy
  public faGears = faGears
  public faBell= faBell
}
