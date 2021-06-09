let status  = true;	
let pp_wrapper = document.querySelector(".pp_wrapper");
let slide_1 = document.querySelector(".slide_1");
let slide_2 = document.querySelector(".slide_2");
let book = document.querySelector(".slide_1 .creative_4");
let goalpost = document.querySelector(".slide_1 .creative_5");
let arrow = document.querySelector(".slide_1 .creative_2");
let sendtext = document.querySelector(".slide_1 .creative_1");

let slide2_elms = Array.from(slide_2.querySelectorAll(".creative"));

function slide_2_show(elmnt){
	elmnt.classList ? elmnt.classList.add('hideZoomOut') : elmnt.className += ' hideZoomOut';
	sendtext.classList ? sendtext.classList.add('hideZoomOut') : sendtext.className += ' hideZoomOut';
	goalpost.classList ? goalpost.classList.add('hideZoomOut') : goalpost.className += ' hideZoomOut';
	slide_2.className = slide_2.className.replace('hidden', '');

	setTimeout(function() {
		for(slide_elm in slide2_elms){
			slide2_elms[slide_elm].className = slide2_elms[slide_elm].className.replace('hidden', '');
			slide2_elms[slide_elm].classList ? slide2_elms[slide_elm].classList.add('showZoomIn') : slide2_elms[slide_elm].className += ' showZoomIn';
		}
		setTimeout(2000);

	}, 500);
}

if (typeof window.orientation !== 'undefined'){dragElementMobile(book);}else{dragElement(book);}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
  	elmnt.className = elmnt.className.replace('shake', '');

    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {    
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    topSpace = elmnt.offsetTop - pos2;
    leftSpace = elmnt.offsetLeft - pos1;

    if(topSpace<180){
    	arrow.classList ? arrow.classList.add('hideZoomOut') : arrow.className += ' hideZoomOut';
    }

    if(topSpace<150 && status){
    	status = false;
    	slide_2_show(elmnt);
    }

    if (leftSpace<60) {leftSpace=60}
    if (leftSpace>180) {leftSpace=180}
    if (topSpace>200) {topSpace=200}
    if (topSpace<150) {topSpace=150}

    // console.log(topSpace + ' => ' + leftSpace);

    elmnt.style.top = topSpace + 'px';
    // elmnt.style.bottom = "8px";
    elmnt.style.left = leftSpace + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function dragElementMobile(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
  } else {
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    elmnt.className = elmnt.className.replace('shake', '');
    e.preventDefault();

    e = e.touches[0] || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e.touches[0] || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    topSpace = elmnt.offsetTop - pos2;
    leftSpace = elmnt.offsetLeft - pos1;

    if(leftSpace>25){
    	arrow.classList ? arrow.classList.add('hideZoomOut') : arrow.className += ' hideZoomOut';
    }

    if(leftSpace>155 && status){
    	status = false;
    	slide_2_show(elmnt);
    }

    if (leftSpace<0) {leftSpace=0}
    if (leftSpace>180) {leftSpace=180}
    if (topSpace>150) {topSpace=150}
    if (topSpace<70) {topSpace=70}

    // console.log(topSpace + ' => ' + leftSpace);

    elmnt.style.top = topSpace + 'px';
    // elmnt.style.bottom = "8px";
    elmnt.style.left = leftSpace + "px";   
  }
  function closeDragElement() {
    document.ontouchend = null;
    document.touchmove = null;
  }
}