const video = document.getElementById('video')
var canvas = document.getElementById('canvas');
var loadAllDetails = JSON.parse(localStorage.getItem('loggedInUser'));
var imgDetails = [];
var name;
var displaySize;
var faceMatcher;
var detections;
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./../JS/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./../JS/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./../JS/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('./../JS/models')
 ])
.then(startVideo)
function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
        )
}
video.addEventListener('play',async () => {
    if(imgDetails.length>1) {
        var context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width,canvas.height);
    }
    canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    displaySize = { width: video.width, height: video.height}
    faceapi.matchDimensions(canvas, displaySize)
    const labeledFaceDescriptors = await loadLabelImages();
    faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);
    setInterval(async () => {
        detections = await faceapi.detectAllFaces(video,
            new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
            const resizeDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
            faceapi.draw.drawDetections(canvas, resizeDetections)
        }, 100)
})
var data;
async function capture() {
    canvas = faceapi.createCanvasFromMedia(video)
    var context = canvas.getContext('2d');
    var data = canvas.toDataURL('image/jpg')
    const img = await faceapi.fetchImage(data)
    detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
    // const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));
    try{
        const resizedDetections = faceapi.resizeResults(detections,displaySize)
        const results = faceMatcher.findBestMatch(resizedDetections.descriptor);
        console.log(results);
        if(results.label == loadAllDetails.Name) {
            location.href = "paymentDone.html";
        } else {
            location.href = "paymentUndone.html"
        }
    } 
    catch (e) {
        location.href = "paymentUndone.html";
    }
}

function loadLabelImages() {
    const labels = [loadAllDetails.Name]
    return Promise.all(
      labels.map(async label => {
        const descriptions = []
        const img1 = await faceapi.fetchImage(loadAllDetails.FaceDetails1)
        detections = await faceapi.detectSingleFace(img1).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(detections.descriptor);
        const img2 = await faceapi.fetchImage(loadAllDetails.FaceDetails2)
        detections = await faceapi.detectSingleFace(img2).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(detections.descriptor);
        console.log(descriptions);
        return new faceapi.LabeledFaceDescriptors(label, descriptions)
      })
    )
  }