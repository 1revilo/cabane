import Image from "next/image";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Cabane Badger Ridge",
    "description": "Luxusní glamping chata v přírodě u Vysokého Mýta. Pronájem moderní dřevěné chaty pro dovolenou.",
    "image": "https://cabane.cz/herodesktop.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vysoké Mýto",
      "addressRegion": "Pardubice",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressLocality": "Vysoké Mýto",
      "addressRegion": "Pardubice"
    },
    "url": "https://cabane.cz",
    "priceRange": "$$",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Glamping"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Příroda"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="h-screen w-screen overflow-hidden bg-white relative">
        {/* SEO hidden text */}
        <div className="sr-only">
          <h1>Cabane Badger Ridge - Glamping chata Vysoké Mýto</h1>
          <p>
            Pronájem glamping chaty v přírodě u Vysokého Mýta. Luxusní ubytování v dřevěné chatě pro dovolenou. 
            Moderní chata k pronájmu v Pardubickém kraji. Glamping Vysoké Mýto, ubytování Pardubice, pronájem chaty Pardubice.
          </p>
          <p>
            Cabane Badger Ridge nabízí jedinečné ubytování v přírodě. Naše glamping chata u Vysokého Mýta 
            poskytuje komfortní dovolenou v moderním dřevěném stylu. Ideální pro rodiny, páry i skupiny přátel 
            hledající klid a pohodu v přírodě Pardubického kraje.
          </p>
        </div>

        {/* Desktop hero background image - visible on all screen sizes */}
        <div className="hero-desktop-container h-full w-full">
          <Image
            src="/herodesktop.png"
            alt="Cabane Badger Ridge - Glamping chata Vysoké Mýto, pronájem chaty Pardubice"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
      </div>
    </>
  );
}
