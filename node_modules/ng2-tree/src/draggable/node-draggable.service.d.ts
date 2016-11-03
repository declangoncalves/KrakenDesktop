import { Subject } from 'rxjs/Rx';
import { CapturedNode } from './captured-node';
import { NodeDraggableEvent } from './draggable.types';
export declare class NodeDraggableService {
    draggableNodeEvents$: Subject<NodeDraggableEvent>;
    private capturedNode;
    captureNode(node: CapturedNode): void;
    getCapturedNode(): CapturedNode;
    releaseCapturedNode(): void;
}
