import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function Login() {
  return (
    <div className="grid max-w-[1800px] mx-auto px-2 lg:grid-cols-2 mt-4">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

      <div className=" relative w-full rounded-md overflow-hidden lg:block">
        <Image
          src="https://i.postimg.cc/FR79QLSV/inspiration-login-forms-list-768x492.png"
          alt="Image"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105 rounded-md dark:brightness-[0.8] dark:grayscale-30 hover:dark:brightness-90"
        />
      </div>
    </div>
  );
}
