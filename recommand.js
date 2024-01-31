(() => {
    const contents = document.querySelector('.recommandbar_contents_items');
    const userProfile = document.querySelector('.recommandbar_user');
    const USER_BTN_TEXT = "전환";
    const USER_BODY_TEXT = "보노보노";
    const FRIEND_BTN_TEXT = "팔로우";
    const FRIEND_BODY_TEXT = "회원님을 위한추천";

    let user = { id: 0, nickname: "bonobono", src: "img/img_Profile2.jpg", btnText: USER_BTN_TEXT, bodyText: USER_BODY_TEXT }
    let friends = [
        { id: 1, nickname: "friend1", src: "img/img_Profile3.jpg", btnText: FRIEND_BTN_TEXT, bodyText: FRIEND_BODY_TEXT },
        { id: 2, nickname: "friend2", src: "img/img_Profile2.jpg", btnText: FRIEND_BTN_TEXT, bodyText: FRIEND_BODY_TEXT },
        { id: 3, nickname: "friend3", src: "img/img_Profile3.jpg", btnText: FRIEND_BTN_TEXT, bodyText: FRIEND_BODY_TEXT }
    ]

    function makeItemProfile(person) {
        let newProfile = document.createElement("div");
        newProfile.className = "recommandbar_contents_item_profile";
        let profileImg = document.createElement("img");
        profileImg.src = person.src;
        newProfile.appendChild(profileImg);
        return newProfile;

    }

    function makeItemBody(person) {
        let newBody = document.createElement("div");
        newBody.className = "recommandbar_contents_item_body";

        let nickname = document.createElement("div");
        nickname.className = "recommandbar_contents_item_nickname";
        nickname.textContent = person.nickname;

        let detail = document.createElement("div");
        detail.className = "recommandbar_contents_item_detail";
        detail.textContent = person.bodyText;

        newBody.appendChild(nickname);
        newBody.appendChild(detail);

        return newBody;
    }

    function makeItemFollow(person) {
        let btnFollow = document.createElement("div");
        btnFollow.className = "recommandbar_contents_item_follow";
        btnFollow.textContent = person.btnText;
        return btnFollow;
    }

    function makeItem(person) {
        let newItem = document.createElement("div");
        newItem.className = "recommandbar_contents_item";

        let itemLeft = document.createElement("div");
        itemLeft.className = "recommandbar_contents_item_left";
        itemLeft.appendChild(makeItemProfile(person));
        itemLeft.appendChild(makeItemBody(person));

        let itemRight = document.createElement("div");
        itemRight.className = "recommandbar_contents_item_right";
        itemRight.appendChild(makeItemFollow(person));

        newItem.appendChild(itemLeft);
        newItem.appendChild(itemRight);

        return newItem;
    }

    function init() {
        userProfile.append(makeItem(user));
        for (let friend of friends) {
            contents.appendChild(makeItem(friend));
        }

    };

    init();


})();




