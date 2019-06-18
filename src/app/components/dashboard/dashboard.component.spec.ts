import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, BrowserAnimationsModule, ReactiveFormsModule, RouterTestingModule, MaterialModule],
            declarations: [DashboardComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add a new item when add is clicked and input has values', () => {
        const hostElement = fixture.nativeElement;
        const descInput = hostElement.querySelector('input');
        const addButton = hostElement.querySelector('.submit-button');

        descInput.value = 'First test item';
        descInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        const event = new Event('click');
        addButton.dispatchEvent(event);
        component.onAddItem();
        fixture.detectChanges();

        expect(component.todoItems.length).toBeGreaterThan(1);
    });
});
