import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group bg-white border-2 border-brand-dark rounded-2xl overflow-hidden shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.avatarUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-brand-dark">{member.name}</h3>
        <p className="text-sm font-medium text-brand-primary">{member.role}</p>
        <p className="text-xs text-brand-gray-400 mt-1 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}
