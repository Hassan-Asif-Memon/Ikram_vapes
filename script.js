let messages = ["Welcome to Ikram vape!","Now Available in Your City!", "Shop now!"]
let i = 0

setInterval(
    () => {
        let el = document.getElementById("text")
        el.style.opacity = 0

        setTimeout(
            () => {
                i = (i + 1) % messages.length
                el.innerText = messages[i]
                 el.style.opacity = 1
            },500
        )
       
    }, 4000
)