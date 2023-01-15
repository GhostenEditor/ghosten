import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'config-form-textarea',
  template: `
    <ng-container [formGroup]="formGroup">
      <textarea class="form-control" cols="30" rows="5" [formControlName]="formItem.name"></textarea>
    </ng-container>
  `,
})
export class TextareaComponent {
  rawScript: string;

  options = {
    language: 'json',
    formatOnType: true,
    formatOnPaste: true,
    automaticLayout: true,
    lineNumbersMinChars: 2,
  };
  @Output() onchange: EventEmitter<any> = new EventEmitter<any>();

  constructor(@Inject('FormItem') public formItem: any, public formControl: FormControl, public formGroup: FormGroup) {}

  // ngOnInit() {
  // this.rawScript = JSON.stringify(this.formItem.value);
  // }

  onInit(editor: any) {
    editor.getModel().updateOptions({ tabSize: 2 });
    editor.addAction({
      // An unique identifier of the contributed action.
      id: 'saveScript',

      // A label of the action that will be presented to the user.
      label: '保存',

      // An optional array of keybindings for the action.
      keybindings: [
        // monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
      ],

      // A precondition for this action.
      precondition: null,

      // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
      keybindingContext: null,

      contextMenuGroupId: 'navigation',

      contextMenuOrder: 1.5,

      run: (): null => {
        this.formControl.setValue(JSON.parse(this.rawScript.replace(/(\r|\n|\s+)/g, '')));
        return null;
      },
    });
    editor.setValue(JSON.stringify(this.formItem.value));
    setTimeout(() => editor.getAction('editor.action.formatDocument').run(), 100);
  }
}
