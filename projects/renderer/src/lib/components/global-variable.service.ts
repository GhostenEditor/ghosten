import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { merge, zip } from 'rxjs';
import { DirectiveContext } from './directive.context';

@Injectable()
export class GlobalVariableService {
  public map = map;
  public zip = zip;
  public merge = merge;
  public mergeMap = mergeMap;
  public switchMap = switchMap;
  public tap = tap;

  constructor(
    @Optional() public directiveContext: DirectiveContext,
    @Optional() public http: HttpClient,
  ) {}
}
