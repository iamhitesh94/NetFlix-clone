import Input from "@/components/Input";
import axios from "axios";
import Image from "next/image";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginErrorMsg, setLoginErrorMsg] = useState('')
    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === "login" ? "register" : 'login');
    }, [])

    const login = useCallback(async () => {
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
                callbackUrl: "/",
            })

            if (res.ok) {
                router.push("/");
            } else {
                // Show an error message or handle the failure case as needed
                setLoginErrorMsg("Login failed");
                setTimeout(() => {
                    setLoginErrorMsg("");
                }, 3000);
            }

        } catch (error) {
            console.log(error);
        }
    }, [email, password, setLoginErrorMsg, router])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })

            login();

        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login])



    return (
        <div className={`relative h-[100vh] w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover`}>
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src="/images/logo.png" alt="Logo" width={178} height={48} className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">{variant === "login" ? 'Sign in' : 'Create an account'}</h2>
                        <div className="">
                            {(loginErrorMsg && loginErrorMsg !== '') && (
                                <div className="error-message bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded relative text-center mb-2">
                                    <span className="block sm:inline">{loginErrorMsg}</span>
                                </div>
                            )}
                            <form method="post" action="">
                                <div className="flex flex-col gap-4">
                                    {(variant !== "login") && (
                                        <Input id={'name'} label={'Username'} onChange={(e) => { setName(e.target.value) }} value={name} type={'text'} autoComplete="off" />
                                    )}
                                    <Input id={'email'} label={'Email'} onChange={(e) => { setEmail(e.target.value) }} value={email} type={'email'} autoComplete="off" />
                                    <Input id={'password'} label={'Password'} onChange={(e) => { setPassword(e.target.value) }} value={password} type={'password'} autoComplete="off" />
                                </div>
                                <button type="button" onClick={(variant === "login") ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{variant === "login" ? 'Login' : 'Sign up'}</button>
                                <p className="text-neutral-500 mt-12">
                                    {(variant === "login") ? "New to Netflix? " : "Already have an account?"}
                                    <span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}>{(variant !== "login") ? "Create an account." : "Login now."}</span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;