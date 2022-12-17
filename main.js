https://teachablemachine.withgoogle.com/models/kAu-0noum/

function sstartClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true })
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kAu-0noum/model.json", modelReady)
}

function modelReady() {
  classifier.classify(gotResults);

}

function gotResults(error, results) {
  if (error) {
    console.log(error)
  }
  else {
    console.log(results)

    document.getElementById("result_label").innerHTML = "i can hear - " +
      results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy - " +
      (results[0].confidence * 100).toFixed(2) + "%"
  }
}
