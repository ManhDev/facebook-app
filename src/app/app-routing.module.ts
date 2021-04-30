import { SignUpComponent } from './components/screen/sign-up/sign-up.component';
import { HomeComponent } from './components/screen/home/home.component';
import { CommunityComponent } from './components/screen/community/community.component';
import { NewsComponent } from './components/screen/news/news.component';
import { ArticleComponent } from './components/screen/article/article.component';
import { NotFoundComponent } from './components/screen/not-found/not-found.component';
import { ProfileComponent } from './components/screen/profile/profile.component';
import { LoginComponent } from './components/screen/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'facebook', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'facebook', component: HomeComponent, children: [
      { path: '', redirectTo: 'community', pathMatch: 'full' },
      { path: 'community', component: CommunityComponent },
      { path: 'news', component: NewsComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'article/:id', component: ArticleComponent },
    ]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
