
var a =[ {
    name: "muneesh",
    location: { city: "jammu", pincode: 180001 }

}]

for( var i of a){
    for (var j in i){
        if ( typeof i[j] == "object"){
            for(var k in i[j]){
                if (k=="city")
                console.log(i[j][k])
            }
        }
    }
}






