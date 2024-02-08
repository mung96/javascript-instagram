

export const makeContent = (user) => {
    const content = document.createElement('div');
    content.classList.add("postCardContent");

    const slide = document.createElement('div');
    slide.classList.add("postCardSlide");
    content.appendChild(slide);

    user.posts.forEach(function(post){
            const slideImg = document.createElement('img');
            slideImg.src = post;
            slide.appendChild(slideImg);
        }
    )
    
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