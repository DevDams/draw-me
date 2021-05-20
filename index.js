const paint = document.querySelector('#paint')

let ctx = paint.getContext('2d')
let x = 0
let y = 0
let rect = paint.getBoundingClientRect()
let style = ''
let isDrawing = false
let size = 3

// Increase and decrease pen size
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let textSize = document.querySelector('.size')
textSize.innerHTML = size - 2

plus.addEventListener('click', () => {
    if (size < 12) {
        size++
        textSize.innerHTML = size - 2
    } else {
        size = 12
    }
})

minus.addEventListener('click', () => {
    if (size > 3) {
        size--
        textSize.innerHTML = size - 2
    } else {
        size = 3
    }
})

// Change pen color
let black = document.querySelector('.black')
let red = document.querySelector('.red')
let green = document.querySelector('.green')
let blue = document.querySelector('.blue')

black.addEventListener('click', () => {
    style = '#000'
})

red.addEventListener('click', () => {
    style = '#ff2d55'
})

green.addEventListener('click', () => {
    style = '#34c759'
})

blue.addEventListener('click', () => {
    style = '#007ae1'
})


// Clean up the canva
let clean = document.querySelector('.delete')

clean.addEventListener('click', () => {
    clear_canva()
})


paint.addEventListener('mousedown', e => {
    x = e.clientX - rect.left
    y = e.clientY - rect.top
    isDrawing = true
})

paint.addEventListener('mousemove', e => {
    if(isDrawing === true) {
        lineDraw(ctx, x, y, (e.clientX - rect.left), (e.clientY - rect.top), size, style)
        x = e.clientX - rect.left
        y = e.clientY - rect.top
    }
})

paint.addEventListener('mouseup', e => {
    x = e.clientX - rect.left
    y = e.clientY - rect.top
    isDrawing = false
    x = 0
    y = 0
})


function lineDraw(ctx, x1, y1, x2, y2, size, styleColor) {
    ctx.beginPath()
    ctx.strokeStyle = styleColor
    ctx.lineWidth = size
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineCap = ctx.lineJoin = 'round'
    ctx.shadowColor = styleColor
    ctx.stroke()
    ctx.closePath()
}

function clear_canva() {
    ctx.fillStyle = '#fff',
    ctx.clearRect(0, 0, paint.width, paint.height)
    ctx.fillRect(0, 0, paint.width, paint.height)
}