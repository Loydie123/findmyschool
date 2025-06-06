import Image from 'next/image';

export default function AdminLoading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center min-h-screen">
      <div className="relative animate-pulse">
        <Image
          src="/images/logos.png"
          alt="FindMySchool Logo"
          width={200}
          height={50}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 