import { ElementRef, Renderer, OnDestroy } from '@angular/core';
import { NodeDraggableService } from './node-draggable.service';
export declare class NodeDraggableDirective implements OnDestroy {
    private element;
    private nodeDraggableService;
    private renderer;
    private static DATA_TRANSFER_STUB_DATA;
    private nodeDraggable;
    private tree;
    private nodeNativeElement;
    private disposersForDragListeners;
    constructor(element: ElementRef, nodeDraggableService: NodeDraggableService, renderer: Renderer);
    private handleDragStart(e);
    private handleDragOver(e);
    private handleDragEnter(e);
    private handleDragLeave(e);
    private handleDrop(e);
    private isDropPossible(e);
    private handleDragEnd(e);
    private containsElementAt(e);
    private addClass(className);
    private removeClass(className);
    private notifyThatNodeWasDropped();
    ngOnDestroy(): void;
}
