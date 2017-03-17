var values = {
        1: [],
        2: []
    },
    oper = [],
    i = 1,
    count = -1,
    reset = false;
$(function() { // NOTE: the click actions
    $(".num").click(function(event) {
        if (reset) {
            del();
        }
        values[i].push($(this).val());
        $("#result").html(values[i].join(""))
    });
    $(".period").click(function(event) {
        values[i].push($(this).val());
    });
    $(".operator").click(function(event) {
        if (reset) {
            reset = false;

        }
        count++;
        oper.push($(this).val());
        change(oper.length, count);
    });
    $("#resultSign").click(function(event) {
        if (Array.isArray(values[1]) && values[2][0] !== undefined) {
            cal(values[1].join(""), values[2].join(""), oper[count]);
            reset = true;
        } else if (values[2][0] !== undefined) {
            cal(values[1], values[2].join(""), oper[count]);
            reset = true;
        }
    });
    $("#delete").click(function(event) {
        del();
    })
})

function cal(a, b, operator) { // NOTE: does the calculations
    var results = 0;
    switch (operator) {
        case "*":
            results = a * b;
            break;
        case "/":
            results = a / b;
            break;
        case "-":
            results = a - b;
            break;
        case "+":
            results = Number(a) + Number(b);
            break;
        case "%":
            results = a % b;
            break;
        default:
    }

    if (results % 1 !== 0) { // NOTE: if float or not
        $("#result").html(results.toFixed(2));
    } else {
        $("#result").html(results);

    }
    return Number(results)
}

function change(length) {
    if (length === 1) { // NOTE: switches to values[2]
        i = 2;
    } else if (length > 1) { // NOTE: handels the chaining
        if (Array.isArray(values[1])) {
            values[1] = cal(values[1].join(""), values[2].join(""), oper[count - 1]);
        } else {
            values[1] = cal(values[1], values[2].join(""), oper[count - 1]);
        }
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
}
