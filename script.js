const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);



const getSum = () => {
	const table = document.getElementById("myTable");
	const price = table.querySelectorAll(".price");
	let total = 0;
	price.forEach(cell=>{
		const value = Number(cell.textContent.trim()) || 0;
		total+= value;
	});
  
};

const tr = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");

td1.textContent("Total Sum");
td2.textContent(total);

tr.appendChild(td1);
tr.appendChild(td2);

document.getElementById("myTable").appendChild(tr);

getSumBtn.addEventListener("click", getSum);

