import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogLoadingComponent } from './components/share/dialog-loading/dialog-loading.component';
import { FormPostsComponent } from './components/share/form-posts/form-posts.component';
import { LoginComponent } from './components/screen/login/login.component';
import { LogoutComponent } from './components/screen/logout/logout.component';
import { HomeComponent } from './components/screen/home/home.component';
import { SidebarComponent } from './components/screen/sidebar/sidebar.component';
import { FooterComponent } from './components/screen/footer/footer.component';
import { NotFoundComponent } from './components/screen/not-found/not-found.component';
import { ProfileComponent } from './components/screen/profile/profile.component';
import { CommunityComponent } from './components/screen/home/community/community.component';
import { NewsComponent } from './components/screen/home/news/news.component';
import { ArticleComponent } from './components/screen/article/article.component';
import { ScrollDirective } from './components/share/directives/scroll.directive';
import { NavBarComponent } from './components/screen/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogLoadingComponent,
    FormPostsComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    NotFoundComponent,
    ProfileComponent,
    CommunityComponent,
    NewsComponent,
    ArticleComponent,
    ScrollDirective,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MatBadgeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
