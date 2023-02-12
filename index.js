

//Image slider

var photos = ["https://th.bing.com/th/id/R.6ff7b32abd619d6a5f0d1435baa2306b?rik=pbI5qN7mslR%2b6Q&riu=http%3a%2f%2fflagdatabase.com%2fwp-content%2fuploads%2f2013%2f01%2fBangladesh.png&ehk=marXpNSePDDBKLfuCVBXT8lb0cc%2fjAsgHzJLXqM5qJw%3d&risl=&pid=ImgRaw&r=0","https://www.happywalagift.com/wp-content/uploads/2015/08/India_flag-2016.jpg","https://th.bing.com/th/id/R.e0fb8a9d6a0d5468bf302ce7ac92a304?rik=tw6en4CeqBTvLQ&riu=http%3a%2f%2fwww.all-flags-world.com%2fcountry-flag%2fPakistan%2fflag-pakistan-XL.jpg&ehk=52NiX4vArP5mblatRXbW%2b11%2f8cVysZBwXw6Phg5IEMo%3d&risl=&pid=ImgRaw&r=0","https://th.bing.com/th/id/OIP.YHHrsSwcTF0_XOtcahzdVgHaEo?pid=ImgDet&rs=1","https://th.bing.com/th/id/R.75d96bd5328fd988a0497b9c774fbcc3?rik=pe7iJABi1L4Fjg&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.f3023f2effd98b9731e4a8d823a63d29?rik=f8KU3K7AskA8ZA&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.4996298bde78dc4329f05c7748eb392c?rik=KBmNIu94Uvez3A&pid=ImgRaw&r=0"]

var ImageTag = document.querySelector("img")

    var count = 0;

function Next(){
    count ++;
    if(count >= photos.length){
        count = 0
        ImageTag.src = photos[count]
    }
    else{
        ImageTag.src = photos[count]
    }

}

function Previous(){
    count --;
    if(count < 0){
        count = photos.length-1
        ImageTag.src = photos[count]
    }
    else{
        ImageTag.src = photos[count]
    }
}
