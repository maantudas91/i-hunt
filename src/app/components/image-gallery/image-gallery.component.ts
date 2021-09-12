import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnChanges, OnDestroy {
  @Input() query: any;

  constructor(private apiService: ApiService) {}

  photos: Array<any> = [];
  page: number = 1;
  totalPages: number = 0;
  errorText: string = '';
  private apiSub = new Subscription();

  ngOnChanges() {
    if (this.query) {
      this.apiSub = this.apiService.getImages(this.query).subscribe(
        (data: any) => {
          console.log(data);
          this.photos = data && data.results;
          this.totalPages = data && data.total_pages;
        },
        (err) => {
          this.getError(err);
        }
      );
    }
  }

  onScrollEnd() {
    this.page++;
    if (this.page <= this.totalPages) {
      this.apiSub = this.apiService.getImages(this.query, this.page).subscribe(
        (data: any) => {
          //console.log(data)
          this.photos = [...this.photos, ...data['results']];
        },
        (err) => {
          this.getError(err);
        }
      );
    }
  }

  getError(err: any) {
    if (err.name == 'HttpErrorResponse' && err.error == 'Rate Limit Exceeded') {
      this.photos = [];
      this.errorText = err.error;
    }
  }

  ngOnDestroy() {
    this.apiSub.unsubscribe();
  }
}
