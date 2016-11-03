import { ElementRef } from '@angular/core';
import { CapturedNode } from './captured-node';
export declare enum NodeDraggableEventAction {
    Remove = 0,
}
export interface NodeDraggableEvent {
    captured: CapturedNode;
    target: ElementRef;
    action?: NodeDraggableEventAction;
}
