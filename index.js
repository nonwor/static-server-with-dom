console.log("running js")

let x = document.getElementById('mainbody');
// console.log(x)

async function logJSONData() {
    const response = await fetch("http://localhost:3000/data");
    const jsonData = await response.json();
    // console.log(jsonData);

    for(let i of jsonData){
        console.log(i)
        let node = document.createElement('p')
        let textnode = document.createTextNode(`${i.name} food type: ${i.cuisine} cost: ${i.price}`)
        node.appendChild(textnode)
        x.appendChild(node)
    }
  }

  logJSONData()