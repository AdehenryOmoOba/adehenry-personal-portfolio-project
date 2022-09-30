const $$ = document.querySelectorAll.bind(document);

// Animation with Intersection Observer 
const items = $$("[data-observer]");
let observList = Array.from(items);


function observerCallback (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('observer-animation')
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, {threshold: 0.3});

  export function animateOnLoad () {
    observList.forEach((item) => {
      observer.observe(item);
    })}



   function debounce() {

      let setTimeoutID;
  
    return function()  {
      if (setTimeoutID) {
          clearTimeout(setTimeoutID)
      }
      setTimeoutID =  setTimeout(() => {

        if(window.scrollY < 100){
          observList.forEach((item) => {
          if(item.dataset.observer !== 'home-text' && item.dataset.observer !== 'home-img')
          item.classList.remove('observer-animation')
        })
      }
      
        }, 1000);
       
    }
  }

export const  debouncedAnimateOnPageTop = debounce()


