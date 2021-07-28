import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public values: string;
  public level: 'L' | 'M' | 'Q' | 'H';
  public width: number;
  public background: string;

  constructor() {
    this.level = 'L';
    this.values = 'QR code string value';
    this.width = 200;
    this.background = 'white';
  }

  qrLevel(val: 'L' | 'M' | 'Q' | 'H') {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }
  qrBackground(val: 'WHITE' | 'BLUE' | 'YELLOW') {
    switch (val) {
      case 'WHITE':
        this.background = '#FFFFFF';
        break;
      case 'BLUE':
        this.background = '#0000FF';
        break;
      case 'YELLOW':
        this.background = '#FFFF00';
        break;
    }
  }
}
