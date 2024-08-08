'use client'

import { LoginForm } from "@/features/LoginForm"
import { LoginFormLayout } from "@/shared/ui"

export default function LoginPage(){
    return (
        <LoginFormLayout>
            <LoginForm />
        </LoginFormLayout>
    )
}