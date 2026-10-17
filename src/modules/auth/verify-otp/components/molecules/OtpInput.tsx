'use client'
import React, { useRef, useState } from 'react'

type props = {length ?: number}

export default function OtpInput({length = 6} : props ) {
  
    const [value , setValue] = useState <string[]>(Array(length).fill(''));

    const refs = useRef<(HTMLInputElement | null) []>([]);

    const handleChange = (i:number , v:string) => {
       const digit = v.replace(/\D/g ,'').slice(-1);
       setValue((prev) => prev.map((x, idx) => (idx === i ? digit:x)));

       if(digit && i < length -1 ) refs.current[i + 1]?.focus();
    };
     const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[i] && i > 0) refs.current[i - 1]?.focus();
  };
   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;
    setValue(Array.from({ length }, (_, i) => pasted[i] ?? ""));
    refs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  return (
   <>
     <div className=" flex items-center justify-center gap-2 sm:gap-3" dir='ltr'>
        {value.map((val, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={val}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          type="text"
          inputMode="numeric"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          className="size-11 rounded-lg border border-transparent bg-white text-center text-xl font-medium text-gray-900 shadow-sm outline-none transition focus:border-[#00a9b1] focus:ring-2 focus:ring-[#00a9b1]/20 dark:bg-gray-800 dark:text-white sm:size-12"
        />
      ))}
       


     </div>
   
   </>
  )
}
