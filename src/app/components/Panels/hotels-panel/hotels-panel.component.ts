import { Component, OnInit } from '@angular/core';
import { HoletServiceService } from '../../../services/holet-service.service';



@Component({
  selector: 'app-hotels-panel',
  templateUrl: './hotels-panel.component.html',
  styleUrls: ['./hotels-panel.component.css']
})
export class HotelsPanelComponent implements OnInit {
  
  constructor(public HoletService:HoletServiceService) {
    }

  ngOnInit() {
  }

}
