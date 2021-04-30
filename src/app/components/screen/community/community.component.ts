import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  posts = [
    {
      name: 'Husky', image: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg', avatar: 'https://i.pinimg.com/564x/57/76/de/5776de1add5604587720762812ecb67e.jpg'
    },
    {
      name: 'Husky', image: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg', avatar: 'https://i.pinimg.com/564x/57/76/de/5776de1add5604587720762812ecb67e.jpg'
    },
    {
      name: 'Husky', image: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg', avatar: 'https://i.pinimg.com/564x/57/76/de/5776de1add5604587720762812ecb67e.jpg'
    },
    {
      name: 'Husky', image: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg', avatar: 'https://i.pinimg.com/564x/57/76/de/5776de1add5604587720762812ecb67e.jpg'
    },
    {
      name: 'Husky', image: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg', avatar: 'https://i.pinimg.com/564x/57/76/de/5776de1add5604587720762812ecb67e.jpg'
    },
    {
      name: 'Husky', image: 'https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg', avatar: 'https://i.pinimg.com/564x/57/76/de/5776de1add5604587720762812ecb67e.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
