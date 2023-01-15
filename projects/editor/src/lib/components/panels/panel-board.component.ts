import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Board, IGtNode } from '@ghosten/common';

import { FormItem } from '../../types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'gt-board-edit',
  template: `
    <config-form [formList]="formList" (formChange)="onchange($event)"></config-form>
    <p>Actions</p>
    <table class="table table-bordered m-0">
      <thead>
        <tr>
          <th class="text-truncate" style="width:3.8em" i18n="Table Column Header: Index">序号</th>
          <th class="text-truncate" style="width:4em" i18n="Table Column Header: Category">类型</th>
          <th class="text-truncate" i18n="Table Column Header: Description">描述</th>
          <th class="text-truncate" style="width:5em;" i18n="Table Column Header: Operation">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let action of actions; let i = index">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ action.type }}</td>
          <td class="text-truncate" [title]="action.desc">{{ action.desc }}</td>
          <td>
            <i class="gt-icon" style="cursor:pointer;" title="Edit" (click)="actionEdit(action)">edit</i>
            <i class="gt-icon" style="cursor:pointer;" title="Remove" (click)="delete(action)">minus</i>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-grid gap-2 mt-2">
      <button class="btn btn-light" (click)="actionEdit()" i18n="Button: Add">添加</button>
    </div>
  `,
})
export class PanelBoardComponent {
  formList: FormItem[];

  get actions(): IGtNode.Action[] {
    return Object.values(this.board.events!).reduce((acc: any, value) => acc.concat(value), []);
  }

  _board: Board;

  get board() {
    return this._board;
  }

  @Input() set board(board: Board) {
    this._board = board;
    this.formList = [
      {
        label: 'name',
        value: board.name,
        type: 'text',
        name: 'name',
      },
      {
        label: 'type',
        value: board.type,
        type: 'text',
        name: 'type',
        disabled: true,
      },
      {
        label: 'url',
        value: board.url,
        type: 'text',
        name: 'url',
      },
      {
        hide: board.type !== 'modal',
        label: 'size',
        value: board.size || '',
        type: 'select',
        name: 'size',
        options: [
          {
            label: 'xl',
            value: 'xl',
          },
          {
            label: 'lg',
            value: 'lg',
          },
          {
            label: 'md',
            value: '',
          },
          {
            label: 'sm',
            value: 'sm',
          },
        ],
      },
    ];
  }

  onchange(formItem: any) {
    const { name, value } = formItem;
    // @ts-ignore
    this.board[name] = value;
  }

  onclick({ name }: any) {
    // if (name === 'events') {
    //   this.dialog.openFromComponent(ModalActionComponent, {
    //     width: '60%',
    //   }).afterClosed().pipe(take(1), filter(events => events)).subscribe(events => {
    //     this.board.events = events;
    //   });
    // }
  }

  actionEdit(action: any = null) {
    // this.dialog.openFromComponent(ModalActionComponent, {
    //   data: {
    //     action,
    //     types: Object.keys(this.board.events!),
    //     target: this.board.events
    //   }
    // })
    //   .afterClosed().subscribe(result => {
    //   // console.log(result);
    //   this.cdr.detectChanges();
    // });
  }

  delete(action: any) {
    // this.gtNode.action[action.type].splice(this.gtNode.action[action.type].indexOf(action), 1);
  }
}
