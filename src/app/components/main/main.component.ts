import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {SideMenuItem} from '../layout/models/side-menu-item.model';
import {MenuService} from '../layout/services/menu.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
    mobileQuery: MediaQueryList;
    readonly _mobileQueryListener: () => void;
    public menuItems: SideMenuItem[] = [];

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private menuService: MenuService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
        this.initSideMenu();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    /**
     * Sets side menu data.
     */
    private initSideMenu(): void {
        this.menuItems = this.menuService.getSideMenuItems();
    }
}
