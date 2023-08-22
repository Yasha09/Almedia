export type TProviderTwoResponse = {
    status: string,
    data: TProviderTwoData
}


type TProviderTwoData = {
    [key: string]: TProviderTwoOffer,

}

type TProviderTwoOffer = {
    Offer: {
        campaign_id: number,
        store_id: boolean,
        tracking_type: string,
        campaign_vertical: string,
        currency_name_singular: string,
        currency_name_plural: string,
        network_epc: string,
        // should be mapped to `thumbnail`
        icon: string,
        // should be mapped to `name`
        name: string,
        // should be mapped to `offerUrlTemplate`
        tracking_url: string,
        // should be mapped to `requirements`
        instructions: string,
        disclaimer: null,
        // should be mapped to `description`
        description: string,
        short_description: string,
        offer_sticker_text_1: string,
        offer_sticker_text_2: null,
        offer_sticker_text_3: null,
        offer_sticker_color_1: string,
        offer_sticker_color_2: string,
        offer_sticker_color_3: string,
        sort_order_setting: null,
        category_1: string,
        category_2: null,
        amount: number,
        payout_usd: number,
        start_datetime: string,
        end_datetime: string,
        is_multi_reward: boolean,
    },
    OS: TProviderTwoOS,

}

type TProviderTwoOS = {
    android: boolean,
    // this should be mapped to `isIos`
    ios: boolean,
    // this should be mapped to `isDesktop`
    web: boolean,
    min_ios: null,
    max_ios: null,
    min_android: null,
    max_android: null,
}