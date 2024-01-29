// Copy Electric Esto RG Table
function CopyElecEstoRGTable() {
  var table = document.getElementById("elec_esto_rg");
  var button = document.getElementById('btn_cpy_elec_esto_rg');

  // Initialize an array to store column 2 values
  var cells = table.querySelectorAll("td:nth-child(2)"); // Select all cells in the second column of the table
  var values = Array.from(cells).map(cell => cell.textContent); // Extract the text content of each cell in the second column
  var copyText = values.join("\n"); // Join the values with newline characters to create a string


  if (copyText !== "") {
    navigator.clipboard.writeText(copyText); // Copy the string to the Clipboard using the Clipboard API
    button.innerText = 'Copied';
    setTimeout(() => {
      button.innerText = "Copy Value";
    }, 2000);
  } else {
    alert("No values to copy"); // Display an alert if there are no values to copy
  }
}

// Copy Electric Esto NY Table
function CopyElecEstoNYTable() {
  var table = document.getElementById("elec_esto_nysec");
  var button = document.getElementById('btn_cpy_elec_esto_ny');

  // Initialize an array to store column 2 values
  var cells = table.querySelectorAll("td:nth-child(2)"); // Select all cells in the second column of the table
  var values = Array.from(cells).map(cell => cell.textContent); // Extract the text content of each cell in the second column
  var copyText = values.join("\n"); // Join the values with newline characters to create a string


  if (copyText !== "") {
    navigator.clipboard.writeText(copyText); // Copy the string to the Clipboard using the Clipboard API
    button.innerText = 'Copied';
    setTimeout(() => {
      button.innerText = "Copy Value";
    }, 2000);
  } else {
    alert("No values to copy"); // Display an alert if there are no values to copy
  }
}



// Copy GMRP Esto RG Table
function CopyGmrpEstoRGTable() {
  var table = document.getElementById("gmrp_esto_rg");
  var button = document.getElementById('btn_cpy_gmrp_esto_rg');

  // Initialize an array to store column 2 values
  var cells = table.querySelectorAll("td:nth-child(2)"); // Select all cells in the second column of the table
  var values = Array.from(cells).map(cell => cell.textContent); // Extract the text content of each cell in the second column
  var copyText = values.join("\n"); // Join the values with newline characters to create a string


  if (copyText !== "") {
    navigator.clipboard.writeText(copyText); // Copy the string to the Clipboard using the Clipboard API
    button.innerText = 'Copied';
    setTimeout(() => {
      button.innerText = "Copy Value";
    }, 2000);
  } else {
    alert("No values to copy"); // Display an alert if there are no values to copy
  }
}



// Copy GMRP Esto NY Table
function CopyGmrpEstoNYTable() {
  var table = document.getElementById("gmrp_esto_nysec");
  var button = document.getElementById('btn_cpy_gmrp_esto_ny');

  // Initialize an array to store column 2 values
  var cells = table.querySelectorAll("td:nth-child(2)"); // Select all cells in the second column of the table
  var values = Array.from(cells).map(cell => cell.textContent); // Extract the text content of each cell in the second column
  var copyText = values.join("\n"); // Join the values with newline characters to create a string


  if (copyText !== "") {
    navigator.clipboard.writeText(copyText); // Copy the string to the Clipboard using the Clipboard API
    button.innerText = 'Copied';
    setTimeout(() => {
      button.innerText = "Copy Value";
    }, 2000);
  } else {
    alert("No values to copy"); // Display an alert if there are no values to copy
  }
}
//AVAILABLE 
// Copy Electric Available RG Table
function CopyElecAvaiRGTable() {
  var table = document.getElementById("elec_avai_rg");
  var button = document.getElementById('btn_cpy_elec_avai_rg');

  // Initialize an array to store column 2 values
  var cells = table.querySelectorAll("td:nth-child(2)"); // Select all cells in the second column of the table
  var values = Array.from(cells).map(cell => cell.textContent); // Extract the text content of each cell in the second column
  var copyText = values.join("\n"); // Join the values with newline characters to create a string


  if (copyText !== "") {
    navigator.clipboard.writeText(copyText); // Copy the string to the Clipboard using the Clipboard API
    button.innerText = 'Copied';
    setTimeout(() => {
      button.innerText = "Copy Value";
    }, 2000);
  } else {
    alert("No values to copy"); // Display an alert if there are no values to copy
  }
}

// Copy Electric Available NY Table
function CopyElecAvaiNYTable() {
  var table = document.getElementById("elec_avai_nysec");
  var button = document.getElementById('btn_cpy_elec_avai_ny');

  // Initialize an array to store column 2 values
  var cells = table.querySelectorAll("td:nth-child(2)"); // Select all cells in the second column of the table
  var values = Array.from(cells).map(cell => cell.textContent); // Extract the text content of each cell in the second column
  var copyText = values.join("\n"); // Join the values with newline characters to create a string


  if (copyText !== "") {
    navigator.clipboard.writeText(copyText); // Copy the string to the Clipboard using the Clipboard API
    button.innerText = 'Copied';
    setTimeout(() => {
      button.innerText = "Copy Value";
    }, 2000);
  } else {
    alert("No values to copy"); // Display an alert if there are no values to copy
  }
}



// Copy GMRP Available RG Table
function CopyGmrpAvaiRGTable() {
  var table = document.getElementById("gmrp_avai_rg");
  var button = document.getElementById('btn_cpy_gmrp_avai_rg');

  // Initialize an array to store column 2 values
  var cells = table.querySelectorAll("td:nth-child(2)"); // Select all cells in the second column of the table
  var values = Array.from(cells).map(cell => cell.textContent); // Extract the text content of each cell in the second column
  var copyText = values.join("\n"); // Join the values with newline characters to create a string


  if (copyText !== "") {
    navigator.clipboard.writeText(copyText); // Copy the string to the Clipboard using the Clipboard API
    button.innerText = 'Copied';
    setTimeout(() => {
      button.innerText = "Copy Value";
    }, 2000);
  } else {
    alert("No values to copy"); // Display an alert if there are no values to copy
  }
}



// Copy GMRP Available NY Table
function CopyGmrpAvaiNYTable() {
  var table = document.getElementById("gmrp_avai_nysec");
  var button = document.getElementById('btn_cpy_gmrp_avai_ny');

  // Initialize an array to store column 2 values
  var cells = table.querySelectorAll("td:nth-child(2)"); // Select all cells in the second column of the table
  var values = Array.from(cells).map(cell => cell.textContent); // Extract the text content of each cell in the second column
  var copyText = values.join("\n"); // Join the values with newline characters to create a string


  if (copyText !== "") {
    navigator.clipboard.writeText(copyText); // Copy the string to the Clipboard using the Clipboard API
    button.innerText = 'Copied';
    setTimeout(() => {
      button.innerText = "Copy Value";
    }, 2000);
  } else {
    alert("No values to copy"); // Display an alert if there are no values to copy
  }
}