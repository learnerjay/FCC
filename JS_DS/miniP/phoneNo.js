/*
Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/
Solution
function telephoneCheck(str) { 
  var re = /^(1?\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return re.test(str);
}

telephoneCheck("2 (757) 622-7382");

/*
var re = /^(1\s?)?[\-\s]?\(?[0-9]{3}\)?[\-\s]?[0-9]{3}?[\-\s]?[0-9]{4}$/; 
Giving 3 false case all positive covered with brackets covered

var re = /^(1\s?)?[\-\s]?[0-9]{3}?[\-\s]?[0-9]{3}?[\-\s]?[0-9]{4}$/;
3 positive sceanrio left with braces only condition left to handle
*/