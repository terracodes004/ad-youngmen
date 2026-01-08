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
// Leadership section hover effects
document.querySelectorAll('.leader-card, .advisor-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Click to view more info (optional feature)
document.querySelectorAll('.leader-card').forEach(card => {
    card.addEventListener('click', function() {
        const leaderName = this.querySelector('h3').textContent;
        const calling = this.querySelector('.calling').textContent;
        
        // You could create a modal or expandable section here
        console.log(`Clicked: ${leaderName} - ${calling}`);
        
        // Example: Toggle expanded view
        const responsibility = this.querySelector('.responsibility');
        if (responsibility.style.maxHeight && responsibility.style.maxHeight !== '0px') {
            responsibility.style.maxHeight = '0';
            responsibility.style.opacity = '0';
        } else {
            responsibility.style.maxHeight = responsibility.scrollHeight + 'px';
            responsibility.style.opacity = '1';
        }
    });
});
