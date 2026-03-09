"use server";

import { createContact, createOpportunity } from "@/lib/ghl";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export async function submitEstimateForm(data: FormData) {
  try {
    // 1. Create contact in GHL
    const contactRes = await createContact({
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      source: "Website Form",
    });

    const contactId = contactRes.contact?.id;
    if (!contactId) {
      throw new Error("No contact ID returned from GHL");
    }

    // 2. Create opportunity in GHL pipeline
    await createOpportunity({
      contactId,
      name: `${data.firstName} ${data.lastName} - ${data.service}`,
      service: data.service,
      message: data.message,
    });

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
