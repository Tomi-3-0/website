function scrollUpOrDown(_this, state) {
    var portImg = _this.parentNode.parentNode.querySelector('img.item');
    var height = portImg.clientHeight;

    if (state.id > -1) {
        clearInterval(state.id);
        state.dir *= -1;
    }

    if (state.pos < 0) {
        state.pos = 1;
    }
    state.id = setInterval(frame, 5);

    function frame() {
        if ((state.pos == height - 500 && state.dir > 0) || (state.pos == 0 && state.dir < 0)) {
            clearInterval(state.id);
        } else {
            state.pos += state.dir;
            portImg.style.top = - +state.pos + "px";
        }
    }
}

for (const button of document.querySelectorAll("button.portScroll")) {
    let scollingState = {
        pos: -1,
        id: -1,
        dir: 1
    };
    if (button.classList.contains("down")) {
        button.addEventListener("click", function() {
            scrollUpOrDown(this, scollingState);
        });
    }
}