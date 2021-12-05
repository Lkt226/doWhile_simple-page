let reveal = "#home, #mobile, #code, #real, #connect"

ScrollReveal().reveal(reveal, {
    delay: 100,
    distance: '50px',
    origin: 'bottom',
    duration: 300,
    reset: true
});

reveal.split(', ').forEach((section)=>{
    const btnReveal = section.replace('#', 'btn_')

    document.getElementById(btnReveal).onclick = ()=>{
        document.querySelector(section).scrollIntoView({behavior: 'smooth'});
    }
});