(() => {
    const navBar = document.querySelector('.navBarContents')
    const navItems = [
        { id: 1, icon: "img/icon/home.svg", text: "홈" },
        { id: 1, icon: "img/icon/search.svg", text: "검색" },
        { id: 1, icon: "img/icon/explore.svg", text: "탐색 탬" },
        { id: 1, icon: "img/icon/reels.svg", text: "릴스" },
        { id: 1, icon: "img/icon/send.svg", text: "메시지" },
        { id: 1, icon: "img/icon/heart.svg", text: "알림" },
        { id: 1, icon: "img/icon/add.svg", text: "만들기" },
        { id: 1, icon: "img/icon/profile.svg", text: "프로필" }
    ]

    const navBarUi = (navItem) => {
        const item = document.createElement('div');
        const text = document.createElement('span');
        const icon = document.createElement('img');

        item.classList.add("navBarItem");
        icon.classList.add("navBarIcon");
        text.classList.add("navBarText");

        icon.src = navItem.icon;
        text.textContent = navItem.text;

        item.appendChild(icon);
        item.appendChild(text);
        navBar.appendChild(item);
    }

    navItems.map(navItem => navBarUi(navItem));

})()