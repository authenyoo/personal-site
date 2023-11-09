let width: number, height: number
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D

export function handleResize() {
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width
  canvas.height = height
  initPoints()
}

export function initCanvas(_canvas: HTMLCanvasElement) {
  width = window.innerWidth
  height = window.innerHeight

  canvas = _canvas
  canvas.width = width
  canvas.height = height
  ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#FFFFFF'
  ctx.strokeStyle = '#FFFFFF'

  initDrawVars(ctx, Math.sqrt(width ** 2 + height ** 2))
}

export function initPoints(numPoints: number = 30, maxSpeed: number = 0.25) {
  Point.all = []
  Point.maxX = width
  Point.maxY = height
  Point.maxSpeed = maxSpeed

  Array.from({ length: numPoints }).forEach(() => new Point())
}

export function renderFrame() {
  ctx.clearRect(0, 0, width, height)

  Point.all.forEach(point => point.step())
  Point.all.forEach(point => point.render())
}
