import React, { useState } from "react";
import {
  signIn,
  signUp,
  confirmSignUp,
  resetPassword,
  confirmResetPassword,
  type SignInOutput,
} from "aws-amplify/auth";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog"

type AuthStep =
  | "signIn"
  | "signUp"
  | "confirmSignUp"
  | "forgotPasswordRequest"
  | "forgotPasswordConfirm";

export function AuthForm() {
  const [step, setStep] = useState<AuthStep>("signUp");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    code: "", // used for confirm sign up code and reset code
  });
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Hide the error whenever the user clicks anywhere else.
  function handleContainerClick() {
    if (errorMessage) {
      setErrorMessage("");
    }
  }

  async function handleForgotPasswordRequest(e: React.FormEvent) {
    e.preventDefault();
    try {
      const output = await resetPassword({
        username: formData.email,
      });
      // If code has been sent:
      if (output.nextStep.resetPasswordStep === "CONFIRM_RESET_PASSWORD_WITH_CODE") {
        setStep("forgotPasswordConfirm");
      } else if (output.nextStep.resetPasswordStep === "DONE") {
        // No code needed
        setSuccessMessage("Password reset complete!");
        setStep("signIn");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      setErrorMessage(err instanceof Error ? err.message : String(err));
    }
  }

  async function handleForgotPasswordConfirm(e: React.FormEvent) {
    e.preventDefault();
    try {
      await confirmResetPassword({
        username: formData.email,
        confirmationCode: formData.code,
        newPassword: formData.password,
      });
      setSuccessMessage("Password reset successful! Please sign in with your new password.");
      setStep("signIn");
    } catch (err) {
      console.error("Reset password error:", err);
      setErrorMessage(err instanceof Error ? err.message : String(err));
    }
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const result: SignInOutput = await signIn({ username: email, password });
      if (result.isSignedIn) {
        // Sign in complete - maybe redirect or show a success message
        console.log("User is signed in!");
      } else {
        // Handle other auth steps like MFA if needed
      }
    } catch (err) {
      console.error("Sign in error:", err);
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: { email },
        },
      });
      setFormData((prev) => ({ ...prev, username: email }));
      setStep("confirmSignUp");
    } catch (err) {
      console.error("Sign up error:", err);
      setErrorMessage(err instanceof Error ? err.message : String(err));
    }
  }

  async function handleConfirmSignup(e: React.FormEvent) {
    e.preventDefault();
    try {
      await confirmSignUp({
        username: formData.username,
        confirmationCode: formData.code, // code from user's email
      });
      setSuccessMessage("Account confirmed! Please sign in.");
      setStep("signIn");
    } catch (err) {
      console.error("Confirm sign up error:", err);
      setErrorMessage(err instanceof Error ? err.message : String(err));
    }
  }

  return (
    <div
      className={cn("flex flex-col gap-6", "max-w-md mx-auto")}
      onClick={handleContainerClick}
    >
      <Card>
        <CardHeader className="text-center">
          {errorMessage ? (
            <Button variant="destructive" className="w-full">
              {errorMessage}
            </Button>
          ) : step === "signUp" ? (
            <>
              <CardTitle className="text-xl">Welcome to AFOL.com</CardTitle>
              <CardDescription>
                Register for early pre-launch access
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle className="text-xl">Welcome back</CardTitle>
              <CardDescription>
                Login with your Apple or Google account
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          {step === "signIn" && (
            <form onSubmit={handleSignIn}>
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Apple
                </Button>
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </div>
              <div className="my-4 after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-background text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="mt@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="grid gap-3 relative">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <button
                      type="button"
                      onClick={() => setStep("forgotPasswordRequest")}
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </button>
                  </div>
                  <Input
                    id="password"
                    type={showSignInPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    className="absolute right-3 inset-y-8 flex items-center p-2"
                    onClick={() => setShowSignInPassword(!showSignInPassword)}
                  >
                    {showSignInPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </Button>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <button type="button" onClick={() => setStep("signUp")} className="underline underline-offset-4">
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === "signUp" && (
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Apple
                </Button>
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </div>
              <div className="my-4 after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-background text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="grid gap-3 relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type={showSignUpPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    className="absolute right-3 inset-y-6 flex items-center p-2"
                    onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                  >
                    {showSignUpPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </Button>
                </div>
                <div className="grid gap-3 relative">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type={showSignUpConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    className="absolute right-3 inset-y-6 flex items-center p-2"
                    onClick={() => setShowSignUpConfirmPassword(!showSignUpConfirmPassword)}
                  >
                    {showSignUpConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </Button>
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setStep("signIn")} className="underline underline-offset-4">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === "confirmSignUp" && (
            <form onSubmit={handleConfirmSignup}>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="code">Confirmation Code</Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="123456"
                    required
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Confirm
                </Button>
              </div>
            </form>
          )}

          {step === "forgotPasswordRequest" && (
            <form onSubmit={handleForgotPasswordRequest}>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Enter your email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Reset Code
                </Button>
                <div className="text-center text-sm">
                  Remembered your password?{" "}
                  <button
                    type="button"
                    onClick={() => setStep("signIn")}
                    className="underline underline-offset-4"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === "forgotPasswordConfirm" && (
            <form onSubmit={handleForgotPasswordConfirm}>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="code">Reset Code</Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="123456"
                    required
                    value={formData.code}
                    onChange={(e) =>
                      setFormData({ ...formData, code: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-3 relative">
                  <Label htmlFor="password">New Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
      <div className="font-semibold text-sm text-muted-foreground text-center text-balance">
        By clicking continue, you agree to our
        <a href="/terms-of-service" className="no-underline hover:no-underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="no-underline hover:no-underline">
          Privacy Policy
        </a>.
      </div>
      {successMessage && (
        <Dialog
          open={!!successMessage}
          onOpenChange={() => setSuccessMessage(null)}
        >
          <DialogContent>
            <p>{successMessage}</p>
            <Button onClick={() => setSuccessMessage(null)}>Close</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
