const video = document.getElementById('video')
var canvas = document.getElementById('canvas');
var loadAllFace;
var imgDetails = [];
var name;
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
video.addEventListener('play', () => {
    if(imgDetails.length>1) {
        var context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width,canvas.height);
    }
    canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height}
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    loadAllFace = loggedInUser.FaceDetails;
    name = loggedInUser.Name;
    faceWithName = [{name:name,descriptors: loadAllFace}];
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video,
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
    console.log(data);
    const img = await faceapi.fetchImage(data)
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
    data = detections.descriptor;
}