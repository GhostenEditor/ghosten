import { Board } from '@ghosten/common';

export interface IGtSettings {
  name: string;
  description: string;
  currentBoardName: string;
  elementAccordionExpanded: Record<string, boolean>;
  configAccordionExpanded: Record<string, boolean>;
  activeRightTab: number;
  selectedNodes: string[];
}

export class GtSettings {
  name: string;
  description: string;
  selected: string[] = [];
  rightTabIndex: number = 0;
  configAccordionExpanded: Record<string, boolean> = {};
  elementAccordionExpanded: Record<string, boolean> = {};
  currentBoardName: string;

  init(settings: IGtSettings) {
    this.name = settings.name;
    this.description = settings.description;
    this.selected = settings.selectedNodes || [];
    this.rightTabIndex = settings.activeRightTab || 0;
    this.configAccordionExpanded = settings.configAccordionExpanded || {};
    this.elementAccordionExpanded = settings.elementAccordionExpanded || {};
    this.currentBoardName = settings.currentBoardName;
  }

  activateRightTab(index: number) {
    this.rightTabIndex = index;
  }

  changeCurrentBoard(board: Board) {
    this.currentBoardName = board.name;
  }

  changeConfigAccordionExpanded(type: string, expanded: boolean) {
    this.configAccordionExpanded[type] = expanded;
  }

  changeElementAccordionExpanded(type: string, expanded: boolean) {
    this.elementAccordionExpanded[type] = expanded;
  }

  export(): IGtSettings {
    return {
      name: this.name,
      description: this.description,
      currentBoardName: this.currentBoardName,
      elementAccordionExpanded: this.elementAccordionExpanded,
      configAccordionExpanded: this.configAccordionExpanded,
      activeRightTab: this.rightTabIndex,
      selectedNodes: this.selected,
    };
  }
}
