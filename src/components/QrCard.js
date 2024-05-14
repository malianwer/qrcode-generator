import QrCode from "qrcode.react";

export default function QrCard({
  qrRef,
  url,
  bgColor,
  qrColor,
  customImg,
  noImg,
}) {
  let imgCustom = undefined;

  noImg
    ? (imgCustom = null)
    : customImg
    ? (imgCustom = customImg)
    : (imgCustom = "./logo-apple-icon192.png");

  return (
    <article className="card">
      <div className="qr-box" ref={qrRef}>
        <QrCode
          size={250}
          value={url ? url : "https://github.com/malianwer"}
          bgColor={bgColor}
          fgColor={qrColor}
          level="H"
          includeMargin
          imageSettings={{
            src: imgCustom,
            height: 45,
            width: 45,
            excavate: true,
          }}
        />
      </div>
      <h2 className="word-wrap">{url ? url : "malianwer.com"}</h2>
      <p>
        You can easily create your custom QR code by entering your website URL.
      </p>
    </article>
  );
}
