// worker.js
self.onmessage = function (event) {
  const eventdata = JSON.parse(event.data);
  const timestampStart = Date.now();
  const message = eventdata.message;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://criminalpolisheddebugmonitor--kelvin-yuliyuli.repl.co/', true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.setRequestHeader('IP-Sec-ZerolabsImpact', eventdata.ipsec);
  xhr.onerror = function() {
    self.postMessage({ done: false});
  };
  xhr.onreadystatechange = function () {
    if (this.readyState === 3) {
      const newChunks = this.responseText.split('----END----').filter(Boolean);
      const newestChunk = newChunks.pop();
      const typing = newestChunk.replace("__99", newestChunk);

      // Check if the desired condition is met
      if (typing == "----DONE----") {
        self.postMessage({ done: true, typing });
      } else {
        self.postMessage({ done: false, typing });
      }
    }
  };

  const data = JSON.stringify({"name":"zeronlp", "message": message, "timestamp": timestampStart});
  xhr.send(data);
};

