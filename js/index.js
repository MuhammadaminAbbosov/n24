let nav = document.querySelector("#nav")
let mainNews1 = document.querySelector(".main__news-1")
let mainNews2 = document.querySelector(".news-2__main")
let mainNews3 = document.querySelector(".news-3")

nav.className = "nav"
navItems.forEach(item => {
    let link = document.createElement("a")
    link.href = "#"
    link.innerHTML = item
    link.className = "nav__item"

    nav.appendChild(link)
})


news1.forEach(item => { 
    let div = document.createElement("div")
    div.className = `news-1__item`

    div.innerHTML = `
        <b class="news-1__title">${item.title}</b>
        <p class="news-1__text">${item.content}</p>
        <img src=${item.image} alt="news-${item.id}" />

        <div class="news-1__author">
            <img src=${item.icon} alt=""  class="author__icon"/>
            <p class="author__name">${item.author}</p>
        </div>
    `

    mainNews1.appendChild(div)
})

news2.forEach(item => { 
    let div = document.createElement("div")
    div.className = `news-2__item`

    div.innerHTML = `
        <img src=${item.image} alt="news-${item.id}" />
        <div class="news-2__content">
            <b class="news-2__title">${item.title}</b>
            <p class="news-2__text">${item.content}</p>
            <div class="news-2__author">
                <img src=${item.icon} alt=""  class="author__icon"/>
                <p class="author__name">${item.author}</p>
            </div>
        </div>
    `

    mainNews2.appendChild(div)
})

news3.forEach(item => { 
    let div = document.createElement("div")
    div.className = `news-3__item`

    div.innerHTML = `
        <b class="news-3__text">${item.title}</b>
        <p class="author__name">${item.author}</p>
    `
    mainNews3.appendChild(div)
})