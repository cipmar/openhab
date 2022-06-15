(function(input) {
    var json = JSON.parse(input);
    // var button = items.getItem("Button1_Action");
    // console.log(button.state);
    
    return json.action ? json.action : ""; 
})(input)
