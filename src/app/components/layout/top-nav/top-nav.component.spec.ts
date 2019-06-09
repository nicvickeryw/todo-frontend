import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavComponent } from './top-nav.component';
import {MatIcon, MatToolbar} from '@angular/material';

describe('TopNavComponent', () => {
    let component: TopNavComponent;
    let fixture: ComponentFixture<TopNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TopNavComponent, MatIcon, MatToolbar ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
