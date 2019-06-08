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
    MatSidenavModule, MatStepperModule,
    MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
        ...MatModules
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
