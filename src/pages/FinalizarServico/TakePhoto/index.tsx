import React, { useRef } from "react";
import { ImageCapture } from "image-capture";
import "./_styles.scss";

const CaptureImg = (refVideo, cb) => {
  // let mediaStream = null;
  let imageCapture = null as typeof ImageCapture;

  const gotStream = (stream) => {
    // mediaStream = stream;
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
        alert(error);
      });
  };

  const OnTakePhoto = () => {
    if (!imageCapture) return null;

    imageCapture
      .takePhoto()
      .then(cb)
      .catch(function (error) {
        alert(error);
      });
  };

  return {
    gotStream,
    mediadevicesInit,
    OnTakePhoto,
  };
};

const TakePhoto = ({ cb }) => {
  const refVideo = useRef(null);
  let InstanceTakePhoto;

  React.useEffect(() => {
    InstanceTakePhoto = CaptureImg(refVideo.current, cb);
    InstanceTakePhoto.mediadevicesInit();
  }, []);

  return (
    <div className="frame-video">
      <video autoPlay={true} playsInline ref={refVideo} />
      <button
        className="btn-take-photo"
        onClick={() => InstanceTakePhoto.OnTakePhoto()}
      />
    </div>
  );
};

export default TakePhoto;
