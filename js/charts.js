const alertBanner = document.getElementById("alert");


// create the html for the Banner
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p>Alert: You have unread messages</p>
    <p class="alert-banner-close">x</p>
    </div>
`
alertBanner.addEventListener('click', e =>{
    const element = e.target;
    if (element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none"
    }
});

