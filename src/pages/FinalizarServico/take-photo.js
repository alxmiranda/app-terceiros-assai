import { ImageCapture } from "image-capture";

// var imageCapture;
// var mediaStream;

// var img = document.querySelector("img");
// var video = document.querySelector("video");

// export function initStream(refVideo) {

// }

// export const initStream = {
//   gotStream: (stream) => {
//     mediaStream = stream;
//     refVideo.srcObject = stream;
//     refVideo.classList.remove("hidden");
//     imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
//   },
//   mediadevicesInit: () => {
//     navigator.mediaDevices
//       .getUserMedia({
//         video: {
//           facingMode: { exact: "environment" },
//         },
//       })
//       .then(this.gotStream)
//       .catch((error) => {
//         console.log(error);
//       });
//   },
//   OnTakePhoto(refImg, refVideo) {
//     imageCapture
//       .takePhoto()
//       .then(function (blob) {
//         refVideo.classList.add("hidden");
//         img.classList.remove("hidden");
//         img.src = URL.createObjectURL(blob);
//       })
//       .catch(function (error) {
//         alert(error);
//       });
//   },
// };

const TakePhoto = (refVideo, refImg) => {
  let mediaStream = null;
  let imageCapture = null;

  const gotStream = (stream) => {
    mediaStream = stream;
    refVideo.srcObject = stream;
    refVideo.classList.remove("hidden");
    imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
  };

  const mediadevicesInit = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: { exact: "environment" },
        },
      })
      .then(gotStream)
      .catch((error) => {
        console.log(error);
      });
  };

  const OnTakePhoto = () => {
    imageCapture
      .takePhoto()
      .then(function (blob) {
        // refVideo.classList.add("hidden");
        refImg.classList.remove("hidden");
        refImg.src = URL.createObjectURL(blob);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return {
    gotStream,
    mediadevicesInit,
    OnTakePhoto
  }
};

// export default TakePhoto;
