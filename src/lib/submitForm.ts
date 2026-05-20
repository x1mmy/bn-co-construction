export interface FormPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  projectType: string;
  suburb: string;
  message: string;
  submittedAt: string;
}

export async function submitForm(data: FormPayload): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK;
  if (!webhookUrl) throw new Error("Webhook URL not configured");

  await fetch(webhookUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
