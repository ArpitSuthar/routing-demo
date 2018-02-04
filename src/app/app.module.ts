import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoJsonService } from './todo-json.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { DataListModule } from 'primeng/datalist';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroFormComponent,
    ForbiddenNameDirective,
    HeroFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DataListModule,
    TabMenuModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [TodoJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
