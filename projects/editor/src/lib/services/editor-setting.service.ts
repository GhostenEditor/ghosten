import { Board } from '@ghosten/common';
import { Injectable } from '@angular/core';

import { EventsService } from './events.service';

@Injectable({ providedIn: 'root' })
export class EditorSettingService {
  rightTabIndex = +localStorage.getItem('gtActiveRightTab')! || 0;

  configAccordionExpanded: Record<string, boolean> =
    JSON.parse(localStorage.getItem('configAccordionExpanded')!) || {};
  elementAccordionExpanded: Record<string, boolean> =
    JSON.parse(localStorage.getItem('elementAccordionExpanded')!) || {};
  currentBoardName = localStorage.getItem('currentBoardName');

  constructor(private events: EventsService) {
    this.events.CHANGE_BOARD.subscribe(board =>
      this.changeCurrentBoard(board!),
    );
  }

  activateRightTab(index: number) {
    this.rightTabIndex = index;
    localStorage.setItem('gtActiveRightTab', '' + index);
  }

  changeCurrentBoard(board: Board) {
    this.currentBoardName = board.name;
    localStorage.setItem('currentBoardName', this.currentBoardName);
  }

  changeConfigAccordionExpanded(type: string, expanded: boolean) {
    this.configAccordionExpanded[type] = expanded;
    localStorage.setItem(
      'configAccordionExpanded',
      JSON.stringify(
        this.configAccordionExpanded,
        (key, value) => value || undefined,
      ),
    );
  }

  changeElementAccordionExpanded(type: string, expanded: boolean) {
    this.elementAccordionExpanded[type] = expanded;
    localStorage.setItem(
      'elementAccordionExpanded',
      JSON.stringify(
        this.elementAccordionExpanded,
        (key, value) => value || undefined,
      ),
    );
  }
}
