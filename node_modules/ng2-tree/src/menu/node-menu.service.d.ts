import { Subject } from 'rxjs/Rx';
import { NodeMenuEvent } from './menu.types';
export declare class NodeMenuService {
    nodeMenuEvents$: Subject<NodeMenuEvent>;
}
