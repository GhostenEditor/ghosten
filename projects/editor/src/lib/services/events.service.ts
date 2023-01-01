import { Injectable } from '@angular/core';

import { Board, GtNode } from '@ghosten/common';

import { Observable, Subject, merge } from 'rxjs';
import { map } from 'rxjs/operators';

import { InsertNodeData, MoveNodeData, RemoveNodeData } from '../types';

@Injectable()
export class EventsService {
  CHANGE_SELECT = new Subject<GtNode[]>();
  CHANGE_STYLE = new Subject<any>();
  CHANGE_PROPERTY = new Subject<any>();
  CHANGE_DATASOURCE = new Subject<any>();
  CHANGE_ACTION = new Subject<any>();
  CHANGE_RIGHTS = new Subject<any>();
  CHANGE_VALIDATOR = new Subject<any>();
  CHANGE_BOARD = new Subject<Board | null>();
  COPY_STYLE = new Subject<any>();
  PASTE_STYLE = new Subject<any>();
  RENDER_START = new Subject<any>();
  RENDER_STOP = new Subject<any>();
  CUSTOM_EDIT_START = new Subject<any>();
  CUSTOM_EDIT_STOP = new Subject<any>();
  WINDOW_CREATE = new Subject<any>();
  WINDOW_MOVE = new Subject<any>();
  WINDOW_DESTROY = new Subject<any>();
  INSERT_NODE: Subject<InsertNodeData> = new Subject<InsertNodeData>();
  REMOVE_NODE: Subject<RemoveNodeData> = new Subject<RemoveNodeData>();
  MOVE_NODE = new Subject<MoveNodeData>();
  UNDO = new Subject<any>();
  REDO = new Subject<any>();
  UPDATE_TEMPLATE = new Subject<any>();
  BLACKBOARD_RESIZE = new Subject<any>();
  onEvent: Observable<any>;

  constructor() {
    this.onEvent = merge(
      ...[
        'CHANGE_SELECT',
        'CHANGE_STYLE',
        'CHANGE_PROPERTY',
        'CHANGE_DATASOURCE',
        'CHANGE_ACTION',
        'CHANGE_RIGHTS',
        'CHANGE_VALIDATOR',
        'CHANGE_BOARD',
        'COPY_STYLE',
        'PASTE_STYLE',
        'RENDER_START',
        'RENDER_STOP',
        'CUSTOM_EDIT_START',
        'CUSTOM_EDIT_STOP',
        'WINDOW_CREATE',
        'WINDOW_MOVE',
        'WINDOW_DESTROY',
        'INSERT_NODE',
        'REMOVE_NODE',
        'MOVE_NODE',
        // 'BLACKBOARD_RESIZE',
        'UPDATE_TEMPLATE',
        'UNDO',
        'REDO',
      ].map(event =>
        (this as any)[event].pipe(map(data => ({ type: event, data }))),
      ),
    );

    // this.onEvent.subscribe(console.log);
    // todo 模板继承
    /*    merge(
     this.MOVE_NODE.pipe(map(data => [data])),
     this.INSERT_NODE.pipe(map(data => [data])),
     this.REMOVE_NODE
     )
     .pipe(
     tap(data => console.log(data)),
     map(list => list.filter(({gtNode}) => gtNode.path[0].type === 'template')),
     filter(list => list.length)
     )
     .subscribe(list => {
     list.forEach(data => {
     if (!data.gtNode.path[0].inheritList) {
     return;
     }
     this.UPDATE_TEMPLATE.next({
     template: data.gtNode.path[0],
     list: data.gtNode.path[0].inheritList
     });
     });
     });*/
  }
}
