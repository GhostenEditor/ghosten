import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { GtEdit } from '@ghosten/editor';

import { from, fromEvent, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import type * as Monaco from 'monaco-editor';

const baseUrl = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.34.1/min/vs';
const monacoLoader = of(null).pipe(
  map(() => {
    const loaderScript = document.createElement('script');
    loaderScript.type = 'text/javascript';
    loaderScript.src = `${baseUrl}/loader.js`;
    document.body.appendChild(loaderScript);
    return loaderScript;
  }),
  switchMap(loaderScript => fromEvent(loaderScript, 'load')),
  switchMap(() => {
    (<any>window).require.config({ paths: { vs: baseUrl } });
    return from(new Promise(resolve => (<any>window).require([`vs/editor/editor.main`], resolve)));
  }),
  shareReplay(1),
);
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
      (animationDone)="animationDone.emit()"
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
  @Output() animationDone: EventEmitter<any> = new EventEmitter();

  constructor(private gt: GtEdit) {}

  ngAfterViewInit() {
    monacoLoader.subscribe(() => {
      const editor = monaco.editor.create(this.editor.nativeElement, {
        value: this.script || '',
        language: 'typescript',
        lineNumbersMinChars: 2,
        theme: this.gt.darkMode ? 'vs-dark' : 'vs',
      });
      editor.onDidChangeModelContent(() => (this.script = editor.getValue()));
    });
  }
}
