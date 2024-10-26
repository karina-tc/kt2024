type CoordinatePosition = 'left' | 'top';

interface CoordinateOptions {
  value: string;
  position: number;
  isColumn: boolean;
}

export class CoordinateSystem {
  private readonly columnCoords: HTMLElement | null;
  private readonly rowCoords: HTMLElement | null;
  private readonly gridStep: number = 200;

  constructor() {
    this.columnCoords = document.getElementById('column-coordinates');
    this.rowCoords = document.getElementById('row-coordinates');
    this.initializeEventListeners();
    this.update();
  }

  private createCoordinate({ value, position, isColumn }: CoordinateOptions): HTMLSpanElement {
    const span = document.createElement('span');
    span.className = 'coordinate';
    span.textContent = value;
    const positionType: CoordinatePosition = isColumn ? 'left' : 'top';
    span.style[positionType] = `${position}%`;
    return span;
  }

  private update(): void {
    if (!this.columnCoords || !this.rowCoords) return;

    // Clear existing coordinates
    this.columnCoords.innerHTML = '';
    this.rowCoords.innerHTML = '';

    const { innerWidth: width, innerHeight: height } = window;

    // Add column coordinates (numbers)
    for (let i = 0; i <= width; i += this.gridStep) {
      const position = (i / width) * 100;
      this.columnCoords.appendChild(
        this.createCoordinate({
          value: i.toString(),
          position,
          isColumn: true
        })
      );
    }

    // Add row coordinates (letters)
    for (let i = 0; i <= height; i += this.gridStep) {
      const position = (i / height) * 100;
      const letter = String.fromCharCode(65 + Math.floor(i / this.gridStep));
      this.rowCoords.appendChild(
        this.createCoordinate({
          value: letter,
          position,
          isColumn: false
        })
      );
    }
  }

  private initializeEventListeners(): void {
    window.addEventListener('resize', () => this.update());
    document.addEventListener('astro:after-swap', () => this.update());
  }
}
