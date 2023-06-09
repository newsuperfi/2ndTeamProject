export const koficApi = () => {
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
      let temp_html = `<div class="koBoxOffice">
                        <h1>국내 박스오피스 TOP 10</h1>
                        <table class="boxOfficeTable">
                        <TR>
                        <TD class="rank">순위</TD><TD class="tableTitle">TITLE</TD><TD class="tableTitle">개봉일</TD><TD class="tableTitle">누적관객수</TD>`;
      console.log(data);
      const boxOfficeData = data["boxOfficeResult"]["dailyBoxOfficeList"];
      console.log(data);
      //배열안에있는 원소를 value로 한개씩 뽑아서 아래로 보내준다
      boxOfficeData.forEach((valuech) => {
        temp_html +=
          `<TR>
            <TD class="rank">${valuech.rank}</TD><TD>${valuech.movieNm}</TD><TD>${valuech.openDt}</TD><TD class="audience">${valuech.audiAcc}(명)</TD>`;
      });
      
      temp_html += `</table></div>`
      //명령을 내릴 대상지정
      document.querySelector("#movie-list").innerHTML = temp_html;
    });
  // });
};
document.querySelector(".korea").addEventListener("click", koficApi);
