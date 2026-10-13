// Sign-in calls. The backend has no auth endpoints yet, so these are typed stubs.

/** Asks the backend to text a 6-digit sign-in code to the number. */
export async function requestOtp(phoneE164: string): Promise<void> {
  // TODO: call the backend's OTP request endpoint once it exists.
  void phoneE164
  await new Promise((resolve) => setTimeout(resolve, 600))
}

/** Starts Google sign-in. */
export async function signInWithGoogle(): Promise<void> {
  // TODO: start Google Identity Services once a client ID is configured.
}
