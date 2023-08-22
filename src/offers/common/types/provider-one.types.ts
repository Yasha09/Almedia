

export type TProviderOneOffer = {
    query: TProviderOneQuery;
    response:TProviderOneResponse
}

export type TProviderOneQuery = {
    pubid: string,
    appid: number,
    country: string,
    platform: string,
}


export type TProviderOneResponse = {
    currency_name: string,
    offers_count: number,
    offers: TProviderOneOffers[],
}

export type TProviderOneOffers = {
    offer_id: string,
    // should be mapped to `name`
    offer_name: string,
    // should be mapped to `description`
    offer_desc: string,
    // should be mapped to `requirements`
    call_to_action: string,
    disclaimer: string,
    // should be mapped to offerUrlTemplate
    offer_url:string,
    offer_url_easy: string,
    payout: number,
    payout_type: string,
    amount: number,
    // should be mapped to `thumbnail`
    image_url: string,
    image_url_220x124: string,
    countries: string[],
    // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
    platform: string, // possible values are "desktop" | "mobile"
    device: string, // a
    last_modified: number,
    preview_url: string,
    package_id: string,
}