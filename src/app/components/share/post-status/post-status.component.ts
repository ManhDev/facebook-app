import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-status',
  templateUrl: './post-status.component.html',
  styleUrls: ['./post-status.component.scss']
})
export class PostStatusComponent implements OnInit {
  user = {
    name: 'Husky',
    image: 'https://petmaster.vn/petroom/wp-content/uploads/2020/03/thanh-bieu-cam-cho-husky.jpg'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
