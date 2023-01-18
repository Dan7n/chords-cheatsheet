import styles from "./../../styles/auth/signin.module.scss"
import { TextInput } from '@mantine/core';
import type { TextInputProps } from '@mantine/core';
import { Cormorant_Garamond } from "@next/font/google"
import { signIn } from "next-auth/react"
import { Divider } from '@mantine/core';



const headerFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: "700",
})

const normalText = Cormorant_Garamond({
    subsets: ['latin'],
    weight: "300",
})

const handleSignInWithGoogle = async (): Promise<void> => {
    const url = new URL(window.location.href)
    const callbackUrl = url.searchParams.get("callbackUrl") || "http://localhost:3000/"
    await signIn("google", { callbackUrl })
}

const handleClick = (evt: React.MouseEvent) => {
    alert("TODO")
}

export default function SignInPage() {
    
    return (
        <main className={styles.header}>
            <section className={styles.imageContainer}></section>
            <section className={styles.siginBox}>
                <h1 className={headerFont.className}>Welcome to Chord Cheatsheet</h1>
                <p>Sign in to start creating songs and setlists</p>
                <SignInEmailPassword />
                <SignInButton handleClick={handleClick} />
                <Separator />
                <SignInWithGoogle handleClick={handleSignInWithGoogle} />
            </section>
        </main>
    )
}

const SignInEmailPassword = () => {
  return (
    <div className={styles.signinBoxEmailPassword}>
      <CustomInput placeholder="Your email address" label="Email" type="email" />
      {/* <CustomInput placeholder="The password you used to create the account" label="Password" type="password" /> */}
    </div>
  );
};

const SignInButton = ({handleClick}: {handleClick: (e: React.MouseEvent) => void}) => {
    return (
        <button 
            onClick={handleClick}
            className={`${styles.signInButton as string} bg-black  shadow-lg text-neutral-100 py-2 hover:bg-slate-700 transition-all ease-in-out active:scale-95`}
        >Sign In With Magic Link</button>
    )
}

const SignInWithGoogle = ({handleClick}: {handleClick: (e: React.MouseEvent) => Promise<void>}) => {
    return (
        <button 
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleClick}
            className={`${styles.signInButton as string} bg-[#4285F4] shadow-lg shadow-blue-500/50 text-neutral-100 py-2 hover:bg-blue-400 transition-all ease-in-out active:scale-95`}
        >Sign In With Google</button>
    )
}

const Separator = () => {
    return <div className={`${styles.divider as string} ${normalText.className}`}>Or</div>

}

const CustomInput = ({
  placeholder,
  label,
  type = ""
}: {
  placeholder: string;
  label: string;
  type?: TextInputProps["type"]
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      label={label}
      radius="xs"
      withAsterisk
      size="md"
      type={type}
      styles={() => ({
        input: {
          border: "1px solid black",
        },
        root: {
          padding: "0.2rem 0",
        },
      })}
    />
  );
};