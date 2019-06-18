import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

const AngularModules = [ReactiveFormsModule];

@NgModule({
    declarations: [AppComponent, MainComponent, PageNotFoundComponent, TopNavComponent, DashboardComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        HttpClientModule,
        MaterialModule,
        ...AngularModules,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
