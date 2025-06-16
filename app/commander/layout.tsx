import type { Metadata } from 'next'
import '../globals.css'
import HeaderIframe from '../components/HeaderIframe'
import Loader from '../components/Loader'
import { LanguageProvider } from '../contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Commander - iSapori',
  description: 'Commandez vos plats préférés chez iSapori - Ristorante Italiano',
}

export default function CommanderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Pacifico&family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&family=Amatic+SC:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <Loader />
          <HeaderIframe />
          {children}
          {/* Footer removido intencionalmente para páginas iframe */}
        </LanguageProvider>
      </body>
    </html>
  )
}
