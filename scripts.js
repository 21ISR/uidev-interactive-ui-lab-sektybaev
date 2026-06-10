const popup = document.querySelector('.popup-overlay')
const openBtn = document.querySelector('#show-popup')
const closeBtn = document.querySelector('.popup-close')

openBtn.addEventListener('click', () => {
    popup.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    popup.classList.remove('show')
})
popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.classList.remove('show')
})

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const isOpen = header.classList.contains('active')
        content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px'
        header.classList.toggle('active')
    })
})


document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'))
        btn.classList.add('active')
        document.getElementById(btn.getAttribute('data-tab')).classList.add('active')
    })
})


document.querySelectorAll('.tooltip').forEach(tooltip => {
    const text = tooltip.querySelector('.tooltip-text')
    tooltip.addEventListener('mouseenter', () => {
        text.style.visibility = 'visible'
        text.style.opacity = '1'
    })
    tooltip.addEventListener('mouseleave', () => {
        text.style.visibility = 'hidden'
        text.style.opacity = '0'
    })
})

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.slider-dot')
let current = 0

function update() {
    slider.style.transform = `translateX(-${current * 100}%)`
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === current)
    })
}

document.querySelectorAll('.slider-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        current += arrow.classList.contains('slider-arrow-left') ? -1 : 1
        if (current < 0) current = 0
        if (current >= slides.length) current = slides.length - 1
        update()
    })
})

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        current = i
        update()
    })
})
update()