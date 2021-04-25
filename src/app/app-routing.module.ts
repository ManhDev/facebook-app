import { CommunityComponent } from './components/screen/community/community.component';
import { NewsComponent } from './components/screen/news/news.component';
import { ArticleComponent } from './components/screen/article/article.component';
import { NotFoundComponent } from './components/screen/not-found/not-found.component';
import { ProfileComponent } from './components/screen/profile/profile.component';
import { LogoutComponent } from './components/screen/logout/logout.component';
import { LoginComponent } from './components/screen/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'facebook', pathMatch: 'full' },
  { path: 'facebook', component: CommunityComponent },
  { path: 'facebook/news', component: NewsComponent },
  { path: 'facebook/login', component: LoginComponent },
  { path: 'facebook/logout', component: LogoutComponent },
  { path: 'facebook/profile/:id', component: ProfileComponent },
  { path: 'facebook/article/:id', component: ArticleComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
