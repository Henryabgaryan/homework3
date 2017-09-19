const VolumeOfRectangular = function(length, height, widt) {

    return (length * height * widt);
};

const Value_of_e = function() {

    return (2.7182818284590452353602874);
};

const Full_Name = function(FirstName, LastName) {

    const fullname = FirstName + LastName
};

const fullName = function(FirstName, LastName) {

    return (FirstName + " " + LastName)
};
const String = function(str1, str2, str3) {

    if (str1.length > str2.length) {
        const longer = str1;
    } else
        const longer = str2;
    if (longer > str3.length) return longer;
    else return str3;
};
const compare = function(num1, num2) {
    if (num1 === num2) return 0;

    else if (num1 > num2) return 1;

    else if (num2 > num1) return -1;

};
const Truthy = function(a, b, c) {
    return a || b || c;
};