require('intersection-observer');
IntersectionObserver.prototype.POLL_INTERVAL = 100; // Time in milliseconds.
// для работы нужен div с класом lazy и с атрибутом data-src с путём до картинки ЕСЛИ ТЫ ИСПОЛЬЗУЕШЬ КАРТИНКУ ФОНОМ!
// ЕСЛИ У ТЕБЯ ТЕГ img добавь scr="no-foto.svg" для всех картинок а в атрибут data-src вставь путь от оригинальной картинки!

// при появлении нужного селектора в области видимости КАРТИНКА ПОДГРУЖАЕТСЯ!

//картинка фоном

    function lazy() {
        const imageObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target
                                      
                    //let bg = lazyImage.getAttribute('data-src');
                    //lazyImage.style.backgroundImage = "url(" + bg + ")";
                    
                }
            })
        });
        const arr = document.querySelectorAll('.lazy')
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            imageObserver.observe(element);
        }
    }
    
    
//динамичная замена в пути к катринке  в img src
function lazyImg() {
        const imageObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target
                    let bg = lazyImage.getAttribute('data-src');
                    if (bg.length > 0) {
                        lazyImage.setAttribute('src', bg);
                    }
                }
            })
        });
        const arr = document.querySelectorAll('.lazy-img')
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            imageObserver.observe(element);
        }
    }

//затем вызови эти функции
lazy()
lazyImg()

