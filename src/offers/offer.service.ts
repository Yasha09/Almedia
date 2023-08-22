import {Injectable, Logger} from '@nestjs/common';
import {Repository} from "typeorm";
import {validateSync} from "class-validator";
import {InjectRepository} from "@nestjs/typeorm";
import {plainToClass} from "class-transformer";

import {OfferOneDto} from "./dto/offer-one.dto";
import {OfferTwoDto} from "./dto/offer-two.dto";
import {TransformerService} from "./common/utils/transform-offer.utils";
import {TProviderOneOffer} from "./common/types/provider-one.types";
import {TProviderTwoResponse} from "./common/types/provider-two.types";
import {Offer} from "./entity/offer.entity";


@Injectable()
export class OfferService {
    private readonly logger = new Logger(OfferService.name);

    constructor(
        @InjectRepository(Offer) private offerRepository: Repository<Offer>,
    ) {
    }


    async processOffer1Payload(payload: TProviderOneOffer): Promise<any> {
        const offers = payload.response.offers;
        const offerInstances = offers.map(offer => {
            try {
                const dto: OfferOneDto = plainToClass(OfferOneDto, offer);
                this.validateOfferDTOA(dto);

                const entity = TransformerService.transformOffer1ToEntity(dto);

                const isOfferExist = this.isOfferExist(entity.slug);
                if (isOfferExist) {
                    return false
                }
                return this.offerRepository.save(entity)

                // Save entity to DB
            } catch (err) {
                this.logger.error(`Failed to process offer with ID ${offer.offer_id}. Error: ${err.message}`);
            }
        });
        await Promise.all(offerInstances)
    }

    async processOffer2Payload(payload: TProviderTwoResponse): Promise<any> {
        const offers = Object.values(payload.data);
        const offerInstances = offers.map(offer => {
            try {
                const dto: OfferTwoDto = plainToClass(OfferTwoDto, {...offer.Offer, ...offer.OS});
                this.validateOfferDTOA(dto);

                const entity = TransformerService.transformOffer2ToEntity(dto);

                const isOfferExist = this.isOfferExist(entity.slug);
                if (isOfferExist) {
                    return false
                }
                return this.offerRepository.save(entity)

            } catch (err) {
                this.logger.error(`Failed to process offer with ID ${offer.Offer.campaign_id}. Error: ${err.message}`);
            }
        });
        await Promise.all(offerInstances)

    }

    private validateOfferDTOA(dto: OfferTwoDto | OfferOneDto): void {
        const errors = validateSync(dto);

        if (errors.length > 0) {
            console.warn(`Offer has validation errors.`);
            return;
        }
    }

    private async isOfferExist(slug: string): Promise<boolean> {
        const offer = await this.offerRepository.findOne({where: {slug}});
        return !!offer;
    }
}