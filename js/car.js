class Car {

    constructor(ctr, carPoX, carPoY, carHeight, carSpeed, gameSize) {
        this.ctr= ctr
        this.carPo = { x: carPoX, y: carPoY }
        this.carSize = { w: carHeight * .45, h: carHeight }
        this.gameSize = gameSize
        this.speed = carSpeed

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = '../images/car.png'
    }

    draw() {

        this.ctr.drawImage(this.imageInstance, this.carPo.x, this.carPo.y, this.carSize.w, this.carSize.h)
    }

    moveRight() {
        this.carPo.x += this.speed
    }

    moveLeft() {
        this.carPo.x -= this.speed
    }


}