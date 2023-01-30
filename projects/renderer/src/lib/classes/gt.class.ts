import { EventEmitter, Inject, Injectable, OnDestroy } from '@angular/core';
import { Gt, GtNode, IGtNode } from '@ghosten/common';
import { Subject } from 'rxjs';

import { GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP } from '../injectors';

@Injectable()
export class GtRender extends Gt implements OnDestroy {
  public globalService = new Map<string, Subject<any>>();
  public componentVariables = new Map<string, GtNode['componentRef']>();
  public showModal = new EventEmitter<string>();

  constructor(
    @Inject(GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP)
    public override defaultConfigMap: IGtNode.DefaultConfigMap,
  ) {
    super();
  }

  ngOnDestroy(): void {
    this.globalService.forEach(source => source.complete());
    this.globalService.clear();
  }
}
