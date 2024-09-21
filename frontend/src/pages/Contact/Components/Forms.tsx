'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { AlertCircle, Send, MessageCircle } from 'lucide-react'

export default function Forms() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const sendEmail = async (name: string, email: string, message: string) => {
    
    const response = await fetch('http://localhost:5000/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { name, email, message } }), // Ajuste aqui
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar email')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await sendEmail(name, email, message)
      setSubmitStatus('success')
      // Reset form
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappLink = `https://wa.me/12997184796?text=${encodeURIComponent('Olá! Tudo bem?')}`

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Entre em contato</CardTitle>
          <CardDescription>Preencha o formulário abaixo para entrar em contato conosco.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar email'}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
          {submitStatus === 'success' && (
            <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md text-sm">
              Sua mensagem foi enviada com sucesso!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md text-sm flex items-center">
              <AlertCircle className="mr-2 h-4 w-4" />
              Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Entre em contato via WhatsApp
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}