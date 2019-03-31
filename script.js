let hoverEffect = document.getElementById('hover-effect');
let circle = document.getElementById('circle');

let graphStarYellow = document.getElementById('graph-star-yellow');
let graphStarRed = document.getElementById('graph-star-red');
let graphStarGreen = document.getElementById('graph-star-green');



let graphBarRed = document.getElementById('graph-bar-red');
let graphBarGreen = document.getElementById('graph-bar-green');
let graphBarYellow = document.getElementById('graph-bar-yellow');



let graphTFOrigin = '50% bottom';
let graphDuration = 1.2;




function myScript() {

    circle.classList.add("mystyle");

    TweenMax.to(graphBarRed, graphDuration, { scaleY: 1.5, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to(graphBarGreen, graphDuration, { scaleY: 0.4, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to(graphBarYellow, graphDuration, { scaleY: 1.3, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });

    TweenMax.to(graphStarYellow, graphDuration, { y: -25, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to(graphStarRed, graphDuration, { y: 45, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to(graphStarGreen, graphDuration, { y: -17, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });



}

function myScript2() {

    circle.classList.remove("mystyle");

    TweenMax.to(graphBarRed, graphDuration, { scaleY: 1, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to(graphBarGreen, graphDuration, { scaleY: 1, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to(graphBarYellow, graphDuration, { scaleY: 1, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });

    TweenMax.to(graphStarYellow, graphDuration, { y: 0, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to(graphStarRed, graphDuration, { y: 0, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to(graphStarGreen, graphDuration, { y: 0, transformOrigin: graphTFOrigin, ease: Elastic.easeOut.config(1, 0.3) });



}

hoverEffect.addEventListener("mouseover", myScript, false);
hoverEffect.addEventListener("mouseout", myScript2, false);
