(function(i) {
    var result = JSON.stringify({"brightness": Math.round(i * 254 / 100)});
    return result;
})(input)
