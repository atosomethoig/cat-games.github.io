function saveToFile() {
  var textContent = document.getElementById('text').value;

  var blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });

  saveAs(blob, 'data.txt');
}
