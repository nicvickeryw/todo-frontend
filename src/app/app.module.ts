import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import {
    MatButtonModule,
    MatCardModule, MatDividerModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatRadioModule, MatSelectModule,
    MatStepperModule,
    MatToolbarModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import {RoutingModule} from './routing/routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const MatModules = [
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    MatDividerModule,
    ScrollingModule,
];

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        PageNotFoundComponent,
        TopNavComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        HttpClientModule,
        ...MatModules
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
