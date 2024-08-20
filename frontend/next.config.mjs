/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [], // Pozostaw puste, jeśli nie używasz zewnętrznych hostów
      unoptimized: true, // Dodaj to, jeśli chcesz używać lokalnych obrazów bez optymalizacji
    },
  };
  
  export default nextConfig;
  