window.onscroll = function () { scrollFunction() };

window.onscroll = () => {
    let logo = document.getElementById("m_logo");

    if ((document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)) {
        logo.width = 120;
        logo.height = 120;
    } else {
        logo.width = 181;
        logo.height = 181;
    }
}