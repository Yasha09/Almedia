import {Injectable, Module} from "@nestjs/common";
import {OfferService} from "./offer.service";
import {OfferController} from "./offer.controller";
import {Offer} from "./entity/offer.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Offer])],
    providers: [OfferService],
    controllers: [OfferController],
    exports: [OfferService]
})
export class OfferModule {
}