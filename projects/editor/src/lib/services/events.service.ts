import { EventEmitter, Injectable } from '@angular/core';

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
  AUTO_SAVE = new Subject<any>();
  SAVE = new EventEmitter<void>();
  // AUTO_SAVE = merge(
  //   this.CHANGE_STYLE,
  //   this.CHANGE_PROPERTY,
  //   this.CHANGE_ACTION,
  //   this.CHANGE_DATASOURCE,
  //   this.CHANGE_VALIDATOR,
  //   this.CHANGE_RIGHTS,
  //   this.MOVE_NODE,
  //   this.REMOVE_NODE,
  //   this.INSERT_NODE,
  //   this.UNDO,
  //   this.REDO,
  // ).pipe(debounceTime(3000));
  onEvent: Observable<any> = merge(
    this.CHANGE_SELECT.pipe(map(data => ({ type: 'CHANGE_SELECT', data }))),
    this.CHANGE_STYLE.pipe(map(data => ({ type: 'CHANGE_STYLE', data }))),
    this.CHANGE_PROPERTY.pipe(map(data => ({ type: 'CHANGE_PROPERTY', data }))),
    this.CHANGE_DATASOURCE.pipe(
      map(data => ({ type: 'CHANGE_DATASOURCE', data })),
    ),
    this.CHANGE_ACTION.pipe(map(data => ({ type: 'CHANGE_ACTION', data }))),
    this.CHANGE_RIGHTS.pipe(map(data => ({ type: 'CHANGE_RIGHTS', data }))),
    this.CHANGE_VALIDATOR.pipe(
      map(data => ({ type: 'CHANGE_VALIDATOR', data })),
    ),
    this.CHANGE_BOARD.pipe(map(data => ({ type: 'CHANGE_BOARD', data }))),
    this.COPY_STYLE.pipe(map(data => ({ type: 'COPY_STYLE', data }))),
    this.PASTE_STYLE.pipe(map(data => ({ type: 'PASTE_STYLE', data }))),
    this.RENDER_START.pipe(map(data => ({ type: 'RENDER_START', data }))),
    this.RENDER_STOP.pipe(map(data => ({ type: 'RENDER_STOP', data }))),
    this.CUSTOM_EDIT_START.pipe(
      map(data => ({ type: 'CUSTOM_EDIT_START', data })),
    ),
    this.CUSTOM_EDIT_STOP.pipe(
      map(data => ({ type: 'CUSTOM_EDIT_STOP', data })),
    ),
    this.WINDOW_CREATE.pipe(map(data => ({ type: 'WINDOW_CREATE', data }))),
    this.WINDOW_MOVE.pipe(map(data => ({ type: 'WINDOW_MOVE', data }))),
    this.WINDOW_DESTROY.pipe(map(data => ({ type: 'WINDOW_DESTROY', data }))),
    this.INSERT_NODE.pipe(map(data => ({ type: 'INSERT_NODE', data }))),
    this.REMOVE_NODE.pipe(map(data => ({ type: 'REMOVE_NODE', data }))),
    this.MOVE_NODE.pipe(map(data => ({ type: 'MOVE_NODE', data }))),
    this.UPDATE_TEMPLATE.pipe(map(data => ({ type: 'UPDATE_TEMPLATE', data }))),
    this.UNDO.pipe(map(data => ({ type: 'UNDO', data }))),
    this.REDO.pipe(map(data => ({ type: 'REDO', data }))),
    this.AUTO_SAVE.pipe(map(data => ({ type: 'AUTO_SAVE', data }))),
    this.SAVE.pipe(map(data => ({ type: 'SAVE', data }))),
  );
}
