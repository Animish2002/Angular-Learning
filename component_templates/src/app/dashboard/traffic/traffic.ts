import { Component } from '@angular/core';
import { dummyTrafficData } from '../../../data/TrafficData';

@Component({
  selector: 'app-traffic',
  standalone: false,
  templateUrl: './traffic.html',
  styleUrl: './traffic.css',
})
export class Traffic {
  dummyTrafficData = dummyTrafficData
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'online';
}
