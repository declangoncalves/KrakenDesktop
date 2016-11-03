import { Renderer, OnDestroy, OnInit } from '@angular/core';
import { NodeMenuService } from './node-menu.service';
export declare class NodeMenuComponent implements OnInit, OnDestroy {
    private renderer;
    private nodeMenuService;
    private menuItemSelected;
    private availableMenuItems;
    private disposersForGlobalListeners;
    constructor(renderer: Renderer, nodeMenuService: NodeMenuService);
    private onMenuItemSelected(e, selectedMenuItem);
    private closeMenu(e);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
