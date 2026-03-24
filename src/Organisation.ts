import { LiteralAs, LiteralFrom, TermAs, TermFrom, TermWrapper } from "@rdfjs/wrapper"
import { VOLUNTEERING } from "./Vocabulary.js"
import { Activity } from "./Activity.js"
import { Concept } from "./Concept.js"

export class Organisation extends TermWrapper {
    get name(): string {
        return this.singular(VOLUNTEERING.organisationName, LiteralAs.string)
    }

    set name(value: string) {
        this.overwrite(VOLUNTEERING.organisationName, value, LiteralFrom.string)
    }

    get description(): string {
        return this.singular(VOLUNTEERING.organisationDescription, LiteralAs.string)
    }

    set description(value: string) {
        this.overwrite(VOLUNTEERING.organisationDescription, value, LiteralFrom.string)
    }

    get website(): URL {
        return this.singular(VOLUNTEERING.organisationWebsite, LiteralAs.url)
    }

    set website(value: URL) {
        this.overwrite(VOLUNTEERING.organisationWebsite, value, LiteralFrom.anyUriUrl)
    }

    get charityNumber(): string {
        return this.singular(VOLUNTEERING.organisationCharityNumber, LiteralAs.string)
    }

    set charityNumber(value: string) {
        this.overwrite(VOLUNTEERING.organisationCharityNumber, value, LiteralFrom.string)
    }

    get image(): URL {
        return this.singular(VOLUNTEERING.organisationImage, LiteralAs.url)
    }

    set image(value: URL) {
        this.overwrite(VOLUNTEERING.organisationImage, value, LiteralFrom.anyUriUrl)
    }

    get activity(): Set<Activity> {
        return this.objects(VOLUNTEERING.organisationActivity, TermAs.instance(Activity), TermFrom.instance)
    }

    get cause(): Set<Concept> {
        return this.objects(VOLUNTEERING.organisationCause, TermAs.instance(Concept), TermFrom.instance)
    }
}
