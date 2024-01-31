(() => {
    const contents = document.querySelector('.recommandbar_contents_items');
    const userProfile = document.querySelector('.recommandbar_user');

    function makeItemProfile() {

        let newProfile = document.createElement("div");
        newProfile.className = "recommandbar_contents_item_profile";
        let profileImg = document.createElement("img");
        profileImg.src = "img/img_Profile2.jpg";
        newProfile.appendChild(profileImg);
        return newProfile;

    }

    function makeItemBody() {
        let newBody = document.createElement("div");
        newBody.className = "recommandbar_contents_item_body";

        let nickname = document.createElement("div");
        nickname.className = "recommandbar_contents_item_nickname";
        nickname.textContent = "bonobono";

        let detail = document.createElement("div");
        detail.className = "recommandbar_contents_item_detail";
        detail.textContent = "회원님을 위한 추천";

        newBody.appendChild(nickname);
        newBody.appendChild(detail);

        return newBody;
    }

    function makeItemFollow() {
        let btnFollow = document.createElement("div");
        btnFollow.className = "recommandbar_contents_item_follow";
        btnFollow.textContent = "팔로우";
        return btnFollow;
    }

    function makeItem() {
        let newItem = document.createElement("div");
        newItem.className = "recommandbar_contents_item";

        let itemLeft = document.createElement("div");
        itemLeft.className = "recommandbar_contents_item_left";
        itemLeft.appendChild(makeItemProfile());
        itemLeft.appendChild(makeItemBody());

        let itemRight = document.createElement("div");
        itemRight.className = "recommandbar_contents_item_right";
        itemRight.appendChild(makeItemFollow());

        newItem.appendChild(itemLeft);
        newItem.appendChild(itemRight);

        return newItem;
    }

    function init() {
        userProfile.append(makeItem());
        for (let i = 0; i < 5; i++) {
            contents.appendChild(makeItem());
        }

    };

    init();


})();




