

function validateForm() {
    let x = document.forms["MyForm"]["First-Names"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    alert(x);
  }