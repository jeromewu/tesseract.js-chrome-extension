const doOCR = async () => {
  const image = document.getElementById('image');
  const result = document.getElementById('result');

  const { createWorker } = Tesseract;
  const worker = createWorker({
    workerPath: 'https://unpkg.com/tesseract.js@v2.0.0/dist/worker.min.js',
    langPath: 'traineddata',
    corePath: 'https://unpkg.com/tesseract.js-core@v2.0.0/tesseract-core.wasm.js',
  });
  
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(image);
  console.log(text);
  result.innerHTML = `<p>OCR Result:</p><p>${text}</p>`;
  await worker.terminate();
}

const startBtn = document.getElementById('start-btn');
startBtn.onclick = doOCR;
