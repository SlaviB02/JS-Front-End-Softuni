function solve() {
  let text = document.getElementById("text").value;
  let type = document.getElementById("naming-convention").value;
  let result = "";
  text = text.toLowerCase();
  if (type === "Camel Case") {
    result = camelize(text);
  }
  else if (type == "Pascal Case") {
    result = text.replace(/\w+/g,
      function (w) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); });
    result = result.replace(/\s/g, '');
  }
  else {
    result = "Error!"
  }
  let final = document.getElementById("result");
  final.textContent = result;
  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
}

