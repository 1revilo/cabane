import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white relative">
      {/* Mobile hero background image */}
      <div className="hero-image-container h-full w-full block md:hidden">
        <Image
          src="/herohero.png"
          alt="Cabane Badger Ridge"
          fill
          className="object-contain object-center"
          priority
          quality={90}
        />
      </div>
      
      {/* Desktop hero background image */}
      <div className="hero-desktop-container h-full w-full hidden md:block">
        <Image
          src="/herodesktop.png"
          alt="Cabane Badger Ridge"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      
      {/* Logo - only visible on mobile */}
      <div className="logo-container relative block md:hidden">
        <Image
          src="/logocabane.png"
          alt="Cabane Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
