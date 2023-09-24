function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable")
  const tr = document.createElement("tr")
	tr.innerHTML = `<tr><td>New Cell1</td> 
					<td>New Cell2</td></tr> `
	 table.insertBefore(tr, table.firstChild);
  
}
