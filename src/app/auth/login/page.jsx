"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { Label } from '@/components/ui/label';

function page() {
    const [inputType, setInputType] = useState('password')
    const toggleInputType = () => setInputType(prev => (prev === 'password' ? 'text' : 'password'));
    return (
        <div className="flex items-center justify-center mx-4 my-6 min-h-[calc(100vh-10rem)]">
            <Card className={`w-full max-w-md`}>
                <CardHeader className="space-y-2">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4`} />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="anujchaudhary3112@gmail.com"
                                    autoComplete="email"
                                    className={`pl-10 `}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4`} />
                                <Input
                                    id="password"
                                    type={inputType}
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    className={`pl-10`}
                                    required
                                />
                                <button className='absolute right-3 top-0 h-full' type='button' onClick={toggleInputType} aria-label={inputType === 'password' ? 'Show password' : 'Hide password'} title={inputType === 'password' ? 'Show password' : 'Hide password'}>
                                    {inputType === 'password' ? <Eye className="h-4 w-4 text-gray-500 dark:text-gray-400" /> : <EyeOff className="h-4 w-4 text-gray-500 dark:text-gray-400" />}
                                </button>
                            </div>
                        </div>
                        <Button className="w-full mt-2">
                            Log In
                        </Button>
                    </form>
                </CardContent>
                <hr className="border-border mb-4 mx-6" />
                <CardFooter>
                    <p className={`text-sm text-center w-full`}>
                        <span className='text-muted-foreground'>Don't have an account?</span>
                        <Link href="/auth/signup" className={`font-medium ml-1 hover:underline`}>
                            Sign up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default page