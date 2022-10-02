




function hoverOnleft() {
    document.getElementById("div_left").classList.add('active');
    (function () {
        var rotateY = 0,
            rotateX = 0;


        document.onkeydown = function (e) {
            if (e.keyCode === 37) {
                rotateY -= 4
            } else if (e.keyCode === 38) {
                rotateX += 4
            } else if (e.keyCode === 39) {
                rotateY += 4
            }
            else if (e.keyCode === 40) {
                rotateX -= 4
            }

            document.querySelector('.cube').style.transform =
                'rotateY(' + rotateY + 'deg)' +
                'rotateX(' + rotateX + 'deg)';

        }

    })();
}
// function hoverOffleft() {
//     document.getElementById("div_left").classList.remove('active');

// }
function hoverOnRight() {
    document.getElementById("div_right").classList.add('active');
    (function () {
        var rotateY = 0,
            rotateX = 0;


        document.onkeydown = function (e) {
            if (e.keyCode === 37) {
                rotateY -= 4
            } else if (e.keyCode === 38) {
                rotateX += 4
            } else if (e.keyCode === 39) {
                rotateY += 4
            }
            else if (e.keyCode === 40) {
                rotateX -= 4
            }

            document.querySelector('.cube2').style.transform =
                'rotateY(' + rotateY + 'deg)' +
                'rotateX(' + rotateX + 'deg)';

        }

    })();

}
//  function hoverOffRight() {
//     document.getElementById("div_right").classList.remove('active');

// }