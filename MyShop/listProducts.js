var fk = require("faker");

for (var i=0; i<10; i++) {
    console.log(fk.commerce.productName() + " - $" + fk.commerce.price());
}
