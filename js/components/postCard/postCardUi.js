import { makeTop } from "./Ui/postCardTopUi.js"
import { makeBottom } from "./Ui/postCardBottomUi.js"
import { makeContent } from "./Ui/postCardContentUi.js"

const postCards = document.querySelector('#postCards')

export const postCardUi = (user) => {
    const postCard = document.createElement('div');
    postCard.classList.add("postCard");

    postCard.appendChild(makeTop(user));
    postCard.appendChild(makeContent());
    postCard.appendChild(makeBottom(user));

    postCards.appendChild(postCard);
}





