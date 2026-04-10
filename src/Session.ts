import { RequiredAs, RequiredFrom, SetFrom, TermAs, TermFrom, TermWrapper } from "@rdfjs/wrapper"
import { VOLUNTEERING } from "./Vocabulary.js"
import { Activity } from "./Activity.js"
import { Location } from "./Location.js"
import { Time } from "./Time.js"

export class Session extends TermWrapper {
    get activity(): Activity {
        return RequiredFrom.subjectPredicate(this, VOLUNTEERING.sessionActivity, TermAs.instance(Activity))
    }

    set activity(value: Activity) {
        RequiredAs.object(this, VOLUNTEERING.sessionActivity, value, TermFrom.instance)
    }

    get location(): Set<Location> {
        return SetFrom.subjectPredicate(this, VOLUNTEERING.sessionLocation, TermAs.instance(Location), TermFrom.instance)
    }

    get time(): Set<Time> {
        return SetFrom.subjectPredicate(this, VOLUNTEERING.sessionTime, TermAs.instance(Time), TermFrom.instance)
    }
}
