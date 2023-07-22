import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NewsComponent } from './news/news.component';
import { BuildsComponent } from './builds/builds.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DodecahedronComponent } from './dodecahedron/dodecahedron.component';
import { IcosahedronComponent } from './icosahedron/icosahedron.component';
import { OctahedronComponent } from './octahedron/octahedron.component';
import { BackgroundComponent } from './background/background.component';
import { ContactComponent } from './contact/contact.component';
import { RocketComponent } from './rocket/rocket.component';
import { ParticlesComponent } from './particles/particles.component';
import { LogoComponent } from './logo/logo.component';
import { IdeasComponent } from './ideas/ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PrivacyComponent,
    NewsComponent,
    BuildsComponent,
    BlogsComponent,
    DodecahedronComponent,
    IcosahedronComponent,
    OctahedronComponent,
    BackgroundComponent,
    ContactComponent,
    RocketComponent,
    ParticlesComponent,
    LogoComponent,
    IdeasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
