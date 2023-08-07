import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
import { faRocket,faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  faRocket = faRocket;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  progressbar = false;
  progress = 0;
  chevronDown = true;
  constructor(private toastr: ToastrService){}
  showProgress(){
    this.progressbar = true;
    this.progress = 0;
    const interval = setInterval(() => {
      this.progress += 5;
      if (this.progress > 100) {
        this.progress = 0;
        clearInterval(interval);
        this.progressbar = false;
        this.chevronDown = true;
        this.showSuccess();
      }
    }, 500);
  }
  showSuccess() {
    this.toastr.success('Migration applied successfully','Success',  {
      positionClass: 'toast-bottom-right' 
   });
  }
  hideProgressbar(){
    this.chevronDown = false;
  }
  progressbarShow(){
    this.chevronDown = true;
  }
}
