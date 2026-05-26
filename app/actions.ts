"use server";

export type ContactState = {
  success: boolean;
  error?: string;
} | null;

export async function submitContact(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const business = formData.get("business") as string;
  const budget = formData.get("budget") as string;
  const message = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const res = await fetch("https://formspree.io/f/mredyoqz", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name, email, business, budget, message }),
  });

  if (!res.ok) {
    return { success: false, error: "Something went wrong. Please try again or email us directly." };
  }

  return { success: true };
}
