import React from 'react'
import Button from "@/shared/components/atoms/Button";
import Title from "@/shared/components/atoms/Title";
import Text  from "@/shared/components/atoms/Text";
import { Info } from "lucide-react"; 


export default function Rightpanel() {
  return (
    <div>
      

        <div className="w-full space-y-6">
     
      <div className="bg-[var(--color-bg-card)] rounded-2xl p-6 border border-[var(--border-color)]">
        <div className="flex items-center gap-2 mb-4">
           <Info size={20} className="ds-text-alt" />
          <Title size="base" className="font-bold">Response Summary</Title>
        </div>

        <div className="space-y-4">
      
          <div>
            <Text size="xs" variant="secondary">Response ID</Text>
            <Text size="sm" className="font-mono break-all">
              6b2bfbff5498f9d2a6834e6
            </Text>
          </div>

     
          <div>
            <Text size="xs" variant="secondary">Survey ID</Text>
            <Text size="sm" className="font-mono break-all">
              6b2bfbff5498f9d2a6834e6
            </Text>
          </div>

     
          <div>
            <Text size="xs" variant="secondary">Submitted At</Text>
            <Text size="sm">14 Jul 2026 - 03:49 PM</Text>
          </div>

       
          <div>
            <Text size="xs" variant="secondary">Total Questions</Text>
            <Text size="sm">10</Text>
          </div>

        
          <div>
            <Text size="xs" variant="secondary">Answered</Text>
            <Text size="sm">10</Text>
          </div>

      
          <div>
            <Text size="xs" variant="secondary">Required</Text>
            <Text size="sm">10</Text>
          </div>

   
          <div>
            <Text size="xs" variant="secondary">Last Updated</Text>
            <Text size="sm">14 Jul 2026 - 03:49 PM</Text>
          </div>
        </div>
      </div>

  
      <div className="bg-[var(--color-primary-200)] rounded-xl p-4 flex gap-3">
            <Info size={20} className="ds-text-alt shrink-0 mt-1" />
        <div>
          <Text size="sm" className="font-bold">Note</Text>
          <Text size="xs" variant="secondary" className="mt-1">
            After updating, the response data will be permanently saved.
          </Text>
        </div>
      </div>

      
    </div>
    </div>
  )
}
