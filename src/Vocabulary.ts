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

    Session: `${v}Session`,
    sessionActivity: `${v}sessionActivity`,
    sessionLocation: `${v}sessionLocation`,
    sessionTime: `${v}sessionTime`,

    Time: `${v}Time`,
    timeSession: `${v}timeSession`,
} as const

const t = "http://www.w3.org/2006/time#"
export const TIME = {
    hasBeginning: `${t}hasBeginning `,
    hasEnd: `${t}hasEnd `,
    dayOfWeek: `${t}dayOfWeek `,
    hour: `${t}hour `,
    minute: `${t}minute `,
    second: `${t}second `,
    inDateTime: `${t}inDateTime `,
} as const

const r = "http://www.w3.org/2000/01/rdf-schema#"
export const RDFS = {
    label: `${r}label `,
} as const
