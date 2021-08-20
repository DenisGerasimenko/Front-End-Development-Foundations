function myFunction() {
   const message = document.getElementById("p01");
   message.innerHTML = "";
   let x = document.getElementById("demo").value;
   try {
       if (x === "") throw 'is empty';
       if (x !== '100') throw "You have not entered the number 100";
   } catch (err) {
       message.innerHTML = "Error: " + err + ".";
   } finally {
       document.getElementById("demo").value = "";
   }
}