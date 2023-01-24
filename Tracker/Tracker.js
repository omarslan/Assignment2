function mouseClickTracker() {
    var mouseClickCounter = 0;
    
    function countMouseClick() {
        a = a + 1;
        document.getElementById("trackerInside").innerHTML = "Number of mouse clicks:" + a;
    }
}