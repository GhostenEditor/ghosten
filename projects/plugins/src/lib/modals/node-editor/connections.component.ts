import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Connection, ConnectionDrawing } from './node';
import { ConnectionService } from './connection.service';

@Component({
  selector: 'connections-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <svg #svgRef style="position: absolute;width: 100%; height: 100%;">
    <path
      *ngFor="let connection of connectionService.connections"
      fill="none"
      stroke="pink"
      stroke-width="5"
      [attr.d]="getConnectionD(connection)"
    ></path>
    <path
      *ngIf="drawingConnection"
      [attr.d]="getDrawingD(drawingConnection)"
      fill="none"
      stroke="pink"
      stroke-width="5"
    ></path>
  </svg>`,
})
export class ConnectionsComponent implements OnInit {
  @ViewChild('svgRef', { static: true }) svgRef: ElementRef<SVGAElement>;
  drawing = false;
  drawingConnection: ConnectionDrawing | null = null;

  constructor(public connectionService: ConnectionService, private cdr: ChangeDetectorRef) {
    connectionService.startDrawConnection.asObservable().subscribe(() => (this.drawing = true));
    connectionService.endDrawConnection.asObservable().subscribe(() => {
      this.drawingConnection = null;
      this.cdr.detectChanges();
    });
    connectionService.drawingConnection.asObservable().subscribe(connection => {
      this.drawingConnection = connection;
      this.cdr.detectChanges();
    });
    connectionService.nodeDragging.subscribe(() => this.cdr.detectChanges());
  }

  ngOnInit() {
    this.connectionService.svgContainer = this.svgRef.nativeElement;
  }

  getConnectionD(connection: Connection) {
    const containerRect = this.svgRef.nativeElement.getBoundingClientRect();
    const startRect = connection.output.element.getBoundingClientRect();
    const endRect = connection.input.element.getBoundingClientRect();
    const start = {
      x: (startRect.left + startRect.right) / 2 - containerRect.left,
      y: (startRect.top + startRect.bottom) / 2 - containerRect.top,
    };
    const end = {
      x: (endRect.left + endRect.right) / 2 - containerRect.left,
      y: (endRect.top + endRect.bottom) / 2 - containerRect.top,
    };
    return this.getDrawingD({ start, end });
  }

  getDrawingD({ start, end }: ConnectionDrawing) {
    const handleLength = Math.abs(end.x - start.x) * 0.35;
    return `M ${start.x},${start.y} C ${start.x + handleLength},${start.y} ${end.x - handleLength},${end.y} ${end.x},${
      end.y
    }`;
  }
}
