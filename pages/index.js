import useCurrentUser from "@/hooks/currentUser";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }

}

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <div className={`relative h-[100vh] w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover`}>
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <Image src="/images/logo.png" alt="Logo" width={178} height={48} className="h-12" />
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <p className="text-white">Login in as: {user?.name}</p>
              <p className="text-white">Login in email: {user?.email}</p>
              <button onClick={signOut} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"> Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
