import {
    LiteralAs,
    LiteralFrom,
    RequiredAs,
    RequiredFrom,
    SetFrom,
    TermAs,
    TermFrom,
    TermWrapper
} from "@rdfjs/wrapper"
import { VOLUNTEERING } from "./Vocabulary.js"
import { Organisation } from "./Organisation.js"
import { Role } from "./Role.js"
import { Session } from "./Session.js"

export class Activity extends TermWrapper {
    get title(): string {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.organisationTitle, LiteralAs.string)
    }

    set title(value: string) {
        RequiredAs.object(this, VOLUNTEERING.organisationTitle, value, LiteralFrom.string)
    }

    get description(): string {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.activityDescription, LiteralAs.string)
    }

    set description(value: string) {
        RequiredAs.object(this, VOLUNTEERING.activityDescription, value, LiteralFrom.string)
    }

    get requiresEmergencyParticipation(): boolean {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.activityRequiresEmergencyParticipation, LiteralAs.boolean)
    }

    set requiresEmergencyParticipation(value: boolean) {
        RequiredAs.object(this, VOLUNTEERING.activityRequiresEmergencyParticipation, value, LiteralFrom.boolean)
    }

    get image(): URL {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.activityImage, LiteralAs.url)
    }

    set image(value: URL) {
        RequiredAs.object(this, VOLUNTEERING.activityImage, value, LiteralFrom.anyUriUrl)
    }

    get organisation(): Organisation {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.activityOrganisation, TermAs.instance(Organisation))
    }

    set organisation(value: Organisation) {
        RequiredAs.object(this, VOLUNTEERING.activityOrganisation, value, TermFrom.instance)
    }

    get role(): Set<Role> {
        return SetFrom.subjectPredicate(this, VOLUNTEERING.activityRole, TermAs.instance(Role), TermFrom.instance)
    }

    get session(): Set<Session> {
        return SetFrom.subjectPredicate(this, VOLUNTEERING.activitySession, TermAs.instance(Session), TermFrom.instance)
    }
}
