<?php include 'sendemail.php' ?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Fonts Poppins -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- Fonts Russo One -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <!-- Link to CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/d1bbe2042f.js" crossorigin="anonymous"></script>
    <title>Contact Us</title>
</head>
<style>
    .line {
        stroke: #11699B;
    }

    .main {
        background: #11699B;
        color: #fff;
    }
</style>
<body>

<nav class="nav">
    <div class="hamburger">
        <svg class="ham" style="color: white" viewBox="0 0 100 100" width="80"
             onclick="this.classList.toggle('active')">
            <path
                    class="line top"
                    d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568"/>
            <path
                    class="line middle"
                    d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7"/>
            <path
                    class="line bottom"
                    d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0"/>
        </svg>

        <div class="overlay">
            <ul class="links">
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="dask.html">Dasks</a></li>
                <li><a href="our-story.html">Our Story</a></li>
                <li><a href="contact.php">Contact Us</a></li>
            </ul>
        </div>
    </div>
    <div class="logo">
        <a href="index.html">
            <img class="main-logo" src="assets/img/logo.svg" alt="">
        </a>
    </div>
    <div class="eu-projects">
        <a class="main" href="./pdf/Sailfin - partnerstvo.pdf">Brochure</a>
    </div>
</nav>


<section class="contact-types">
    <div class="contact-row">
        <div class="visit contact-card--all">
            <h1 class="contact-h1">Visit us at <span><i class="fas fa-map-marker-alt"></i></span></h1>
            <div class="contact-card map-location">
                <div class="map--contact_us">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.7103349357344!2d16.464740515949!3d43.50837796980053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e2255016235%3A0x90b0907727f110ae!2zVWwuIFJ1xJFlcmEgQm_FoWtvdmnEh2EgMTksIDIxMDAwLCBTcGxpdA!5e0!3m2!1shr!2shr!4v1624626581960!5m2!1shr!2shr"
                          width="339px" height="335px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="location--card">
                    <h3>Plurato Europe</h3>
                    <p>Ru??era Bo??kovi??a 19</p>
                    <p>21 000 Split, Croatia</p>
                </div>
            </div>
        </div>
        <div class="call-us contact-card--all">
            <h1 class="contact-h1">Call us <span><i class="fas fa-phone"></i></span></h1>
            <div class="contact-card service">
                <div class="service--card">
                    <h3>Service</h3>
                    <p>service@plurato.com</p>
                    <p>+385 91 33 77 877</p>
                </div>
                <div class="sales--card">
                    <h3>Sales</h3>
                    <p>sales@plurato.com</p>
                    <p>+385 91 77 877</p>
                    <p>+385 91 64 42 001</p>
                </div>
                <div class="socials--card">
                    <h3>Socials</h3>
                    <div class="icons-contact">
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="question contact-card--all">
            <h1 class="contact-h1">Ask a questions <span><i class="far fa-envelope"></i></span></h1>
            <div class="contact-card mess">
                <div class="header-four">
                    <h4>Ask anything you want.</h4>
                    <h4>We will try reply fast us we can.</h4>
                </div>
                <form action="sendemail.php" class="contact-form" method="post">
                    <input type="text" name="name" value="" placeholder="Full Name">
                    <input type="text" name="mail" value="" placeholder="Your Email">
                    <textarea name="message" placeholder="Message, question..."></textarea>
                    <button type="submit" name="submit">Send</button>
                </form>
            </div>
        </div>
</section>

<script type="text/javascript">
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
</script>

<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- jQuery Counter -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
<!-- jQuery Waypoints -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
<!-- Connection to JS file -->
<script src="assets/js/main.js"></script>
<script src="assets/js/animate.js"></script>
<script src="assets/js/scroll.js"></script>
<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
</body>
</html>