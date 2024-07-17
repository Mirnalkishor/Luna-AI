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
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => signIn('google')}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        <FcGoogle className="inline-block mr-2" /> Login with Google
      </button>
    </div>
  );
}
