"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  language: string
}

export default function SuccessModal({ isOpen, onClose, title, message, language }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <DialogTitle className="text-2xl font-bold text-green-600">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4">
          <p className="text-gray-600 text-lg">
            {message}
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={onClose}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
            >
              {language === 'fr' ? 'Fermer' : language === 'ar' ? 'إغلاق' : 'Cerrar'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
