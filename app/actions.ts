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

  // TODO: wire up a real email provider (Resend, SendGrid, Postmark, etc.)
  console.log("New contact submission:", { name, email, business, budget, message });

  return { success: true };
}
