function generate() {
    const prompt = document.getElementById("prompt").value;

    fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("output").innerText = data.result;
    });
}
