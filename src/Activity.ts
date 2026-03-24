import { LiteralAs, LiteralFrom, TermAs, TermFrom, TermWrapper } from "@rdfjs/wrapper"
import { VOLUNTEERING } from "./Vocabulary.js"
import { Organisation } from "./Organisation.js"
import { Role } from "./Role.js"
import { Session } from "./Session.js"

export class Activity extends TermWrapper {
    get title(): string {
        return this.singular(VOLUNTEERING.organisationTitle, LiteralAs.string)
    }

    set title(value: string) {
        this.overwrite(VOLUNTEERING.organisationTitle, value, LiteralFrom.string)
    }

    get description(): string {
        return this.singular(VOLUNTEERING.activityDescription, LiteralAs.string)
    }

    set description(value: string) {
        this.overwrite(VOLUNTEERING.activityDescription, value, LiteralFrom.string)
    }

    get requiresEmergencyParticipation(): boolean {
        return this.singular(VOLUNTEERING.activityRequiresEmergencyParticipation, LiteralAs.boolean)
    }

    set requiresEmergencyParticipation(value: boolean) {
        this.overwrite(VOLUNTEERING.activityRequiresEmergencyParticipation, value, LiteralFrom.boolean)
    }

    get image(): URL {
        return this.singular(VOLUNTEERING.activityImage, LiteralAs.url)
    }

    set image(value: URL) {
        this.overwrite(VOLUNTEERING.activityImage, value, LiteralFrom.anyUriUrl)
    }

    get organisation(): Organisation {
        return this.singular(VOLUNTEERING.activityOrganisation, TermAs.instance(Organisation))
    }

    set organisation(value: Organisation) {
        this.overwrite(VOLUNTEERING.activityOrganisation, value, TermFrom.instance)
    }

    get role(): Set<Role> {
        return this.objects(VOLUNTEERING.activityRole, TermAs.instance(Role), TermFrom.instance)
    }

    get session(): Set<Session> {
        return this.objects(VOLUNTEERING.activitySession, TermAs.instance(Session), TermFrom.instance)
    }
}
