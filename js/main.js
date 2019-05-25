const doOCR = () => {
  const image = document.getElementById('image');
  const result = document.getElementById('result');

  const { TesseractWorker } = Tesseract;
  const worker = new TesseractWorker({
    workerPath: chrome.runtime.getURL('js/worker.min.js'),
    langPath: chrome.runtime.getURL('traineddata'),
    corePath: chrome.runtime.getURL('js/tesseract-core.wasm.js'),
  });

  worker.recognize(image)
    .then(({ text }) => {
      result.innerHTML = `<p>OCR Result:</p><p>${text}</p>`;
    })
}

const startBtn = document.getElementById('start-btn');
startBtn.onclick = doOCR;
