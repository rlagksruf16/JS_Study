function calc() {
    var CurrentYear = prompt("현재 연도를 입력하세요!");
    var BirthYear = prompt("태어난 연도를 입력하세요!");
    var age;
    age = CurrentYear - BirthYear + 1;
    document.querySelector("#result").innerHTML = "나이는 " + age + " 입니다!";
}