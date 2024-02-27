import { useState } from "react"
import QRCode from "react-qr-code";
import "./style.css"

const QrCodeGenerator = () => {
    const [qrcode,setQrcode] = useState('');
    const [input,setInput] = useState("");
    function handleGeneration(){
        setQrcode(input);
    }
  return (
    <div className="codes">
        <h1>QR Code Generator</h1>
        <div>
            <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter your text" />
            <button onClick={handleGeneration}>Generate</button>
        </div>
        <QRCode id="qr-code-value" value={qrcode} size={400} />
    </div>
  )
}

export default QrCodeGenerator