import React from 'react'
import Button from "../../../../../shared/components/atoms/Button";
import Title from "../../../../../shared/components/atoms/Title";
import Text  from "../../../../../shared/components/atoms/Text";
import Input from "../../../../../shared/components/atoms/Input";      
import TextArea from "../../../../../shared/components/atoms/TextArea";
import { User, ClipboardList } from "lucide-react";

export default function leftpanel() {
  return (
    <div>
        <div className="w-full space-y-6">
    
      <div className="bg-[var(--color-bg-card)] rounded-2xl p-6 border border-[var(--border-color)]">
        <div className="flex items-center gap-2 mb-4">
      
            <User size={20} className="ds-text-alt" />
          <Title size="base" className="font-bold">Your Information</Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Respondent Name"
            required
            defaultValue="Ahmed mohamed"
            size="md"
          />
          <Input
            label="Email Address"
            type="email"
            required
            defaultValue="ahmed@gmail.com"
            size="md"
          />
        </div>
      </div>

     
      <div className="bg-[var(--color-bg-card)] rounded-2xl p-6 border border-[var(--border-color)]">
        <div className="flex items-center gap-2 mb-4">
         
           <ClipboardList size={20} className="ds-text-alt" />
          <Title size="base" className="font-bold">Survey Answers</Title>
        </div>

        <div className="space-y-6">
       
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div className="flex-1">
              <Text size="sm" className="font-medium mb-2">
               {` What's your favorite language?`}
              </Text>
              <div className="flex flex-col gap-2">
                {["Javascript", "Python", "Go"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      className="accent-[var(--color-primary)]"
                    />
                    <Text size="sm" variant="secondary">{opt}</Text>
                  </label>
                ))}
              </div>
            </div>
          </div>

    
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div className="flex-1">
              <Text size="sm" className="font-medium mb-2">ما اسمك؟</Text>
              <TextArea rows={3} defaultValue="احمد محمد" />
              <Text size="xs" variant="secondary" className="text-right mt-1">
                22/500
              </Text>
            </div>
          </div>

       
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div className="flex-1">
              <Text size="sm" className="font-medium mb-2">ما رأيك في التدريب ؟</Text>
              <TextArea rows={3} defaultValue="ممتاز جدا" />
              <Text size="xs" variant="secondary" className="text-right mt-1">
                22/500
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
