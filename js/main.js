(function ($) {
    "use strict";

    // loader
    let loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Initiate the wowjs
    new WOW().init();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   // Sticky Navbar
   $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

     // Skills
     $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Typed Text Initiate

   /* if ($('.dev .dev-text h2').length == 1) {
        let typed_strings = $('.dev .dev-text .typed-text').text();
        let typed = new Typed('.dev .dev-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 150,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    } */



 //Progressive Skill Bar
const progress = document.getElementById("progress-skill")
const prev = document.getElementById("prev-bar")
const next = document.getElementById("next-bar")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", () => {
    currentActive++
   if (currentActive > circles.length) {
       currentActive = circles.length
   }
   update()
})

prev.addEventListener("click", () => {
    currentActive--
   if (currentActive < 1) {
       currentActive = 1
   }
   update()
})

function update() {
    circles.forEach((circle, idx) => {
      if (idx < currentActive) {
          circle.classList.add("active")
      } else {
          circle.classList.remove("active")
      }
    })

    //CALCULATOR BAR, ENABLE E DISABLE BUTTONS PROGRESS
    const actives = document.querySelectorAll(".active")

    progress.style.width = ((actives.length - 3.4 ) / (circles.length)) * 100 + "%"

    if (currentActive == 1) {
    prev.disabled = true
   }else if (currentActive === circles.length) {
       next.disabled = true
   } else {
       prev.disabled = false
       next.disabled = false
   }
}


    // Portfolio filter
    let portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    //Translate page

    (function($) {

        let locales = {
            'pt-BR': {
                'portifolio': { message: 'Meu Portifólio' },
                'home': { message: 'Início' },
                'about': { message: 'Sobre' },
                'service': { message: 'Serviços' },
                'learning': { message: 'Aprendizado' },
                'portifolio2': { message: 'Portifólio' },
                'contact': { message: 'Contato' },
                'hello': { message: 'Olá, seja bem-vindo, me chamo' },
                'work': { message: 'Sou freelancer, Desenvolvedor Web e Desenvolvedor Front-End.'},
                'hire': { message: 'Contrate-me'},
                'contact': { message: 'Contato'},
                'social': { message: 'Mídia Social'},
                'about-me': { message: 'Sobre Mim, Informações Pessoais'},
                'web-xp': { message: 'Experiência Web'},
                'about-job': { message: 'Meu nome é Patrique Porto, e sou um Desenvolvedor Front-End apaixonado por usar tecnologias web para criar sites e produtos incríveis, com foco na resolução de problemas para diferentes nichos e diferentes mercados usando o poder da tecnologia.'},
                'xp-web': { message: '2 anos de experiência em Desenvolvimento Web'},
                'html5': { message: '3 anos de experiência em HTML5'},
                'css3': { message: '3 anos de experiência em CSS3'},
                'js-jq': { message: '1 ano de experiência em JavaScript e Jquery'},
                'bootstrap': { message: '2 anos de experiência em BootStrap 4, 5'},
                'skill-bar': { message: 'Barra de Abilidade Progressiva'},
                'prev-b': { message: 'Anterior'},
                'next-b': { message: 'Avançar'},
                'loading-skills': { message: 'Carregando Abilidades...'},
                'wid': { message: 'O que eu faço'},
                'quality': { message: 'Serviços de Qualidade'},
                'layout': { message: 'Layouts Responsivos'},
                'creation': { message: 'Criação de layouts responsivos que funcionarão em qualquer dispositivo, grande ou pequeno.'},
                'front': { message: 'Desenvolvimento Front-End'},
                'front-page': { message: 'Construção de páginas web dinâmicas e intuitivas, com um layout fluído, bonito e responsivo.'},
                'fast': { message: 'Páginas Rápidas'},
                'fast-page': { message: 'Tempo de carregamento rápido e interação sem atrasos, esta é minha prioridade para sua página da web.'},
                'dynamic': { message: 'Páginas Dinâmicas'},
                'dynamic-page': { message: "Sites não precisam ser estáticos, posso dar vida à sua página com dinamismo e interatividade."},
                'resume': { message: 'Resumo'},
                'time-line': { message: 'Linha do Tempo de Aprendizagem'},
                'dev-system': { message: 'Tecnólogo em Análise e Desenvolvimento de Sistemas'},
                'unopar': { message: 'Instituição de Ensino: Unopar - Universidade do Paraná'},
                'system-dev': { message: 'Capacitar profissionais na área do uso da tecnologia da informação e da informática como ferramenta e suporte na geração de informação.'},
                'course-web': { message: 'Curso Completo de Desenvolvedor Web' },
                'hcode': { message: 'Instituição de Ensino: Hcode na Udemy' },
                'web-course': { message: 'Aprenda desenvolvimento web, crie um site do zero do básico ao avançado, aprenda HTML5 e CSS3 com muito JavaScript.'},
                'course-javascript': { message: 'Curso de Javascript Completo com 6 Projetos Reais' },
                'hcode2': { message: 'Instituição de Ensino: Hcode na Udemy' },
                'javascript-course': { message: 'JavaScript do 0 ao Avançado, Crie um Clone do WhatsApp e Dropbox com Node JS, Express JS, Socket IO, Firebase, Webpack e +!' },
                'javascript-coder': { message: 'Curso de Web Moderno Completo com Projetos JavaScript 2021 +' },
                'coder': { message: 'Instituição de Ensino: Cod3r na Udemy' },
                'coder-javascript': { message: 'Domine a Web, 14 cursos + projetos, Javascript, Angular, React, Vue, Node, HTML, CSS, jQuery, Bootstrap, Webpack, Gulp, MySQL.' },
                'course-udemy': { message: 'Elixir e Phoenix do zero! Crie sua primeira API Phoenix.' },
                'elixir': { message: 'Instituição de Ensino: Rafael Camarda na Udemy' },
                'elixir-course': { message: 'Aprenda Elixir criando um jogo e sua primeira API RESTful utilizando Phoenix com autenticação.'},
                'ideas': { message: 'Codando Idéias' },
                'building': { message: ' < Construindo O Mundo Com Código /> ' },
                'ideas-text': { message: 'Estou aqui para codificar o seu sonho, o seu negócio, a sua ideia com criatividade. Se você tem uma ideia de negócio, se precisa que sua empresa fique online, se precisa de um site customizado e ágil, uma landind page, um blog, etc. Considere me contratar!' },
                'ideas-contact': { message: 'Contate-Me' },
                'my-portfolio': { message: 'Meu Portifólio' },
                'personal-projects': { message: 'Trabalhos e Projetos Pessoais' },
                'all': { message: 'Todos' },
                'web-page': { message: 'Página Web' },
                'company-website': { message: 'Página de Empresa' },
                'finance-app': { message: 'App de Controle Financeiro' },
                'currency-app': { message: 'Conversor De Moedas' },
                'game-dev': { message: 'Jogo de Memória' },

                'currency-converter': { message: 'Conversor de Moedas' },
                'javascript-game': { message: 'Jogo de Memória' },
                'form-contact': { message: 'Formulário de Contato' },
                'contact-me': { message: 'Contate-Me' },
                'copyright': { message: 'Todos os Direitos Reservados' },
                'change': { message: '' }
            },
            'en': {
                'portifolio': { message: 'My Portfolio' },
                'home': { message: 'Home' },
                'about': { message: 'About' },
                'service': { message: 'Services' },
                'learning': { message: 'Learning' },
                'portifolio2': { message: 'Portfolio' },
                'contact': { message: 'Contact' },
                'hello': { message: "Hello, I'm" },
                'work': { message: "Freelancer, Web Developer and Front-end Developer." },
                'hire': { message: 'Hire Me'},
                'contact': { message: 'Contact'},
                'social': { message: 'Social Media'},
                'about-me': { message: 'About Me, Personal Info'},
                'web-xp': { message: 'Web Experience'},
                'about-job': {message: "My name is Patrique Porto and I'm a passionate Frontend Web Developer using web technologies to create amazing web sites and products, focusing on solving problems for different niches and diferent markets using power of technology."},
                'xp-web': { message: '2 Years experience in Web Development'},
                'html5': { message: '3 years experience in HTML5'},
                'css3': { message: '3 years experience in CSS3'},
                'js-jq': { message: '1 year experience in JavaScript and Jquery'},
                'bootstrap': { message: '2 years experience in BootStrap 4, 5'},
                'skill-bar': { message: 'Progressive Skill Bar'},
                'prev-b': { message: 'Prev'},
                'next-b': { message: 'Next'},
                'loading-skills': { message: 'Loading Skills...'},
                'wid': { message: 'What I Do'},
                'quality': { message: 'Quality Services'},
                'layout': { message: 'Responsive Layouts'},
                'creation': { message: 'Creation reponsive layouts will work on any device, big or small.'},
                'front': { message: 'Frontend Development'},
                'front-page': { message: 'Build dynamic and intuitive web pages, with a beautiful and responsive layout.'},
                'fast': { message: 'Fast Pages'},
                'fast-page': { message: 'Fast load times and lag free interaction, this is my priority for your web page.'},
                'dynamic': { message: 'Dynamic Pages'},
                'dynamic-page': { message: "Websites don't have to be static, I can make your page come to life with dynamism and interactivity. "},
                'resume': { message: 'Resume'},
                'time-line': { message: 'Learning Time Line'},
                'dev-system': { message: 'Technologist in Analysis and systems development'},
                'unopar': { message: 'Teaching Inticution : Unopar - Universidade do Paraná'},
                'system-dev': { message: 'Train professionals in the field of the use of information technology and computing as a tool and support in the generation of information. '},
                'course-web': { message: 'Complete Web Developer Course' },
                'hcode': { message: 'Teaching Inticution: Hcode - On Udemy' },
                'web-course': { message: 'Learn web development, create a website from scratch from basic to advanced, learn HTML5 and CSS3 with lots of JavaScript. '},
                'course-javascript': { message: 'Complete Javascript Course With 6 Real Projects' },
                'hcode2': { message: 'Teaching Inticution: Hcode - On Udemy' },
                'javascript-course': { message: 'JavaScript from 0 to Advanced, create a WhatsApp and Dropbox Clone with Node JS, Express JS, Socket IO, Firebase, Webpack and +! ' },
                'javascript-coder': { message: 'Complete Modern Web Course with JavaScript 2021 + Projects' },
                'coder': { message: 'Teaching Inticution: Cod3r - On Udemy' },
                'coder-javascript': { message: 'Dominate  Web, 14 cursos + Projects, Javascript, Angular, React, Vue, Node, HTML, CSS, jQuery, Bootstrap, Webpack, Gulp, MySQL.' },
                'course-udemy': { message: 'Elixir and Phoenix from scratch! Create your first Phoenix API.' },
                'elixir': { message: 'Teaching Inticution: Rafael Camarda - On Udemy' },
                'elixir-course': { message: 'Learn Elixir by creating a game and your first RESTful API using Phoenix with authentication.' },
                'ideas': { message: 'Coding Ideas' },
                'building': { message: ' < Building World With Code /> ' },
                'ideas-text': { message: "I'm here to code your dream, your business, your ideia with creativity. If you have a business idea, if you need your company to go online, if you need a customized and fluid fast website, a landind page, a blog, etc. Consider hiring me!" },
                'ideas-contact': { message: 'Contact Me' },
                'my-portfolio': { message: 'MY PORTFOLIO' },
                'personal-projects': { message: 'Jobs and Personal Projects' },
                'all': { message: 'All' },
                'web-page': { message: 'Web Page' },
                'company-website': { message: 'Company website' },
                'finance-app': { message: 'Finance App' },
                'currency-app': { message: 'Currency App' },
                'game-dev': { message: 'Memory Game' },

                'currency-converter': { message: 'Currency converter page' },
                'javascript-game': { message: 'Memory Game' },
                'form-contact': { message: 'Form Contact' },
                'contact-me': { message: 'Contact Me' },
                'copyright': { message: 'All Right Reserved' },
                'change': { message: '' }
            },

        };

        function translate(id, locale) {
            let l = locales[locale];

            if (!l) {
                l = locale.en;
            }

            return l[id];
        }

        $.fn.translate = function(locale) {
            let elements = this.find('[data-translation-id]');

            $.each(elements, function () {
                let id = $(this).data('translation-id'),
                    t = translate(id, locale);

                if (t.isBodyHTML) {
                    $(this).html(t.message);
                } else {
                    $(this).text(t.message);
                }
            });
        };

    }($));

    $(document).ready(function () {
        $('#lang').change(function (){
            $(document).translate($(this).val());
        });

        $(document).translate($('#lang').val());
    });



})(jQuery);
