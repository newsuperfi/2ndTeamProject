export const practiceApi = () => {
  //document.querySelector(".mycards").innerHTML =
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate() - 1;
  let formattedDate = `${year}${month < 10 ? "0" + month : month}${
    day < 10 ? "0" + day : day
  }`;
  console.log(formattedDate);
  fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9eca89007c1564aef0ddab2d14639acc&targetDt=${formattedDate}`
  )
    .then((res) => res.json())
    .then((data) => {
      let temp_html = "";
      console.log(data);
      const boxOfficeData = data["boxOfficeResult"]["dailyBoxOfficeList"];
      console.log(data);
      //배열안에있는 원소를 value로 한개씩 뽑아서 아래로 보내준다
      boxOfficeData.forEach((valuech) => {
        temp_html +=
          //`<div>${value.movieNm}</div>
          // <div>${value.rank}</div>
          // <div>${value.openDt}</div>
          // <div>${value.rnum}</div>`;
          ` <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${valuech.movieNm}</h5>
            <p class="card-text">${valuech.openDt}</p>
            <p class="mycomment">${valuech.rank}</p>
          </div>
        </div>
      </div>
    </div>`;
      });
      console.log(temp_html);
      //명령을 내릴 대상지정
      document.querySelector("#movie-list").innerHTML = temp_html;
    });
  // });
};
document.querySelector(".korea").addEventListener("click", practiceApi);
