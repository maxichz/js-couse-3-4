(function(){
    var div = document.querySelector('div');
    var img = document.querySelector('img');
    
    var initTop = 85;
    var initLeft = 0;

    var initWidth = 80;
    var widthShift = 80;

    var step = 1;

    function updateWidth(){
        initWidth = initWidth + widthShift;
    }
    function updatePosition(){
        initTop = initTop - step;
        initLeft = initLeft + step
    }


    var pulsate = setInterval(function(){
        updateWidth();
        img.style.width = initWidth + "px";
        widthShift = -widthShift;
    }, 1000);


    var intervalId = setInterval(function(){
        if ((initTop >= 0 && initLeft < 100) && (initTop <= 85 && initLeft >= 0)){
            updatePosition();
        } else{ 
            step = -step;
            updatePosition();
        }
        div.style.top = initTop + "%"
        div.style.left = initLeft + "%"

    }, 15);

})()