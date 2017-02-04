window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);

var sounds = {};
var images = {};
var image_path = {};
var letters = {};
var letter_path = {};

var keep_min = 48;
var keep_max = 57;

var pressed = {};

pressed[27] = 0;

pressed[48] = 0;
pressed[49] = 0;
pressed[50] = 0;
pressed[51] = 0;
pressed[52] = 0;
pressed[53] = 0;
pressed[54] = 0;
pressed[55] = 0;
pressed[56] = 0;
pressed[57] = 0;

pressed[65] = 0;
pressed[66] = 0;
pressed[67] = 0;
pressed[68] = 0;
pressed[69] = 0;
pressed[70] = 0;
pressed[71] = 0;
pressed[72] = 0;
pressed[73] = 0;
pressed[74] = 0;
pressed[75] = 0;
pressed[76] = 0;
pressed[77] = 0;
pressed[78] = 0;
pressed[79] = 0;
pressed[80] = 0;
pressed[81] = 0;
pressed[82] = 0;
pressed[83] = 0;
pressed[84] = 0;
pressed[85] = 0;
pressed[86] = 0;
pressed[87] = 0;
pressed[88] = 0;
pressed[89] = 0;
pressed[90] = 0;


var started = {};
started[48] = 0;
started[49] = 0;
started[50] = 0;
started[51] = 0;
started[52] = 0;
started[53] = 0;
started[54] = 0;
started[55] = 0;
started[56] = 0;
started[57] = 0;

var playHistory = [];

sounds[48] = document.getElementById('0_sound');
images[48] = document.getElementById('0_img');
letters[48] = document.getElementById('0_letter');
image_path[48] = 'images/0.gif';
letter_path[48] = 'images/letters/0.png';

sounds[49] = document.getElementById('1_sound');
images[49] = document.getElementById('1_img');
letters[49] = document.getElementById('1_letter');
image_path[49] = 'images/1.gif';
letter_path[49] = 'images/letters/1.png';

sounds[50] = document.getElementById('2_sound');
images[50] = document.getElementById('2_img');
letters[50] = document.getElementById('2_letter');
image_path[50] = 'images/2.gif';
letter_path[50] = 'images/letters/2.gif';

sounds[51] = document.getElementById('3_sound');
images[51] = document.getElementById('3_img');
letters[51] = document.getElementById('3_letter');
image_path[51] = 'images/3.gif';
letter_path[51] = 'images/letters/3.jpeg';

sounds[52] = document.getElementById('4_sound');
images[52] = document.getElementById('4_img');
letters[52] = document.getElementById('4_letter');
image_path[52] = 'images/4.gif';
letter_path[52] = 'images/letters/4.png';

sounds[53] = document.getElementById('5_sound');
images[53] = document.getElementById('5_img');
letters[53] = document.getElementById('5_letter');
image_path[53] = 'images/5.gif';
letter_path[53] = 'images/letters/5.png';

sounds[54] = document.getElementById('6_sound');
images[54] = document.getElementById('6_img');
letters[54] = document.getElementById('6_letter');
image_path[54] = 'images/6.gif';
letter_path[54] = 'images/letters/6.gif';

sounds[55] = document.getElementById('7_sound');
images[55] = document.getElementById('7_img');
letters[55] = document.getElementById('7_letter');
image_path[55] = 'images/7.gif';
letter_path[55] = 'images/letters/7.jpeg';

sounds[56] = document.getElementById('8_sound');
images[56] = document.getElementById('8_img');
letters[56] = document.getElementById('8_letter');
image_path[56] = 'images/8.gif';
letter_path[56] = 'images/letters/8.png';

sounds[57] = document.getElementById('9_sound');
images[57] = document.getElementById('9_img');
letters[57] = document.getElementById('9_letter');
image_path[57] = 'images/9.gif';
letter_path[57] = 'images/letters/9.png';

sounds[65] = document.getElementById('a_sound');
images[65] = document.getElementById('a_img');
letters[65] = document.getElementById('a_letter');
image_path[65] = 'images/a.gif';
letter_path[65] = 'images/letters/a.png';

sounds[66] = document.getElementById('b_sound');
images[66] = document.getElementById('b_img');
letters[66] = document.getElementById('b_letter');
image_path[66] = 'images/b.gif';
letter_path[66] = 'images/letters/b.png';

sounds[67] = document.getElementById('c_sound');
images[67] = document.getElementById('c_img');
letters[67] = document.getElementById('c_letter');
image_path[67] = 'images/c.gif';
letter_path[67] = 'images/letters/c.png';

sounds[68] = document.getElementById('d_sound');
images[68] = document.getElementById('d_img');
letters[68] = document.getElementById('d_letter');
image_path[68] = 'images/d.gif';
letter_path[68] = 'images/letters/d.png';

sounds[69] = document.getElementById('e_sound');
images[69] = document.getElementById('e_img');
letters[69] = document.getElementById('e_letter');
image_path[69] = 'images/e.gif';
letter_path[69] = 'images/letters/e.jpeg';

sounds[70] = document.getElementById('f_sound');
images[70] = document.getElementById('f_img');
letters[70] = document.getElementById('f_letter');
image_path[70] = 'images/f.gif';
letter_path[70] = 'images/letters/f.png';

sounds[71] = document.getElementById('g_sound');
images[71] = document.getElementById('g_img');
letters[71] = document.getElementById('g_letter');
image_path[71] = 'images/g.gif';
letter_path[71] = 'images/letters/g.png';

sounds[72] = document.getElementById('h_sound');
images[72] = document.getElementById('h_img');
letters[72] = document.getElementById('h_letter');
image_path[72] = 'images/h.gif';
letter_path[72] = 'images/letters/h.png';

sounds[73] = document.getElementById('i_sound');
images[73] = document.getElementById('i_img');
letters[73] = document.getElementById('i_letter');
image_path[73] = 'images/i.gif';
letter_path[73] = 'images/letters/i.png';

sounds[74] = document.getElementById('j_sound');
images[74] = document.getElementById('j_img');
letters[74] = document.getElementById('j_letter');
image_path[74] = 'images/j.gif';
letter_path[74] = 'images/letters/j.jpeg';

sounds[75] = document.getElementById('k_sound');
images[75] = document.getElementById('k_img');
letters[75] = document.getElementById('k_letter');
image_path[75] = 'images/k.gif';
letter_path[75] = 'images/letters/k.jpeg';

sounds[76] = document.getElementById('l_sound');
images[76] = document.getElementById('l_img');
letters[76] = document.getElementById('l_letter');
image_path[76] = 'images/l.gif';
letter_path[76] = 'images/letters/l.png';

sounds[77] = document.getElementById('m_sound');
images[77] = document.getElementById('m_img');
letters[77] = document.getElementById('m_letter');
image_path[77] = 'images/m.gif';
letter_path[77] = 'images/letters/m.png';

sounds[78] = document.getElementById('n_sound');
images[78] = document.getElementById('n_img');
letters[78] = document.getElementById('n_letter');
image_path[78] = 'images/n.gif';
letter_path[78] = 'images/letters/n.png';

sounds[79] = document.getElementById('o_sound');
images[79] = document.getElementById('o_img');
letters[79] = document.getElementById('o_letter');
image_path[79] = 'images/o.gif';
letter_path[79] = 'images/letters/o.jpeg';

sounds[80] = document.getElementById('p_sound');
images[80] = document.getElementById('p_img');
letters[80] = document.getElementById('p_letter');
image_path[80] = 'images/p.gif';
letter_path[80] = 'images/letters/p.jpeg';

sounds[81] = document.getElementById('q_sound');
images[81] = document.getElementById('q_img');
letters[81] = document.getElementById('q_letter');
image_path[81] = 'images/q.gif';
letter_path[81] = 'images/letters/q.jpeg';

sounds[82] = document.getElementById('r_sound');
images[82] = document.getElementById('r_img');
letters[82] = document.getElementById('r_letter');
image_path[82] = 'images/r.gif';
letter_path[82] = 'images/letters/r.png';

sounds[83] = document.getElementById('s_sound');
images[83] = document.getElementById('s_img');
letters[83] = document.getElementById('s_letter');
image_path[83] = 'images/s.gif';
letter_path[83] = 'images/letters/s.png';

sounds[84] = document.getElementById('t_sound');
images[84] = document.getElementById('t_img');
letters[84] = document.getElementById('t_letter');
image_path[84] = 'images/t.gif';
letter_path[84] = 'images/letters/t.png';

sounds[85] = document.getElementById('u_sound');
images[85] = document.getElementById('u_img');
letters[85] = document.getElementById('u_letter');
image_path[85] = 'images/u.gif';
letter_path[85] = 'images/letters/u.png';

sounds[86] = document.getElementById('v_sound');
images[86] = document.getElementById('v_img');
letters[86] = document.getElementById('v_letter');
image_path[86] = 'images/v.gif';
letter_path[86] = 'images/letters/v.jpeg';

sounds[87] = document.getElementById('w_sound');
images[87] = document.getElementById('w_img');
letters[87] = document.getElementById('w_letter');
image_path[87] = 'images/w.gif';
letter_path[87] = 'images/letters/w.png';

sounds[88] = document.getElementById('x_sound');
images[88] = document.getElementById('x_img');
letters[88] = document.getElementById('x_letter');
image_path[88] = 'images/x.gif';
letter_path[88] = 'images/letters/x.jpeg';

sounds[89] = document.getElementById('y_sound');
images[89] = document.getElementById('y_img');
letters[89] = document.getElementById('y_letter');
image_path[89] = 'images/y.gif';
letter_path[89] = 'images/letters/y.png';

sounds[90] = document.getElementById('z_sound');
images[90] = document.getElementById('z_img');
letters[90] = document.getElementById('z_letter');
image_path[90] = 'images/z.gif';
letter_path[90] = 'images/letters/z.png';

function keyDown(e) {
    if (pressed[e.keyCode] == 0){
        pressed[e.keyCode] = 1;
        if (e.keyCode>=keep_min && e.keyCode<=keep_max){
            if (started[e.keyCode] == 0){
                started[e.keyCode] = 1;
                playKey(e.keyCode);
            }
            else{
                started[e.keyCode] =0;
                stopKey(e.keyCode);
            }
        }
        else{
            if (e.keyCode == 27){
                clearAll();
            }
            else{
                playKey(e.keyCode);
            }
            
        }
    }
}

function keyUp(e) {
    pressed[e.keyCode] = 0;
    if (!(e.keyCode>=keep_min && e.keyCode<=keep_max)){
        if(e.keyCode != 27){
            stopKey(e.keyCode);
        }
    }
}

function stopKey(code){
    images[code].src = 'images/transparent.png';
    letters[code].src = 'images/transparent.png';
    sounds[code].pause();
    sounds[code].currentTime = 0;
    var timestamp = new Date().getTime();
    playHistory.push([code,timestamp,"s"]); 
    console.log(code,timestamp,"s");
}


function playKey(code){
    sounds[code].loop = true;
    sounds[code].play();
    images[code].src=image_path[code];
    letters[code].src=letter_path[code];
    var timestamp = new Date().getTime();
    playHistory.push([code,timestamp,"p"]);
    console.log(code,timestamp,"p"); 
}

function clearAll(){
    for(var i = 48; i <= 90; i++){
        if(i<=57 && images[i]!=null){
            if (started[i] == 1){
                stopKey(i);
                started[i] = 0;
            }
        }
        else if(i>=65){
            if (pressed[i] == 1 ){
                stopKey(i);
            }
        }

    }
}

function playBack() {
    if (playHistory.length != 0){
        console.log("playback");
        clearAll();
        var starttime = playHistory[0][1];
        var newtime = new Date().getTime();

        playHistory.forEach(function(item,index, array){
            setTimeout(function(){
                if(item[2] == 'p'){
                    sounds[item[0]].loop = true;
                    sounds[item[0]].play();
                    images[item[0]].src=image_path[item[0]];
                    item[1] = item[1] + newtime -starttime;
                }
                else{
                    images[item[0]].src = 'images/transparent.png';
                    letters[item[0]].src = 'images/transparent.png';
                    sounds[item[0]].pause();
                    sounds[item[0]].currentTime = 0;
                    item[1] = item[1] + newtime -starttime;

                }
            },item[1]-starttime)
        });
    }
}

function clearHistory() {
    clearAll();
    playHistory = [];
}