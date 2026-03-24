import { DatasetWrapper } from "@rdfjs/wrapper"
import { Organisation } from "./Organisation.js"
import { Activity } from "./Activity.js"
import { Concept } from "./Concept.js"
import { SKOS, VOLUNTEERING } from "./Vocabulary.js"
import { Session } from "./Session.js"

export class VolunteeringDataset extends DatasetWrapper {
    get organisations(): Iterable<Organisation> {
        return this.instancesOf(VOLUNTEERING.Organisation, Organisation)
    }

    get activities(): Iterable<Activity> {
        return this.instancesOf(VOLUNTEERING.Activity, Activity)
    }

    get sessions(): Iterable<Session> {
        return this.instancesOf(VOLUNTEERING.Session, Session)
    }

    get concepts(): Iterable<Concept> {
        return this.instancesOf(SKOS.Concept, Concept)
    }
}
