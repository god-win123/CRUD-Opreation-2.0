var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Emp_id"] = document.getElementById("Employee id").value;
    formData["Emp_name"] = document.getElementById("Employee name").value;
    formData["Emp_num"] = document.getElementById("Employee number").value;
    formData["Emp_disc"] = document.getElementById("Employee Description").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("Employee_List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Emp_id;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Emp_name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Emp_num;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Emp_disc;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Employee id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Employee name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Employee number").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Employee Description").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Emp_id;
    selectedRow.cells[1].innerHTML = formData.Emp_name;
    selectedRow.cells[2].innerHTML = formData.Emp_num;
    selectedRow.cells[3].innerHTML = formData.Emp_disc;
    
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("Employee_List").deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Employee id").value = '';
    document.getElementById("Employee name").value = '';
    document.getElementById("Employee number").value = '';
    document.getElementById("Employee Description").value = '';
    selectedRow = null;
}