import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login")
  }, [])
  return (
    <>
      <div className={`relative h-[100vh] w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover`}>
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <img src="/images/logo.png" className="h-12" />
          </nav>
        </div>
      </div>
    </>
  )
}