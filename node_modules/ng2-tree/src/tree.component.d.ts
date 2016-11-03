import { OnInit } from '@angular/core';
import { TreeService } from './tree.service';
export declare class TreeComponent implements OnInit {
    private treeService;
    private tree;
    private nodeCreated;
    private nodeRemoved;
    private nodeRenamed;
    private nodeSelected;
    private nodeMoved;
    constructor(treeService: TreeService);
    ngOnInit(): void;
}
