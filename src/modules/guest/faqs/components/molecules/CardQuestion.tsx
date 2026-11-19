// // modules/guest/faqs/components/molecules/CardQuestion.tsx
// import React from "react";
// import Text from "@/shared/components/atoms/Text";
// import Title from "@/shared/components/atoms/Title";
// import { Card } from "@/shared/components/atoms/Card";

// interface QuestionCardProps {
//   question: string;
//   answer: string;
// }

// export default function CardQuestion({ question, answer }: QuestionCardProps) {
//   return (
//     <Card className="mb-4 border-[var(--border-color)]">

//       <div className="p-6 md:p-8">
//         {/* <h3 className="text-[var(--color-primary)] font-semibold text-lg md:text-xl mb-3">
//           {question}
//         </h3> */}

//            <Title 
//             size="lg" 
//             variant="alt" 
//             className="mb-4 text-[var(--color-primary)]"
//           >
//                {question}
//           </Title>
        
//         <Text size="sm" variant="secondary" className="leading-relaxed whitespace-pre-line">
//           {answer}
//         </Text>
//       </div>
//     </Card>
//   );
// }


// 

// "use client";

// import React, { useState } from "react";
// import Text from "@/shared/components/atoms/Text";
// import Title from "@/shared/components/atoms/Title";
// import { Card } from "@/shared/components/atoms/Card";
// import { ChevronDown ,ChevronUp } from "@/assets/icons/icons";

// interface QuestionCardProps {
//   question: string;
//   answer: string;
// }

// export default function CardQuestion({ question, answer }: QuestionCardProps) {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Card className="mb-4 border-[var(--border-color)] overflow-hidden">
      
  
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex items-center justify-between p-4 md:p-8 text-left focus:outline-none"
//       >
        
        
//               <Title 
//             size="md" 
//             variant="alt" 
//             className=" text-[var(--color-primary)]"
//           >
//                {question}
//           </Title>
    
//         {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//       </button>

  
//       {isOpen && (
//         <div className="px-6 pb-2 md:px-8 md:pb-8">
//           <Text size="sm" variant="secondary" className="leading-relaxed whitespace-pre-line">
//             {answer}
//           </Text>
//         </div>
//       )}
      
//     </Card>
//   );
// }

"use client";

import React, { useState } from "react";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { Card } from "@/shared/components/atoms/Card";
import { ChevronDown, ChevronUp } from "@/assets/icons/icons";

interface QuestionCardProps {
  question: string;
  answer: string;
}

export default function CardQuestion({ question, answer }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
 
    <Card className="mb-4 border-[var(--border-color)] overflow-hidden !py-0">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
       
        className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none cursor-pointer"
      >
        <Title 
          size="md" 
          variant="alt" 
          className="text-[var(--color-primary)]"
        >
          {question}
        </Title>
    
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
      
        <div className="px-4 pb-4 md:px-5 md:pb-5">
          <Text size="sm" variant="secondary" className="leading-relaxed whitespace-pre-line">
            {answer}
          </Text>
        </div>
      )}
      
    </Card>
  );
}