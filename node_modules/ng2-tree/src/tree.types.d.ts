export declare class FoldingType {
    private _cssClass;
    static Expanded: FoldingType;
    static Collapsed: FoldingType;
    static Leaf: FoldingType;
    constructor(_cssClass: string);
    cssClass: string;
}
export interface TreeModel {
    value: string | RenamableNode;
    children?: Array<TreeModel>;
    _status?: TreeStatus;
    _foldingType?: FoldingType;
    _indexInParent?: number;
}
export declare enum TreeStatus {
    New = 0,
    Modified = 1,
    EditInProgress = 2,
}
export interface RenamableNode {
    setName(name: string): void;
    toString(): string;
}
export interface NodeEvent {
    node: TreeModel;
}
export interface NodeSelectedEvent extends NodeEvent {
}
export interface NodeDestructiveEvent extends NodeEvent {
    parent: TreeModel;
}
export interface NodeMovedEvent extends NodeDestructiveEvent {
}
export interface NodeRemovedEvent extends NodeDestructiveEvent {
}
export interface NodeCreatedEvent extends NodeDestructiveEvent {
}
export interface NodeRenamedEvent extends NodeDestructiveEvent {
    newValue: string | RenamableNode;
    oldValue: string | RenamableNode;
}
