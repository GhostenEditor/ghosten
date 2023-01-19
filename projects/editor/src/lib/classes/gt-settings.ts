import { Board } from '@ghosten/common';

export interface IGtSettings {
  name: string;
  description: string;
  currentBoardName: string;
  elementAccordionExpanded: Record<string, boolean>;
  configAccordionExpanded: Record<string, boolean>;
  sidebarPosition: Record<ISidebarPosition['type'], ISidebarPosition>;
  selectedNodes: string[];
}

export interface ISidebarPosition {
  type: 'element' | 'config' | 'tree' | 'page';
  position: 'left' | 'right' | 'float';
  active?: boolean;
  rect?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export class GtSettings {
  name: string;
  description: string;
  selected: string[] = [];
  rightTabIndex: number = 0;
  configAccordionExpanded: Record<string, boolean> = {};
  elementAccordionExpanded: Record<string, boolean> = {};
  currentBoardName: string;
  sidebarPosition: Record<ISidebarPosition['type'], ISidebarPosition>;

  init(settings: IGtSettings) {
    this.name = settings.name;
    this.description = settings.description;
    this.selected = settings.selectedNodes || [];
    this.sidebarPosition = settings.sidebarPosition;
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
      selectedNodes: this.selected,
      sidebarPosition: this.sidebarPosition,
    };
  }
}
