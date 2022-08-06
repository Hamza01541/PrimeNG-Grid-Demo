import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/products.model';
import { MockDataService } from '../../service/mock-data.service';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  public columnDefs: any[] = [];
  public rowData$!:any

  productDialog: boolean = false;
  product: Product = new Product();
  selectedProducts: Product[] = [];


  constructor(
    private mockDataService: MockDataService,
    public dialogService: DialogService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getRowsData();
    this.setColumnsDefinition();
  }

  /**
   * sets columns properties.
   */
  setColumnsDefinition() {
      this.columnDefs = [
        {
          headerName: 'ID',
          field: 'id',
          type: 'numeric',
        },
        {
          headerName: 'Name',
          field: 'name',
          type: 'text',
        },

        {
          headerName: 'Code',
          field: 'code',
          type: 'numeric',
        },
        {
          headerName: 'Description',
          field: 'description',
          type: 'text',
        },
        {
          headerName: 'Price',
          field: 'price',
          type: 'numeric',
        },
        {
          headerName: 'Quantity',
          field: 'quantity',
          type: 'numeric',
        },

        {
          headerName: 'Category',
          field: 'category',
          type: 'text',
        },
        {
          headerName: 'Status',
          field: 'inventoryStatus',
          type: 'text',
        },
      ];
    
  }

  /**
   * gets row data.
   */
  async getRowsData() {
    this.rowData$ = await this.mockDataService.getDataSource();
  }

  /**
   * navigates to list detail page.
   * @param id
   */
  navigateToDetailPage(id:number) {
    this.route.navigate(['/list-details'], {queryParams:{id} })
  }

  /**
   * search item in list.
   * @param id
   */
  applyFilterGlobal($event:any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
