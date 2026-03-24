const v = "https://ns.volunteeringdata.io/"
export const VOLUNTEERING = {
    Organisation: `${v}Organisation`,
    organisationName: `${v}organisationName`,
    organisationDescription: `${v}organisationDescription`,
    organisationWebsite: `${v}organisationWebsite`,
    organisationCharityNumber: `${v}organisationCharityNumber`,
    organisationImage: `${v}organisationImage`,
    organisationActivity: `${v}organisationActivity`,
    organisationCause: `${v}organisationCause`,

    Activity: `${v}Activity`,
    organisationTitle: `${v}organisationTitle`,
    activityDescription: `${v}activityDescription`,
    activityRequiresEmergencyParticipation: `${v}activityRequiresEmergencyParticipation`,
    activityImage: `${v}activityImage`,
    activityOrganisation: `${v}activityOrganisation`,
    activityRole: `${v}activityRole`,
    activitySession: `${v}activitySession`,
} as const
