function attachGradientEvents() {
    $('#gradient').mousemove(function (e) {
        $("#result").text(~~(e.offsetX / e.target.clientWidth * 100) + '%')
    })
}