(function(){
    var div = document.querySelector('div');
<<<<<<< HEAD
    var img = document.querySelector('img');
=======
>>>>>>> 69e66b5294ad63ba9eb46319b516e0cc854b293b
    
    var initTop = 85;
    var initLeft = 0;

<<<<<<< HEAD
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

=======
    var step = 1;

    var intervalId = setInterval(function(){
        if (initTop >= 0 && initLeft < 100){
            initTop = initTop - step;
            initLeft = initLeft + step;
        } else {
            clearInterval(intervalId);
        }

        div.style.top = initTop + "%"
        div.style.left = initLeft + "%"

    }, 100);
>>>>>>> 69e66b5294ad63ba9eb46319b516e0cc854b293b
})()