const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse / uResolution;
    
    float dist = length(uv - mouse);
    float ripple = sin(dist * 30.0 - uTime * 5.0) * 0.05 * (1.0 - smoothstep(0.0, 0.4, dist));
    
    vec2 distortedUv = uv + ripple * normalize(uv - mouse);
    vec4 color = texture2D(uTexture, distortedUv);
    
    gl_FragColor = color;
  }
`;

export class FluidSimulation {
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;
  private gl: WebGLRenderingContext;
  private program: WebGLProgram;
  private mousePos: [number, number] = [0, 0];
  private texture: WebGLTexture;
  private startTime: number;

  constructor(canvas: HTMLCanvasElement, image: HTMLImageElement) {
    this.canvas = canvas;
    this.image = image;
    this.gl = canvas.getContext('webgl')!;
    this.startTime = Date.now();
    
    // Initialize WebGL
    this.program = this.createProgram();
    this.texture = this.createTexture();
    this.setupBuffers();
    this.setupEventListeners();
    this.animate();
  }

  private createProgram(): WebGLProgram {
    const gl = this.gl;
    const program = gl.createProgram()!;
    
    const vShader = gl.createShader(gl.VERTEX_SHADER)!;
    const fShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    
    gl.shaderSource(vShader, vertexShader);
    gl.shaderSource(fShader, fragmentShader);
    
    gl.compileShader(vShader);
    gl.compileShader(fShader);
    
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    
    return program;
  }

  private createTexture(): WebGLTexture {
    const gl = this.gl;
    const texture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return texture;
  }

  private setupBuffers(): void {
    const gl = this.gl;
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    
    const position = gl.getAttribLocation(this.program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  }

  private setupEventListeners(): void {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mousePos = [
        e.clientX - rect.left,
        rect.height - (e.clientY - rect.top) // Flip Y coordinate for WebGL
      ];
    });
  }

  private animate = (): void => {
    const gl = this.gl;
    
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.useProgram(this.program);
    
    // Set uniforms
    const uMouse = gl.getUniformLocation(this.program, 'uMouse');
    const uResolution = gl.getUniformLocation(this.program, 'uResolution');
    const uTime = gl.getUniformLocation(this.program, 'uTime');
    const uTexture = gl.getUniformLocation(this.program, 'uTexture');
    
    gl.uniform2f(uMouse, this.mousePos[0], this.mousePos[1]);
    gl.uniform2f(uResolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(uTime, (Date.now() - this.startTime) / 1000);
    
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1i(uTexture, 0);
    
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    
    requestAnimationFrame(this.animate);
  };
}

// Initialize after image is loaded
export const initFluidSimulation = () => {
  const showcaseImage = document.querySelector('.showcase-image') as HTMLImageElement;
  const canvas = document.querySelector('#fluid-canvas') as HTMLCanvasElement;

  console.log('Init:', { showcaseImage, canvas }); // Debug log

  if (showcaseImage && canvas) {
    showcaseImage.addEventListener('load', () => {
      console.log('Image loaded:', { 
        width: showcaseImage.width, 
        height: showcaseImage.height,
        complete: showcaseImage.complete
      }); // Debug log
      
      new FluidSimulation(canvas, showcaseImage);
    });

    // Ensure canvas size matches image size on load
    const resizeCanvas = () => {
      const rect = showcaseImage.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      console.log('Canvas resized:', { 
        width: canvas.width, 
        height: canvas.height 
      }); // Debug log
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }
};
