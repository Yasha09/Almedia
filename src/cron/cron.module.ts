import {Module} from "@nestjs/common";
import {OfferModule} from "../offers/offer.module";
import {CronService} from "./cron.service";

@Module({
    imports: [OfferModule],
    providers: [CronService],
})
export class CronModule {
}