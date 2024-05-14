import { useEffect, useState } from "react";
import InputUrl from "./InputUrl";

export default function FormQrCustom({ qrRef, url, setUrl, handleQrReset }) {
  const httpRgx = /^https?:\/\//;

  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (downloaded) {
      const msg = setTimeout(() => setDownloaded(false), 3500);
      return () => clearTimeout(msg);
    }
  }, [downloaded]);

  const downloadQrCode = (e) => {
    e.preventDefault();

    const qrCanvas = qrRef.current.querySelector("canvas"),
      qrImage = qrCanvas.toDataURL("image/png"),
      qrAnchor = document.createElement("a"),
      fileName = url.replace(httpRgx, "").trim();
    qrAnchor.href = qrImage;
    qrAnchor.download = fileName + "_QrCode.png";
    document.body.appendChild(qrAnchor);
    qrAnchor.click();
    document.body.removeChild(qrAnchor);

    handleQrReset();
    setDownloaded(true);
  };

  return (
    <div>
      <h3>Generate Your QR Code</h3>

      <InputUrl url={url} setUrl={setUrl} httpRgx={httpRgx} />

      <button onClick={downloadQrCode} type="submit">
        <span>Download now</span>
      </button>

      {downloaded && <p className="success-msg">QR Code Downloaded.</p>}
    </div>
  );
}
