import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

type UGymLogoProps = {
  className?: string;
};

export function UGymLogo({ className }: UGymLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 text-2xl font-extrabold text-primary ${className}`}>
      <Dumbbell className="h-7 w-7" />
      <span>UGym</span>
    </Link>
  );
}
