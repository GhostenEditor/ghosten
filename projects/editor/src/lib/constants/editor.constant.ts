const StyleProperty = `
    width: string;
    height: string;
    padding: string;
    margin: string;
    show: boolean;
`;
const Root = `
declare class EditorClassRoot {
  instance: {
    refresh(): void;
  };
  property: {
    justifyContent: string;
  }
}
`;
const Row = `
declare class EditorClassRow {
  instance: {
    refresh(): void;
  };
  property: {
    ${StyleProperty}
    justifyContent: string;
  }
}
`;
const Column = `
declare class EditorClassColumn {
  instance: {
    refresh(): void;
  };
  property: {
    ${StyleProperty}
    justifyContent: string;
  }
}
`;
const Text = `
declare class EditorClassText {
  instance: {
    refresh(): void;
  };
  property: {
    text: 'Some Text';
    tagName: 'p';
    ${StyleProperty}
    textAlign: string;
  };
}
`;
const Button = `
declare class EditorClassButton {
  instance: {
    refresh(): void;
  };
  property: {
    text: string;
    buttonSize: string;
    color: string;
    buttonType: string;
    disabled: boolean;
    ${StyleProperty}
  };
}
`;
const Input = `
declare class EditorClassInput {
  instance: {
    refresh(): void;
  };
  property: {
    inputSize: string;
    inputType: string;
    placeholder: string;
    value: string;
    disabled: boolean;
    ${StyleProperty}
  };
}
`;
const Select = `
declare class EditorClassSelect {
  instance: {
    refresh(): void;
    init(): void;
  };
  property: {
    inputSize: string;
    value: string;
    disabled: boolean;
    ${StyleProperty}
  };
  datasource: {
    async: boolean;
    options: any[];
    sql: string;
    params: any;
    labelField: string;
    valueField: string;
  }
}
`;
const Table = `
declare class EditorClassTable {
  instance: {
    refresh(): void;
    tableData: {
      next(data?:any): void;
    };
    selected: any[];
    changePager(pager: { pageNo?: number, totalCount?: number, pageSize?: number }): void;
  };
  property: {
    ${StyleProperty}
  };
  datasource: {
    sql: string;
    tableColumns: any[];
    params: any;
  }
}
`;
const Tree = `
declare class EditorClassTree {
  instance: {
    refresh(): void;
  };
  property: {
    ${StyleProperty}
  };
  datasource: {
    treeNodes: any[];
  }
}
`;
const Router = `
declare class EditorClassRouter {
  url: string;
  navigateByUrl(url: string, extras?: any): Promise<!--suppress HtmlUnknownTag -->
<!--suppress HtmlUnknownTag -->
<boolean>;
  navigate(commands: any[], extras?: any): Promise<boolean>;
}
`;
const Route = `
declare class EditorClassRoute {
  path: string;
}
`;

const DataSource = `
declare class EditorDataSource {
  query(uri: string):Observable<!--suppress HtmlUnknownTag -->
<!--suppress HtmlUnknownTag -->
<any>;
  postServer(uri: string, obj): Observable<any>
}
`;

const DataPost = `
declare class EditorPostSource {
  post(options: any):any;
  confirm(options: any):any;
}
`;

const NoticeService = `
declare class EditorClassNoticeService {
  noticeSuccess(text: string): void;
  noticeFailure(text: string): void;
}
`;

const CommonSource = `
declare class EditorClassCommonSource {
  userId: string;
  domainId: string;
}
`;

const Modal = `
declare class EditorClassModal {
  submitted(): void;

  submitError(): void;
}
`;
const Form = `
interface EditorClassForm {
  reset(): void;
  validate(): void;
}
`;
export const EditorClass: Record<string, string> = {
  Root,
  Row,
  Column,
  Text,
  Button,
  Input,
  Select,
  Table,
  Tree,
  Router,
  Route,
  DataSource,
  DataPost,
  NoticeService,
  CommonSource,
  Modal,
  Form,
};
