import { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          {children}
        </div>
        <div className="hidden md:block md:w-1/2 relative rounded-[33px] overflow-hidden">
          <Image
            src="/ariana-login-image.png"
            alt="Graphic"
            layout="fill"
            objectFit="cover"
            className="rounded-[23px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
