(() => {
  //지금은 스토리 item 1개만 전부 활성화 하는걸로
  const storyItem = document.querySelector(".storyItem");

  function updateStory() {
    storyItem.classList.add("updateStory");
  }
  const handleStoryClick = function () {
    storyItem.classList.remove("updateStory");
  };
   
  updateStory()
  storyItem.addEventListener("click", handleStoryClick);
})()