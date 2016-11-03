import { ElementRef, OnInit, Renderer } from '@angular/core';
export declare class NodeEditableDirective implements OnInit {
    private renderer;
    private elementRef;
    private nodeValue;
    private valueChanged;
    constructor(renderer: Renderer, elementRef: ElementRef);
    ngOnInit(): void;
    private applyNewValue(newNodeValue);
    private applyNewValueByLoosingFocus(newNodeValue);
    private cancelEditing();
}
