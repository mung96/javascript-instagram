import { makeTop } from "./Ui/postCardTopUi.js"
import { makeBottom } from "./Ui/postCardBottomUi.js"
import { makeContent } from "./Ui/postCardContentUi.js"

    
    let user =  { id: 1, nickName: "보노보노", profileImg: "img/user/profile/bonobonoProfile.jpg" }
    const postCards = document.querySelector('#postCards')


    const postCardUi = (user) => {
        const postCard = document.createElement('div');
        postCard.classList.add("postCard");

        postCard.appendChild(makeTop(user));
        postCard.appendChild(makeContent());
        postCard.appendChild(makeBottom(user));

        postCards.appendChild(postCard);
    }

    postCardUi(user);

    
   