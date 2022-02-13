import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  itemId = 10;
  item: Observable<any>;
 
  constructor(private testService:TestService) {
      
    testService.getItem(this.itemId).subscribe(
      res => {
        this.item = res;
      },
      err => {
        console.error(err);
      });
  }
}