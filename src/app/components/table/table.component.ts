import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page, Work } from 'src/app/models/api-models';
import { ELEMENT_DATA } from 'src/app/models/data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  public displayedColumns: string[] = ['work_order_id', 'description', 'received_date', 'assigned_to', 'status', 'priority'];
  public dataSource: Observable<Work[]> = this.apiService.data$;
  public filterPredicate: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getWorkData();
  }

  public filterByDescription(): void {
    this.apiService.getWorkData(this.filterPredicate);
  }

}
