import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatRadioModule,
        MatToolbarModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatStepperModule,
        MatDividerModule,
        ScrollingModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatRadioModule,
        MatToolbarModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatStepperModule,
        MatDividerModule,
        ScrollingModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
})
export class MaterialModule {}
