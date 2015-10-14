/* WEATHER APP PSEUDO CODE
 *
 * Receive input data
 * Write function that does:
 *      Takes Temp in Celcius
 *      Multiplies the temp by 1.8 and adds 32
 *      (T(°F) = T(°C) × 1.8 + 32)
 * Create temperature variable for our new data and place it on the page
 *
 * Temperature variable
 * Use conditionals if/else to change background of page
*/

// Button click event to get data
$('button').on('click', americanize);

// Function to Americanize the Celcius value
function americanize(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Saves input into a variable
    var number = $('input').val();

    // Run convertTemp function
    convertTemp(number);
}

// Function to convert our Temperature
function convertTemp(num) {
    var newTemp = num * 1.8 + 32;
    console.log(newTemp);
    updateHtmlTemp(newTemp);
}

// Function update our HTML
function updateHtmlTemp(num) {
    $('.tempFahrenheit').html(num);
    $('input').val('');
}

function updateHtmlTemp(num){
    $('.tempFahrenheit').html(num);
    $('input').val('');
    console.log(num);
if(num > 90) {
    $('body').css('background', 'red');
}
if(num < 90 && num>40) {
    $('body').css('background', 'green')
}
else {
    $('body').css('background', 'blue')
}
}