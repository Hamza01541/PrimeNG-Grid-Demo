import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/products.model';
import { MockDataService } from '../../service/mock-data.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})
export class ListDetailsComponent implements OnInit {
  public data: Product = new Product();
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((param) => {
      if (param['id']) {
        this.getDetailsById(param['id']);
      }
    });
  }

  /**
   * get product details by id.
   * @param id number.
   */
  getDetailsById(id: number) {
    this.mockDataService.getDataDetailsById().subscribe((res) => {
      this.data = res.data.find((item: any) => item.id == id);
      console.log(this.data, 'data');
    });
  }

/**
 * navigates back to list page.
 */
  NavigateToList() {
    this.route.navigate(['list'])
  }
}
