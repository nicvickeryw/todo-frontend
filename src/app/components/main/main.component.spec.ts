import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { Component, Directive, HostListener, Input } from '@angular/core';

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainComponent,
                TopNavStubComponent,
                MatSidenavStubComponent,
                MatSidenavContentStubComponent,
                MatSidenavContainerStubComponent,
                MatNavListStubComponent,
                MatIconStubComponent,
                RouterLinkDirectiveStub,
                RouterOutletStub,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

/**
 * Stubs for generating angular tests with empty components.
 */
@Component({ selector: 'app-top-nav', template: '' })
class TopNavStubComponent {}

@Component({ selector: 'mat-sidenav', template: '' })
class MatSidenavStubComponent {
    @Input() mode;
    @Input() fixedInViewport;
}

@Component({ selector: 'mat-sidenav-content', template: '' })
class MatSidenavContentStubComponent {}

@Component({ selector: 'mat-sidenav-container', template: '' })
class MatSidenavContainerStubComponent {}

@Component({ selector: 'mat-nav-list', template: '' })
class MatNavListStubComponent {}

@Component({ selector: 'mat-icon', template: '' })
class MatIconStubComponent {}

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStub {}

@Directive({
    selector: '[routerLink]',
})
export class RouterLinkDirectiveStub {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    @HostListener('click')
    onClick() {
        this.navigatedTo = this.linkParams;
    }
}
