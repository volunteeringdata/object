import { TermAs, TermFrom, TermWrapper } from "@rdfjs/wrapper"
import { VOLUNTEERING } from "./Vocabulary.js"
import { Activity } from "./Activity.js"
import { Location } from "./Location.js"
import { Time } from "./Time.js"

export class Session extends TermWrapper {
    get activity(): Activity {
        return this.singular(VOLUNTEERING.sessionActivity, TermAs.instance(Activity))
    }

    set activity(value: Activity) {
        this.overwrite(VOLUNTEERING.sessionActivity, value, TermFrom.instance)
    }

    get location(): Set<Location> {
        return this.objects(VOLUNTEERING.sessionLocation, TermAs.instance(Location), TermFrom.instance)
    }

    get time(): Set<Time> {
        return this.objects(VOLUNTEERING.sessionTime, TermAs.instance(Time), TermFrom.instance)
    }
}
