# Dom-minigame

webApi  dom 요소들을 활용한 게임

![image](https://user-images.githubusercontent.com/89845540/184063812-fa8779b8-f1db-4821-8a3c-4b2bedeafe36.png)


벌레를 잡거나 타임이 다 지나면 패배 

당근을 다 뽑으면 승리




### 사용기술

![HTML5](https://img.shields.io/badge/-html5-blue?style=plastic=?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/-css3-blue?style=plastic=?style=for-the-badge&logo=css3)
![JAVASCRIPT](https://img.shields.io/badge/-javascript-blue?style=plastic=?style=for-the-badge&logo=javascript)
![SASS](https://img.shields.io/badge/-sass-blue?style=plastic=?style=for-the-badge&logo=sass)




source : dream-coding

GitHub 배포 페이지 : http://maghc.github.io/Dom-minigame/



### 만들면 서 배운 점 

```js

  for (let i = 0; i < number; i++) {
    const img = document.createElement("img");
    img.setAttribute("class", classname);
    img.setAttribute("src", imgpath);
    img.style.position = "absolute";
    const x = randomNum(x1, x2);
    const y = randomNum(y1, y2);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    mainSection.appendChild(img);
    
    //이전 같으면 돔 요소를 만들고 바로 여기서 addEventListener 를 등록하여 반복 되는 이벤트 처리를 했겠지만  
     
  }


```


```js

mainSection.addEventListener("click", (e) => { // gamePlaysection을 클릭시 
    const target = e.target;
    if (!startStatus) { // 게임이 시작 상태가 아니면 리스너 종료 
      return;
    }
    if (target.matches(".carrot")) {   //해당 클릭 요소의 classname 이 match 될때만 이벤트 발생
      target.classList.toggle("none");
      --score;
      playScore.innerText = score;
      playSound(carrotSound);
    } else if (target.matches(".bug")) {
      playSound(bugound);
      alert("패배");
      location.reload();
    }  
  });


하는 방식으로 적용할 수 있었다.
```


 그 밖에 Sound 파일의 활용 같은 것들도 흥미로웠는데 사실 배경 bgm 으로 깔리게 할려고 
 
 window.addEventListener('load') 상태에 추가를 sound.play() 를 추가시켜놨는데 
 
 
 ![image](https://user-images.githubusercontent.com/89845540/184064223-d729ad6f-56b5-4e86-8704-32f5d41b6c2b.png)


생전 처음 보는 에러 메세지를 접했다 해당 링크를 눌러서 들어가보니 크롬 개발자들 블로그에 들어갔는데 

![image](https://user-images.githubusercontent.com/89845540/184064280-90ea069a-f305-4a87-9749-38f72bba56c2.png)


이런 이미지를 보고 순간 공식 맞나 하고 자신을 의심  옆에 로고없었으면 해킹당한줄알았을지도 몰랐겠다 


크롬의 자동재생 정책이 있어서 유저에 대한 더 좋은 경험을 위해 막는다는 내용이였다.  이 작은 게임프로젝트를 통해 얻은  좋은 경험이였다. 


