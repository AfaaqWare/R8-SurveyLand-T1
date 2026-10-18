import React from "react";
import ImgCard from "@/shared/components/molecules/ImgCard";
import cardImage from "../../../assets/images/img-survey-preview.png";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { dataCard } from "@/shared/utils/data";

function SectionPopular() {
  return (
    <div>
 
 <div className="ds-container py-10">
      
      
      <div className="pb-10 text-2xl font-semibold">
        Popular <span className="ds-text-alt">Templates</span>
      </div>

      
      <div className="flex flex-col gap-16">
        {dataCard.map((section) => (
          
        
          <section key={section.id}>
            
          
            <Title size="md" className="ds-text-primary text-2xl font-extrabold mb-8">
              {section.title} <span className="ds-text-alt">{section.highlightWord}</span>
            </Title>

           
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
              {section.cards.map((card) => (
                <ImgCard
                  key={card.id}
                  title={card.title}
                  text={card.text}
                  btn={card.btn}
                  src={card.image}
                />
              ))}
            </div>

          </section>
        ))}
      </div>

    </div>
  


    </div>
  );
}

export default SectionPopular;
