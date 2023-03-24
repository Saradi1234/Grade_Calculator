function final() {
    var sub1 = parseInt(document.getElementById("english").value)
    var sub2 = parseInt(document.getElementById("maths").value)
    var sub3 = parseInt(document.getElementById("physics").value)
    var sub4 = parseInt(document.getElementById("chemistry").value)
    var sub5 = parseInt(document.getElementById("computer").value)


    if ((sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100)) {
        alert("Please Enter mark in range of 100");
    } else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "Total Marks:" + total;
    }

    if ((sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100)) {
        alert("Please Enter mark in range of 100");
    } else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var average = total / 5;
        document.getElementById("average").innerHTML = "Your Average Marks are:" + average;
    }

    if ((sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100)) {
        alert("Please Enter mark in range of 100");
    } else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var average = total / 5;

        if (average >= 90 && average <= 100) {
            document.getElementById("grade").innerHTML = "You Got A Grade";
        }
        else if (average >= 80 && average <= 89) {
            document.getElementById("grade").innerHTML = "You Got B Grade";
        }
        else if (average >= 70 && average <= 79) {
            document.getElementById("grade").innerHTML = "You Got C Grade";
        }
        else if (average >= 60 && average <= 69) {
            document.getElementById("grade").innerHTML = "You Got D Grade";
        }
        else if (average > 60) {
            document.getElementById("grade").innerHTML = "You Got F Grade";
        }
        if ((sub1 >= 35 || sub2 >= 35 || sub3 >= 35 || sub4 >= 35 || sub5 >= 35)) {
            document.getElementById("grade").innerHTML = "You Got F Grade";
        }
        if ((!sub1 || !sub2 || !sub3 || !sub4 || !sub5)) {
            document.getElementById("grade").innerHTML = "You Got F Grade";
        }
    }
}