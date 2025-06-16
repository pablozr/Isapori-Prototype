import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Schema de validação com Zod
const contactSchema = z.object({
  firstName: z.string().min(1, 'Le prénom est obligatoire'),
  lastName: z.string().min(1, 'Le nom est obligatoire'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Le sujet est obligatoire'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar dados com Zod
    const validatedData = contactSchema.parse(body)
    
    // Configurar transporter do Nodemailer
    // Usando Gmail SMTP (você pode configurar outro provedor)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Email do remetente
        pass: process.env.EMAIL_PASS, // Senha de app do Gmail
      },
    })

    // Mapear assuntos para francês
    const subjectMap: { [key: string]: string } = {
      reservation: 'Réservation',
      event: 'Événement Privé',
      catering: 'Traiteur',
      other: 'Autres'
    }

    const subjectText = subjectMap[validatedData.subject] || validatedData.subject

    // Configurar email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'restopizza.mt@gmail.com',
      subject: `[iSapori] Nouveau message de contact - ${subjectText}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #c9a961; margin: 0;">iSapori</h1>
            <p style="color: #666; margin: 5px 0;">Ristorante Italiano</p>
          </div>

          <h2 style="color: #333; border-bottom: 2px solid #c9a961; padding-bottom: 10px;">Nouveau Message de Contact</h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #c9a961; margin-top: 0;">Informations du Client</h3>
            <p><strong>Nom :</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p><strong>Email :</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Téléphone :</strong> ${validatedData.phone}</p>` : ''}
            <p><strong>Sujet :</strong> ${subjectText}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #c9a961; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${validatedData.message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #888; font-size: 12px;">
              Ce message a été envoyé via le formulaire de contact du site iSapori<br>
              Date : ${new Date().toLocaleString('fr-CH', { timeZone: 'Europe/Zurich' })}
            </p>
          </div>
        </div>
      `,
      // Email de resposta automática para o cliente
      replyTo: validatedData.email,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    // Email de confirmation pour le client
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: validatedData.email,
      subject: 'Confirmation - Votre message a été reçu | iSapori',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #c9a961; margin: 0;">iSapori</h1>
            <p style="color: #666; margin: 5px 0;">Ristorante Italiano</p>
          </div>

          <h2 style="color: #333;">Merci pour votre message !</h2>

          <p>Cher/Chère ${validatedData.firstName},</p>

          <p>Nous avons bien reçu votre message et nous vous recontacterons prochainement. Notre équipe répond généralement dans les 24 heures.</p>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #c9a961; margin-top: 0;">Résumé de votre message :</h3>
            <p><strong>Sujet :</strong> ${subjectText}</p>
            <p><strong>Message :</strong> ${validatedData.message}</p>
          </div>

          <div style="background-color: #c9a961; color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Informations de Contact</h3>
            <p><strong>Adresse :</strong> Rte de Colovrex 22, 1218 Le Grand-Saconnex</p>
            <p><strong>Téléphone :</strong> +41 770075413</p>
            <p><strong>Email :</strong> restopizza.mt@gmail.com</p>
          </div>

          <p>Cordialement,<br>L'équipe iSapori</p>
        </div>
      `,
    }

    // Enviar email de confirmação
    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      { message: 'Email envoyé avec succès !' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Données invalides', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
