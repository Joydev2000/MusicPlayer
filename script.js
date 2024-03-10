function myfunction(x) {
    x.classList.toggle("ri-pause-mini-line");
    x.classList.toggle("ri-play-mini-fill");
    audio.pause();
    
  };

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


  function songsDataStore(){
   songsData.forEach(function(data, index){
     clutter += `<div id=${index}
     class="songs m-auto flex justify-between items-center cursor-pointer pt-2 pb-2 hover:bg-zinc-800 px-4   border-t-zinc-700 border-t-2">
     <div class="flex items-center gap-7">
         <img class="w-[50px] h-[50px] rounded-sm"
             src="${data.artwork}"
             alt="">
         <h2 class="text-white">${data.title}</h2>
     </div>
     <h4 class="text-white">3:45</h4>
 </div>`;

 songs_container.innerHTML = clutter;
 
   });
//    document.querySelector("image").style.backgroundImage = `url(${data[selectedSong].artwork})`;
  };
  songsDataStore();


  songs_container.addEventListener("click", (dets)=> {
    console.log(dets)
    audio.src = songsData[dets.target.id].url;
    audio.play();
    document.querySelector(".image").style.backgroundImage = `url(${songsData[dets.target.id].artwork})`;

   
  });
