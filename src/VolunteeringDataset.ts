import { DatasetWrapper } from "@rdfjs/wrapper"
import { Organisation } from "./Organisation.js"
import { Activity } from "./Activity.js"
import { Concept } from "./Concept.js"
import { SKOS, VOLUNTEERING } from "./Vocabulary.js"
import { Session } from "./Session.js"
import { Time } from "./Time.js"

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

    get times(): Iterable<Time> {
        return this.instancesOf(VOLUNTEERING.Time, Time)
    }

    get concepts(): Iterable<Concept> {
        return this.instancesOf(SKOS.Concept, Concept)
    }
}
