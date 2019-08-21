function salecalc() {
    var OriginPrice = document.querySelector('.origin').value;
    var SalePrice = document.querySelector('.sale').value;
    var SalePer = (OriginPrice - SalePrice)/OriginPrice * 100;
    document.querySelector('.result').innerHTML = "할인율은 " + SalePer + "% 입니다." ;
}