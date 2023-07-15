
// gets main and adds styleing to it
const mainEl = document.querySelector('main')
mainEl.style.background = 'var(--main-bg)'
const h1 = document.createElement('h1')
h1.textContent = 'SEI ROCKS!'
mainEl.appendChild(h1)
mainEl.setAttribute('class','flex-ctr')


// next part
// gets top-menue and adds styling to it
const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.background = ' var(--top-menu-bg)'
topMenuEl.setAttribute('class','flex-around')

// next part 
// where the a tags get its target and its text
let menuLinks = [
  {text: 'about', href: '/about'},{text: 'catalog', href: '#', subLinks: [{text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//creates the a tags
menuLinks.forEach(a=>{
    let aTag = document.createElement('a')
    aTag.setAttribute('href',a.href)
    aTag.textContent = a.text
    topMenuEl.appendChild(aTag)

})

// part two

//adds styling to sub-menu
const subMenuEL = document.querySelector('#sub-menu')
subMenuEL.style.height = '100%'
subMenuEL.style.background = 'var(--sub-menu-bg)'
subMenuEL.setAttribute('class','flex-around')
subMenuEL.style.position = 'absolute'
subMenuEL.style.top = '0'
const topMenuLinks = topMenuEl.querySelectorAll('a')
let showingSubMenu = false

// dynamic styling to sub-menu
topMenuEl.addEventListener('click',function(e){
  e.preventDefault()
  const aLinksAtt = e.target
  aLinksAtt.classList.toggle('active')
  showingSubMenu = true
  buildSubMenu(aLinksAtt)
})

function buildSubMenu(e){
  menuLinks.forEach(a=>{
    if(a.text === e.text){
      let valueTrigger = e.classList.value // checks to see if the class of aLinksAtt has value bool
        if(valueTrigger){
          subMenuEL.style.top = '100%'

        }
        if(!valueTrigger){
          subMenuEL.style.top = '0'
          showingSubMenu = false
        }
        let links = a.subLinks
        for(i of links){
          let link = i.href
          let words = i.text
          let aTag = document.createElement('a')
          aTag.textContent = words
          aTag.setAttribute('href',link)
          subMenuEL.appendChild(aTag)
        }
      }
      
    })
    if(!showingSubMenu){
      subMenuEL.textContent = ' '
    }
  
    
}

subMenuEL.addEventListener('click',a =>{
  a.preventDefault()
  showingSubMenu = false
  subMenuEL.style.top = '0'
  for(i of topMenuLinks){
    if(i.hasAttribute('class')){
      i.classList.remove("active")
      console.log(a.target.textContent)
    }
    h1.textContent = `${a.target.textContent}`
  }
  
})