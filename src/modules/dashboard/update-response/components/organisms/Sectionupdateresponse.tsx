import React from 'react'
import { ArrowLeft , Send } from "lucide-react";
import Leftpanel from "@/modules/dashboard/update-response/components/molecules/Leftpanel"
import Rightpanel from "@/modules/dashboard/update-response/components/molecules/Rightpanel"
import Button from "@/shared/components/atoms/Button";
import Title from "@/shared/components/atoms/Title";
import Text  from "@/shared/components/atoms/Text";


export default function Sectionupdateresponse() {
  return (
    <div>
   
      {/* <Leftpanel/>
      <Rightpanel/> */}


 <div className="ds-container ds-py-lg">
      
    
      <div className="flex items-center justify-between mb-[var(--space-xl)]">
        <div>
          <Title size="lg" className="font-bold">Update Response</Title>
          <Text size="sm" variant="secondary" className="mt-[var(--space-xs)]">
            Update the respondent information and answers below.
          </Text>
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft size={16} />
          Back to Response Details
          
        </Button>
      </div>

  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--space-xl)] items-start">
    
        <div className="lg:col-span-2">
          <Leftpanel />
        </div>

  
        <div className="lg:col-span-1">
          <Rightpanel />
        </div>
      </div>

     
      <div className="mt-[var(--space-xl)] flex items-center justify-between ds-bg-card ds-rounded-xl ds-p-md ds-border-sm">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="primary" size="sm" className="gap-2">
             <Send size={16} className="ds-text-white" />
          Update Response
        </Button>
      </div>
    </div>
    </div>
  )
}
