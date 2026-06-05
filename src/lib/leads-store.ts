// In-memory lead capture for the V1 frontend. Swap for Lovable Cloud in V2.
export type Lead = {
  type: "trial" | "contact";
  name: string;
  email: string;
  phone?: string;
  goal?: string;
  message?: string;
  createdAt: number;
};

const leads: Lead[] = [];

export function addLead(lead: Omit<Lead, "createdAt">) {
  leads.push({ ...lead, createdAt: Date.now() });
}

export function getLeads() {
  return [...leads];
}
