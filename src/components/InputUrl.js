export default function InputUrl({ url, setUrl, httpRgx }) {
  const handleUrl = (e) => setUrl(e.target.value);

  const handleValidateUrl = () => {
    if (url && !httpRgx.test(url)) {
      setUrl("http://" + url);
    }
  };

  return (
    <input
      id="url"
      name="url"
      type="text"
      value={url}
      onChange={handleUrl}
      onBlur={handleValidateUrl}
      placeholder="Enter your URL for Qr Code generation"
      required
    />
  );
}
