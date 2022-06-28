export const USER_SCROLL_EVENTS = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'touchmove'];
export const USER_SCROLL_KEYBOARD_EVENTS = [' ', 'PageUp', 'PageDown', 'End', 'Home', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];

export interface Position {
  x: number;
  y: number;
}

export class ScrollableArea {
  private touchStart!: Position;
  private focused: boolean = false;
  constructor(public element: HTMLElement) {}
  public setEventListeners(enable: boolean): void {
    USER_SCROLL_EVENTS.forEach(eventType => {
      if (enable) {
        this.element.addEventListener(eventType, event => this.handleScroll(event));
      } else {
        this.element.removeEventListener(eventType, event => this.handleScroll(event));
      }
    });

    if (enable) {
      this.element.addEventListener('touchstart', event => this.handleTouchStart(event));
      window.addEventListener('keydown', event => this.handleScroll(event));
      window.addEventListener('click', event => this.handleClick(event));
    } else {
      this.element.removeEventListener('touchstart', event => this.handleTouchStart(event));
      window.removeEventListener('keydown', event => this.handleScroll(event));
      window.removeEventListener('click', event => this.handleClick(event));
    }
  }

  private handleTouchStart(event: TouchEvent): void {
    const touch = event.touches[0];

    this.touchStart = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }

  private handleClick(event: Event): void {
    const source = event.target as HTMLElement;

    if (source === this.element || this.element.contains(source)) {
      this.focused = true;
    } else {
      this.focused = false;
    }
  }

  private handleScroll(event: Event): void {
    const eventType = event.type;

    if (eventType !== 'mousedown') {
      const scrollY = this.element.scrollTop;
      let deltaY: number | undefined;

      if (eventType === 'keydown') {
        const tagName = (event.target as HTMLElement).tagName;
        const keyCode = (event as KeyboardEvent).key;
        if (this.focused && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && USER_SCROLL_KEYBOARD_EVENTS.includes(keyCode)) {
          switch (keyCode) {
            case 'ArrowUp':
            case 'PageUp':
            case 'Home':
              deltaY = -1;
              break;
            default:
              deltaY = 1;
          }
        }
      } else if (eventType === 'touchmove') {
        deltaY = this.touchStart.y - (event as TouchEvent).touches[0].clientY;
      } else {
        deltaY = (event as WheelEvent).deltaY;
      }

      if (deltaY) {
        // (deltaY <= 0)
        if (deltaY.toString().includes('-')) {
          if (scrollY === 0) {
            event.preventDefault();
          }
        } else {
          if (scrollY + this.element.offsetHeight === this.element.scrollHeight) {
            event.preventDefault();
          }
        }
      }
    }
  }
}