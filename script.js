function Load()
{
  let items = document.querySelectorAll(".item")
  items.forEach(item => { item.addEventListener("click", function(event){
                            document.getElementById("search").value=event.target.textContent
                          })
                }
                )
}

function change()
{
  let list = ["Minecraft","PUBG","FreeFire","FreeGuy","Superman" , "Batman", "Super Mario","Mario Cart","Mojang","Tennis","Tetris","Magic","Power Rangers","Pokemon","Minesweeper","PubMan","Push"]
  x = document.getElementById("search").value
  if(x=="")
  {
    return
  }
  document.getElementById("bar").innerHTML=""
  for (let i = 0; i<list.length; i++)
  {
    if(list[i].toLowerCase().includes(x.toLowerCase()))
    {
      document.getElementById("bar").innerHTML+="<div class='item'>" + list[i] + "</div>"
    }
  }
  Load()
} 
function searchButton()
{
  document.getElementById("onlineImage").style.display="block"
  searchedGame=document.getElementById("search").value
  document.getElementById("searchResult").innerHTML="Experience the thrill of <span id='span'>" + searchedGame + "</span>, a fun and engaging game that offers excitement, challenge, and endless entertainment. Whether you're playing solo or with friends, <span id='span'>" + searchedGame + "</span> brings immersive gameplay, unique features, and hours of enjoyment for players of all ages."
}
