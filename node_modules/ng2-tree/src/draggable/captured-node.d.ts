import { TreeModel } from '../tree.types';
import { ElementRef } from '@angular/core';
export declare class CapturedNode {
    private anElement;
    private aTree;
    constructor(anElement: ElementRef, aTree: TreeModel);
    canBeDroppedAt(element: ElementRef): boolean;
    contains(other: ElementRef): boolean;
    sameAs(other: ElementRef): boolean;
    element: ElementRef;
    tree: TreeModel;
}
