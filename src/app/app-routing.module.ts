import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BuildsComponent } from './builds/builds.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "news",
    component: NewsComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "builds",
    component: BuildsComponent,
  },
  {
    path: "blogs/:title",
    component: BlogsComponent,
  },
  {
    path: "privacy",
    component: PrivacyComponent
  },
  // This stuff is for pages
  // TODO: find graceful way of doing this, dynamic routing?
  // {
  //   path: "distuption",
  //   component: AboutComponent,
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }