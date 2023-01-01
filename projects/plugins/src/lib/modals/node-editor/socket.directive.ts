import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ConnectionService } from './connection.service';
import { Socket } from './node';

@Directive({
  selector: '[nodeSocket]',
})
export class SocketDirective implements OnInit {
  @Input() socket: Socket;

  @HostListener('mousedown', ['$event']) mousedown(event: MouseEvent) {
    this._startDrawConnection(event);
  }

  @HostListener('touchstart', ['$event']) touchstart(event: MouseEvent) {
    this._startDrawConnection(event);
  }

  @HostListener('mouseup', ['$event']) mouseup(event: MouseEvent) {
    this._stopDrawConnection(event);
  }

  @HostListener('touchend', ['$event']) touchend(event: MouseEvent) {
    this._stopDrawConnection(event);
  }

  constructor(
    private elementRef: ElementRef,
    private nodeService: ConnectionService,
  ) {}

  ngOnInit() {
    this.socket.element = this.elementRef.nativeElement;
  }

  _startDrawConnection(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.nodeService.startDrawConnection.next({
      event: event as any,
      node: this.socket.node,
      socket: this.socket,
    });
  }

  _stopDrawConnection(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.nodeService.endDrawConnection.next({
      event,
      node: this.socket.node,
      socket: this.socket,
    });
  }
}
