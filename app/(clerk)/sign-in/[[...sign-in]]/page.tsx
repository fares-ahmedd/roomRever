import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: "bg-btn-prim hover:bg-btn-prim text-btn-prim-text",
          card: "shadow-lg rounded-xl border-2 border-b-color bg-sec-background",
          headerTitle: "text-2xl font-bold text-center text-main-text",
          headerSubtitle: "text-main-text",
          formFieldLabel: "text-main-text",
          formFieldInput:
            "border-2 border-b-color rounded-md bg-main-background text-main-text",
          footerActionLink: "text-btn-prim hover:text-btn-prim",
          footerActionText: "text-main-text",
          socialButtonsBlockButton:
            "bg-white text-black hover:bg-gray-50 border border-b-color text-main-text ",
          socialButtonsProviderIcon: "w-5 h-5",
          socialButtonsBlockButtonText: "text-black ",

          dividerText: "text-main-text",
          formFieldInputShowPasswordButton: "text-main-text",
        },
        variables: {
          colorPrimary: "#04522f",
          colorBackground: "#f0f4f8",
          colorInputBackground: "#f0f4f8",
          colorInputText: "#2c3e50",
          colorTextSecondary: "#2c3e50",
        },
        layout: {
          socialButtonsVariant: "auto",
        },
      }}
    />
  );
}
