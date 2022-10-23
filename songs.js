const inputTag = document.getElementsByClassName("input")[0];
const addcontainerTag  = document.getElementsByClassName("addcontainer")[0];
const audiioTag = document.getElementsByClassName("audio")[0];
const timercontainerTag = document.getElementsByClassName("timercontainer")[0];
const progressivebarTag = document.getElementsByClassName("progressivebar")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const playbuttonTag = document.getElementsByClassName("playbutton")[0];
const backbuttonTag = document.getElementsByClassName("backbutton")[0];
const forwardbuttonTag = document.getElementsByClassName("forwardbutton")[0];
const imgcontainerTag = document.getElementsByClassName("imgcontainer")[0];
const songscontainerTag = document.getElementsByClassName("songscontainer")[0];
const menuiconsTag = document.getElementsByClassName("menuicons")[0];
const searchsecTag = document.getElementsByClassName("searchsec")[0];
const searchTag = document.getElementsByClassName("search")[0];
const inputcotainerTag = document.getElementsByClassName("inputcotainer")[0];
const crossTag =  document.getElementsByClassName("cross")[0];
const loopButton = document.getElementsByClassName("loop")[0];
const reverseTag = document.getElementsByClassName("reverse")[0];

const alertTag = document.getElementsByClassName("alertbox")[0];
const agreeTag =document.getElementsByClassName("agree")[0];
let filterSongs = [];
let currentPlaying = 0;

const songs = [
{songtitle : "Ali_Gate (It's your)" , songname : "song/Ali_Gate__It_s_you(360p).mp3" , id :"1" , songsImg : "img/index.jpeg"},
{songtitle : "ဖိုးပြည့် (ကိုယ်စောင့်နတ်)" , songname : "song/kosoutnat.mp3" , id :"2" , songsImg : "img/ko.jpeg"},
{songtitle : "Elvis_Presley (Can't help falling in love)" , songname : "song/Can't_Help_Falling_in_Love_-_Elvis_Presley.mp3" , id :"3" , songsImg : "img/can.jpeg"},
{songtitle : "Charlie Puth ( We Don't talk anymore )" , songname : "song/Charlie_Puth_-_We_Don't_Talk_Anymore_(feat._Selena_Gomez)_[Official_Video](1080p).mp3", id :"4", songsImg : "img/images.jpeg"},
{songtitle : "Gotye_feat._Kimbra ( Somebody that i used to know)" , songname : "song/Gotye_feat._Kimbra_1988___Somebody_That_I_Used_To_Know_music_video(720p).mp3", id :"5", songsImg : "img/somebody.jpeg"},
{songtitle : "Fools_Garden ( Lemon Tree)" , songname : "song/Lemon_Tree_-_Fools_Garden_(Lyrics).mp3" , id :"6", songsImg : "img/lemon.jpeg"},
{songtitle : "Blue Night ( Michael_Learns_To_Rock )" , songname : "song/MLTR_-_Blue_Night_(Lyrics)_(Michael_Learns_To_Rock).mp3" , id :"7", songsImg : "img/blue.jpeg"},
{songtitle : "One Direction (  Night Changes )" , songname : "song/One_Direction_-_Night_Changes_(Lyrics)(1080p).mp3" , id :"8", songsImg : "img/night.jpeg"},
{songtitle : "Charlie Puth ( Call Away )" , songname : "song/Onecallaway.mp3" , id :"9", songsImg : "img/call.jpeg"},
{songtitle : "Passenger (Let's Her Go )" , songname : "song/Passenger_-_Let_Her_Go.mp3", id :"10", songsImg : "img/lether.jpeg"},
{songtitle : "Pink_Sweat$ (At My Worst$)" , songname : "song/Pink_Sweat$_-_At_My_Worst.mp3" , id :"11", songsImg : "img/wrost.jpeg"},
{songtitle : "PUBLIC ( Make You Mine )" , songname : "song/PUBLIC_-_Make_You_Mine.mp3" , id :"12", songsImg : "img/make.jpeg"},
{songtitle : "Ruth_B  (Dandelions)" , songname : "song/Ruth_B._-_Dandelions.mp3", id :"13", songsImg : "img/dandi.jpeg"},
{songtitle : "Austin_Mahone (Send it)" , songname : "song/Send_It_(Lyric)_-_Austin_Mahone.mp3", id :"14", songsImg : "img/send.jpeg"},
{songtitle : "Chainsmokers (Closer)" , songname : "song/The_Chainsmokers_-_Closer.mp3", id :"15", songsImg : "img/closer.jpeg"},
{songtitle : "Chainsmokers (Rose)" , songname : "song/The_Chainsmokers_-_Roses.mp3" , id :"16", songsImg : "img/rose.jpeg"},
{songtitle : "Falling (Trevor_Daniel)" , songname : "song/Trevor_Daniel_-_Falling.mp3" , id :"17", songsImg : "img/falling.jpeg"},
{songtitle : "Angel Baby (Troye_Sivan)" , songname : "song/Troye_Sivan_-_Angel_Baby.mp3", id :"18" , songsImg : "img/angel.jpeg"},
{songtitle : "Strawberries & Cigarettes (Troye_Sivan)" , songname : "song/Troye_Sivan_-_Strawberries_&_Cigarettes.mp3", id :"19", songsImg : "img/staw.jpeg"},
{songtitle : "Nothing Gonna Change My Love For You (Westlife)" , songname : "song/Westlife_-_Nothing's_Gonna_Change_My_Love_For_You.mp3", id :"20", songsImg : "img/nothing.jpeg"},
{songtitle : "To The Bone (Pamungkas)" , songname : "song/To_The_Bone_-_Pamungkas.mp3", id :"21", songsImg : "img/tothe.jpeg" },
{songtitle : "Girfriend  ( Jay Park )" , songname : "song/'Girlfriend'_Jaypark.mp3", id :"22", songsImg : "img/girl.jpeg" },
{songtitle : "Let_Me_Down_Slowly ( Alec_Benjamin )" , songname : "song/Alec_Benjamin_-_Let_Me_Down_Slowly.mp3", id :"23", songsImg : "img/letmedown.jpeg" },
{songtitle : "Some( Bolbbalgan4 )" , songname : "song/Bolbbalgan4_Some.mp3", id :"24", songsImg : "img/some.jpeg" },
{songtitle : "Cheating_on_You ( Charlie_Puth ) " , songname : "song/Charlie_Puth_-_Cheating_on_You.mp3", id :"25", songsImg : "img/cheat.jpeg" },
{songtitle : "Perfect ( Ed_Sheeran )" , songname : "song/Ed_Sheeran_-_Perfect.mp3", id :"26", songsImg : "img/perfect.jpeg" },
{songtitle : "death_bed_(coffee_for_your_head) Powfu" , songname : "song/Powfu_-_death_bed_(coffee_for_your_head)_.mp3", id :"27", songsImg : "img/powfu.jpeg" },
{songtitle : "beautiful_in_white ( Shane_Filan_) " , songname : "song/Shane_Filan_-_beautiful_in_white_(Gustixa_lofi_remix.mp3", id :"28", songsImg : "img/inwhite.jpeg" },
{songtitle : "Until_I_Found_You ( Stephen_Sanchez )" , songname : "song/Stephen_Sanchez_-_Until_I_Found_You_.mp3", id :"29", songsImg : "img/until.jpeg" },
{songtitle : "Last_Christmas ( Stefan_Benz )" , songname : "song/Stefan_Benz_-_Last_Christmas__(Wham!_cover)(2K).ogg", id :"30", songsImg : "img/chris.jpeg" },
{songtitle : "Way_back_home ( SHAUN )" , songname : "song/Way_back_home.mp3", id :"31", songsImg : "img/way.jpeg" },
{songtitle : "Beautiful_in_white ( Westlife)" , songname : "song/Westlife_-_Beautiful_in_white.mp3", id :"32", songsImg : "img/white.jpeg" },
{songtitle : "နေဦး ( ထူးအယ်လင်း )" , songname : "song/နေဦး.....ထူးအယ်လင်း].mp3", id :"33", songsImg : "img/nay.jpg" },
{songtitle : "သံယောဇဉ် ( လေးဖြူ )" , songname : "song/လေးဖြူ_-_သံယောဇဉ်_(Lay_Phyu).mp3", id :"34", songsImg : "img/lay.jpeg" },
{songtitle : "အချစ်လို့​ခေါ်သလား ( ထူးအယ်လင်း )" , songname : "song/အချစ်လို့​ခေါ်သလား-ထူးအယ်လင်း.mp3", id :"35", songsImg : "img/achit.jpeg" },
{songtitle : "Halsey ( Halsey Without Me)" , songname : "song/Halsey_-_Without_Me_(Lyrics)(720p).mp3", id :"36", songsImg : "img/withoutme.jpeg"},
]

const appearAlert =  () => {
     alertTag.innerHTML ="";
      const alert = document.createElement("div");
      alert.append(" You can only search songs from the menu");
      alert.classList.add("alert");
 
      const agreeTag = document.createElement("button");
      agreeTag.classList.add("agree");
      agreeTag.append("Agree");
      agreeTag.addEventListener("click" ,() => {
         window.localStorage.setItem("agree" , "yes");
         alertTag.style.opacity = 0;
     })
 
      alertTag.append( alert , agreeTag);
 }

inputTag.addEventListener("keyup" , (event) => {
 
         setTimeout(() => {
          appearAlert();
         } ,100)
      
        addcontainerTag.innerHTML = "";
        let inputValue = event.target.value.toLowerCase();
        if(inputValue === ""){
            return;
        }
        filterSongs = songs.filter(song => {
          return  song.songtitle.toLowerCase().includes(inputValue);
        }) // [2]
        let haveSongs = filterSongs.length>0;
        if(haveSongs) {
             for (let i = 0 ; i < filterSongs.length; i++){
                const songsAndTitle = document.createElement("div");
                songsAndTitle.classList.add("songsandtitle")
                songsAndTitle.id = filterSongs[i].id;
                const newdiv = document.createElement("div");
                newdiv.append((i + 1 )+". "+filterSongs[i].songtitle);
                newdiv.classList.add("title");

                const songImg = document.createElement("img");
                songImg.classList.add("songimg");
                songImg.src = filterSongs[i].songsImg;
                songsAndTitle.append(newdiv , songImg );
             
                songsAndTitle.classList.add("songsAndTitle");
                songsAndTitle.addEventListener("click" , () => {
                       imgcontainerTag.innerHTML ="";
                       const songsName = filterSongs[i].songname;//6
                       const images = document.createElement("img");
                       const SongImages = filterSongs[i].songsImg;
                       images.classList.add("addimages")
                       images.src = SongImages;
                       imgcontainerTag.append(images);
                       audiioTag.src = songsName;
                       audiioTag.play();
                       isPlaying = true;
                       changeButton();
                      currentPlaying = i;
                      inputcotainerTag.style.top = `-${inputcotainerTag.offsetHeight}px`;
     
                })
            
                addcontainerTag.append(songsAndTitle);
             }
          
        }
})

let durationText;
durationtextChange = "00:00";



audiioTag.addEventListener("loadeddata" , () => {
    duration =  audiioTag.duration;
    durationText = Math.floor(duration);

   durationtextChange =  changeTime(durationText);

});

const updateProgressive = (currentTime) => {
    const currentUpdateProgress2 = (300/durationText) * currentTime;
   const currentUpdateProgress = (500/durationText) * currentTime;
   progressivebarTag.style.width =  currentUpdateProgress + "px";
   progressivebarTag.style.width =  currentUpdateProgress2 + "px";
}

audiioTag.addEventListener("timeupdate" , () => {
      currentTime = audiioTag.currentTime;
     currentTimeText = Math.floor(currentTime)
     currentTimeChange = changeTime(currentTimeText);
     durationandCurrentTime = durationtextChange + " / " + currentTimeChange;
     timercontainerTag.textContent = durationandCurrentTime;
     updateProgressive(currentTimeText);
})

let isPlaying = false;
const changeTime = (timevalue) => {
     minutes = Math.floor(timevalue /60);
     seconds = Math.floor(timevalue % 60);
     minutestest = minutes<10 ? "0" + minutes.toString() : minutes;
     secondstest = seconds<10 ? "0"  + seconds.toString()  : seconds;
  
    return minutestest + ":" + secondstest;
}

const changeButton = () => {
     if(isPlaying){
          pauseButtonTag.style.display ="inline";
          playbuttonTag.style.display ="none";
     }else{
          pauseButtonTag.style.display ="none";
          playbuttonTag.style.display ="inline";
     }
}

playbuttonTag.addEventListener("click" , () => {
     // if(songs[0]){
     //      changeImg();
     // }
     if(inputValue = ""){
          return;
     }
     const currentTime = Math.floor(audiioTag.currentTime);
     isPlaying = true;
     if(currentTime === 0){
          changeSongs();
          changeImg();
     }else{
          audiioTag.play();
          changeButton();
     }
})

pauseButtonTag.addEventListener("click" , () => {

     audiioTag.pause();
     isPlaying = false;
     changeButton();
})

backbuttonTag.addEventListener("click" , () => {
     isPlaying = true;
     currentPlaying -= 1 ;
     if(currentPlaying === -1 ){
          currentPlaying = songs.length -1;
          changeImg();

          changeSongs();
     }
     
     changeImg();
     changeSongs();

  
});

forwardbuttonTag.addEventListener("click" , () => {
     isPlaying = true;
     if(currentPlaying  === songs.length -1){
         
          currentPlaying = 0;
          changeImg();
          changeSongs();
     
          return;
     }
     currentPlaying += 1 ;
     changeSongs();
     changeImg();

})

const changeImg = () => {
     imgcontainerTag.innerHTML ="";
     const images = document.createElement("img");
     const SongImages = songs[currentPlaying].songsImg;
     images.classList.add("boxsong")
     images.src = SongImages;
     imgcontainerTag.append(images);
}

const changeSongs = () => {
     const songcurrent = songs[currentPlaying].songname;
     audiioTag.src = songcurrent;
     audiioTag.play(); 
     changeButton();
}


for (let  i = 0; i < songs.length ; i++) {
    const songsTitleDiv = document.createElement("div");
    songsTitleDiv.classList.add("songstitlediv");
    
    const title = document.createElement("div");
    title.append(( i +1 )+ ".  "+ songs[i].songtitle);
    title.classList.add("titlesmall");

    const images = document.createElement("img");
    const SongImages = songs[i].songsImg;
    images.classList.add("smallimg")
    images.src = SongImages;

    songsTitleDiv.append(title , images);
    songsTitleDiv.addEventListener("click" , () => {
               imgcontainerTag.innerHTML ="";
               const songsName = songs[i].songname;//6
               const images = document.createElement("img");
               const SongImages = songs[i].songsImg;
               images.classList.add("addimages")
               images.src = SongImages;
               imgcontainerTag.append(images);
               audiioTag.src = songsName;
               audiioTag.play();
               isPlaying = true;
               changeButton();
               currentPlaying = i;
               songscontainerTag.style.left = `-${songscontainerTag.offsetWidth}px`;
    })
     songscontainerTag.append(songsTitleDiv);


}

songscontainerTag.style.left = `-${songscontainerTag.offsetWidth}px`;

menuiconsTag.addEventListener("click" , () => {
   
   if(songscontainerTag.classList.contains("leftmenu")){
         songscontainerTag.classList.remove("leftmenu");
         songscontainerTag.style.left = `-${songscontainerTag.offsetWidth}px`;
   }else{ 
      songscontainerTag.style.left = `0px`;
      songscontainerTag.classList.add("leftmenu");    
    }
 
   
})

inputcotainerTag.style.top = `-${inputcotainerTag.offsetHeight}px`;

searchsecTag.addEventListener("click" , () => {
   //  alert("You can only search songs from menu")
     
     songscontainerTag.style.left = `-${songscontainerTag.offsetWidth}px`;
      if(inputcotainerTag.classList.contains("appearinput")){ 
          inputcotainerTag.classList.remove("appearinput");    
          inputcotainerTag.style.top = `-${inputcotainerTag.offsetHeight}px`; 
     }else{
          inputcotainerTag.classList.add("appearinput");
          inputcotainerTag.style.top = `0px`;
      }
  });

  crossTag.addEventListener("click" , () => {
     inputcotainerTag.style.top = `-${inputcotainerTag.offsetHeight}px`;
     inputcotainerTag.classList.add("newcss")
     inputcotainerTag.classList.remove("appearinput"); 
  });
  let lop =false;
 
  loopButton.addEventListener("click" , () => {

     if(audiioTag.loop === true){
          return;
     }
     if(loopButton.classList.contains("lop")){
          loopButton.classList.remove("lop");
          loopButton.style.color = "white";
          lop = false;
     }else{   
          loopButton.classList.add("lop")
          lop = true;
          loopButton.style.color = " lightseagreen";


          audiioTag.onended = () => {
               console.log("this songs is end");   
               if(currentPlaying  === songs.length-1 ){
                    currentPlaying = 0;
                    changeSongs();
                    changeImg();  
                    return;
               }
                currentPlaying += 1 ;

                changeSongs();
                changeImg();  
            
          }    
     }
  });
  reverseTag.addEventListener("click" , () => {
     if(lop===true){
          return;
     }
      if(reverseTag.classList.contains("rev")){
          audiioTag.loop = false;
          reverseTag.style.color = " white";
          reverseTag.classList.remove("rev")
      }else{
          reverseTag.classList.add("rev")
          audiioTag.loop = true;
          reverseTag.style.color = " lightseagreen";

      }
      
  })



 window.addEventListener("load" ,() => {
     const getValue = window.localStorage.getItem("agree")
      if(getValue === "yes"){
          alertTag.remove();
      }
  })