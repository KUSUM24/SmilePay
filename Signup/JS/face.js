const video = document.getElementById('video')
var canvas;
var imgDetails = [];
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
    const img = await faceapi.fetchImage(data)
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
    console.log(detections.descriptor);
    data = detections.descriptor;
    i = parseInt(localStorage.getItem('imgNo'));
    localStorage.setItem(`img${i}`,JSON.stringify(detections.descriptor));
    i--;
    localStorage.setItem('imgNo',i.toString());
    location.reload();
    if(i<=0)
    window.location.href = 'finalSignup.html';
    else{
        window.alert('photos left:' + i.toString())
        startVideo();
    }
}
