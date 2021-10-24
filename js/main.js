// 1. In các số nguyên dương lẻ/ chẵn nhỏ hơn 100
function evenOdd() {
    // VÒNG LẶP WHILE
    var n = 0;
    var even = "";
    var odd = "";
    while (n < 100) {
        if (n % 2 == 0) {
            even += n + ", ";
        } else {
            odd += n + ", ";
        }
        n++;
    }
    document.querySelector("#resultWhile").innerHTML = "Các số chẵn là: " + even + "<br>" + "Các số lẻ là: " + odd;
    // VÒNG LẶP FOR
    var evenFor = "";
    var oddFor = "";
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            evenFor += i + ", ";
        } else {
            oddFor += i + ", ";
        }
    }
    document.querySelector("#resultFor").innerHTML = "Các số chẵn là: " + evenFor + "<br>" + "Các số lẻ là: " + oddFor;
}
document.querySelector("#btnEvenOdd").onclick = evenOdd;

// 2. Có bao nhiêu số chia hết cho 3 từ 0-1000
function count() {
    // VÒNG LẶP WHILE
    var count1 = 0;
    var n = 0;
    while (n < 1000) {
        if (n % 3 == 0) {
            count1++;
        }
        n++;
    }
    document.querySelector("#resultCount1").innerHTML = "Có " + count1 + " số chia hết cho 3 nhỏ hơn 1000."
    // VÒNG LẶP FOR
    var count2 = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count2++;
        }
    }
    document.querySelector("#resultCount2").innerHTML = "Có " + count2 + " số chia hết cho 3 nhỏ hơn 1000."
}
document.querySelector("#btnCount").onclick = count;

// 3. Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
function find() {
    var sum = 0;
    var n = 0;
    while (sum < 10000) {
        n++;
        sum += n;
    }
    // vòng lặp FOR
    // var sum = 0;
    // for(var i = 1; i < (i+1); i++){
    //     sum +=i;
    //     if (sum > 10000){
    //         break;
    //     }
    // }
    document.querySelector("#resultFind").innerHTML = "Số nguyên nhỏ nhất cần tìm là: " + n;
}
document.querySelector("#btnFind").onclick = find;


// 4. Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n
function totalS() {
    var x = document.querySelector("#numX").value;
    var n = document.querySelector("#numN").value;
    var s = 0;
    for (var i = 1; i <= n; i++) {
        s += Math.pow(x, i);
    }
    document.querySelector("#resultS").innerHTML = "S(n) = " + s;
}
document.querySelector("#btnS").onclick = totalS;


// 5. Nhập vào n. Tính giai thừa 1*2*...n
function multi() {
    var n = document.querySelector("#numberN").value;
    var multi = 1;
    for (var i = 1; i <= n; i++) {
        multi *= i;
    }
    document.querySelector("#resultMulti").innerHTML = multi;
}
document.querySelector("#btnMulti").onclick = multi;


// 6. In ra 10 thẻ div. Nếu div nào vị trí chẵn thì background đỏ và lẻ thì màu xanh
function addDiv() {
    for (var i = 1; i <= 10; i++) {
        var divNew = document.createElement("div");
        var contentDiv = document.createTextNode("Div thứ " + i);
        document.getElementById("divNews").appendChild(divNew);
        divNew.appendChild(contentDiv);
        divNew.style.padding = "10px";
        divNew.style.width = "300px";
        divNew.style.color = "#fff";

        if (i % 2 == 0) {
            divNew.style.backgroundColor = "#a31621";
        } else {
            divNew.style.backgroundColor = "#175676";
        }
    }
}
document.querySelector("#btnDiv").onclick = addDiv;


// 7. In ra các số nguyên tố từ 1 tới m
function numPrime() {
    var m = document.querySelector("#numberM").value;
    var prime = "";
    for (var i = 1; i < m; i++) {
        var count = 0;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 0 && i > 1) {
            prime += i + ",";
        }
    }
    document.querySelector("#resultPrime").innerHTML = prime;
}
document.querySelector("#btnPrime").onclick = numPrime;