(function(){
    var state = {
        first: 0,
        second: 0
    }

    function updateLabel(labelElement, prefix, count){
        labelElement.innerText = prefix + ' ' + count;
    }

    var labelFirst = document.querySelector('#label-first');
    var firstButtonAdd = document.querySelector('#btn-first-add');
    var firstButtonSubtract = document.querySelector('#btn-first-subtract');

    var labelSecond = document.querySelector('#label-second');
    var secondButtonAdd = document.querySelector('#btn-second-add');
    var secondButtonSubtract = document.querySelector('#btn-second-subtract');

    firstButtonAdd.addEventListener('click', function(e){
        state.first = state.first + 1;
        updateLabel(labelFirst, 'First button:', state.first)
    })

    firstButtonSubtract.addEventListener('click', function(e){
        state.first = state.first - 1;
        updateLabel(labelFirst, 'First button:', state.first)
    })

    secondButtonAdd.addEventListener('click', function(e){
        state.second = state.second + 1;
        updateLabel(labelSecond, 'Second button:', state.second)
    });

    secondButtonSubtract.addEventListener('click', function(e){
        state.second = state.second - 1;
        updateLabel(labelSecond, 'Second button:', state.second)
    })


})()