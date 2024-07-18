'use client';

import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.replace('/homepage');
    return null;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-yellow-300">
      <div className="bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl p-10">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-5xl font-bold md:text-8xl text-center">Welcome ✌️</h1>
            <p className="font-medium text-center text-3xl mt-4">
              Get started with the LunaAI!
            </p>
            <div className="flex flex-col items-center justify-center mt-10">
              <button onClick={() => signIn('google')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
                <FcGoogle className="mr-2" /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
