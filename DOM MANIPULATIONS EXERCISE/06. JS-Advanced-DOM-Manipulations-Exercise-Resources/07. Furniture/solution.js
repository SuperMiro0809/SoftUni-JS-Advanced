function solve() {
  const textarea = document.getElementsByTagName("textarea");
  const generateButton = document.getElementsByTagName("button")[0];
  const buyButton = document.getElementsByTagName("button")[1];
  const table = document.getElementsByClassName("table")[0];
  const tbody = table.querySelector("tbody");

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate() {
    const value = textarea[0].value;

    let json = JSON.parse(value);

    for(let item of json) {
      const newTr = document.createElement("tr");
      let html = `<td><img src="${item.img}"></td><td><p>${item.name}</p></td><td><p>${item.price}</p></td><td><p>${item.decFactor}</p></td><td><input type="checkbox"/></td>`
        newTr.innerHTML = html;
        tbody.appendChild(newTr);
    }
  }

  function buy() {
    let result = [...tbody.querySelectorAll('input')]
    .filter(i => i.checked)
    .map(i => i.parentNode.parentNode)
    .map(row => ({
      name: row.querySelectorAll("td p")[0].textContent,
      price: Number(row.querySelectorAll("td p")[1].textContent),
      decFactor: Number(row.querySelectorAll("td p")[2].textContent)
    }));

    let boughtFurniture = [];
    let totalPrice = 0;
    let averageDecorationFactor = 0;
    for(let item of result) {
      boughtFurniture.push(item.name);
      totalPrice += item.price;
      averageDecorationFactor += item.decFactor;
    }
    averageDecorationFactor /= result.length;

    const outputArea = textarea[1];

    if(boughtFurniture.length > 1) {
      outputArea.value = `Bought furniture: ${boughtFurniture.join(", ")}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${averageDecorationFactor}`;

  }else {
    outputArea.value = `Bought furniture: ${boughtFurniture}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${averageDecorationFactor}`;
    }
  }
  //TODO...
}


// [
//   {
//       "img":"https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
//       "name": "Sofa",
//       "price": "259",
//       "decFactor":"0.4"

//   }
// ]