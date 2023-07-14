const mainEl = document.querySelector('main')
mainEl.style.background = 'var(--main-bg)'
const h1 = document.createElement('h1')
h1.textContent = 'SEI ROCKS!'
mainEl.appendChild(h1)
mainEl.setAttribute('class','flex-ctr')


// next part
const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.background = ' var(--sub-menu-bg)'
topMenuEl.setAttribute('class','flex-around')

// next part 

let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

menuLinks.forEach(a=>{
    let aTag = document.createElement('a')
    aTag.setAttribute('href',a.href)
    aTag.textContent = a.text
    console.log( aTag)
    topMenuEl.appendChild(aTag)
    
})