import {Injectable, Logger} from "@nestjs/common";
import {Cron, CronExpression} from "@nestjs/schedule";
import {OfferService} from "../offers/offer.service";
import {provider1, provider2} from "../database/offer.db";

const PROVIDER1 = "provider1";
const PROVIDER2 = "provider2";
const providers = [
    {
        provider: PROVIDER1,
        url: 'https://offer1.url'
    },
    {
        provider: PROVIDER2,
        url: 'https://offer2.url'
    },
]

@Injectable()
export class CronService {
    private readonly logger = new Logger(OfferService.name);

    constructor(private readonly offerService: OfferService) {
    }

    @Cron(CronExpression.EVERY_10_MINUTES)
    async handleCron():Promise<void> {
        this.logger.log('Fetching offers from providers')
        for (const provider of providers) {
            switch (provider.provider) {
                case PROVIDER1:
                    const payload1 = provider1;
                    await this.offerService.processOffer1Payload(payload1);
                    break;
                case PROVIDER2:
                    const payload2 = provider2;
                    await this.offerService.processOffer2Payload(payload2);
                    break;
                default:
                    this.logger.warn('No data for fetching offers from providers')
                    break;
            }
        }
    }
}