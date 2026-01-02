let i = 0
function move() { 
imgs = [,"url('img/ymp.jpeg')","url('img/lds.jpeg')","url('img/bisho.jpg')","url('img/jame.jpg')",,"url('img/more_ym.jpeg')", "url('img/slide/Mormon-book.jpg')","url('/img/ldsym.jpg')","url('img/dac.jpeg')","url('img/presido.jpeg')" ,"url('img/dac.jpeg')","url('img/scr.jpeg')","url('img/js.jpeg')"]
    //,"url('img/slide/presido.jpg')""url('img/slide/more_ym.jpg')"
    console.log(imgs[i])
    document.getElementById("fst").style.backgroundImage = imgs[i] 
    setTimeout(() => {
        //noting
        
        console.log("It worked"+i)
    }, 3000);
    i += 1
    if(i > 14){
        i = 0
    }
    if (imgs[i] == "url('img/presido.jpeg')") {
        document.getElementById('img').src = "img/logo.jpg"
    } else{
        document.getElementById('img').src = '/img/ldsym.jpg'
    }
    

}
    


    setInterval(move, 5000);
setInterval(()=>{
    
    if(innerWidth > 480){
    
        
        document.querySelector("ul").style.width = "50%"
        document.querySelector("ul").style.visibility = "visible"
        document.querySelector("ul").style.display = "grid"
    }
}, 10)

let stuff = document.getElementById("stuff")

stuff.addEventListener("click",()=>{
    if(stuff.value == "≡"){
        document.querySelector("ul").style.display = "block"
        document.querySelector("ul").style.visibility = "visible"
        document.querySelector("ul").style.width = "100%"
        stuff.value = "X"
        
        stuff.style.color = "red"
        document.querySelector("ul").style.width = "100%"
    } else{
        document.querySelector("ul").style.display = "none"
        document.querySelector("ul").style.visibility = "hidden"
        stuff.value = "≡"
        stuff.style.color = "black"
        document.querySelector("ul").style.width = "0%"
    }
})

let ul = document.querySelector("ul")