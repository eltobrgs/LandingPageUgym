import Link from 'next/link';
import { Instagram, Youtube, Send } from 'lucide-react'; // Using Send as a generic for TikTok
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/ugymm_?igsh=MXB6eHNwZXd1YnljMQ==', icon: Instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/@projetougymm', icon: Youtube },
  { name: 'whatsapp', href: 'https://wa.link/eejnk2', icon: Send }, // Placeholder icon
];

export function SocialSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Conecte-se Conosco</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Siga o UGym nas redes sociais para dicas de treino, novidades do app e muita motivação!
        </p>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          {socialLinks.map((social) => (
            <Button 
              key={social.name} 
              variant="outline" 
              size="icon" 
              className="rounded-full w-14 h-14 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110_hover:shadow-lg" 
              asChild
              aria-label={`UGym no ${social.name}`}
            >
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="w-6 h-6" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
