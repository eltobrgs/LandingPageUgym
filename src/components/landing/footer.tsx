import Link from 'next/link';
import { UGymLogo } from '@/components/common/ugym-logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center">
          <div className="flex justify-center md:justify-start">
            <UGymLogo className="text-background" />
          </div>
          <nav className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link href="/terms-of-use" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </nav>
          <div className="text-center md:text-right">
            <p className="font-semibold">Entre em Contato:</p>
            <a href="mailto:projetougymm@gmail.com" className="hover:text-primary transition-colors">projetougymm@gmail.com</a>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center">
          <p>&copy; {currentYear} UGym. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
