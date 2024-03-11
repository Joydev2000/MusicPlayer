

  var songsData = [
    {
      title: "Death Bed",
      artist: "Powfu",
      artwork: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
      
    },
    {
      title: "Bad Liar",
      artist: "Imagine Dragons",
      artwork: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
     
    },
    {
      title: "Faded",
      artist: "Alan Walker",
      artwork: "https://samplesongs.netlify.app/album-arts/faded.jpg",
      url: "https://samplesongs.netlify.app/Faded.mp3",
     
    },
    {
      title: "Hate Me",
      artist: "Ellie Goulding",
      artwork: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
     
    },
    {
      title: "Solo",
      artist: "Clean Bandit",
      artwork: "https://samplesongs.netlify.app/album-arts/solo.jpg",
      url: "https://samplesongs.netlify.app/Solo.mp3",
     
    },
    {
      title: "Without Me",
      artist: "Halsey",
      artwork: "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      url: "https://samplesongs.netlify.app/Without%20Me.mp3",
     
    }
  ];

  var songs_container = document.querySelector(".songs_container");
  var audio = new Audio();
  var selectedSong = 0;
  var clutter = '';
  var sliderChange = document.querySelector("#TimeRange");
  var btn = document.getElementById("btn")
  var one = 0; 
  
// var urlArray = songsData.map(song => song.url);
// var songsDurations = [];
// var clutterrr = ``;

// urlArray.forEach(url => {
//   var audio = new Audio(url);
  
//   audio.addEventListener('loadedmetadata', function() {

//     songsDurations.push({
//       duration: audio.duration,
     
//     });
//     // console.log(songsDurations);
//     if (songsDurations.length === urlArray.length) {
//       console.log(songsDurations);
      
       
//     }
//   });
// });



  function songsDataStore(){
   songsData.forEach(function(data, index){
    
    
     clutter += `<div  id=${index}
     class="songs m-auto flex justify-between items-center cursor-pointer pt-2 pb-2 hover:bg-zinc-800 px-4   border-t-zinc-700 border-t-2">
     <div class="flex items-center gap-7">
         <img class="w-[50px] h-[50px] rounded-sm"
             src="${data.artwork}"
             alt="">
         <h2 class="text-white newww">${data.title}</h2>
     </div>
     <h4 class="text-white newwwww"></h4>
 </div>`;

 songs_container.innerHTML = clutter;
 
   });

  };
  songsDataStore();

  // function formatDuration(seconds) {
  //   var minutes = Math.floor(seconds / 60);
  //   var remainingSeconds = Math.floor(seconds % 60);
  //   return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  // }
  // formatDuration()
  
  songs_container.addEventListener("click", (dets)=> {
    previousSliderValue = sliderChange.value;
    var audiofile = songsData[dets.target.id].url;
    audio.src = audiofile;
    audio.play();
    document.querySelector(".image").style.backgroundImage = `url(${songsData[dets.target.id].artwork})`;
    btn.innerHTML = '<i class="ri-pause-mini-fill"></i>';
    one = 2;
    
  });

  sliderChange.addEventListener("input", () => {
    var slider = (audio.duration) * (sliderChange.value / 100);
    
    audio.currentTime = slider;
   
});

audio.addEventListener("timeupdate", () => {
  var sliderValue = (audio.currentTime / audio.duration) * 100;
  sliderChange.value = sliderValue;
  
  var newtime = audio.currentTime * (100 / audio.duration);
  sliderChange.value = newtime;
  var curmins = Math.floor(audio.currentTime / 60);
  var cursecs = Math.floor(audio.currentTime - curmins * 60);
  var durmins = Math.floor(audio.duration / 60);
  var dursecs = Math.floor(audio.duration - durmins * 60);
  if (cursecs < 10){ cursecs = "0"+cursecs;}
  if (curmins < 10){ curmins = "0"+curmins;}
  if (dursecs < 10){ dursecs = "0"+dursecs;}
  if (durmins < 10){ durmins = "0"+durmins;}
  
  var durationSongs = durmins+":"+dursecs;
  var currentTimeSongs = curmins+":"+cursecs;
  // console.log(durationSongs)
  document.querySelector(".curentTime").innerHTML = currentTimeSongs;
  document.querySelector(".duratio").innerHTML = durationSongs;
  
});

btn.addEventListener("click", () =>{
if(one == 0){
  btn.innerHTML = '<i class="ri-pause-mini-fill"></i>';
  one = 2;
  audio.play();
}
else{
  btn.innerHTML = '<i class="ri-play-mini-fill cursor-pointer"></i>';
  one = 0; 
  audio.pause();
}
})






