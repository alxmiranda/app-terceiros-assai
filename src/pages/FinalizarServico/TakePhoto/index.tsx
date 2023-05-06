import React, { useRef } from "react";
import { ImageCapture } from "image-capture";
import "./_styles.scss";

const CaptureImg = (refVideo, cb) => {
  let imageCapture = null as typeof ImageCapture;
  let videoDevice;

  const gotStream = (stream) => {
    videoDevice = stream.getVideoTracks()[0];
    refVideo.srcObject = stream;
    refVideo.classList.remove("hidden");
    imageCapture = new ImageCapture(videoDevice);
  };

  const mediadevicesInit = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
        // video: {
        //   facingMode: { exact: "environment" },
        // },
      })
      .then(gotStream)
      .catch((error) => {
        alert(error);
      });
  };

  const onTakePhoto = () => {
    if (!imageCapture) return null;

    imageCapture
      .takePhoto()
      .then(cb)
      .catch(function (error) {
        alert(error);
      });
  };

  const stopCamera = () => videoDevice.stop();

  return {
    gotStream,
    mediadevicesInit,
    onTakePhoto,
    stopCamera,
  };
};

const TakePhoto = ({ cb }) => {
  const refVideo = useRef(null);
  let InstanceTakePhoto;

  React.useEffect(() => {
    InstanceTakePhoto = CaptureImg(refVideo.current, cb);
    InstanceTakePhoto.mediadevicesInit();

    return () => InstanceTakePhoto.stopCamera();
  }, []);

  return (
    <div className="frame-video">
      <video autoPlay={true} playsInline ref={refVideo} />
      <button
        className="btn-take-photo"
        onClick={() => InstanceTakePhoto.onTakePhoto()}
      />
    </div>
  );
};

export default TakePhoto;
