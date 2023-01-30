import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';

import { GT_EDIT_COMPONENT_TYPE_MAP, GtEdit } from '@ghosten/editor';

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
  selector: 'gt-modal-action-editor',
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
      <div #editor class="overflow-hidden border" style="height: calc(100vh - 15rem)"></div>
    </gt-modal>
  `,
})
export class ModalActionComponent implements AfterViewInit {
  @ViewChild('editor', { static: true }) editor: ElementRef<HTMLDivElement>;

  @Input() script: string;
  @Output() confirm: EventEmitter<string> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() animationDone: EventEmitter<any> = new EventEmitter();
  private typeMap: Record<string, { typeName: string; typeStr: string }>;

  constructor(
    private gt: GtEdit,
    @Inject(GT_EDIT_COMPONENT_TYPE_MAP) typeMap: Record<string, { typeName: string; typeStr: string }>[],
  ) {
    this.typeMap = Object.assign({}, ...typeMap);
  }

  ngAfterViewInit() {
    monacoLoader.subscribe(() => {
      const editor = monaco.editor.create(this.editor.nativeElement, {
        value: this.script || '',
        language: 'typescript',
        lineNumbersMinChars: 2,
        theme: this.gt.darkMode ? 'vs-dark' : 'vs',
        automaticLayout: true,
      });
      editor.onDidChangeModelContent(() => (this.script = editor.getValue()));
      Object.entries(this.typeMap).forEach(([type, { typeStr }]) => {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(typeStr, type);
      });
      this.gt.nodeList.forEach(node => {
        if (node.variableName) {
          monaco.languages.typescript.typescriptDefaults.addExtraLib(
            `declare const ${node.variableName}: ${this.typeMap[node.type].typeName}`,
          );
        }
      });
      monaco.languages.typescript.typescriptDefaults.addExtraLib(`declare const _this: ${this.typeMap.nav.typeName}`);
    });
  }
}
