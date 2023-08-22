import {OfferTwoDto} from "../../dto/offer-two.dto";
import {OfferOneDto} from "../../dto/offer-one.dto";
import {Offer} from "../../entity/offer.entity";
export class TransformerService {

   static transformOffer1ToEntity(offer: OfferOneDto): Omit<Offer, 'id'> {
        return {
            slug: offer.offer_name.toLowerCase().replace(/\s+/g, '-'),
            externalOfferId: offer.offer_id,
            name: offer.offer_name,
            description: offer.offer_desc,
            requirements: offer.call_to_action,
            offerUrlTemplate: offer.offer_url,
            thumbnail: offer.image_url,
            isDesktop: offer.platform === 'desktop' ? 1 : 0,
            isAndroid: offer.device !== 'iphone_ipad' ? 1 : 0,
            isIos: offer.device === 'iphone_ipad' ? 1 : 0,
            providerName: 'offer1',
        };
    }

  static  transformOffer2ToEntity(offer: OfferTwoDto): Omit<Offer, 'id'> {
        return {
            slug: offer.name.toLowerCase().replace(/\s+/g, '-'),
            externalOfferId: offer.campaign_id.toString(),
            name: offer.name,
            description: offer.description,
            requirements: offer.instructions,
            offerUrlTemplate: offer.tracking_url,
            thumbnail: offer.icon,
            isDesktop: offer.web ? 1 : 0,
            isAndroid: offer.android ? 1 : 0,
            isIos: offer.ios ? 1 : 0,
            providerName: 'offer2',
        };
    }
}