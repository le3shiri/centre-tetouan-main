"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useTranslations } from '../hooks/useTranslations'
import SuccessModal from '../components/SuccessModal'

export default function InscriptionPage() {
  const { inscriptionTranslations: t, language } = useTranslations()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    idNumber: "",
    address: "",
    education: "",
    phone: "",
    email: "",
    activities: {
      gaming: false,
      art: false,
      coworking: false,
      recording: false,
      audioVisual: false,
      education: false,
    }
  })

  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        const successTitle = language === 'fr' 
          ? 'Inscription réussie!' 
          : language === 'ar' 
          ? 'تم التسجيل بنجاح!' 
          : '¡Inscripción exitosa!'
        
        const successMsg = language === 'fr'
          ? 'Votre inscription a été enregistrée avec succès. Nous vous contacterons bientôt.'
          : language === 'ar'
          ? 'تم تسجيل طلبك بنجاح. سنتواصل معك قريباً.'
          : 'Tu inscripción ha sido registrada con éxito. Te contactaremos pronto.'
        
        setSuccessMessage(successMsg)
        setShowSuccessModal(true)
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          birthDate: "",
          idNumber: "",
          address: "",
          education: "",
          phone: "",
          email: "",
          activities: {
            gaming: false,
            art: false,
            coworking: false,
            recording: false,
            audioVisual: false,
            education: false,
          }
        })
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      const errorMessage = language === 'fr' 
        ? 'Erreur lors de l\'inscription. Veuillez réessayer.' 
        : language === 'ar' 
        ? 'خطأ في التسجيل. يرجى المحاولة مرة أخرى.'
        : 'Error en la inscripción. Por favor, inténtalo de nuevo.'
      alert(errorMessage)
    }
  }

  const activities = [
    { id: "gaming", label: t.activities.gaming },
    { id: "art", label: t.activities.art },
    { id: "coworking", label: t.activities.coworking },
    { id: "recording", label: t.activities.recording },
    { id: "audioVisual", label: t.activities.audioVisual },
    { id: "education", label: t.activities.education },
  ]

  const getSuccessTitle = () => {
    return language === 'fr' 
      ? 'Inscription réussie!' 
      : language === 'ar' 
      ? 'تم التسجيل بنجاح!' 
      : '¡Inscripción exitosa!'
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">{t.title}</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder={t.firstName}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            <Input
              placeholder={t.lastName}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
            <Input
              type="date"
              placeholder={t.birthDate}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={formData.birthDate}
              onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
            />
            <Input
              placeholder={t.idNumber}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={formData.idNumber}
              onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
            />
            <Input
              placeholder={t.address}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 md:col-span-2"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
            <Input
              placeholder={t.education}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={formData.education}
              onChange={(e) => setFormData({...formData, education: e.target.value})}
            />
            <Input
              placeholder={t.phone}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <Input
              type="email"
              placeholder={t.email}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 md:col-span-2"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-medium">{t.activities.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={activity.id}
                    checked={formData.activities[activity.id as keyof typeof formData.activities]}
                    onCheckedChange={(checked) => {
                      setFormData({
                        ...formData,
                        activities: {
                          ...formData.activities,
                          [activity.id]: checked
                        }
                      })
                    }}
                  />
                  <label 
                    htmlFor={activity.id} 
                    className="text-white cursor-pointer"
                  >
                    {activity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 rounded-xl text-lg font-medium"
          >
            {t.submit}
          </Button>
        </form>
      </div>
      
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={getSuccessTitle()}
        message={successMessage}
        language={language}
      />
    </div>
  )
}