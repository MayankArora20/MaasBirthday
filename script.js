var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.start();

function setSpeech() {
  return new Promise(
    function (resolve, reject) {
      let synth = window.speechSynthesis;
      let id;
      id= setInterval(()=>{
        if(synth.getVoices().length !== 0) {
          resolve(synth.getVoices());
          clearInterval(id);
        }
        english_voice = synth.getVoices()[1];
      },10);
    }
  )
}

function Intro()
{
  alert("say play video");
}

setSpeech();

var english_voice = '';

function utter(msg)
{
  console.log(msg);
  var utter = new SpeechSynthesisUtterance();
  utter.rate = 1;
  utter.pitch = 0.5;
  utter.voice = english_voice;
  utter.text = msg;

  window.speechSynthesis.speak(utter);
}

function call(transcript)
{
  if(transcript=='hello')
  {
    utter("Wan de Matram");
  }
  if(transcript.match('Ritu') || transcript.match('Choti') || transcript.match('Chhoti'))
  {
    window.location.href='RituTondon.html';
  }
  if(transcript.match('Shikhar'))
  {
    window.location.href='Shikhar.html';
  }
  if(transcript.match('Shashi'))
  {
    window.location.href='Shashi.html';
  }
  if(transcript.match('Amit'))
  {
    window.location.href='Amit.html';
  }
  if(transcript.match('Vinay'))
  {
    window.location.href='Vinay.html';
  }
  if(transcript.match('Ashna') || transcript.match('Ashana') || transcript.match('golu') || transcript.match('Golu'))
  {
    window.location.href='Ashana.html';
  }
  if(transcript.match('Sania') || transcript.match('Tanya') || transcript.match('Sandhya') || transcript.match('Sainya'))
  {
    window.location.href='Sanya.html';
  }
  if(transcript.match('sweater') || transcript.match('Pooja') || transcript.match('pooja') || transcript.match('Shweta') || transcript.match('shweta'))
  {
    window.location.href='Pooja.html';
  }
  if(transcript.match('Pune') || transcript.match('Puneet') || transcript.match('Monu') || transcript.match('Sony') || transcript.match('Sunil'))
  {
    window.location.href='Puneet.html';
  }
  if(transcript.match('Ashish') || transcript.match('Kaku') || transcript.match('Nikku'))
  {
    window.location.href='Ashish.html';
  }
  if(transcript.match('Namitha') || transcript.match('Namita'))
  {
    window.location.href='Namita.html';
  }
  if(transcript.match('Chhotu') || transcript.match('Arun') || transcript.match('photo') || transcript.match('Riya') || transcript.match('Tumpa')
      || transcript.match('Aditya') || transcript.match('Preeti') || transcript.match('Chintu'))
  {
    window.location.href='Arun.html';
  }
  if(transcript.match('Shalini') || transcript.match('Shalu'))
  {
    window.location.href='Shalini.html';
  }
  if(transcript.match('Khushi'))
  {
    window.location.href='Khushi.html';
  }
  if(transcript.match('Rohit'))
  {
    window.location.href='Rohit.html';
  }
  if(transcript.match('Ashna') || transcript.match('Ashana') || transcript.match('golu') || transcript.match('Golu'))
  {
    window.location.href='Ashana.html';
  }
  if(transcript.match('back'))
  {
    window.location.href='index.html';
  }
  if(transcript.match("play"))
  {
    var vid = document.getElementById("VideoMsg");
    vid.play();
  }
  if(transcript.match("stop") || transcript.match("Stop") || transcript.match("top"))
  {
    var vid = document.getElementById("VideoMsg");
    vid.pause();
  }
  if(transcript.match("pause"))
  {
    var vid = document.getElementById("VideoMsg");
    vid.pause();
  }
  console.log(transcript);
}

recognition.onresult = function(event) {
  console.log(event);

  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;
  var prev;
  call(transcript);

}
