import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  posts = [
    { name: 'Husky', image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', avatar: 'https://kenh14cdn.com/thumb_w/600/2020/9/26/photo-16-16011088147401849082420-crop-16011090302842010698918.png' },
    { name: 'Husky', image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', avatar: 'https://kenh14cdn.com/thumb_w/600/2020/9/26/photo-16-16011088147401849082420-crop-16011090302842010698918.png' },
    { name: 'Husky', image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', avatar: 'https://kenh14cdn.com/thumb_w/600/2020/9/26/photo-16-16011088147401849082420-crop-16011090302842010698918.png' },
    { name: 'Husky', image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', avatar: 'https://kenh14cdn.com/thumb_w/600/2020/9/26/photo-16-16011088147401849082420-crop-16011090302842010698918.png' },
    { name: 'Husky', image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', avatar: 'https://kenh14cdn.com/thumb_w/600/2020/9/26/photo-16-16011088147401849082420-crop-16011090302842010698918.png' },
    { name: 'Husky', image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', avatar: 'https://kenh14cdn.com/thumb_w/600/2020/9/26/photo-16-16011088147401849082420-crop-16011090302842010698918.png' }
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
