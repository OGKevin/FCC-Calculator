var values = {
        1: [],
        2: []
    },
    oper = [],
    i = 1,
    count = -1,
    reset = false;
$(function() {
    $(".num").click(function(event) {
      if (reset) {
        del();
      }
        values[i].push($(this).val());
        $("#result").html(values[i].join(""))
        console.log($(this).val() + "-->" + values[i].join("") + " values[" + i + "]");
    });
    $(".period").click(function(event) {
      values[i].push($(this).val());
    });
    $(".operator").click(function(event) {
        count++;
        console.log("count = " + count);
        oper.push($(this).val());
        console.log(oper);
        change(oper.length, count);
    });
    $("#resultSign").click(function(event) {
        if (Array.isArray(values[1])) {
            cal(values[1].join(""), values[2].join(""), oper[count]);
        } else {
            cal(values[1], values[2].join(""), oper[count]);
        }
        reset = true;
    });
    $("#delete").click(function(event) {
        del();
    })
})

function cal(a, b, operator) {
    var results = 0;
    switch (operator) {
        case "*":
            results = a * b;
            console.log("case *" + " " + a + " " + b);
            break;
        case "/":
            results = a / b;
            console.log("case /" + " " + a + " " + b);
            break;
        case "-":
            results = a - b;
            console.log("Case -" + " " + a + " " + b);
            break;
        case "+":
            results = Number(a) + Number(b);
            console.log("case +" + " " + a + " " + b);
            break;
        case "%":
            results = a % b;
            console.log("case %" + " " + a + " " + b);
            break;
        default:
            console.log("no case");
    }
    $("#result").html(results);
    console.log(results);
    return Number(results)
}

function change(length) {
    if (length === 1) { // NOTE: switches to values[2]
        i = 2;
    } else if (length > 1) { // NOTE: handels the cahining
        if (Array.isArray(values[1])) {
            values[1] = cal(values[1].join(""), values[2].join(""), oper[count - 1]);
        } else {
            values[1] = cal(values[1], values[2].join(""), oper[count - 1]);
        }
        // console.log(values[1]);
        values[i].splice(0, values[i].length); // NOTE clears values[2]
    }
}

function del() {
    values = {
        1: [],
        2: []
    };
    oper = [];
    i = 1;
    count = -1;
    reset = false;
    $("#result").html("");
    console.log("cleared");
}
