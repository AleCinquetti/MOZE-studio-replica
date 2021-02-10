const hamburgerMenu = document.getElementById('ham-menu');
const closeMenu = document.getElementById('close');
const nav = document.querySelector('.main-nav');

hamburgerMenu.addEventListener('click', function () {
    nav.classList.add('open');
})

closeMenu.addEventListener('click', function () {
    nav.classList.remove('open');
})


const feedbacks = [
    {
        id: 1,
        text: `"Professionisti con idee fresche e smart. Uno studio capace di costurire prodotti tecnologici attorno ai bisogni delle persone."`,
        author: 'Davide Dattoli',
        role: 'Co-founder & CEO, Talent Garden'
    },
    {
        id: 2,
        text: `"Moze è un team eccezionale. Grazie a loro abbiamo messo da parte le chiacchiere e ci siamo focalizzati su una cosa sola: costruire il prodotto giusto."`,
        author: 'Krister Bagnkop',
        role: 'Mobility Platform Product Owner, Eurocar Innovation Lab'
    },
    {
        id: 3,
        text: `"Moze lavora all'intersezione tra tecnologia, design e business. Bisogna conoscere a fondo questi tre ambiti per creare prodotti belli ed efficaci. Loro riescono a farlo."`,
        author: 'Vittorio Banfi',
        role: 'Co-founder & CEO, Botsociety'
    },
    {
        id: 4,
        text: `"Ci è bastato un Design Sprint di cinque giorni per progettare e testare un nuovo servizio digitale: i ragazzi di Moze sanno davvero cosa vuol dire lavorare Lean."`,
        author: 'Guk Kim',
        role: 'Chief Growth Officer, Lastminute.com'
    }

]

const container = document.querySelector('.feedbacks');

window.addEventListener("DOMContentLoaded", function () {
    let displayFeedbacks = feedbacks.map(function (item) {
        return `<li class="feedback">
                    <div class="left-section">
                        <div class="user">
                            <img src="" alt="">
                         </div>
                        <div class="user-info">
                            <h4 class="activity-title">${item.author}</h4>
                            <span class="date">${item.role}</span>
                        </div>                    
                    </div> 
                    <div class="feedback-text">
                        <p>
                            ${item.text} 
                        </p>
                    </div>   
                </li>`
    });
    
    displayFeedbacks = displayFeedbacks.join("");
    container.innerHTML = displayFeedbacks;
});