const getGiphy = (alcoholLevel) => {

    const normal = 'https://api.giphy.com/v1/gifs/search?q=ok&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8';
    const euphoric = 'https://api.giphy.com/v1/gifs/search?q=euphoric&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8';
    const excited = 'https://api.giphy.com/v1/gifs/search?q=excited&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8';
    const confused = 'https://api.giphy.com/v1/gifs/search?q=confused&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8';
    const sleepy = 'https://api.giphy.com/v1/gifs/search?q=sleepy+drunk&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8';
    const coma = 'https://api.giphy.com/v1/gifs/search?q=coma&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8';
    const dead = 'https://api.giphy.com/v1/gifs/search?q=dead&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8';

    const myReq = new XMLHttpRequest();
    if(alcoholLevel < 0.5){
        myReq.open('GET',normal,true);
    }else if(alcoholLevel < 1.2){
        myReq.open('GET',euphoric,true);
    }else if(alcoholLevel < 2.1){
        myReq.open('GET',excited,true);
    }else if(alcoholLevel < 2.8){
        myReq.open('GET',confused,true);
    }else if(alcoholLevel < 3.8){
        myReq.open('GET',sleepy,true);
    }else if(alcoholLevel <  5){
        myReq.open('GET',coma,true);
    }else{
        myReq.open('GET',dead,true);
    }
    myReq.onload = () => {
        if(myReq.status >= 200 && myReq.status < 400){
            let myData = JSON.parse(myReq.responseText);
            renderHTML(myData);
       }else{
           console.log('Something went wrong!')
       }
   };
    myReq.send();

};

const renderHTML = (data) => {
    htmlString ="";
    img.innerHTML="";
        htmlString += '<img class="img" src="' + data.data[getRandomNum(data.data.length)].images.original.url + '">'; 
    
    img.insertAdjacentHTML('beforeend', htmlString);
};

const getRandomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }