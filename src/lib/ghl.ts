const GHL_API_BASE = process.env.GHL_API_BASE_URL || "https://services.leadconnectorhq.com";
const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_PIPELINE_ID = process.env.GHL_PIPELINE_ID!;
const GHL_STAGE_ID = process.env.GHL_STAGE_ID!;

const headers = {
  Authorization: `Bearer ${GHL_TOKEN}`,
  "Content-Type": "application/json",
  Accept: "application/json",
  Version: "2021-07-28",
};

export async function createContact(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  source: string;
}) {
  const res = await fetch(`${GHL_API_BASE}/contacts/`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      source: data.source,
      tags: ["website-lead"],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GHL create contact failed: ${res.status} ${err}`);
  }

  return res.json();
}

export async function createOpportunity(data: {
  contactId: string;
  name: string;
  service: string;
  message: string;
}) {
  const res = await fetch(`${GHL_API_BASE}/opportunities/`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      pipelineId: GHL_PIPELINE_ID,
      pipelineStageId: GHL_STAGE_ID,
      locationId: GHL_LOCATION_ID,
      contactId: data.contactId,
      name: data.name,
      status: "open",
      source: "Website Form",
      customFields: [
        { key: "service_requested", field_value: data.service },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GHL create opportunity failed: ${res.status} ${err}`);
  }

  return res.json();
}
