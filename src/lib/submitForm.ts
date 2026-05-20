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
  const res = await fetch("/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(body?.error || "Submission failed");
  }
}
