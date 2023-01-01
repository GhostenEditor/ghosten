import { Injectable, NgZone } from '@angular/core';

import { Subject, fromEvent, merge } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { Connection, ConnectionDrawing, Node, Socket } from './node';

@Injectable()
export class ConnectionService {
  startDrawConnection = new Subject<{
    event: MouseEvent;
    node: Node;
    socket: Socket;
  }>();
  drawingConnection = new Subject<ConnectionDrawing>();
  endDrawConnection = new Subject<{
    event: Event;
    node: Node | null;
    socket: Socket | null;
  }>();
  svgContainer: SVGElement;
  lastSocket: Socket | null = null;
  addConnection = new Subject<{ input: Socket; output: Socket }>();
  connections: Connection[] = [];
  nodeDragging = new Subject();

  constructor(ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      this.startDrawConnection
        .pipe(
          switchMap(startEvent => {
            this.lastSocket = startEvent.socket;
            const { x, y } = this.svgContainer.getBoundingClientRect();
            const startRect = startEvent.socket.element.getBoundingClientRect();
            return fromEvent<MouseEvent>(document, 'mousemove').pipe(
              takeUntil(
                merge(
                  this.endDrawConnection.asObservable(),
                  fromEvent(document, 'mouseup').pipe(
                    tap(event =>
                      this.endDrawConnection.next({
                        event,
                        node: null,
                        socket: null,
                      }),
                    ),
                  ),
                ).pipe(take(1)),
              ),
              tap(event => {
                if (this.lastSocket!.type === 'output') {
                  this.drawingConnection.next({
                    start: {
                      x: (startRect.left + startRect.right) / 2 - x,
                      y: (startRect.top + startRect.bottom) / 2 - y,
                    },
                    end: {
                      x: event.pageX - x,
                      y: event.pageY - y,
                    },
                  });
                } else {
                  this.drawingConnection.next({
                    end: {
                      x: (startRect.left + startRect.right) / 2 - x,
                      y: (startRect.top + startRect.bottom) / 2 - y,
                    },
                    start: {
                      x: event.pageX - x,
                      y: event.pageY - y,
                    },
                  });
                }
              }),
            );
          }),
        )
        .subscribe();
      this.endDrawConnection.asObservable().subscribe(({ socket }) => {
        if (
          socket &&
          this.lastSocket &&
          socket!.node !== this.lastSocket!.node &&
          socket !== this.lastSocket
        ) {
          this.addConnection.next(getInputAndOutput(socket, this.lastSocket));
        }
        this.lastSocket = null;
      });
      this.addConnection.asObservable().subscribe(({ input, output }) => {
        const connection = new Connection(input, output);
        input.addConnection(connection);
        output.addConnection(connection);
        this.connections.push(connection);
      });
    });
  }
}

function getInputAndOutput(
  socket1: Socket,
  socket2: Socket,
): { input: Socket; output: Socket } {
  if (socket1.type === socket2.type) {
    throw new Error();
  }
  return socket1.type === 'input'
    ? { input: socket1, output: socket2 }
    : { input: socket2, output: socket1 };
}
