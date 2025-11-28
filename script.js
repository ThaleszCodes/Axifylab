function simulate() {
    let serviceEl = document.getElementById("service");
    let qty = Number(document.getElementById("quantity").value);

    if (!serviceEl.value) {
        alert("Selecione um serviço!");
        return;
    }
    if (!qty || qty <= 0) {
        alert("Digite uma quantidade válida!");
        return;
    }

    let price = Number(serviceEl.selectedOptions[0].getAttribute("data-price"));
    let min = Number(serviceEl.selectedOptions[0].getAttribute("data-min"));
    let serviceName = serviceEl.value;

    if (qty < min) {
        alert(`A quantidade mínima para este serviço é ${min}.`);
        return;
    }

    let total = (qty / 1000) * price;
    total = total.toFixed(2);

    document.getElementById("result").style.display = "block";
    document.getElementById("details").innerHTML = `
        <b>Serviço:</b> ${serviceName} <br>
        <b>Quantidade:</b> ${qty} <br>
        <b>Valor total:</b> R$ ${total}
    `;

    window.simData = { serviceName, qty, total };
}

function sendWhatsApp() {
    if (!window.simData) return;

    let phone = "5553991257648".replace(/\D/g, "");

    let msg = 
`📦 SIMULAÇÃO — Axify Social

🔹 Serviço: ${simData.serviceName}
🔹 Quantidade: ${simData.qty}
💰 Total: R$ ${simData.total}

Desejo realizar o pedido!`;

    let url = `https://wa.me/${phone}?text=` + encodeURIComponent(msg);
    window.open(url, "_blank");
      }
