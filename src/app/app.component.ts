import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-bootstrap';
  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  faPencil = faPencil;
  fa1 = fa1;
  fa2 = fa2;
  fa3 = fa3;
  faChargingStation = faChargingStation;
  faDisplay = faDisplay;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
}
