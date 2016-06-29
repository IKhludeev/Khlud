var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";
function NumPressed (Num) {
        if (FlagNewNum)
        {
            Fcalc.line.value = Num;
            FlagNewNum = false;
        }  
        else
        {
            if (Fcalc.line.value == "0")
                Fcalc.line.value = Num;
            else
                Fcalc.line.value += Num;
        }
}
function Operation (Op) {
        var line = Fcalc.line.value;
        if (FlagNewNum && PendingOp != "=")
        {
            Fcalc.line.value = Currents;
        }
        else
        {
            FlagNewNum = true;
            if ( '+' == PendingOp )
                Currents += parseFloat(line);
            else if ( '-' == PendingOp )
                Currents -= parseFloat(line);
            else if ( '/' == PendingOp )
                Currents /= parseFloat(line);
            else if ( '*' == PendingOp )
                Currents *= parseFloat(line);
            else
                Currents = parseFloat(line);
            Fcalc.line.value = Currents;
            PendingOp = Op;
        }      
}
function Clear () {
        Fcalc.line.value = "";
        FlagNewNum = true;
}
function Point () {
        var curline = Fcalc.line.value;
        if (FlagNewNum)
        {
            curline = "0.";
            FlagNewNum = false;
        }
        else
        {
            if (curline.indexOf(".") == -1)
                curline += ".";
        }
        Fcalc.line.value = curline;
}
function Neg () {
        Fcalc.line.value =
        parseFloat(Fcalc.line.value) * -1;
}
function addNumber (number) {
    var inp = document.getElementById("line");
    inp.value = inp.value + number;
}

    document.getElementById('b1').onclick = function () {
       NumPressed(1);
    }
    document.getElementById('b2').onclick = function () {NumPressed(2);}
    document.getElementById('b3').onclick = function () {NumPressed(3);}
    document.getElementById('b4').onclick = function () {NumPressed(4);}
    document.getElementById('b5').onclick = function () {NumPressed(5);}
    document.getElementById('b6').onclick = function () {NumPressed(6);}
    document.getElementById('b7').onclick = function () {NumPressed(7);}
    document.getElementById('b8').onclick = function () {NumPressed(8);}
    document.getElementById('b9').onclick = function () {NumPressed(9);}
    document.getElementById('rav').onclick = function () {Operation('=');}
    document.getElementById('zerro').onclick = function () {NumPressed(0);}
    document.getElementById('Decimal').onclick = Point;
    document.getElementById('plus').onclick = function () {Operation('+');}
    document.getElementById('minus').onclick = function () {Operation('-');}
    document.getElementById('plmn').onclick = Neg;
    document.getElementById('umnozh').onclick = function () {Operation('*');}
    document.getElementById('podel').onclick = function () {Operation('/');}
    document.getElementById('fulldelete').onclick = Clear;