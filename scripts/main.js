var pfx = ["webkit", "moz", "ms", "o", ""];
function RunPrefixMethod(obj, method) {
    var p = 0, m, t;
    while (p < pfx.length && !obj[m]) {
        m = method;
        if (pfx[p] == "") {

            m = m.substr(0, 1).toLowerCase() + m.substr(1);

        }
        m = pfx[p] + m;
        t = typeof obj[m];
        if (t != "undefined") {
            pfx = [pfx[p]];
            return (t == "function" ? obj[m]() : obj[m]);
        }
        p++;
    }
}
$(function () {
    var jVideo = document.getElementById('joostVideo');
    var autoStarted = false;
    $("#joostVideo").click(function (e) {
        if (!autoStarted) {
            RunPrefixMethod(jVideo, "RequestFullScreen");
            autoStarted = true;
        }        
    });

    jVideo.addEventListener("ended", function () {
        jVideo.play();
    }, false);
});