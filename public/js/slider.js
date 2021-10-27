
    var navLinks = document.getElementById("nav-links");
    function showMenu() {
        navLinks.style.right = "0";
    }
    function hideMenu() {
        navLinks.style.right = "-75vw";
    }

    var funs = document.getElementById("fun_events");
    function fun() {

        funs.style.display = "block";
        var temp = document.getElementById("activities");
        funs.scrollIntoView();


    }

    var temp = document.getElementById("activities");
    function upArrow() {
        funs.style.display = "none";
        temp.scrollIntoView();
    }

    var mag = document.getElementById("strength");
    function strength() {
        mag.style.display = "block";
        mag.scrollIntoView();
    }
    var stre = document.getElementById("activities");
    function upStrength() {
        mag.style.display = "none";
        stre.scrollIntoView();
    }

    var dep=document.getElementById("department");
    function departmental(){
        dep.style.display="block";
        dep.scrollIntoView();
    }
    var de=document.getElementById("activities");
    function upDepartment(){
        dep.style.display="none";
        de.scrollIntoView();

    }


    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
