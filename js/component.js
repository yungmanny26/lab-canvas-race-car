const drawingApp = {
    appName: 'Canvas drawing car app',
    author: 'vin Densel',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctr: undefined,
    createCar: undefined,
    Obstacle:[],
    framesIndex: 0,  



    init() {
        this.setContext()
        this.setSize()
        this.start()
        this.createCar()
        this.car.init()
        this.drawAll()
        this.setEventHandlers()
        this.createObstacle()
     },
     setContext() {
        this.ctr = document.querySelector('canvas').getContext('2d')
     },
     setSize() {
        this.gameSize.w = document.querySelector('canvas').getAttribute('width')
        this.gameSize.h = document.querySelector('canvas').getAttribute('height')

        },

        start() {
            this.drawRectangleGreen();
            this.lineWhite();
            this.lineWhite2();
            this.discountLine();


         },
         drawRectangleGreen() {

         this.ctr.fillStyle = "green"
         this.ctr.fillRect(0, 0, 500,700)
         this.ctr.fillStyle = 'gray'
         this.ctr.fillRect(13,0, 475, 700)
         },

         lineWhite() {

         this.ctr.beginPath()
         this.ctr.lineWidth = 10
         this.ctr.strokeStyle = 'white'
         this.ctr.moveTo(450, 0)
         this.ctr.lineTo(450, this.gameSize.h)
         this.ctr.stroke()
         this.ctr.closePath()

         },

         lineWhite2() {

         this.ctx.beginPath()
         this.ctx.lineWidth = 10
         this.ctx.strokeStyle = 'white'
         this.ctx.moveTo(60, 0)
         this.ctx.lineTo(60, this.gameSize.h)
         this.ctx.stroke()
         this.ctx.closePath()

         },

         discountLine() {
         this.ctr.lineWidth = 10
         this.ctr.strokeStyle = 'white'    
         this.ctr.beginPath()
         this.ctr.moveTo(250, 0)
         this.ctr.setLineDash([40,40])
         this.ctr.lineTo(250, this.gameSize.h)
         this.ctr.stroke()
         this.ctr.closePath()
         this.ctr.setLineDash([0,0])

         },

         createCar() {
         this.car = new Car(this.ctr, 157, 450, 50, 100)

        },
         drawAll() {
         setInterval(() => {
            this.clearAll()
            this.drawRectangleGreen();
            this.lineWhite();
            this.lineWhite2();
            this.discountLine()
            this.car.draw()
         }, 40)

         },
         clearAll() {
           this.ctr.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
           },
         setEventHandlers() {
          document.addEventListener('keydown', event => {
          const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
          })
         },

      createObstacle(){}



}