import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

function generateAvatar(name: string) {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    { bg: '#FF6B6B', text: '#FFFFFF' },
    { bg: '#4ECDC4', text: '#FFFFFF' },
    { bg: '#45B7D1', text: '#FFFFFF' },
    { bg: '#96CEB4', text: '#FFFFFF' },
    { bg: '#FECA57', text: '#FFFFFF' },
    { bg: '#FF9FF3', text: '#FFFFFF' },
    { bg: '#54A0FF', text: '#FFFFFF' },
    { bg: '#5F27CD', text: '#FFFFFF' },
  ];

  const colorIndex = initials.charCodeAt(0) % colors.length;
  const selectedColor = colors[colorIndex];

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="${selectedColor.bg}"/>
      <text x="50" y="50" 
            font-family="system-ui, -apple-system, sans-serif" 
            font-size="28" 
            font-weight="600" 
            fill="${selectedColor.text}" 
            text-anchor="middle" 
            dominant-baseline="central">
        ${initials}
      </text>
    </svg>
  `)}`;
}

export default function TeamMember({ name, position, description, imageUrl, linkedinUrl }: TeamMemberProps) {
  const avatarUrl = !imageUrl ? generateAvatar(name) : imageUrl;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={avatarUrl}
          alt={name}
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm font-medium text-blue-600 mb-2">{position}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      )}
    </div>
  );
} 