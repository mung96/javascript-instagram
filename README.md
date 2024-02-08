## 변경사항
1. html부분을 js로 변경 (React처럼 해보고 싶었음)
2. 좋아요 기능 구현 (클로저 사용)
3. ui와 feat을 구분해서 작성
    - postCardUi.js에 ui를 구현한 뒤, postCard.js에서   ui에 feature를 구현하는 방식으로 코딩
4. 스크롤 해도 navBar 고정
5. postCard slide기능 버그 수정
6. 스토리 클릭하면 테두리 사라지는 기능

## 고민
1. 처음에는 postCardFeat.js에 기능을 구현 한뒤, postCard.js에서 postCardUi.js와 postCardFeat.js를 합치고 싶었음 
   -  => 하지만 이러면 querySelector()를 쓰는 순간 null이 뜸
    - => 비동기 처리 때문인가? 생각해봄 = postCardUi.js에서 html 태그를 다 못만들었는데 postCardFeat.js 가 실행되니까?
    - => setTimeout(postCardFeat.js,1000)을 해봤는데도 똑같이 querySelector가 null이 뜸....
    - => 일단 " postCardUi.js에서 html 태그를 다 못만들었는데 postCardFeat.js 가 실행되니까?" 이 방향이 맞는건가?

2. 실제 인스타그램 스토리부분 css가 도대체 뭐지...

3. querySelector("div")로 가져온 태그의 자식 태그img의 src를 바꾸고 싶으면 querySelector(img)로 다시 가져와야하나? 진짜 이거밖에 방법이 없는건가?