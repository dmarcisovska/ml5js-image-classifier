const { ml5 } = window;
const classifier = ml5.imageClassifier("MobileNet", console.log);

const image = document.querySelector(".image");
let item = document.getElementById("item");
let confidence = document.getElementById("confidence");
let gallery = document.getElementById("gallery");

async function classifyImage() {
    const results = await classifier.classify(image);
    gallery.style.display = "block";
    item.innerText = "Item - " + results[0].label;
    confidence.innerText =  "Confidence Level - " + results[0].confidence.toFixed(2) * 100 + "%";
}

function handleUpload(files) {
    image.src = URL.createObjectURL(files[0]);
    setTimeout(classifyImage, 50);
}