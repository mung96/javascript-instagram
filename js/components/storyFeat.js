(() => {
  const storyItem = document.quarySelector(".storyItem")


  //클로저를 이용하면 상태변화를 추적할 수 있지 않을까?

  function clickStory() {
    const selectedStoryElement = storycolor[0];

    if (!check) {
      storycolor.style.border = "2px solid rainbow";
    }
    else {
      storycolor.style.border = "2px solid gray";
    }
    Clicks.forEach((profile) => {
      button.addEventListener('click', clicked);
    })
  }

  function clickLike() {
    if (!check) {
      heart.src = "img/icon/heart.svg";
    }
    else {
      heart.src = "img/icon/redHeart.png";
    }
  }

  const handleStoryClick = () => {
    //스토리가 꺼지고 켜져야함
    //css를 만들고 hide하면될듯
  }

  storyItem.addEventListener("click", handleStoryClick)
})()

