import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login")
  },[])
  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix</h1>
    </>
  )
}
