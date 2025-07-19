import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

export default function TeamMember({ name, position, description, imageUrl, linkedinUrl }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      {imageUrl && (
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
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