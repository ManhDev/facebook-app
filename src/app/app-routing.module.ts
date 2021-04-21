import { ArticleComponent } from './components/screen/article/article.component';
import { NotFoundComponent } from './components/screen/not-found/not-found.component';
import { ProfileComponent } from './components/screen/profile/profile.component';
import { LogoutComponent } from './components/screen/logout/logout.component';
import { LoginComponent } from './components/screen/login/login.component';
import { NewsComponent } from './components/screen/home/news/news.component';
import { CommunityComponent } from './components/screen/home/community/community.component';
import { HomeComponent } from './components/screen/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'facebook', pathMatch: 'full' },
  {
    path: 'facebook', component: HomeComponent, children: [
      { path: '', redirectTo: 'community', pathMatch: 'full' },
      { path: 'community', component: CommunityComponent },
      { path: 'news', component: NewsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
