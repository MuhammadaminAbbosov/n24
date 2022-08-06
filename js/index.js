let nav = document.querySelector("#nav")
let mainNews1 = document.querySelector(".main__news-1")

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