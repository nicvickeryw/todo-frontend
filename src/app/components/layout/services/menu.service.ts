import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TopMenuItem} from '../models/top-menu-item.model';
import {SideMenuItem} from '../models/side-menu-item.model';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    constructor(private http: HttpClient) {}

    /**
     * Returns all top menu items.
     *
     * @FIXME: may be more prudent to use a back-end API to retrieve this data?
     */
    getTopMenuItems(): TopMenuItem[] {
        return TopMenuItems;
    }

    getSideMenuItems(): SideMenuItem[] {
        return SideMenuItems;
    }
}

export const TopMenuItems = [
    new TopMenuItem(1, 'Home', 'google.com'),
];

export const SideMenuItems = [
    new SideMenuItem(1, 'Testing', 'home', 'home', {}, 1)
];

