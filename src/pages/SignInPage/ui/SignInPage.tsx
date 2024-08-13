'use client'

import { SignInForm } from "@/features/SignInForm"
import { LoginFormLayout } from "@/shared/ui"

export default function SigninPage(){
    return (
        <LoginFormLayout>
            <SignInForm />
        </LoginFormLayout>
    )
}