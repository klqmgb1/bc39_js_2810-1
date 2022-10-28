// Bài tập 1:
document.getElementById("ketqua").onclick = function (){
    var diemchuan = document.getElementById("diemchuan").value * 1
    var mon1 = document.getElementById("mon1").value * 1
    var mon2 = document.getElementById("mon2").value * 1
    var mon3 = document.getElementById("mon3").value * 1
    var tongdiem = mon1 + mon2 + mon3;
    
    var diemcongkv = 0;
    var diemcongdt = 0;
    var diemcongkhuvuc = document.getElementById("khuvuc").value
    var diemcongdoituong = document.getElementById("doituong").value
    
    if(diemcongkhuvuc == "A"){
        diemcongkv = 2;
    }else if(diemcongkhuvuc == "B"){
        diemcongkv = 1
    }else if(diemcongkhuvuc == "C"){
        diemcongkv = 0.5
    }else if(diemcongkhuvuc == "X"){
        diemcongkv = 0
    }else{
        diemcongkv = 0
    }
    
    if(diemcongdoituong == 1){
        diemcongdt = 2.5
    }else if(diemcongdoituong == 2){
        diemcongdt = 1.5
    }else if(diemcongdoituong == 3){
        diemcongdt = 1;
    }else if(diemcongdoituong == 0){
        diemcongdt = 0
    }else{
        diemcongdt = 0
    }

    var diemfinal = tongdiem + diemcongdt + diemcongkv;
    if (diemfinal >= diemchuan && diemchuan !== 0){
        document.getElementById("ketqua").innerHTML = "<p>"+"Bạn đã đậu. "+"Tổng điểm: "+ diemfinal +"</p>"
    }else if(diemfinal < diemchuan && diemchuan !== 0){
        document.getElementById("ketqua").innerHTML = "<p>"+"Bạn đã trượt. "+"Tổng điểm: "+ diemfinal +"</p>"
    }
}


// Bài tập 2
var SODIEN_1 = 500;
var SODIEN_2 = 650;
var SODIEN_3 = 850;
var SODIEN_4 = 1100;
var SODIEN_5 = 1300;

var tienDien_1 = 0;
var tienDien_2 = 0;
var tienDien_3 = 0;
var tienDien_4 = 0;
var tienDien_5 = 0;

var tongTien = 0;


document.getElementById("tinh").onclick = function(){
    var sodien = document.getElementById("sodien").value *1
    var hoten = document.getElementById("hoten").value
    if (0 < sodien && sodien <=50 ){
        tienDien_1 =tinhDien_1(sodien, SODIEN_1)
        tongTien = tienDien_1;
    }else if(sodien > 50 && sodien <=100){
        tienDien_1 =tinhDien_1(50, SODIEN_1)
        tienDien_2 = tinhDien_2(sodien - 50, SODIEN_2)
        tongTien = tienDien_1 + tienDien_2;
    }else if(sodien > 100 && sodien <= 200){
        tienDien_1 = tinhDien_1(50, SODIEN_1)
        tienDien_2 = tinhDien_2(50, SODIEN_2)
        tienDien_3 = tinhDien_3(sodien - 100, SODIEN_3)
        tongTien = tienDien_1 + tienDien_2 + tienDien_3
    }else if(sodien > 200 && sodien <=350){
        tienDien_1 = tinhDien_1(50, SODIEN_1)
        tienDien_2 = tinhDien_2(50, SODIEN_2)
        tienDien_3 = tinhDien_3(100, SODIEN_3)
        tienDien_4 = tinhDien_4(sodien-200, SODIEN_4)
        tongTien = tienDien_1 + tienDien_2 + tienDien_3 + tienDien_4
    }else if(sodien > 350){
        tienDien_1 = tinhDien_1(50, SODIEN_1)
        tienDien_2 = tinhDien_2(50, SODIEN_2)
        tienDien_3 = tinhDien_3(100, SODIEN_3)
        tienDien_4 = tinhDien_4(150, SODIEN_4)
        tienDien_5 = tinhDien_5(sodien- 350, SODIEN_5)
        tongTien = tienDien_1 + tienDien_2 + tienDien_3 + tienDien_4 + tienDien_5
    }
    var currentformat = Intl.NumberFormat("VN-vn");
    document.getElementById("infoTinh").innerHTML = "<p>Họ và tên: "+hoten+ ". " +"Tiền điện: "+ currentformat.format(tongTien) +" VNĐ"+"</p>"
}
function tinhDien_1 (sodien, SODIEN_1){
    var result = sodien * SODIEN_1;
    return result
}
function tinhDien_2 (sodien, SODIEN_2){
    var result = (sodien) * SODIEN_2
    return result
}
function tinhDien_3 (sodien, SODIEN_3){
    var result = (sodien) * SODIEN_3
    return result
}
function tinhDien_4 (sodien, SODIEN_4){
   var result = (sodien) * SODIEN_4
   return result
}
function tinhDien_5 (sodien, SODIEN_5){
    var result = (sodien) * SODIEN_5
    return result
}