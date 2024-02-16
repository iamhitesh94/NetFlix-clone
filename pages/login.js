import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === "login" ? "register" : 'login');
    }, [])

    return (
        <div className={`relative h-[100vh] w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover`}>
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">{variant === "login" ? 'Sign in' : 'Create an account'}</h2>
                        <div className="flex flex-col gap-4">
                            {(variant !== "login") && (
                                <Input id={'name'} label={'Username'} onChange={(e) => { setName(e.target.value) }} value={name} type={'text'} autoComplete="Off" />
                            )}
                            <Input id={'email'} label={'Email'} onChange={(e) => { setEmail(e.target.value) }} value={email} type={'email'} autoComplete="Off" />
                            <Input id={'password'} label={'Password'} onChange={(e) => { setPassword(e.target.value) }} value={password} type={'password'} autoComplete="Off" />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{variant === "login" ? 'Login' : 'Sign up'}</button>
                        <p className="text-neutral-500 mt-12">
                            {(variant === "login") ? "New to Netflix? ": "Already have an account?"}
                            <span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}>{(variant !== "login") ? "Create an account.": "Login now."}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;