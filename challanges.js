/* Bonfires */

/* ----Chunky Monkey---- 
 Write a function, called chunk that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/

// chunk(['a', 'b', 'c', 'd'], 2);  ----> [['a','b'],['c','d']]

function chunk(arr, size) {
    var new_array = [];
    for (var i = 0; i < arr.length; i += size) {
        var addOns = arr.slice(i, i + size); //slice method creates array
        console.log(arr);
        new_array.push(addOns);
    }
    return new_array;
}

/* End of 'Chunky Monkey' */

/*  ----Slasher Flick----
    
    Write a function, called slasher that will return the remaining elements of an 
    array after chopping off elements from the head(beginning of the array).
*/

function slasher(arr, howMany) {
    var counter = 0;
    while (counter < howMany) {
        arr.shift(0); //shift method mutates original array. 
        counter++;
    }
    return arr;
}

/* End of 'Slasher Flick' */

/*   ----Mutations-----
    Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.

*/
//---------------Still need to solve
function mutation(arr) { //arr will just contain 2 string elements
    for (var i = 0; i < arr[1].length; i++) {
        if ()
    }

}
//-------------------------------------------------------------


/*  Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments
*/

function destroyer(arr) {
    var final_array = arguments[0]; //capture the first argument with the global *arguments* array like object. 
    var values_to_check = []; //create an array to store values to check
    //start looping through the values in the arguments from index 1 and pushing to the 'values_to_check' array
    for (var i = 1; i < arguments.length; i++) {
        values_to_check.push(arguments[i]);
    }
    /*start looping through the values in the 'values_to_check' array and use a while loop to check/remove 
    the indexOf 'final_array' and use splice to remove the element*/
    for (var i = 0; i < values_to_check.length; i++) {
        while (final_array.indexOf(values_to_check[i]) != -1) {
            final_array.splice(final_array.indexOf(values_to_check[i]), 1);
        }
    }

    return final_array;

}

/* End of 'Seek and Destroy' */

/*  Finding the cube root from a user input
    
*/

var x = prompt('Please enter an integer!');
var ans = 0;
while (Math.pow(ans, 3) < Math.abs(x)) {
    ans++;
}
if (Math.pow(ans, 3) !== Math.abs(x)) {
    console.log(x + ' is not a perfect cube!');
} else {
    if (x < 0) {
        ans = -ans;
    }
    console.log('Cube root of' + x + ' is ' + ans);
}
/* End of Cube root problem */

/* Bonfire: Sum all numbers in a Range */

function sumAll(arr) {
    var largest = Math.max(arr[0], arr[1]),
        smallest = Math.min(arr[0], arr[1]),
        new_array = [smallest],
        difference = largest - smallest,
        num_to_push;
    // Build the new array with all the numbers inbetween
    for (var i = 0; i < difference; i++) {
        num_to_push = new_array[i] + 1;
        new_array.push(num_to_push);
    }
    // Use reduce method to sum all elements in the array
    var total = new_array.reduce(function (a, b) {
        return a + b;
    });

    return total;
}

/* --Alternative Version of Sum all numbers without reduce method-- */

function sumAll(arr) {
    var largest = Math.max(arr[0], arr[1]),
        smallest = Math.min(arr[0], arr[1]),
        new_array = [smallest],
        difference = largest - smallest,
        counter = 0,
        total = 0,
        num_to_push;
    while (counter < difference) {
        num_to_push = new_array[counter] + 1;
        new_array.push(num_to_push);
        counter++;
    }
    for (var i = 0; i < new_array.length; i++) {
        total += new_array[i];
    }
    return total;
}

/* --End of Sum all numbers-- */

/*  Diff Two Arrays 
    
    Compare two arrays and return a new array with any items not found in both of the original arrays.
*/

function diff(arr1, arr2) {
    var new_array = [];
    //loop through arr1 and see if values exist in arr2
    for (var i = 0; i < arr1.length; i++) {
        //Check to see if values in arr1 are not in arr2, then push values to new_array
        if (arr2.indexOf(arr1[i]) == -1) {
            new_array.push(arr1[i]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            new_array.push(arr2[i]);
        }
    }
    return new_array;
}

/* End of Diff two arrays */

/*
    'Roman Numeral Converter' 
    Convert the given number into a roman numeral.
    All roman numerals answers should be provided in upper-case.
*/

function convert(num) {


}

/*--  End of Numeral Converter --*/

/*- Bonfire: Search and Replace
    Perform a search and replace on the sentence using the arguments provided and return the new sentence.

    First argument is the sentence to perform the search and replace on.

    Second argument is the word that you will be replacing (before).

    Third argument is what you will be replacing the second argument with (after).

    NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'

-*/
function switch_out(str, before, after) {
    var reg_ex = /[A-Z]/;
    if (reg_ex.test(before[0])) {
        after = after[0].toUpperCase() + after.slice(1);
    }
    str.replace(before, after);
    return str;
}

/*--End of Search and Replace --*/

/*
    Bonfire: Boo Whoo
    Check if a value is classified as a boolean primitive. Return true or false.
    Boolean primitives are true and false.
*/

function boo(bool) {
    if (typeof bool == 'boolean') {
        return true;
    } else {
        return false;
    }
};

/* -- End of Boo Whoo -- */


/*
    Bonfire: Sorted Union
    Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
    In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
    The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
    Check the assertion tests for examples.
*/

function unite(arr1, arr2, arr3) {
    //first step should be to sort each array
    var num_of_arrays = arguments.length,
        new_array = [],
        final_array = [],
        tracker = 0,
        counter = 0;
    /*use while loop to go through each argument, sort array, and push into
      new array */
    while (counter < num_of_arrays) {
        var array_to_add = arguments[counter].sort(function (a, b) {
            return a - b;
        })
        new_array.push(array_to_add);
        counter++;
    }
    // Flatten the new array using reduce and concat methods
    new_array = new_array.reduce(function (a, b) {
        return a.concat(b);
    });



}


/* -- End of Sorted Union -- */


/*  Convert HTML entities 
    Convert the characters "&", "<", ">", '"' (double quote), 
    and "'" (apostrophe), 
    in a string to their corresponding HTML entities.
*/

function convert(str) {   /* & = &amp;  < = &lt;  > = &gt;  ' = &apos;    " = &quot;*/

    var found_matches = str.match(/[&<>"']g/);
    if (found_matches == null) {
        return str;
    } else {

        for (var i = 0, i < found_matches.length; i++) {
            switch (str[i]) {
            case '&':
                str.replace(/&/g, '&amp;');
                break;
            case '<':
                str.replace(/</g, '&lt;');
                break;
            case '>':
                str.replace(/>/g, '&gt;');
                break;
            case '"':
                str.replace(/"/g, '&#34;');
                break;
            case "'":
                str.replace(/'/g, '&apos;');
                break;

            }
        }
    }
    console.log(str);
    return str;
}

/* ------------------ */

function convert(str) {

        return String(str).replace(/&/g, '&amp;')
                            .replace(/</g,'&lt;')
                            .replace(/>/g,'&gt;')
                            .replace(/"/g,'&quot;')
                            .replace(/'/g,"&apos;");
                            
}


/*  ---------------------------------------------   */


/* Working Code for Spinal Tap*/
function spinalCase(str) {
   var space = /[_\s]/g,
       camel_check = /([A-Z]{1}[a-z]{1})/g,
       display = '',
       str_array = str.split(''),
       indexes = [],
       counter = 0,
       matchArray;
  // test argument string to see if there are spaces/underscores
  if (space.test(str)) {
     // if string has spaces, run this code
     str = str.replace(space, '-').toLowerCase();
     return str;
  }else{
    //code to split string up, add '-', join, and lowercase
    while((matchArray = camel_check.exec(str)) != null){
        indexes.push(matchArray.index);
    }

    for(var i = 0; i<indexes.length; i++){
    str_array.splice(indexes[i]+counter, 0, '-');
    counter++;
    }
    str_array = str_array.join('').toLowerCase();
    return str_array;
  }
  
}

spinalCase('This Is Spinal Tap');
/*----------End of Spinal Tap--------------*/
