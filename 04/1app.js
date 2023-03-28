
// 1문자열 합치기
const year = 2022;
const month = 11;
const day = 3;

const dateString = `${year}-${month}-${day}`;

console.log(`Today's date is: ${dateString}`);

//2 문자열 분리
const dateString2 = "2022-12-12";
let result2 = dateString2.split('-').map(str => parseInt(str));
console.log(result2)

// 3문자열 변경
const text = "나는 XX를 좋아해";
const item = "JS";
const result = text.replace('XX', item);

console.log(result);

//4 문자열 검색
const text4 = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

console.log('No.4 : ' + (text4.indexOf(searchText) > -1))

// 5모든 배열값 더하기
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

const allPoints = [...point1, ...point2]; 
const sum = allPoints.reduce((acc, cur) => acc + cur); 

console.log(sum);

// 6소수점 이하를 버리고 정수 구하기
const a = 1.2;
const b = 3.4;

console.log(Math.floor(a) + Math.floor(b));

// 7랜덤수 구하기
const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * max) + min;
console.log(randomNumber);


// 8 배수 확인
const target = 10;
const num = 3;

if (target % num === 0) {
  console.log(`${target} is a multiple of ${num}`);
} else {
  console.log(`${target} is not a multiple of ${num}`);
}

//9 대문자로 변경
const nick = "kakao";
console.log(nick.toUpperCase());

// 10원시타입 요소만 배열로 만들기
const items = [1, "a", true, ["a"], { n: 1 }];

const primitives = items.filter(item => typeof item !== 'object' && !Array.isArray(item));
console.log(primitives); // [1, "a", true]

// 111배열값 나누기
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const groups = Math.ceil(items.length / pageSize); 

for (let i = 0; i < groups; i++) {
  const start = i * pageSize;
  const end = start + pageSize;
  const groupItems = items.slice(start, end); 

  const groupStr = groupItems.join(", "); 
  if (i === groups - 1 && groupItems.length < pageSize) {
    console.log(groupStr); 
  } else {
    console.log(groupStr + " -"); 
  }
}

//12배열값 나눠서 다시 배열로
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const result = [];
for (let i = 0; i < items.length; i += pageSize) {
  const group = items.slice(i, i + pageSize);
  result.push(group);
}

console.log(result); // [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ], [ 'j' ] ]

//13.페이지의 시작번호 구하기
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const getStartIndexByPage = function (page) {
  return (page - 1) * pageSize;
};

console.log(getStartIndexByPage(1)); // 0
console.log(getStartIndexByPage(2)); // 3
console.log(getStartIndexByPage(3)); // 6

//1414.전화번호 패턴 검사
const phoneNumber = `010-1234-1234`;
const IsValidatePhoneNumber = (str) => {
    return /^\d{2,3}-\d{3,4}-\d{4}$/.test(str)
  }

console.log(IsValidatePhoneNumber(phoneNumber))


//15.객체값 변경
const user = { nick: "nio", age: 20, location: "제주" };

user.age = 21;
user.name = "부산";

console.log(user);

//16.문자열을 객체형으로
const text = "{a:1, b:2}";
const obj = JSON.parse(text.replace(/'/g, '"'));
console.log(obj);

//17json을 문자열로

const user17 = { nick: "nio", age: 20, location: "제주" };
const output_user17 = JSON.stringify(user17);
console.log(output_user17);

//18. 새로운 배열 생성
onst items18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newevenitem18 = items18.filter((item18) => {
    return item18 %2 === 0;
});

console.log(newevenitem18);


//19배열 필터
const list = [
    {
      id: 1,
      title: "JS",
      isPublic: true,
    },
    {
      id: 2,
      title: "기본",
      isPublic: true,
    },
    {
      id: 3,
      title: "ecma",
      isPublic: true,
    },
    {
      id: 4,
      title: "dom",
      isPublic: false,
    },
  ];

20//다음일 구하기
  const dday = "2022-02-02";
const date = new Date(dday);
date.setDate(date.getDate() + 1);
const tomorrow = date.toISOString().slice(0, 10);
console.log(tomorrow);