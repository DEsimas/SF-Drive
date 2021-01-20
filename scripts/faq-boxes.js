console.log("script start");

let current = 0;

function show(num) {
    let elements = document.getElementsByClassName('arrowDown');
    elements[0].style.display = "inline";
    elements[1].style.display = "inline";
    elements[2].style.display = "inline";
    elements[3].style.display = "inline";
    elements[4].style.display = "inline";
    elements[5].style.display = "inline";
    elements = document.getElementsByClassName('arrowUp');
    elements[0].style.display = "none";
    elements[1].style.display = "none";
    elements[2].style.display = "none";
    elements[3].style.display = "none";
    elements[4].style.display = "none";
    elements[5].style.display = "none";
    elements = document.getElementsByClassName('answ');
    elements[0].style.display = "none";
    elements[1].style.display = "none";
    elements[2].style.display = "none";
    elements[3].style.display = "none";
    elements[4].style.display = "none";
    elements[5].style.display = "none";
    elements = document.getElementsByClassName('butText');
    elements[0].style.color = '#1B1B1B';
    elements[1].style.color = '#1B1B1B';
    elements[2].style.color = '#1B1B1B';
    elements[3].style.color = '#1B1B1B';
    elements[4].style.color = '#1B1B1B';
    elements[5].style.color = '#1B1B1B';
    elements = document.getElementsByClassName('btn');
    elements[0].style.background = '#F7F7F8';
    elements[1].style.background = '#F7F7F8';
    elements[2].style.background = '#F7F7F8';
    elements[3].style.background = '#F7F7F8';
    elements[4].style.background = '#F7F7F8';
    elements[5].style.background = '#F7F7F8';

    switch (num) {
        case 1:
            if (current === 1) {
                current = 0;
                document.getElementById('arrowDown1').style.display = 'inline';
                document.getElementById('arrowUp1').style.display = 'none';
                document.getElementById('answ1').style.display = 'none';
                document.getElementById('t1').style.color = '#1B1B1B';
                document.getElementById('btn1').style.background = '#F7F7F8';
            }
            else {
                current = 1;
                document.getElementById('arrowDown1').style.display = 'none';
                document.getElementById('arrowUp1').style.display = 'inline';
                document.getElementById('answ1').style.display = 'block';
                document.getElementById('t1').style.color = '#61A199';
                document.getElementById('btn1').style.background = 'rgba(97, 161, 153, 0.15)';
            }
            break;
        case 2:
            if (current === 2) {
                current = 0;
                document.getElementById('arrowDown2').style.display = 'inline';
                document.getElementById('arrowUp2').style.display = 'none';
                document.getElementById('answ2').style.display = 'none';
                document.getElementById('t2').style.color = '#1B1B1B';
                document.getElementById('btn2').style.background = '#F7F7F8';
            }
            else {
                current = 2;
                document.getElementById('arrowDown2').style.display = 'none';
                document.getElementById('arrowUp2').style.display = 'inline';
                document.getElementById('answ2').style.display = 'block';
                document.getElementById('t2').style.color = '#61A199';
                document.getElementById('btn2').style.background = 'rgba(97, 161, 153, 0.15)';
            }
            break;
        case 3:
            if (current === 3) {
                current = 0;
                document.getElementById('arrowDown3').style.display = 'inline';
                document.getElementById('arrowUp3').style.display = 'none';
                document.getElementById('answ3').style.display = 'none';
                document.getElementById('t3').style.color = '#1B1B1B';
                document.getElementById('btn3').style.background = '#F7F7F8';
            }
            else {
                current = 3;
                document.getElementById('arrowDown3').style.display = 'none';
                document.getElementById('arrowUp3').style.display = 'inline';
                document.getElementById('answ3').style.display = 'block';
                document.getElementById('t3').style.color = '#61A199';
                document.getElementById('btn3').style.background = 'rgba(97, 161, 153, 0.15)';
            }
            break;
        case 4:
            if (current === 4) {
                current = 0;
                document.getElementById('arrowDown4').style.display = 'inline';
                document.getElementById('arrowUp4').style.display = 'none';
                document.getElementById('answ4').style.display = 'none';
                document.getElementById('t4').style.color = '#1B1B1B';
                document.getElementById('btn4').style.background = '#F7F7F8';
            }
            else {
                current = 4;
                document.getElementById('arrowDown4').style.display = 'none';
                document.getElementById('arrowUp4').style.display = 'inline';
                document.getElementById('answ4').style.display = 'block';
                document.getElementById('t4').style.color = '#61A199';
                document.getElementById('btn4').style.background = 'rgba(97, 161, 153, 0.15)';
            }
            break;

        case 5:
            if (current === 5) {
                current = 0;
                document.getElementById('arrowDown5').style.display = 'inline';
                document.getElementById('arrowUp5').style.display = 'none';
                document.getElementById('answ5').style.display = 'none';
                document.getElementById('t5').style.color = '#1B1B1B';
                document.getElementById('btn5').style.background = '#F7F7F8';
            }
            else {
                current = 5;
                document.getElementById('arrowDown5').style.display = 'none';
                document.getElementById('arrowUp5').style.display = 'inline';
                document.getElementById('answ5').style.display = 'block';
                document.getElementById('t5').style.color = '#61A199';
                document.getElementById('btn5').style.background = 'rgba(97, 161, 153, 0.15)';
            }
            break;
        case 6:
            if (current === 6) {
                current = 0;
                document.getElementById('arrowDown6').style.display = 'inline';
                document.getElementById('arrowUp6').style.display = 'none';
                document.getElementById('answ6').style.display = 'none';
                document.getElementById('t6').style.color = '#1B1B1B';
                document.getElementById('btn6').style.background = '#F7F7F8';
            }
            else {
                current = 6;
                document.getElementById('arrowDown6').style.display = 'none';
                document.getElementById('arrowUp6').style.display = 'inline';
                document.getElementById('answ6').style.display = 'block';
                document.getElementById('t6').style.color = '#61A199';
                document.getElementById('btn6').style.background = 'rgba(97, 161, 153, 0.15)';
            }
            break;
    }
}