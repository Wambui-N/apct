"use client"; // This component will be a client component

import { usePathname } from "next/navigation";

const CanonicalLink = () => {
  const pathname = usePathname();
  const canonicalURL = `https://yourdomain.com${pathname}`;

  return <link rel="canonical" href={canonicalURL} />;
};

export default CanonicalLink; 