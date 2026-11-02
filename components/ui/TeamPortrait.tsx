import Image from 'next/image';
import { UserRound } from 'lucide-react';

interface TeamPortraitProps {
  person: { name: string; photo?: string };
  priority?: boolean;
  className?: string;
}

export function TeamPortrait({ person, priority = false, className = '' }: TeamPortraitProps) {
  return (
    <div className={`relative h-[200px] w-40 shrink-0 overflow-hidden rounded-xl border border-indigo-500/25 bg-indigo-50 shadow-sm sm:h-[230px] sm:w-[184px] ${className}`}>
      {person.photo ? (
        <Image src={person.photo} alt={person.name} fill priority={priority} sizes="(max-width: 639px) 160px, 184px" className="object-cover object-top" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 px-3 text-center text-indigo-800" role="img" aria-label={`Photo not yet provided for ${person.name}`}>
          <UserRound className="h-14 w-14" strokeWidth={1.25} aria-hidden="true" />
          <span className="text-xs font-medium">Photo to be added</span>
        </div>
      )}
    </div>
  );
}
