import {Controller, Get} from "@nestjs/common";
import {OfferService} from "./offer.service";
import {provider1, provider2} from "../database/offer.db";

@Controller('offers')
export class OfferController {
    constructor(private readonly offerService: OfferService) {

    }

    @Get()
    async getOffers() {
        const res = await this.offerService.processOffer1Payload(provider1);
        const res2 = await this.offerService.processOffer2Payload(provider2);
        return {res,res2};
    }
}