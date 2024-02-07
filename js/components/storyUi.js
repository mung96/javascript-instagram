(() => {
    const storyFeed = document.querySelector('#storyFeed')

    let users = [
        { id: 1, nickName: "보노보노", profileImg: "img/user/profile/bonobonoProfile.jpg" },
        { id: 2, nickName: "포로리", profileImg: "img/user/profile/pororiProfile.webp" },
        { id: 3, nickName: "너부리", profileImg: "img/user/profile/raccoonProfile.jpeg" }
    ]

    const storyUi = (user) => {
        const item = document.createElement('div');
        const profile = document.createElement('div');
        const nickName = document.createElement('span');
        const profileImg = document.createElement('img');

        item.classList.add("storyItem");
        nickName.classList.add("storyNickName");
        profile.classList.add("storyProfile");

        profileImg.src = user.profileImg;
        nickName.textContent = user.nickName;

        profile.appendChild(profileImg);
        item.appendChild(profile);
        item.appendChild(nickName);
        storyFeed.appendChild(item);
    }

    users.map(user => storyUi(user))

})()