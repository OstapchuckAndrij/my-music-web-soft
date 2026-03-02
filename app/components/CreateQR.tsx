import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export function CreateQR() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col gap-6 max-w-md mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold text-slate-800 text-center">
        Создать QR
      </h1>

      <div className="bg-white shadow-xl rounded-2xl p-6 border border-slate-100">
        <label className="block text-sm font-medium text-slate-600 mb-2">
          Ссылка или текст
        </label>
        <input
          type="text"
          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          placeholder="https://google.com"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {inputValue && (
        <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
          <div className="p-4 bg-white rounded-2xl shadow-md border-2 border-dashed border-slate-200">
            <QRCodeSVG value={inputValue} size={180} />
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg active:scale-95">
            Сохранить в сейф
          </button>
        </div>
      )}
    </div>
  );
}
