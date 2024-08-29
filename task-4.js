/*
        What will be the result of the following codes:
        var a = isNaN(‘11’);
        var a = isNaN(2-10);
        Explain your answers.
 */
        var a = isNaN('11'); // the input is a string
        console.log(a); // it can convert the string to a number. hence the number can be converted so it is not NaN. isNaN('11') returns false


        var b = isNaN(2-10);  // the input is a number
        console.log(b); // (2-10) = -8 ; -8 itself a number so it is not NaN.isNaN(2-10) returns false

