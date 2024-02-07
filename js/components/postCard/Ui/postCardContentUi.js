export const makeContent = () =>{
    const content = document.createElement('div');
    content.classList.add("postCardContent");

    const slide = document.createElement('div');
    slide.classList.add("postCardSlide");
    content.appendChild(slide);

    const slideImg1 = document.createElement('img');
    slideImg1.src = "img/user/post/bonobonoPost1.jpeg";
    const slideImg2 = document.createElement('img');
    slideImg2.src = "img/user/post/bonobonoPost2.jpeg"
    const slideImg3 = document.createElement('img');
    slideImg3.src = "img/user/post/bonobonoPost3.jpeg"

    slide.appendChild(slideImg1);
    slide.appendChild(slideImg2);
    slide.appendChild(slideImg3);

    //버튼부분
    const btnNext = document.createElement('button');
    btnNext.classList.add("btnNext");
    btnNext.textContent = "▶";
    const btnPrev = document.createElement('button');
    btnPrev.classList.add("btnPrev");
    btnPrev.textContent = "◀";
    content.appendChild(btnNext);
    content.appendChild(btnPrev);
    return content; 
}