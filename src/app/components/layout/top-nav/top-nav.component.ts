import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TopMenuItem } from '../models/top-menu-item.model';
import { MenuService } from '../services/menu.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
    public title = 'TODO: Site Name';
    public menuItems: TopMenuItem[] = [];
    public mobileViewport: boolean;
    @Output() public sidenavToggle = new EventEmitter<null>();

    constructor(private menuService: MenuService, breakpointObserver: BreakpointObserver) {
        // Check if the user is viewing in mobile or not
        breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
            this.mobileViewport = result.matches;
        });
    }

    ngOnInit() {
        this.initTopMenu();
    }

    /**
     * Initialises top menu data.
     */
    private initTopMenu(): void {
        this.menuItems = this.menuService.getTopMenuItems();
    }

    /**
     * Redirects to a specified external URL.
     *
     * @param url URL to redirect to.
     */
    redirect(url: string): void {
        window.open(url);
    }
}
