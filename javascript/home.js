tvhead_gif = document.getElementById("tvhead_gif");
var gif = true

gif_changer()

async function gif_changer()
{
    await new Promise(resolve => setTimeout(resolve, 2340))
    tvhead_gif.src = "..\\assets\\images\\tvhead_still.png"
    await new Promise(resolve => setTimeout(resolve, 5000))
    tvhead_gif.src = "..\\assets\\gifs\\tvhead.gif"
    gif_changer()
}


