import Image from "next/image";
import Link from "next/link";

export default function Page404() {
    return (
        <>
            <div className={`relative h-[100vh] w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover`}>
                <div className="bg-black w-full h-full lg:bg-opacity-50 overflow-hidden">
                    <div className="flex flex-col items-center justify-center h-screen">
                        <Link href="/">
                            <Image src="/images/logo.png" alt="Logo" width={178} height={48} className="h-12 mb-8" />
                        </Link>
                        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                        <p className="text-white">Sorry, the page you're looking for could not be found.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
