let open_btn=document.querySelector(".open-btn");
let close_btn=document.querySelector(".close-btn");
let nav=document.querySelector(".nav")

open_btn.addEventListener("click",()=>{
    nav.classList.remove("-top-268")
    nav.classList.add("top-0")
})


close_btn.addEventListener("click",()=>{
   nav.classList.remove("top-0")
   nav.classList.add("-top-268")
})


const divs = [
    document.querySelector(".div1"),
    document.querySelector(".div2"),
    document.querySelector(".div3")
  ];

  // تمام اسلایدها
  const slides = document.querySelectorAll(".swiper-slide");

  // تابع نمایش یک div خاص و مخفی کردن بقیه
  function showRightDiv(index) {
    divs.forEach((d, i) => {
      if (!d) return; // اگر المنت نبود، از خطا جلوگیری کن
      if (i === index) d.classList.remove("hidden");
      else d.classList.add("hidden");
    });
  }

  // نمایش اولیه بر اساس اسلاید فعال فعلی
  showRightDiv(swiper.activeIndex || 0);

  // کلیک روی هر اسلاید → اسلاید به آن ایندکس می‌رود + نمایش div مربوط
  slides.forEach((slide, idx) => {
    slide.addEventListener("click", () => {
      // این باعث می‌شود خود swiper هم اسلاید را عوض کند (در صورت نیاز)
      swiper.slideTo(idx);
      // و div مربوطه را نمایش می‌دهیم
      showRightDiv(idx);
    });
  });

  // وقتی اسلاید تغییر کرد (مثلاً pagination یا swipe یا autoplay) → div راست هم تغییر کند
  swiper.on("slideChange", function() {
    showRightDiv(this.activeIndex);
  });




  let div=document.getElementById("div");
  let count=div.children.length;
  let counIndex=0
  


  function next(){
    counIndex=[counIndex+1]%count
    set(counIndex);
  }

  function back(){
      counIndex=[counIndex -1+count]%count
          set(counIndex);

  }

  function set(index){
    for(let i=0;i<count;i++){
      div.children[i].style.display="none";
    }
      div.children[index].style.display="block";
  
  }

  set(0)

  document.getElementById("img1").addEventListener("click",next);
  document.getElementById("img2").addEventListener("click",back);


  const buttons = document.querySelectorAll('.accordion-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const plus = btn.querySelector('span:last-child');
        
        content.classList.toggle('hidden');
        plus.textContent = content.classList.contains('hidden') ? '+' : '×';
      });
    });
    