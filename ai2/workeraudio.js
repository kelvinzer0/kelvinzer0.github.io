self.onmessage = function(event) {
  const responseData = event.data;

  // Send the data to the server using fetch
  fetch("https://criminalpolisheddebugmonitor--kelvin-yuliyuli.repl.co", {
    method: "POST",
    headers: {
      "Content-Type": "text/event-stream"
    },
    body: JSON.stringify(responseData)
  })
  .then(response => response.arrayBuffer())
  .then(audioData => {
    // Send the audio data back to the main thread
    self.postMessage(audioData);
  })
  .catch(error => {
    console.error("Error fetching audio data:", error);
  });
};
