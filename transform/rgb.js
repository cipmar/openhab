(function(input) {
    var rgb = input.split(",");
    var result = JSON.stringify({"color": {"r": rgb[0], "g": rgb[1], "b": rgb[2]}});
    return result;
})(input)
