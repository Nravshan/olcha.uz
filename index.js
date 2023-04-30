let header = document.querySelector('header')

let left = document.createElement('div')
let right = document.createElement('div')
let per = document.createElement('button')
let sale = document.createElement('button')
let win = document.createElement('button')
let map = document.createElement('text')
let num = document.createElement('text')
let btn_sale = document.createElement('button')
let img = document.createElement('img')

for (let i = 0; i <= 1  ; i++) {
    let main = document.querySelector('main')
    let product = document.createElement('div')
    let p_icon = document.createElement('img')
    let disc = document.createElement('text')
    let price = document.createElement('text')
    let price_yellow = document.createElement('text')
    let bas = document.createElement('img')
    let disc_box = document.createElement('div')
    let per_year = document.createElement('img')
    let icon_basket = document.createElement('img')
    let rasrochka = document.createElement('button')
    let axir = document.createElement('div')
    
    bas.classList.add('bas')
    icon_basket.classList.add('icon_basket')
    rasrochka.classList.add('rasrochka')
    per_year.classList.add('per_year')
    price_yellow.classList.add('price_yellow')
    price.classList.add('price')
    disc.classList.add('disc')
    product.classList.add('product')
    disc_box.classList.add('disc_box')
    p_icon.classList.add('p_icon')
    axir.classList.add('axir')
    
    left.classList.add('left')
    right.classList.add('right')
    per.classList.add('per')
    sale.classList.add('sale')
    win.classList.add('win')
    map.classList.add('map')
    num.classList.add('num')
    btn_sale.classList.add('btn_sale')
    product.classList.add('product')
    p_icon.classList.add('p_icon')

    disc.innerHTML="Samsung  A13 Черный 4/128 GB"
    price.innerHTML="4  445  000 сум"
    price_yellow.innerHTML="481  000 сум x 12 мес"
    rasrochka.innerHTML="В рассрочку"
    
    icon_basket.src = "./icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.png"
    p_icon.src = "./img/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0 (1).jpeg"
    
    main.append(product, disc_box,axir)
    product.append(p_icon)
    disc_box.append(disc,price,price_yellow)
    axir.append(icon_basket,rasrochka)
    
}

img.src = "./language_FILL0_wght400_GRAD0_opsz48 (1).png"

per.innerHTML="0%  Рассрочка"
sale.innerHTML="Скидка"
win.innerHTML="Розыгрыши"
map.innerHTML ="Карта сайта"
num.innerHTML="+998(71) 202 2021"
btn_sale.innerHTML="Продавать на olcha"
 

header.append(left,right)
left.append(per,sale,win,map)
right.append(num,btn_sale,img)



