import React from "react"
import Input from "@/Components/TextInput"
import Label from "@/Components/InputLabel";
import Button from "@/Components/Button";
import { Link, Head, useForm } from "@inertiajs/react";
import InputError from '@/Components/InputError';
import { FormEventHandler } from 'react';


const Register: React.FC = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        // console.log(data)
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };
    return (
        <>

            <Head title="Register" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label value="Name" />
                                    <Input type="text" name="name"
                                        placeholder="Your name..."
                                        isFocused={true}
                                        value={data.name}
                                        handleChange={(e) => setData('name', e.target.value)}
                                        required

                                    />
                                    <InputError message={errors.name} className="mt-2" />

                                </div>
                                <div>
                                    <Label value="Email Address" />
                                    <Input type="email" name="email"
                                        placeholder="Your Email Address"
                                        value={data.email}
                                        handleChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />

                                </div>
                                <div>
                                    <Label value="Password" />
                                    <Input type="password" name="password"
                                        placeholder="Your Password"
                                        value={data.password}
                                        handleChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2" />

                                </div>
                                <div>
                                    <Label value="Password Confirmation" />
                                    <Input type="password" name="Password_confirmation"
                                        placeholder="Your Password Confirmation"
                                        value={data.password_confirmation}
                                        handleChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />

                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button  processing={processing} type="submit" variant="primary">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route('login')}>
                                    <Button type="submit" variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Register