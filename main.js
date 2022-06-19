function start_listening(){
    navigator.mediaDevices.getUserMedia({audio : true});
    sound_model=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lIkSXm8bb/model.json", sound_model_ready);
}

function sound_model_ready(){
    console.log("model is ready");
    sound_model.classify(get_result);
}

function get_result(e,r){
     if(e){
         console.error(e);
     }
     else{
         console.log(r);
         sound_name=r[0].label;
         sound_accuracy=(r[0].confidence*100).toFixed(2);
         document.getElementById("display_sound").innerHTML="I can hear " + sound_name;
         document.getElementById("sound_accuracy").innerHTML="accuracy: "+ sound_accuracy+ "%";
         red=Math.floor(Math.random()*256);
        green=Math.floor(Math.random()*256);
        blue=Math.floor(Math.random()*256);
        document.getElementById("display_sound").style.color="rgb(" + red + "," +green +"," + blue+ ")";
        document.getElementById("sound_accuracy").style.color="rgb(" + red + "," +green +"," + blue+ ")";

        

        if(sound_name=="mooing"){
            document.getElementById("img_1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnMv1ueB_VDNN2G6Z6eJ9ckNwJmenikXjww&usqp=CAU";
                  }

        else if(sound_name=="barking"){
            document.getElementById("img_1").src="https://static8.depositphotos.com/1000792/1065/v/950/depositphotos_10659058-stock-illustration-cute-dog.jpg";
            
        }

        else if(sound_name=="meowing"){
            document.getElementById("img_1").src="https://previews.123rf.com/images/irwanjos/irwanjos1506/irwanjos150600012/41254374-cute-cat-cartoon.jpg";
        }

        else if(sound_name=="roar"){
            document.getElementById("img_1").src="https://static.vecteezy.com/system/resources/previews/005/162/478/original/cartoon-happy-lion-isolated-on-white-background-free-vector.jpg";
        }

        else {
            document.getElementById("img_1").src="";
        }




                    
     }
}