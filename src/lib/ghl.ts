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

// GHL contact custom field id for "What service are you interested in".
// This is the SAME field the Meta lead form populates and the "Lead notification"
// workflow reads ({{contact.what_service_are_you_interested_in}}), so website leads
// must write here too or the alert text shows a blank service.
const GHL_SERVICE_FIELD_ID = "dZECwMBp6X6UNl1B0q2m";
// "When are you looking to start?" — same field the Meta form + lead-alert use.
const GHL_TIMELINE_FIELD_ID = "9A5t7LBVpkbriKPYPOjQ";

export async function createContact(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  source: string;
  service?: string;
  timeline?: string;
}) {
  const customFields = [
    ...(data.service ? [{ id: GHL_SERVICE_FIELD_ID, field_value: data.service }] : []),
    ...(data.timeline ? [{ id: GHL_TIMELINE_FIELD_ID, field_value: data.timeline }] : []),
  ];
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
      ...(customFields.length ? { customFields } : {}),
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
