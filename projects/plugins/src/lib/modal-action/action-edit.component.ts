import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import type * as Monaco from 'monaco-editor';
import { GtEdit } from '@ghosten/editor';
import { monacoLoader } from './editor';

declare const monaco: typeof Monaco;

@Component({
  selector: 'gt-action-edit',
  template: `
    <gt-modal
      i18n-modalTitle="Modal Title: Action Editor"
      modalTitle="事件编辑器"
      modalSize="xl"
      [modalFooter]="true"
      (confirm)="confirm.emit(script)"
      (cancel)="cancel.emit()"
    >
      <div #editor class="overflow-hidden border" style="height: 36rem;"></div>
    </gt-modal>
  `,
})
export class ModalActionComponent implements AfterViewInit {
  @ViewChild('editor', { static: true }) editor: ElementRef<HTMLDivElement>;

  @Input() script: string;
  @Output() confirm: EventEmitter<string> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor(private gt: GtEdit) {}

  ngAfterViewInit() {
    monacoLoader.subscribe(() => {
      const editor = monaco.editor.create(this.editor.nativeElement, {
        value: this.script,
        language: 'typescript',
        lineNumbersMinChars: 2,
        theme: this.gt.darkMode ? 'vs-dark' : 'vs',
      });
      editor.onDidChangeModelContent(() => (this.script = editor.getValue()));
    });
  }
}
