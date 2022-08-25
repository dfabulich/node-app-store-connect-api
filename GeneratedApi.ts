/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AgeRatingDeclaration {
  type: "ageRatingDeclarations";
  id: string;
  attributes?: {
    alcoholTobaccoOrDrugUseOrReferences?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    contests?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    gamblingAndContests?: boolean;
    gambling?: boolean;
    gamblingSimulated?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    kidsAgeBand?: KidsAgeBand;
    medicalOrTreatmentInformation?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    profanityOrCrudeHumor?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    sexualContentGraphicAndNudity?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    sexualContentOrNudity?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    seventeenPlus?: boolean;
    horrorOrFearThemes?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    matureOrSuggestiveThemes?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    unrestrictedWebAccess?: boolean;
    violenceCartoonOrFantasy?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    violenceRealisticProlongedGraphicOrSadistic?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    violenceRealistic?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
  };
  links: ResourceLinks;
}

export interface AgeRatingDeclarationResponse {
  data: AgeRatingDeclaration;
  links: DocumentLinks;
}

export interface AgeRatingDeclarationUpdateRequest {
  data: {
    type: "ageRatingDeclarations";
    id: string;
    attributes?: {
      alcoholTobaccoOrDrugUseOrReferences?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      contests?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      gamblingAndContests?: boolean;
      gambling?: boolean;
      gamblingSimulated?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      kidsAgeBand?: KidsAgeBand;
      medicalOrTreatmentInformation?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      profanityOrCrudeHumor?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      sexualContentGraphicAndNudity?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      sexualContentOrNudity?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      seventeenPlus?: boolean;
      horrorOrFearThemes?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      matureOrSuggestiveThemes?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      unrestrictedWebAccess?: boolean;
      violenceCartoonOrFantasy?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      violenceRealisticProlongedGraphicOrSadistic?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
      violenceRealistic?: "NONE" | "INFREQUENT_OR_MILD" | "FREQUENT_OR_INTENSE";
    };
  };
}

export interface AppCategory {
  type: "appCategories";
  id: string;
  attributes?: { platforms?: Platform[] };
  relationships?: {
    subcategories?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appCategories"; id: string }[];
    };
    parent?: { links?: { self?: string; related?: string }; data?: { type: "appCategories"; id: string } };
  };
  links: ResourceLinks;
}

export interface AppCategoriesResponse {
  data: AppCategory[];
  included?: (AppCategory | AppCategory)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppCategoryResponse {
  data: AppCategory;
  included?: (AppCategory | AppCategory)[];
  links: DocumentLinks;
}

export interface AppClipAdvancedExperienceImage {
  type: "appClipAdvancedExperienceImages";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    imageAsset?: ImageAsset;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
  };
  links: ResourceLinks;
}

export interface AppClipAdvancedExperienceImageResponse {
  data: AppClipAdvancedExperienceImage;
  links: DocumentLinks;
}

export interface AppClipAdvancedExperienceImageCreateRequest {
  data: { type: "appClipAdvancedExperienceImages"; attributes: { fileSize: number; fileName: string } };
}

export interface AppClipAdvancedExperienceImageUpdateRequest {
  data: {
    type: "appClipAdvancedExperienceImages";
    id: string;
    attributes?: { sourceFileChecksum?: string; uploaded?: boolean };
  };
}

export interface AppClipAdvancedExperienceLocalization {
  type: "appClipAdvancedExperienceLocalizations";
  id: string;
  attributes?: { language?: AppClipAdvancedExperienceLanguage; title?: string; subtitle?: string };
  links: ResourceLinks;
}

export interface AppClipAdvancedExperienceLocalizationInlineCreate {
  type: "appClipAdvancedExperienceLocalizations";
  id?: string;
  attributes?: { language?: AppClipAdvancedExperienceLanguage; title?: string; subtitle?: string };
}

export interface AppClipAdvancedExperience {
  type: "appClipAdvancedExperiences";
  id: string;
  attributes?: {
    link?: string;
    version?: number;
    status?: "RECEIVED" | "DEACTIVATED" | "APP_TRANSFER_IN_PROGRESS";
    action?: AppClipAction;
    isPoweredBy?: boolean;
    place?: {
      placeId?: string;
      names?: string[];
      mainAddress?: {
        fullAddress?: string;
        structuredAddress?: {
          streetAddress?: string[];
          floor?: string;
          neighborhood?: string;
          locality?: string;
          stateProvince?: string;
          postalCode?: string;
          countryCode?: string;
        };
      };
      displayPoint?: {
        coordinates?: { latitude?: number; longitude?: number };
        source?: "CALCULATED" | "MANUALLY_PLACED";
      };
      mapAction?:
        | "BUY_TICKETS"
        | "VIEW_AVAILABILITY"
        | "VIEW_PRICING"
        | "HOTEL_BOOK_ROOM"
        | "PARKING_RESERVE_PARKING"
        | "RESTAURANT_JOIN_WAITLIST"
        | "RESTAURANT_ORDER_DELIVERY"
        | "RESTAURANT_ORDER_FOOD"
        | "RESTAURANT_ORDER_TAKEOUT"
        | "RESTAURANT_RESERVATION"
        | "SCHEDULE_APPOINTMENT"
        | "RESTAURANT_VIEW_MENU"
        | "THEATER_NOW_PLAYING";
      relationship?: "OWNER" | "AUTHORIZED" | "OTHER";
      phoneNumber?: { number?: string; type?: "FAX" | "LANDLINE" | "MOBILE" | "TOLLFREE"; intent?: string };
      homePage?: string;
      categories?: string[];
    };
    placeStatus?: "PENDING" | "MATCHED" | "NO_MATCH";
    businessCategory?:
      | "AUTOMOTIVE"
      | "BEAUTY"
      | "BIKES"
      | "BOOKS"
      | "CASINO"
      | "EDUCATION"
      | "EDUCATION_JAPAN"
      | "ENTERTAINMENT"
      | "EV_CHARGER"
      | "FINANCIAL_USD"
      | "FINANCIAL_CNY"
      | "FINANCIAL_GBP"
      | "FINANCIAL_JPY"
      | "FINANCIAL_EUR"
      | "FITNESS"
      | "FOOD_AND_DRINK"
      | "GAS"
      | "GROCERY"
      | "HEALTH_AND_MEDICAL"
      | "HOTEL_AND_TRAVEL"
      | "MUSIC"
      | "PARKING"
      | "PET_SERVICES"
      | "PROFESSIONAL_SERVICES"
      | "SHOPPING"
      | "TICKETING"
      | "TRANSIT";
    defaultLanguage?: AppClipAdvancedExperienceLanguage;
  };
  relationships?: {
    appClip?: { links?: { self?: string; related?: string }; data?: { type: "appClips"; id: string } };
    headerImage?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipAdvancedExperienceImages"; id: string };
    };
    localizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appClipAdvancedExperienceLocalizations"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppClipAdvancedExperiencesResponse {
  data: AppClipAdvancedExperience[];
  included?: (AppClip | AppClipAdvancedExperienceImage | AppClipAdvancedExperienceLocalization)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppClipAdvancedExperienceResponse {
  data: AppClipAdvancedExperience;
  included?: (AppClip | AppClipAdvancedExperienceImage | AppClipAdvancedExperienceLocalization)[];
  links: DocumentLinks;
}

export interface AppClipAdvancedExperienceCreateRequest {
  data: {
    type: "appClipAdvancedExperiences";
    attributes: {
      link: string;
      action?: AppClipAction;
      isPoweredBy: boolean;
      place?: {
        placeId?: string;
        names?: string[];
        mainAddress?: {
          fullAddress?: string;
          structuredAddress?: {
            streetAddress?: string[];
            floor?: string;
            neighborhood?: string;
            locality?: string;
            stateProvince?: string;
            postalCode?: string;
            countryCode?: string;
          };
        };
        displayPoint?: {
          coordinates?: { latitude?: number; longitude?: number };
          source?: "CALCULATED" | "MANUALLY_PLACED";
        };
        mapAction?:
          | "BUY_TICKETS"
          | "VIEW_AVAILABILITY"
          | "VIEW_PRICING"
          | "HOTEL_BOOK_ROOM"
          | "PARKING_RESERVE_PARKING"
          | "RESTAURANT_JOIN_WAITLIST"
          | "RESTAURANT_ORDER_DELIVERY"
          | "RESTAURANT_ORDER_FOOD"
          | "RESTAURANT_ORDER_TAKEOUT"
          | "RESTAURANT_RESERVATION"
          | "SCHEDULE_APPOINTMENT"
          | "RESTAURANT_VIEW_MENU"
          | "THEATER_NOW_PLAYING";
        relationship?: "OWNER" | "AUTHORIZED" | "OTHER";
        phoneNumber?: { number?: string; type?: "FAX" | "LANDLINE" | "MOBILE" | "TOLLFREE"; intent?: string };
        homePage?: string;
        categories?: string[];
      };
      businessCategory?:
        | "AUTOMOTIVE"
        | "BEAUTY"
        | "BIKES"
        | "BOOKS"
        | "CASINO"
        | "EDUCATION"
        | "EDUCATION_JAPAN"
        | "ENTERTAINMENT"
        | "EV_CHARGER"
        | "FINANCIAL_USD"
        | "FINANCIAL_CNY"
        | "FINANCIAL_GBP"
        | "FINANCIAL_JPY"
        | "FINANCIAL_EUR"
        | "FITNESS"
        | "FOOD_AND_DRINK"
        | "GAS"
        | "GROCERY"
        | "HEALTH_AND_MEDICAL"
        | "HOTEL_AND_TRAVEL"
        | "MUSIC"
        | "PARKING"
        | "PET_SERVICES"
        | "PROFESSIONAL_SERVICES"
        | "SHOPPING"
        | "TICKETING"
        | "TRANSIT";
      defaultLanguage: AppClipAdvancedExperienceLanguage;
    };
    relationships: {
      appClip: { data: { type: "appClips"; id: string } };
      headerImage: { data: { type: "appClipAdvancedExperienceImages"; id: string } };
      localizations: { data: { type: "appClipAdvancedExperienceLocalizations"; id: string }[] };
    };
  };
  included?: AppClipAdvancedExperienceLocalizationInlineCreate[];
}

export interface AppClipAdvancedExperienceUpdateRequest {
  data: {
    type: "appClipAdvancedExperiences";
    id: string;
    attributes?: {
      action?: AppClipAction;
      isPoweredBy?: boolean;
      place?: {
        placeId?: string;
        names?: string[];
        mainAddress?: {
          fullAddress?: string;
          structuredAddress?: {
            streetAddress?: string[];
            floor?: string;
            neighborhood?: string;
            locality?: string;
            stateProvince?: string;
            postalCode?: string;
            countryCode?: string;
          };
        };
        displayPoint?: {
          coordinates?: { latitude?: number; longitude?: number };
          source?: "CALCULATED" | "MANUALLY_PLACED";
        };
        mapAction?:
          | "BUY_TICKETS"
          | "VIEW_AVAILABILITY"
          | "VIEW_PRICING"
          | "HOTEL_BOOK_ROOM"
          | "PARKING_RESERVE_PARKING"
          | "RESTAURANT_JOIN_WAITLIST"
          | "RESTAURANT_ORDER_DELIVERY"
          | "RESTAURANT_ORDER_FOOD"
          | "RESTAURANT_ORDER_TAKEOUT"
          | "RESTAURANT_RESERVATION"
          | "SCHEDULE_APPOINTMENT"
          | "RESTAURANT_VIEW_MENU"
          | "THEATER_NOW_PLAYING";
        relationship?: "OWNER" | "AUTHORIZED" | "OTHER";
        phoneNumber?: { number?: string; type?: "FAX" | "LANDLINE" | "MOBILE" | "TOLLFREE"; intent?: string };
        homePage?: string;
        categories?: string[];
      };
      businessCategory?:
        | "AUTOMOTIVE"
        | "BEAUTY"
        | "BIKES"
        | "BOOKS"
        | "CASINO"
        | "EDUCATION"
        | "EDUCATION_JAPAN"
        | "ENTERTAINMENT"
        | "EV_CHARGER"
        | "FINANCIAL_USD"
        | "FINANCIAL_CNY"
        | "FINANCIAL_GBP"
        | "FINANCIAL_JPY"
        | "FINANCIAL_EUR"
        | "FITNESS"
        | "FOOD_AND_DRINK"
        | "GAS"
        | "GROCERY"
        | "HEALTH_AND_MEDICAL"
        | "HOTEL_AND_TRAVEL"
        | "MUSIC"
        | "PARKING"
        | "PET_SERVICES"
        | "PROFESSIONAL_SERVICES"
        | "SHOPPING"
        | "TICKETING"
        | "TRANSIT";
      defaultLanguage?: AppClipAdvancedExperienceLanguage;
      removed?: boolean;
    };
    relationships?: {
      appClip?: { data?: { type: "appClips"; id: string } };
      headerImage?: { data?: { type: "appClipAdvancedExperienceImages"; id: string } };
      localizations?: { data?: { type: "appClipAdvancedExperienceLocalizations"; id: string }[] };
    };
  };
  included?: AppClipAdvancedExperienceLocalizationInlineCreate[];
}

export interface AppClipAppStoreReviewDetail {
  type: "appClipAppStoreReviewDetails";
  id: string;
  attributes?: { invocationUrls?: string[] };
  relationships?: {
    appClipDefaultExperience?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipDefaultExperiences"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppClipAppStoreReviewDetailResponse {
  data: AppClipAppStoreReviewDetail;
  included?: AppClipDefaultExperience[];
  links: DocumentLinks;
}

export interface AppClipAppStoreReviewDetailCreateRequest {
  data: {
    type: "appClipAppStoreReviewDetails";
    attributes?: { invocationUrls?: string[] };
    relationships: { appClipDefaultExperience: { data: { type: "appClipDefaultExperiences"; id: string } } };
  };
}

export interface AppClipAppStoreReviewDetailUpdateRequest {
  data: { type: "appClipAppStoreReviewDetails"; id: string; attributes?: { invocationUrls?: string[] } };
}

export interface AppClipDefaultExperienceLocalization {
  type: "appClipDefaultExperienceLocalizations";
  id: string;
  attributes?: { locale?: string; subtitle?: string };
  relationships?: {
    appClipDefaultExperience?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipDefaultExperiences"; id: string };
    };
    appClipHeaderImage?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipHeaderImages"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppClipDefaultExperienceLocalizationsResponse {
  data: AppClipDefaultExperienceLocalization[];
  included?: (AppClipDefaultExperience | AppClipHeaderImage)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppClipDefaultExperienceLocalizationResponse {
  data: AppClipDefaultExperienceLocalization;
  included?: (AppClipDefaultExperience | AppClipHeaderImage)[];
  links: DocumentLinks;
}

export interface AppClipDefaultExperienceLocalizationCreateRequest {
  data: {
    type: "appClipDefaultExperienceLocalizations";
    attributes: { locale: string; subtitle?: string };
    relationships: { appClipDefaultExperience: { data: { type: "appClipDefaultExperiences"; id: string } } };
  };
}

export interface AppClipDefaultExperienceLocalizationUpdateRequest {
  data: { type: "appClipDefaultExperienceLocalizations"; id: string; attributes?: { subtitle?: string } };
}

export interface AppClipDefaultExperience {
  type: "appClipDefaultExperiences";
  id: string;
  attributes?: { action?: AppClipAction };
  relationships?: {
    appClip?: { links?: { self?: string; related?: string }; data?: { type: "appClips"; id: string } };
    releaseWithAppStoreVersion?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersions"; id: string };
    };
    appClipDefaultExperienceLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appClipDefaultExperienceLocalizations"; id: string }[];
    };
    appClipAppStoreReviewDetail?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipAppStoreReviewDetails"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppClipDefaultExperiencesResponse {
  data: AppClipDefaultExperience[];
  included?: (AppClip | AppStoreVersion | AppClipDefaultExperienceLocalization | AppClipAppStoreReviewDetail)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppClipDefaultExperienceResponse {
  data: AppClipDefaultExperience;
  included?: (AppClip | AppStoreVersion | AppClipDefaultExperienceLocalization | AppClipAppStoreReviewDetail)[];
  links: DocumentLinks;
}

export interface AppClipDefaultExperienceCreateRequest {
  data: {
    type: "appClipDefaultExperiences";
    attributes?: { action?: AppClipAction };
    relationships: {
      appClip: { data: { type: "appClips"; id: string } };
      releaseWithAppStoreVersion?: { data?: { type: "appStoreVersions"; id: string } };
      appClipDefaultExperienceTemplate?: { data?: { type: "appClipDefaultExperiences"; id: string } };
    };
  };
}

export interface AppClipDefaultExperienceUpdateRequest {
  data: {
    type: "appClipDefaultExperiences";
    id: string;
    attributes?: { action?: AppClipAction };
    relationships?: { releaseWithAppStoreVersion?: { data?: { type: "appStoreVersions"; id: string } } };
  };
}

export interface AppClipDomainStatus {
  type: "appClipDomainStatuses";
  id: string;
  attributes?: {
    domains?: {
      domain?: string;
      isValid?: boolean;
      lastUpdatedDate?: string;
      errorCode?:
        | "BAD_HTTP_RESPONSE"
        | "BAD_JSON_CONTENT"
        | "BAD_PKCS7_SIGNATURE"
        | "CANNOT_REACH_AASA_FILE"
        | "DNS_ERROR"
        | "INSECURE_REDIRECTS_FORBIDDEN"
        | "INVALID_ENTITLEMENT_MISSING_SECTION"
        | "INVALID_ENTITLEMENT_SYNTAX_ERROR"
        | "INVALID_ENTITLEMENT_UNHANDLED_SECTION"
        | "INVALID_ENTITLEMENT_UNKNOWN_ID"
        | "NETWORK_ERROR"
        | "NETWORK_ERROR_TEMPORARY"
        | "OTHER_ERROR"
        | "TIMEOUT"
        | "TLS_ERROR"
        | "UNEXPECTED_ERROR";
    }[];
    lastUpdatedDate?: string;
  };
  links: ResourceLinks;
}

export interface AppClipDomainStatusResponse {
  data: AppClipDomainStatus;
  links: DocumentLinks;
}

export interface AppClipHeaderImage {
  type: "appClipHeaderImages";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    imageAsset?: ImageAsset;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
  };
  relationships?: {
    appClipDefaultExperienceLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipDefaultExperienceLocalizations"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppClipHeaderImageResponse {
  data: AppClipHeaderImage;
  included?: AppClipDefaultExperienceLocalization[];
  links: DocumentLinks;
}

export interface AppClipHeaderImageCreateRequest {
  data: {
    type: "appClipHeaderImages";
    attributes: { fileSize: number; fileName: string };
    relationships: {
      appClipDefaultExperienceLocalization: { data: { type: "appClipDefaultExperienceLocalizations"; id: string } };
    };
  };
}

export interface AppClipHeaderImageUpdateRequest {
  data: { type: "appClipHeaderImages"; id: string; attributes?: { sourceFileChecksum?: string; uploaded?: boolean } };
}

export interface AppClip {
  type: "appClips";
  id: string;
  attributes?: { bundleId?: string };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    appClipDefaultExperiences?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appClipDefaultExperiences"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppClipsResponse {
  data: AppClip[];
  included?: (App | AppClipDefaultExperience)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppClipResponse {
  data: AppClip;
  included?: (App | AppClipDefaultExperience)[];
  links: DocumentLinks;
}

export interface AppCustomProductPageLocalization {
  type: "appCustomProductPageLocalizations";
  id: string;
  attributes?: { locale?: string; promotionalText?: string };
  relationships?: {
    appCustomProductPageVersion?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCustomProductPageVersions"; id: string };
    };
    appScreenshotSets?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appScreenshotSets"; id: string }[];
    };
    appPreviewSets?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appPreviewSets"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppCustomProductPageLocalizationInlineCreate {
  type: "appCustomProductPageLocalizations";
  id?: string;
  attributes: { locale: string; promotionalText?: string };
  relationships?: { appCustomProductPageVersion?: { data?: { type: "appCustomProductPageVersions"; id: string } } };
}

export interface AppCustomProductPageLocalizationsResponse {
  data: AppCustomProductPageLocalization[];
  included?: (AppCustomProductPageVersion | AppScreenshotSet | AppPreviewSet)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppCustomProductPageLocalizationResponse {
  data: AppCustomProductPageLocalization;
  included?: (AppCustomProductPageVersion | AppScreenshotSet | AppPreviewSet)[];
  links: DocumentLinks;
}

export interface AppCustomProductPageLocalizationCreateRequest {
  data: {
    type: "appCustomProductPageLocalizations";
    attributes: { locale: string; promotionalText?: string };
    relationships: { appCustomProductPageVersion: { data: { type: "appCustomProductPageVersions"; id: string } } };
  };
}

export interface AppCustomProductPageLocalizationUpdateRequest {
  data: { type: "appCustomProductPageLocalizations"; id: string; attributes?: { promotionalText?: string } };
}

export interface AppCustomProductPageVersion {
  type: "appCustomProductPageVersions";
  id: string;
  attributes?: {
    version?: string;
    state?:
      | "PREPARE_FOR_SUBMISSION"
      | "READY_FOR_REVIEW"
      | "WAITING_FOR_REVIEW"
      | "IN_REVIEW"
      | "ACCEPTED"
      | "APPROVED"
      | "REPLACED_WITH_NEW_VERSION"
      | "REJECTED";
  };
  relationships?: {
    appCustomProductPage?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCustomProductPages"; id: string };
    };
    appCustomProductPageLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appCustomProductPageLocalizations"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppCustomProductPageVersionInlineCreate {
  type: "appCustomProductPageVersions";
  id?: string;
  relationships?: {
    appCustomProductPage?: { data?: { type: "appCustomProductPages"; id: string } };
    appCustomProductPageLocalizations?: { data?: { type: "appCustomProductPageLocalizations"; id: string }[] };
  };
}

export interface AppCustomProductPageVersionsResponse {
  data: AppCustomProductPageVersion[];
  included?: (AppCustomProductPage | AppCustomProductPageLocalization)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppCustomProductPageVersionResponse {
  data: AppCustomProductPageVersion;
  included?: (AppCustomProductPage | AppCustomProductPageLocalization)[];
  links: DocumentLinks;
}

export interface AppCustomProductPageVersionCreateRequest {
  data: {
    type: "appCustomProductPageVersions";
    relationships: {
      appCustomProductPage: { data: { type: "appCustomProductPages"; id: string } };
      appCustomProductPageLocalizations?: { data?: { type: "appCustomProductPageLocalizations"; id: string }[] };
    };
  };
}

export interface AppCustomProductPage {
  type: "appCustomProductPages";
  id: string;
  attributes?: { name?: string; url?: string; visible?: boolean };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    appCustomProductPageVersions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appCustomProductPageVersions"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppCustomProductPagesResponse {
  data: AppCustomProductPage[];
  included?: (App | AppCustomProductPageVersion)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppCustomProductPageResponse {
  data: AppCustomProductPage;
  included?: (App | AppCustomProductPageVersion)[];
  links: DocumentLinks;
}

export interface AppCustomProductPageCreateRequest {
  data: {
    type: "appCustomProductPages";
    attributes: { name: string };
    relationships: {
      app: { data: { type: "apps"; id: string } };
      appCustomProductPageVersions?: { data?: { type: "appCustomProductPageVersions"; id: string }[] };
      appStoreVersionTemplate?: { data?: { type: "appStoreVersions"; id: string } };
      customProductPageTemplate?: { data?: { type: "appCustomProductPages"; id: string } };
    };
  };
  included?: (AppCustomProductPageLocalizationInlineCreate | AppCustomProductPageVersionInlineCreate)[];
}

export interface AppCustomProductPageUpdateRequest {
  data: { type: "appCustomProductPages"; id: string; attributes?: { name?: string; visible?: boolean } };
}

export interface AppEncryptionDeclaration {
  type: "appEncryptionDeclarations";
  id: string;
  attributes?: {
    usesEncryption?: boolean;
    exempt?: boolean;
    containsProprietaryCryptography?: boolean;
    containsThirdPartyCryptography?: boolean;
    availableOnFrenchStore?: boolean;
    platform?: Platform;
    uploadedDate?: string;
    documentUrl?: string;
    documentName?: string;
    documentType?: string;
    appEncryptionDeclarationState?: AppEncryptionDeclarationState;
    codeValue?: string;
  };
  relationships?: { app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } } };
  links: ResourceLinks;
}

export interface AppEncryptionDeclarationsResponse {
  data: AppEncryptionDeclaration[];
  included?: App[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppEncryptionDeclarationResponse {
  data: AppEncryptionDeclaration;
  included?: App[];
  links: DocumentLinks;
}

export interface AppEventLocalization {
  type: "appEventLocalizations";
  id: string;
  attributes?: { locale?: string; name?: string; shortDescription?: string; longDescription?: string };
  relationships?: {
    appEvent?: { links?: { self?: string; related?: string }; data?: { type: "appEvents"; id: string } };
    appEventScreenshots?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appEventScreenshots"; id: string }[];
    };
    appEventVideoClips?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appEventVideoClips"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppEventLocalizationsResponse {
  data: AppEventLocalization[];
  included?: (AppEvent | AppEventScreenshot | AppEventVideoClip)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppEventLocalizationResponse {
  data: AppEventLocalization;
  included?: (AppEvent | AppEventScreenshot | AppEventVideoClip)[];
  links: DocumentLinks;
}

export interface AppEventLocalizationCreateRequest {
  data: {
    type: "appEventLocalizations";
    attributes: { locale: string; name?: string; shortDescription?: string; longDescription?: string };
    relationships: { appEvent: { data: { type: "appEvents"; id: string } } };
  };
}

export interface AppEventLocalizationUpdateRequest {
  data: {
    type: "appEventLocalizations";
    id: string;
    attributes?: { name?: string; shortDescription?: string; longDescription?: string };
  };
}

export interface AppEventScreenshot {
  type: "appEventScreenshots";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    imageAsset?: ImageAsset;
    assetToken?: string;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
    appEventAssetType?: AppEventAssetType;
  };
  relationships?: {
    appEventLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appEventLocalizations"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppEventScreenshotsResponse {
  data: AppEventScreenshot[];
  included?: AppEventLocalization[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppEventScreenshotResponse {
  data: AppEventScreenshot;
  included?: AppEventLocalization[];
  links: DocumentLinks;
}

export interface AppEventScreenshotCreateRequest {
  data: {
    type: "appEventScreenshots";
    attributes: { fileSize: number; fileName: string; appEventAssetType: AppEventAssetType };
    relationships: { appEventLocalization: { data: { type: "appEventLocalizations"; id: string } } };
  };
}

export interface AppEventScreenshotUpdateRequest {
  data: { type: "appEventScreenshots"; id: string; attributes?: { uploaded?: boolean } };
}

export interface AppEventVideoClip {
  type: "appEventVideoClips";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    previewFrameTimeCode?: string;
    videoUrl?: string;
    previewImage?: ImageAsset;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
    appEventAssetType?: AppEventAssetType;
  };
  relationships?: {
    appEventLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appEventLocalizations"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppEventVideoClipsResponse {
  data: AppEventVideoClip[];
  included?: AppEventLocalization[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppEventVideoClipResponse {
  data: AppEventVideoClip;
  included?: AppEventLocalization[];
  links: DocumentLinks;
}

export interface AppEventVideoClipCreateRequest {
  data: {
    type: "appEventVideoClips";
    attributes: {
      fileSize: number;
      fileName: string;
      previewFrameTimeCode?: string;
      appEventAssetType: AppEventAssetType;
    };
    relationships: { appEventLocalization: { data: { type: "appEventLocalizations"; id: string } } };
  };
}

export interface AppEventVideoClipUpdateRequest {
  data: { type: "appEventVideoClips"; id: string; attributes?: { previewFrameTimeCode?: string; uploaded?: boolean } };
}

export interface AppEvent {
  type: "appEvents";
  id: string;
  attributes?: {
    referenceName?: string;
    badge?: "LIVE_EVENT" | "PREMIERE" | "CHALLENGE" | "COMPETITION" | "NEW_SEASON" | "MAJOR_UPDATE" | "SPECIAL_EVENT";
    eventState?:
      | "DRAFT"
      | "READY_FOR_REVIEW"
      | "WAITING_FOR_REVIEW"
      | "IN_REVIEW"
      | "REJECTED"
      | "ACCEPTED"
      | "APPROVED"
      | "PUBLISHED"
      | "PAST"
      | "ARCHIVED";
    deepLink?: string;
    purchaseRequirement?:
      | "NO_COST_ASSOCIATED"
      | "IN_APP_PURCHASE"
      | "SUBSCRIPTION"
      | "IN_APP_PURCHASE_AND_SUBSCRIPTION"
      | "IN_APP_PURCHASE_OR_SUBSCRIPTION";
    primaryLocale?: string;
    priority?: "HIGH" | "NORMAL";
    purpose?:
      | "APPROPRIATE_FOR_ALL_USERS"
      | "ATTRACT_NEW_USERS"
      | "KEEP_ACTIVE_USERS_INFORMED"
      | "BRING_BACK_LAPSED_USERS";
    territorySchedules?: { territories?: string[]; publishStart?: string; eventStart?: string; eventEnd?: string }[];
    archivedTerritorySchedules?: {
      territories?: string[];
      publishStart?: string;
      eventStart?: string;
      eventEnd?: string;
    }[];
  };
  relationships?: {
    localizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appEventLocalizations"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppEventsResponse {
  data: AppEvent[];
  included?: AppEventLocalization[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppEventResponse {
  data: AppEvent;
  included?: AppEventLocalization[];
  links: DocumentLinks;
}

export interface AppEventCreateRequest {
  data: {
    type: "appEvents";
    attributes: {
      referenceName: string;
      badge?: "LIVE_EVENT" | "PREMIERE" | "CHALLENGE" | "COMPETITION" | "NEW_SEASON" | "MAJOR_UPDATE" | "SPECIAL_EVENT";
      deepLink?: string;
      purchaseRequirement?:
        | "NO_COST_ASSOCIATED"
        | "IN_APP_PURCHASE"
        | "SUBSCRIPTION"
        | "IN_APP_PURCHASE_AND_SUBSCRIPTION"
        | "IN_APP_PURCHASE_OR_SUBSCRIPTION";
      primaryLocale?: string;
      priority?: "HIGH" | "NORMAL";
      purpose?:
        | "APPROPRIATE_FOR_ALL_USERS"
        | "ATTRACT_NEW_USERS"
        | "KEEP_ACTIVE_USERS_INFORMED"
        | "BRING_BACK_LAPSED_USERS";
      territorySchedules?: { territories?: string[]; publishStart?: string; eventStart?: string; eventEnd?: string }[];
    };
    relationships: { app: { data: { type: "apps"; id: string } } };
  };
}

export interface AppEventUpdateRequest {
  data: {
    type: "appEvents";
    id: string;
    attributes?: {
      referenceName?: string;
      badge?: "LIVE_EVENT" | "PREMIERE" | "CHALLENGE" | "COMPETITION" | "NEW_SEASON" | "MAJOR_UPDATE" | "SPECIAL_EVENT";
      deepLink?: string;
      purchaseRequirement?:
        | "NO_COST_ASSOCIATED"
        | "IN_APP_PURCHASE"
        | "SUBSCRIPTION"
        | "IN_APP_PURCHASE_AND_SUBSCRIPTION"
        | "IN_APP_PURCHASE_OR_SUBSCRIPTION";
      primaryLocale?: string;
      priority?: "HIGH" | "NORMAL";
      purpose?:
        | "APPROPRIATE_FOR_ALL_USERS"
        | "ATTRACT_NEW_USERS"
        | "KEEP_ACTIVE_USERS_INFORMED"
        | "BRING_BACK_LAPSED_USERS";
      territorySchedules?: { territories?: string[]; publishStart?: string; eventStart?: string; eventEnd?: string }[];
    };
  };
}

export interface AppInfoLocalization {
  type: "appInfoLocalizations";
  id: string;
  attributes?: {
    locale?: string;
    name?: string;
    subtitle?: string;
    privacyPolicyUrl?: string;
    privacyChoicesUrl?: string;
    privacyPolicyText?: string;
  };
  relationships?: {
    appInfo?: { links?: { self?: string; related?: string }; data?: { type: "appInfos"; id: string } };
  };
  links: ResourceLinks;
}

export interface AppInfoLocalizationsResponse {
  data: AppInfoLocalization[];
  included?: AppInfo[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppInfoLocalizationResponse {
  data: AppInfoLocalization;
  included?: AppInfo[];
  links: DocumentLinks;
}

export interface AppInfoLocalizationCreateRequest {
  data: {
    type: "appInfoLocalizations";
    attributes: {
      locale: string;
      name?: string;
      subtitle?: string;
      privacyPolicyUrl?: string;
      privacyChoicesUrl?: string;
      privacyPolicyText?: string;
    };
    relationships: { appInfo: { data: { type: "appInfos"; id: string } } };
  };
}

export interface AppInfoLocalizationUpdateRequest {
  data: {
    type: "appInfoLocalizations";
    id: string;
    attributes?: {
      name?: string;
      subtitle?: string;
      privacyPolicyUrl?: string;
      privacyChoicesUrl?: string;
      privacyPolicyText?: string;
    };
  };
}

export interface AppInfo {
  type: "appInfos";
  id: string;
  attributes?: {
    appStoreState?: AppStoreVersionState;
    appStoreAgeRating?: AppStoreAgeRating;
    brazilAgeRating?: BrazilAgeRating;
    kidsAgeBand?: KidsAgeBand;
  };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    ageRatingDeclaration?: {
      links?: { self?: string; related?: string };
      data?: { type: "ageRatingDeclarations"; id: string };
    };
    appInfoLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appInfoLocalizations"; id: string }[];
    };
    primaryCategory?: { links?: { self?: string; related?: string }; data?: { type: "appCategories"; id: string } };
    primarySubcategoryOne?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCategories"; id: string };
    };
    primarySubcategoryTwo?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCategories"; id: string };
    };
    secondaryCategory?: { links?: { self?: string; related?: string }; data?: { type: "appCategories"; id: string } };
    secondarySubcategoryOne?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCategories"; id: string };
    };
    secondarySubcategoryTwo?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCategories"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppInfosResponse {
  data: AppInfo[];
  included?: (
    | App
    | AgeRatingDeclaration
    | AppInfoLocalization
    | AppCategory
    | AppCategory
    | AppCategory
    | AppCategory
    | AppCategory
    | AppCategory
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppInfoResponse {
  data: AppInfo;
  included?: (
    | App
    | AgeRatingDeclaration
    | AppInfoLocalization
    | AppCategory
    | AppCategory
    | AppCategory
    | AppCategory
    | AppCategory
    | AppCategory
  )[];
  links: DocumentLinks;
}

export interface AppInfoUpdateRequest {
  data: {
    type: "appInfos";
    id: string;
    relationships?: {
      primaryCategory?: { data?: { type: "appCategories"; id: string } };
      primarySubcategoryOne?: { data?: { type: "appCategories"; id: string } };
      primarySubcategoryTwo?: { data?: { type: "appCategories"; id: string } };
      secondaryCategory?: { data?: { type: "appCategories"; id: string } };
      secondarySubcategoryOne?: { data?: { type: "appCategories"; id: string } };
      secondarySubcategoryTwo?: { data?: { type: "appCategories"; id: string } };
    };
  };
}

export interface AppPreOrder {
  type: "appPreOrders";
  id: string;
  attributes?: { preOrderAvailableDate?: string; appReleaseDate?: string };
  relationships?: { app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } } };
  links: ResourceLinks;
}

export interface AppPreOrderResponse {
  data: AppPreOrder;
  included?: App[];
  links: DocumentLinks;
}

export interface AppPreOrderCreateRequest {
  data: {
    type: "appPreOrders";
    attributes?: { appReleaseDate?: string };
    relationships: { app: { data: { type: "apps"; id: string } } };
  };
}

export interface AppPreOrderUpdateRequest {
  data: { type: "appPreOrders"; id: string; attributes?: { appReleaseDate?: string } };
}

export interface AppPreviewSet {
  type: "appPreviewSets";
  id: string;
  attributes?: { previewType?: PreviewType };
  relationships?: {
    appStoreVersionLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionLocalizations"; id: string };
    };
    appCustomProductPageLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCustomProductPageLocalizations"; id: string };
    };
    appStoreVersionExperimentTreatmentLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionExperimentTreatmentLocalizations"; id: string };
    };
    appPreviews?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appPreviews"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppPreviewSetsResponse {
  data: AppPreviewSet[];
  included?: (
    | AppStoreVersionLocalization
    | AppCustomProductPageLocalization
    | AppStoreVersionExperimentTreatmentLocalization
    | AppPreview
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppPreviewSetResponse {
  data: AppPreviewSet;
  included?: (
    | AppStoreVersionLocalization
    | AppCustomProductPageLocalization
    | AppStoreVersionExperimentTreatmentLocalization
    | AppPreview
  )[];
  links: DocumentLinks;
}

export interface AppPreviewSetCreateRequest {
  data: {
    type: "appPreviewSets";
    attributes: { previewType: PreviewType };
    relationships?: {
      appStoreVersionLocalization?: { data?: { type: "appStoreVersionLocalizations"; id: string } };
      appCustomProductPageLocalization?: { data?: { type: "appCustomProductPageLocalizations"; id: string } };
      appStoreVersionExperimentTreatmentLocalization?: {
        data?: { type: "appStoreVersionExperimentTreatmentLocalizations"; id: string };
      };
    };
  };
}

export interface AppPreview {
  type: "appPreviews";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    previewFrameTimeCode?: string;
    mimeType?: string;
    videoUrl?: string;
    previewImage?: ImageAsset;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
  };
  relationships?: {
    appPreviewSet?: { links?: { self?: string; related?: string }; data?: { type: "appPreviewSets"; id: string } };
  };
  links: ResourceLinks;
}

export interface AppPreviewsResponse {
  data: AppPreview[];
  included?: AppPreviewSet[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppPreviewResponse {
  data: AppPreview;
  included?: AppPreviewSet[];
  links: DocumentLinks;
}

export interface AppPreviewCreateRequest {
  data: {
    type: "appPreviews";
    attributes: { fileSize: number; fileName: string; previewFrameTimeCode?: string; mimeType?: string };
    relationships: { appPreviewSet: { data: { type: "appPreviewSets"; id: string } } };
  };
}

export interface AppPreviewUpdateRequest {
  data: {
    type: "appPreviews";
    id: string;
    attributes?: { sourceFileChecksum?: string; previewFrameTimeCode?: string; uploaded?: boolean };
  };
}

export interface AppPricePointV2 {
  type: "appPricePoints";
  id: string;
  attributes?: { customerPrice?: string; proceeds?: string };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    priceTier?: { links?: { self?: string; related?: string }; data?: { type: "appPriceTiers"; id: string } };
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
  };
  links: ResourceLinks;
}

export interface AppPricePointsV2Response {
  data: AppPricePointV2[];
  included?: (App | AppPriceTier | Territory)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

/**
 * @deprecated
 */
export interface AppPricePoint {
  type: "appPricePoints";
  id: string;
  attributes?: { customerPrice?: string; proceeds?: string };
  relationships?: {
    priceTier?: { links?: { self?: string; related?: string }; data?: { type: "appPriceTiers"; id: string } };
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
  };
  links: ResourceLinks;
}

/**
 * @deprecated
 */
export interface AppPricePointsResponse {
  data: AppPricePoint[];
  included?: (AppPriceTier | Territory)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

/**
 * @deprecated
 */
export interface AppPricePointResponse {
  data: AppPricePoint;
  included?: (AppPriceTier | Territory)[];
  links: DocumentLinks;
}

export interface AppPriceTier {
  type: "appPriceTiers";
  id: string;
  relationships?: {
    pricePoints?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appPricePoints"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppPriceTiersResponse {
  data: AppPriceTier[];
  included?: AppPricePoint[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppPriceTierResponse {
  data: AppPriceTier;
  included?: AppPricePoint[];
  links: DocumentLinks;
}

export interface AppPrice {
  type: "appPrices";
  id: string;
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    priceTier?: { links?: { self?: string; related?: string }; data?: { type: "appPriceTiers"; id: string } };
  };
  links: ResourceLinks;
}

export interface AppPriceInlineCreate {
  type: "appPrices";
  id?: string;
}

export interface AppPricesResponse {
  data: AppPrice[];
  included?: (App | AppPriceTier)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppPriceResponse {
  data: AppPrice;
  included?: (App | AppPriceTier)[];
  links: DocumentLinks;
}

export interface AppScreenshotSet {
  type: "appScreenshotSets";
  id: string;
  attributes?: { screenshotDisplayType?: ScreenshotDisplayType };
  relationships?: {
    appStoreVersionLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionLocalizations"; id: string };
    };
    appCustomProductPageLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCustomProductPageLocalizations"; id: string };
    };
    appStoreVersionExperimentTreatmentLocalization?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionExperimentTreatmentLocalizations"; id: string };
    };
    appScreenshots?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appScreenshots"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppScreenshotSetsResponse {
  data: AppScreenshotSet[];
  included?: (
    | AppStoreVersionLocalization
    | AppCustomProductPageLocalization
    | AppStoreVersionExperimentTreatmentLocalization
    | AppScreenshot
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppScreenshotSetResponse {
  data: AppScreenshotSet;
  included?: (
    | AppStoreVersionLocalization
    | AppCustomProductPageLocalization
    | AppStoreVersionExperimentTreatmentLocalization
    | AppScreenshot
  )[];
  links: DocumentLinks;
}

export interface AppScreenshotSetCreateRequest {
  data: {
    type: "appScreenshotSets";
    attributes: { screenshotDisplayType: ScreenshotDisplayType };
    relationships?: {
      appStoreVersionLocalization?: { data?: { type: "appStoreVersionLocalizations"; id: string } };
      appCustomProductPageLocalization?: { data?: { type: "appCustomProductPageLocalizations"; id: string } };
      appStoreVersionExperimentTreatmentLocalization?: {
        data?: { type: "appStoreVersionExperimentTreatmentLocalizations"; id: string };
      };
    };
  };
}

export interface AppScreenshot {
  type: "appScreenshots";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    imageAsset?: ImageAsset;
    assetToken?: string;
    assetType?: string;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
  };
  relationships?: {
    appScreenshotSet?: {
      links?: { self?: string; related?: string };
      data?: { type: "appScreenshotSets"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppScreenshotsResponse {
  data: AppScreenshot[];
  included?: AppScreenshotSet[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppScreenshotResponse {
  data: AppScreenshot;
  included?: AppScreenshotSet[];
  links: DocumentLinks;
}

export interface AppScreenshotCreateRequest {
  data: {
    type: "appScreenshots";
    attributes: { fileSize: number; fileName: string };
    relationships: { appScreenshotSet: { data: { type: "appScreenshotSets"; id: string } } };
  };
}

export interface AppScreenshotUpdateRequest {
  data: { type: "appScreenshots"; id: string; attributes?: { sourceFileChecksum?: string; uploaded?: boolean } };
}

export interface AppStoreReviewAttachment {
  type: "appStoreReviewAttachments";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
  };
  relationships?: {
    appStoreReviewDetail?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreReviewDetails"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppStoreReviewAttachmentsResponse {
  data: AppStoreReviewAttachment[];
  included?: AppStoreReviewDetail[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppStoreReviewAttachmentResponse {
  data: AppStoreReviewAttachment;
  included?: AppStoreReviewDetail[];
  links: DocumentLinks;
}

export interface AppStoreReviewAttachmentCreateRequest {
  data: {
    type: "appStoreReviewAttachments";
    attributes: { fileSize: number; fileName: string };
    relationships: { appStoreReviewDetail: { data: { type: "appStoreReviewDetails"; id: string } } };
  };
}

export interface AppStoreReviewAttachmentUpdateRequest {
  data: {
    type: "appStoreReviewAttachments";
    id: string;
    attributes?: { sourceFileChecksum?: string; uploaded?: boolean };
  };
}

export interface AppStoreReviewDetail {
  type: "appStoreReviewDetails";
  id: string;
  attributes?: {
    contactFirstName?: string;
    contactLastName?: string;
    contactPhone?: string;
    contactEmail?: string;
    demoAccountName?: string;
    demoAccountPassword?: string;
    demoAccountRequired?: boolean;
    notes?: string;
  };
  relationships?: {
    appStoreVersion?: { links?: { self?: string; related?: string }; data?: { type: "appStoreVersions"; id: string } };
    appStoreReviewAttachments?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appStoreReviewAttachments"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppStoreReviewDetailResponse {
  data: AppStoreReviewDetail;
  included?: (AppStoreVersion | AppStoreReviewAttachment)[];
  links: DocumentLinks;
}

export interface AppStoreReviewDetailCreateRequest {
  data: {
    type: "appStoreReviewDetails";
    attributes?: {
      contactFirstName?: string;
      contactLastName?: string;
      contactPhone?: string;
      contactEmail?: string;
      demoAccountName?: string;
      demoAccountPassword?: string;
      demoAccountRequired?: boolean;
      notes?: string;
    };
    relationships: { appStoreVersion: { data: { type: "appStoreVersions"; id: string } } };
  };
}

export interface AppStoreReviewDetailUpdateRequest {
  data: {
    type: "appStoreReviewDetails";
    id: string;
    attributes?: {
      contactFirstName?: string;
      contactLastName?: string;
      contactPhone?: string;
      contactEmail?: string;
      demoAccountName?: string;
      demoAccountPassword?: string;
      demoAccountRequired?: boolean;
      notes?: string;
    };
  };
}

export interface AppStoreVersionExperimentTreatmentLocalization {
  type: "appStoreVersionExperimentTreatmentLocalizations";
  id: string;
  attributes?: { locale?: string };
  relationships?: {
    appStoreVersionExperimentTreatment?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionExperimentTreatments"; id: string };
    };
    appScreenshotSets?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appScreenshotSets"; id: string }[];
    };
    appPreviewSets?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appPreviewSets"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppStoreVersionExperimentTreatmentLocalizationsResponse {
  data: AppStoreVersionExperimentTreatmentLocalization[];
  included?: (AppStoreVersionExperimentTreatment | AppScreenshotSet | AppPreviewSet)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppStoreVersionExperimentTreatmentLocalizationResponse {
  data: AppStoreVersionExperimentTreatmentLocalization;
  included?: (AppStoreVersionExperimentTreatment | AppScreenshotSet | AppPreviewSet)[];
  links: DocumentLinks;
}

export interface AppStoreVersionExperimentTreatmentLocalizationCreateRequest {
  data: {
    type: "appStoreVersionExperimentTreatmentLocalizations";
    attributes: { locale: string };
    relationships: {
      appStoreVersionExperimentTreatment: { data: { type: "appStoreVersionExperimentTreatments"; id: string } };
    };
  };
}

export interface AppStoreVersionExperimentTreatment {
  type: "appStoreVersionExperimentTreatments";
  id: string;
  attributes?: { name?: string; appIcon?: ImageAsset; appIconName?: string; promotedDate?: string };
  relationships?: {
    appStoreVersionExperiment?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionExperiments"; id: string };
    };
    appStoreVersionExperimentTreatmentLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appStoreVersionExperimentTreatmentLocalizations"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppStoreVersionExperimentTreatmentsResponse {
  data: AppStoreVersionExperimentTreatment[];
  included?: (AppStoreVersionExperiment | AppStoreVersionExperimentTreatmentLocalization)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppStoreVersionExperimentTreatmentResponse {
  data: AppStoreVersionExperimentTreatment;
  included?: (AppStoreVersionExperiment | AppStoreVersionExperimentTreatmentLocalization)[];
  links: DocumentLinks;
}

export interface AppStoreVersionExperimentTreatmentCreateRequest {
  data: {
    type: "appStoreVersionExperimentTreatments";
    attributes: { name: string; appIconName?: string };
    relationships: { appStoreVersionExperiment: { data: { type: "appStoreVersionExperiments"; id: string } } };
  };
}

export interface AppStoreVersionExperimentTreatmentUpdateRequest {
  data: {
    type: "appStoreVersionExperimentTreatments";
    id: string;
    attributes?: { name?: string; appIconName?: string };
  };
}

export interface AppStoreVersionExperiment {
  type: "appStoreVersionExperiments";
  id: string;
  attributes?: {
    name?: string;
    trafficProportion?: number;
    state?:
      | "PREPARE_FOR_SUBMISSION"
      | "READY_FOR_REVIEW"
      | "WAITING_FOR_REVIEW"
      | "IN_REVIEW"
      | "ACCEPTED"
      | "APPROVED"
      | "REJECTED"
      | "COMPLETED"
      | "STOPPED";
    reviewRequired?: boolean;
    startDate?: string;
    endDate?: string;
  };
  relationships?: {
    appStoreVersion?: { links?: { self?: string; related?: string }; data?: { type: "appStoreVersions"; id: string } };
    appStoreVersionExperimentTreatments?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appStoreVersionExperimentTreatments"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppStoreVersionExperimentsResponse {
  data: AppStoreVersionExperiment[];
  included?: (AppStoreVersion | AppStoreVersionExperimentTreatment)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppStoreVersionExperimentResponse {
  data: AppStoreVersionExperiment;
  included?: (AppStoreVersion | AppStoreVersionExperimentTreatment)[];
  links: DocumentLinks;
}

export interface AppStoreVersionExperimentCreateRequest {
  data: {
    type: "appStoreVersionExperiments";
    attributes: { name: string; trafficProportion: number };
    relationships: { appStoreVersion: { data: { type: "appStoreVersions"; id: string } } };
  };
}

export interface AppStoreVersionExperimentUpdateRequest {
  data: {
    type: "appStoreVersionExperiments";
    id: string;
    attributes?: { name?: string; trafficProportion?: number; started?: boolean };
  };
}

export interface AppStoreVersionLocalization {
  type: "appStoreVersionLocalizations";
  id: string;
  attributes?: {
    description?: string;
    locale?: string;
    keywords?: string;
    marketingUrl?: string;
    promotionalText?: string;
    supportUrl?: string;
    whatsNew?: string;
  };
  relationships?: {
    appStoreVersion?: { links?: { self?: string; related?: string }; data?: { type: "appStoreVersions"; id: string } };
    appScreenshotSets?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appScreenshotSets"; id: string }[];
    };
    appPreviewSets?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appPreviewSets"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppStoreVersionLocalizationsResponse {
  data: AppStoreVersionLocalization[];
  included?: (AppStoreVersion | AppScreenshotSet | AppPreviewSet)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppStoreVersionLocalizationResponse {
  data: AppStoreVersionLocalization;
  included?: (AppStoreVersion | AppScreenshotSet | AppPreviewSet)[];
  links: DocumentLinks;
}

export interface AppStoreVersionLocalizationCreateRequest {
  data: {
    type: "appStoreVersionLocalizations";
    attributes: {
      description?: string;
      locale: string;
      keywords?: string;
      marketingUrl?: string;
      promotionalText?: string;
      supportUrl?: string;
      whatsNew?: string;
    };
    relationships: { appStoreVersion: { data: { type: "appStoreVersions"; id: string } } };
  };
}

export interface AppStoreVersionLocalizationUpdateRequest {
  data: {
    type: "appStoreVersionLocalizations";
    id: string;
    attributes?: {
      description?: string;
      keywords?: string;
      marketingUrl?: string;
      promotionalText?: string;
      supportUrl?: string;
      whatsNew?: string;
    };
  };
}

export interface AppStoreVersionPhasedRelease {
  type: "appStoreVersionPhasedReleases";
  id: string;
  attributes?: {
    phasedReleaseState?: PhasedReleaseState;
    startDate?: string;
    totalPauseDuration?: number;
    currentDayNumber?: number;
  };
  links: ResourceLinks;
}

export interface AppStoreVersionPhasedReleaseResponse {
  data: AppStoreVersionPhasedRelease;
  links: DocumentLinks;
}

export interface AppStoreVersionPhasedReleaseCreateRequest {
  data: {
    type: "appStoreVersionPhasedReleases";
    attributes?: { phasedReleaseState?: PhasedReleaseState };
    relationships: { appStoreVersion: { data: { type: "appStoreVersions"; id: string } } };
  };
}

export interface AppStoreVersionPhasedReleaseUpdateRequest {
  data: { type: "appStoreVersionPhasedReleases"; id: string; attributes?: { phasedReleaseState?: PhasedReleaseState } };
}

export interface AppStoreVersionPromotion {
  type: "appStoreVersionPromotions";
  id: string;
  links: ResourceLinks;
}

export interface AppStoreVersionPromotionResponse {
  data: AppStoreVersionPromotion;
  links: DocumentLinks;
}

export interface AppStoreVersionPromotionCreateRequest {
  data: {
    type: "appStoreVersionPromotions";
    relationships: {
      appStoreVersion: { data: { type: "appStoreVersions"; id: string } };
      appStoreVersionExperimentTreatment: { data: { type: "appStoreVersionExperimentTreatments"; id: string } };
    };
  };
}

export interface AppStoreVersionReleaseRequest {
  type: "appStoreVersionReleaseRequests";
  id: string;
  links: ResourceLinks;
}

export interface AppStoreVersionReleaseRequestResponse {
  data: AppStoreVersionReleaseRequest;
  links: DocumentLinks;
}

export interface AppStoreVersionReleaseRequestCreateRequest {
  data: {
    type: "appStoreVersionReleaseRequests";
    relationships: { appStoreVersion: { data: { type: "appStoreVersions"; id: string } } };
  };
}

/**
 * @deprecated
 */
export interface AppStoreVersionSubmission {
  type: "appStoreVersionSubmissions";
  id: string;
  relationships?: {
    appStoreVersion?: { links?: { self?: string; related?: string }; data?: { type: "appStoreVersions"; id: string } };
  };
  links: ResourceLinks;
}

/**
 * @deprecated
 */
export interface AppStoreVersionSubmissionResponse {
  data: AppStoreVersionSubmission;
  included?: AppStoreVersion[];
  links: DocumentLinks;
}

/**
 * @deprecated
 */
export interface AppStoreVersionSubmissionCreateRequest {
  data: {
    type: "appStoreVersionSubmissions";
    relationships: { appStoreVersion: { data: { type: "appStoreVersions"; id: string } } };
  };
}

export interface AppStoreVersion {
  type: "appStoreVersions";
  id: string;
  attributes?: {
    platform?: Platform;
    versionString?: string;
    appStoreState?: AppStoreVersionState;
    copyright?: string;
    releaseType?: "MANUAL" | "AFTER_APPROVAL" | "SCHEDULED";
    earliestReleaseDate?: string;
    downloadable?: boolean;
    createdDate?: string;
  };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    ageRatingDeclaration?: {
      links?: { self?: string; related?: string };
      data?: { type: "ageRatingDeclarations"; id: string };
    };
    appStoreVersionLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appStoreVersionLocalizations"; id: string }[];
    };
    build?: { links?: { self?: string; related?: string }; data?: { type: "builds"; id: string } };
    appStoreVersionPhasedRelease?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionPhasedReleases"; id: string };
    };
    routingAppCoverage?: {
      links?: { self?: string; related?: string };
      data?: { type: "routingAppCoverages"; id: string };
    };
    appStoreReviewDetail?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreReviewDetails"; id: string };
    };
    appStoreVersionSubmission?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionSubmissions"; id: string };
    };
    appClipDefaultExperience?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipDefaultExperiences"; id: string };
    };
    appStoreVersionExperiments?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appStoreVersionExperiments"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface AppStoreVersionsResponse {
  data: AppStoreVersion[];
  included?: (
    | App
    | AgeRatingDeclaration
    | AppStoreVersionLocalization
    | Build
    | AppStoreVersionPhasedRelease
    | RoutingAppCoverage
    | AppStoreReviewDetail
    | AppStoreVersionSubmission
    | AppClipDefaultExperience
    | AppStoreVersionExperiment
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppStoreVersionResponse {
  data: AppStoreVersion;
  included?: (
    | App
    | AgeRatingDeclaration
    | AppStoreVersionLocalization
    | Build
    | AppStoreVersionPhasedRelease
    | RoutingAppCoverage
    | AppStoreReviewDetail
    | AppStoreVersionSubmission
    | AppClipDefaultExperience
    | AppStoreVersionExperiment
  )[];
  links: DocumentLinks;
}

export interface AppStoreVersionCreateRequest {
  data: {
    type: "appStoreVersions";
    attributes: {
      platform: Platform;
      versionString: string;
      copyright?: string;
      releaseType?: "MANUAL" | "AFTER_APPROVAL" | "SCHEDULED";
      earliestReleaseDate?: string;
    };
    relationships: {
      app: { data: { type: "apps"; id: string } };
      appStoreVersionLocalizations?: { data?: { type: "appStoreVersionLocalizations"; id: string }[] };
      build?: { data?: { type: "builds"; id: string } };
    };
  };
}

export interface AppStoreVersionUpdateRequest {
  data: {
    type: "appStoreVersions";
    id: string;
    attributes?: {
      versionString?: string;
      copyright?: string;
      releaseType?: "MANUAL" | "AFTER_APPROVAL" | "SCHEDULED";
      earliestReleaseDate?: string;
      downloadable?: boolean;
    };
    relationships?: {
      build?: { data?: { type: "builds"; id: string } };
      appClipDefaultExperience?: { data?: { type: "appClipDefaultExperiences"; id: string } };
    };
  };
}

export interface App {
  type: "apps";
  id: string;
  attributes?: {
    name?: string;
    bundleId?: string;
    sku?: string;
    primaryLocale?: string;
    isOrEverWasMadeForKids?: boolean;
    subscriptionStatusUrl?: string;
    subscriptionStatusUrlVersion?: SubscriptionStatusUrlVersion;
    subscriptionStatusUrlForSandbox?: string;
    subscriptionStatusUrlVersionForSandbox?: SubscriptionStatusUrlVersion;
    availableInNewTerritories?: boolean;
    contentRightsDeclaration?: "DOES_NOT_USE_THIRD_PARTY_CONTENT" | "USES_THIRD_PARTY_CONTENT";
  };
  relationships?: {
    ciProduct?: { links?: { self?: string; related?: string }; data?: { type: "ciProducts"; id: string } };
    betaGroups?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaGroups"; id: string }[];
    };
    appStoreVersions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appStoreVersions"; id: string }[];
    };
    preReleaseVersions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "preReleaseVersions"; id: string }[];
    };
    betaAppLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaAppLocalizations"; id: string }[];
    };
    builds?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "builds"; id: string }[];
    };
    betaLicenseAgreement?: {
      links?: { self?: string; related?: string };
      data?: { type: "betaLicenseAgreements"; id: string };
    };
    betaAppReviewDetail?: {
      links?: { self?: string; related?: string };
      data?: { type: "betaAppReviewDetails"; id: string };
    };
    appInfos?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appInfos"; id: string }[];
    };
    appClips?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appClips"; id: string }[];
    };
    endUserLicenseAgreement?: {
      links?: { self?: string; related?: string };
      data?: { type: "endUserLicenseAgreements"; id: string };
    };
    preOrder?: { links?: { self?: string; related?: string }; data?: { type: "appPreOrders"; id: string } };
    prices?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appPrices"; id: string }[];
    };
    availableTerritories?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "territories"; id: string }[];
    };
    inAppPurchases?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "inAppPurchases"; id: string }[];
    };
    subscriptionGroups?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionGroups"; id: string }[];
    };
    gameCenterEnabledVersions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "gameCenterEnabledVersions"; id: string }[];
    };
    appCustomProductPages?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appCustomProductPages"; id: string }[];
    };
    inAppPurchasesV2?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "inAppPurchases"; id: string }[];
    };
    promotedPurchases?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "promotedPurchases"; id: string }[];
    };
    appEvents?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "appEvents"; id: string }[];
    };
    reviewSubmissions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "reviewSubmissions"; id: string }[];
    };
    subscriptionGracePeriod?: {
      links?: { self?: string; related?: string };
      data?: { type: "subscriptionGracePeriods"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface AppInlineCreate {
  type: "apps";
  id?: string;
  attributes: { bundleId: string; sku: string; primaryLocale: string };
  relationships?: {
    appStoreVersions?: { data?: { type: "appStoreVersions"; id: string }[] };
    appInfos?: { data?: { type: "appInfos"; id: string }[] };
  };
}

export interface AppsResponse {
  data: App[];
  included?: (
    | CiProduct
    | BetaGroup
    | AppStoreVersion
    | PrereleaseVersion
    | BetaAppLocalization
    | Build
    | BetaLicenseAgreement
    | BetaAppReviewDetail
    | AppInfo
    | AppClip
    | EndUserLicenseAgreement
    | AppPreOrder
    | AppPrice
    | Territory
    | InAppPurchase
    | SubscriptionGroup
    | GameCenterEnabledVersion
    | AppCustomProductPage
    | InAppPurchaseV2
    | PromotedPurchase
    | AppEvent
    | ReviewSubmission
    | SubscriptionGracePeriod
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppResponse {
  data: App;
  included?: (
    | CiProduct
    | BetaGroup
    | AppStoreVersion
    | PrereleaseVersion
    | BetaAppLocalization
    | Build
    | BetaLicenseAgreement
    | BetaAppReviewDetail
    | AppInfo
    | AppClip
    | EndUserLicenseAgreement
    | AppPreOrder
    | AppPrice
    | Territory
    | InAppPurchase
    | SubscriptionGroup
    | GameCenterEnabledVersion
    | AppCustomProductPage
    | InAppPurchaseV2
    | PromotedPurchase
    | AppEvent
    | ReviewSubmission
    | SubscriptionGracePeriod
  )[];
  links: DocumentLinks;
}

export interface AppUpdateRequest {
  data: {
    type: "apps";
    id: string;
    attributes?: {
      bundleId?: string;
      primaryLocale?: string;
      subscriptionStatusUrl?: string;
      subscriptionStatusUrlVersion?: SubscriptionStatusUrlVersion;
      subscriptionStatusUrlForSandbox?: string;
      subscriptionStatusUrlVersionForSandbox?: SubscriptionStatusUrlVersion;
      availableInNewTerritories?: boolean;
      contentRightsDeclaration?: "DOES_NOT_USE_THIRD_PARTY_CONTENT" | "USES_THIRD_PARTY_CONTENT";
    };
    relationships?: {
      prices?: { data?: { type: "appPrices"; id: string }[] };
      availableTerritories?: { data?: { type: "territories"; id: string }[] };
    };
  };
  included?: AppPriceInlineCreate[];
}

export interface BetaAppClipInvocationLocalization {
  type: "betaAppClipInvocationLocalizations";
  id: string;
  attributes?: { title?: string; locale?: string };
  links: ResourceLinks;
}

export interface BetaAppClipInvocationLocalizationInlineCreate {
  type: "betaAppClipInvocationLocalizations";
  id?: string;
  attributes: { title: string; locale: string };
  relationships?: { betaAppClipInvocation?: { data?: { type: "betaAppClipInvocations"; id: string } } };
}

export interface BetaAppClipInvocationLocalizationResponse {
  data: BetaAppClipInvocationLocalization;
  links: DocumentLinks;
}

export interface BetaAppClipInvocationLocalizationCreateRequest {
  data: {
    type: "betaAppClipInvocationLocalizations";
    attributes: { title: string; locale: string };
    relationships: { betaAppClipInvocation: { data: { type: "betaAppClipInvocations"; id: string } } };
  };
}

export interface BetaAppClipInvocationLocalizationUpdateRequest {
  data: { type: "betaAppClipInvocationLocalizations"; id: string; attributes?: { title?: string } };
}

export interface BetaAppClipInvocation {
  type: "betaAppClipInvocations";
  id: string;
  attributes?: { url?: string };
  relationships?: {
    betaAppClipInvocationLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaAppClipInvocationLocalizations"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface BetaAppClipInvocationsResponse {
  data: BetaAppClipInvocation[];
  included?: BetaAppClipInvocationLocalization[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaAppClipInvocationResponse {
  data: BetaAppClipInvocation;
  included?: BetaAppClipInvocationLocalization[];
  links: DocumentLinks;
}

export interface BetaAppClipInvocationCreateRequest {
  data: {
    type: "betaAppClipInvocations";
    attributes: { url: string };
    relationships: {
      buildBundle: { data: { type: "buildBundles"; id: string } };
      betaAppClipInvocationLocalizations: { data: { type: "betaAppClipInvocationLocalizations"; id: string }[] };
    };
  };
  included?: BetaAppClipInvocationLocalizationInlineCreate[];
}

export interface BetaAppClipInvocationUpdateRequest {
  data: { type: "betaAppClipInvocations"; id: string; attributes?: { url?: string } };
}

export interface BetaAppLocalization {
  type: "betaAppLocalizations";
  id: string;
  attributes?: {
    feedbackEmail?: string;
    marketingUrl?: string;
    privacyPolicyUrl?: string;
    tvOsPrivacyPolicy?: string;
    description?: string;
    locale?: string;
  };
  relationships?: { app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } } };
  links: ResourceLinks;
}

export interface BetaAppLocalizationsResponse {
  data: BetaAppLocalization[];
  included?: App[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaAppLocalizationResponse {
  data: BetaAppLocalization;
  included?: App[];
  links: DocumentLinks;
}

export interface BetaAppLocalizationCreateRequest {
  data: {
    type: "betaAppLocalizations";
    attributes: {
      feedbackEmail?: string;
      marketingUrl?: string;
      privacyPolicyUrl?: string;
      tvOsPrivacyPolicy?: string;
      description?: string;
      locale: string;
    };
    relationships: { app: { data: { type: "apps"; id: string } } };
  };
}

export interface BetaAppLocalizationUpdateRequest {
  data: {
    type: "betaAppLocalizations";
    id: string;
    attributes?: {
      feedbackEmail?: string;
      marketingUrl?: string;
      privacyPolicyUrl?: string;
      tvOsPrivacyPolicy?: string;
      description?: string;
    };
  };
}

export interface BetaAppReviewDetail {
  type: "betaAppReviewDetails";
  id: string;
  attributes?: {
    contactFirstName?: string;
    contactLastName?: string;
    contactPhone?: string;
    contactEmail?: string;
    demoAccountName?: string;
    demoAccountPassword?: string;
    demoAccountRequired?: boolean;
    notes?: string;
  };
  relationships?: { app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } } };
  links: ResourceLinks;
}

export interface BetaAppReviewDetailsResponse {
  data: BetaAppReviewDetail[];
  included?: App[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaAppReviewDetailResponse {
  data: BetaAppReviewDetail;
  included?: App[];
  links: DocumentLinks;
}

export interface BetaAppReviewDetailUpdateRequest {
  data: {
    type: "betaAppReviewDetails";
    id: string;
    attributes?: {
      contactFirstName?: string;
      contactLastName?: string;
      contactPhone?: string;
      contactEmail?: string;
      demoAccountName?: string;
      demoAccountPassword?: string;
      demoAccountRequired?: boolean;
      notes?: string;
    };
  };
}

export interface BetaAppReviewSubmission {
  type: "betaAppReviewSubmissions";
  id: string;
  attributes?: { betaReviewState?: BetaReviewState; submittedDate?: string };
  relationships?: { build?: { links?: { self?: string; related?: string }; data?: { type: "builds"; id: string } } };
  links: ResourceLinks;
}

export interface BetaAppReviewSubmissionsResponse {
  data: BetaAppReviewSubmission[];
  included?: Build[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaAppReviewSubmissionResponse {
  data: BetaAppReviewSubmission;
  included?: Build[];
  links: DocumentLinks;
}

export interface BetaAppReviewSubmissionCreateRequest {
  data: { type: "betaAppReviewSubmissions"; relationships: { build: { data: { type: "builds"; id: string } } } };
}

export interface BetaBuildLocalization {
  type: "betaBuildLocalizations";
  id: string;
  attributes?: { whatsNew?: string; locale?: string };
  relationships?: { build?: { links?: { self?: string; related?: string }; data?: { type: "builds"; id: string } } };
  links: ResourceLinks;
}

export interface BetaBuildLocalizationsResponse {
  data: BetaBuildLocalization[];
  included?: Build[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaBuildLocalizationResponse {
  data: BetaBuildLocalization;
  included?: Build[];
  links: DocumentLinks;
}

export interface BetaBuildLocalizationCreateRequest {
  data: {
    type: "betaBuildLocalizations";
    attributes: { whatsNew?: string; locale: string };
    relationships: { build: { data: { type: "builds"; id: string } } };
  };
}

export interface BetaBuildLocalizationUpdateRequest {
  data: { type: "betaBuildLocalizations"; id: string; attributes?: { whatsNew?: string } };
}

export interface BetaGroup {
  type: "betaGroups";
  id: string;
  attributes?: {
    name?: string;
    createdDate?: string;
    isInternalGroup?: boolean;
    hasAccessToAllBuilds?: boolean;
    publicLinkEnabled?: boolean;
    publicLinkId?: string;
    publicLinkLimitEnabled?: boolean;
    publicLinkLimit?: number;
    publicLink?: string;
    feedbackEnabled?: boolean;
    iosBuildsAvailableForAppleSiliconMac?: boolean;
  };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    builds?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "builds"; id: string }[];
    };
    betaTesters?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaTesters"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface BetaGroupsResponse {
  data: BetaGroup[];
  included?: (App | Build | BetaTester)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaGroupResponse {
  data: BetaGroup;
  included?: (App | Build | BetaTester)[];
  links: DocumentLinks;
}

export interface BetaGroupCreateRequest {
  data: {
    type: "betaGroups";
    attributes: {
      name: string;
      isInternalGroup?: boolean;
      hasAccessToAllBuilds?: boolean;
      publicLinkEnabled?: boolean;
      publicLinkLimitEnabled?: boolean;
      publicLinkLimit?: number;
      feedbackEnabled?: boolean;
    };
    relationships: {
      app: { data: { type: "apps"; id: string } };
      builds?: { data?: { type: "builds"; id: string }[] };
      betaTesters?: { data?: { type: "betaTesters"; id: string }[] };
    };
  };
}

export interface BetaGroupUpdateRequest {
  data: {
    type: "betaGroups";
    id: string;
    attributes?: {
      name?: string;
      publicLinkEnabled?: boolean;
      publicLinkLimitEnabled?: boolean;
      publicLinkLimit?: number;
      feedbackEnabled?: boolean;
      iosBuildsAvailableForAppleSiliconMac?: boolean;
    };
  };
}

export interface BetaLicenseAgreement {
  type: "betaLicenseAgreements";
  id: string;
  attributes?: { agreementText?: string };
  relationships?: { app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } } };
  links: ResourceLinks;
}

export interface BetaLicenseAgreementsResponse {
  data: BetaLicenseAgreement[];
  included?: App[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaLicenseAgreementResponse {
  data: BetaLicenseAgreement;
  included?: App[];
  links: DocumentLinks;
}

export interface BetaLicenseAgreementUpdateRequest {
  data: { type: "betaLicenseAgreements"; id: string; attributes?: { agreementText?: string } };
}

export interface BetaTesterInvitation {
  type: "betaTesterInvitations";
  id: string;
  links: ResourceLinks;
}

export interface BetaTesterInvitationResponse {
  data: BetaTesterInvitation;
  links: DocumentLinks;
}

export interface BetaTesterInvitationCreateRequest {
  data: {
    type: "betaTesterInvitations";
    relationships: {
      betaTester: { data: { type: "betaTesters"; id: string } };
      app: { data: { type: "apps"; id: string } };
    };
  };
}

export interface BetaTester {
  type: "betaTesters";
  id: string;
  attributes?: { firstName?: string; lastName?: string; email?: string; inviteType?: BetaInviteType };
  relationships?: {
    apps?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "apps"; id: string }[];
    };
    betaGroups?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaGroups"; id: string }[];
    };
    builds?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "builds"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface BetaTestersResponse {
  data: BetaTester[];
  included?: (App | BetaGroup | Build)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaTesterResponse {
  data: BetaTester;
  included?: (App | BetaGroup | Build)[];
  links: DocumentLinks;
}

export interface BetaTesterCreateRequest {
  data: {
    type: "betaTesters";
    attributes: { firstName?: string; lastName?: string; email: string };
    relationships?: {
      betaGroups?: { data?: { type: "betaGroups"; id: string }[] };
      builds?: { data?: { type: "builds"; id: string }[] };
    };
  };
}

export interface BuildBetaDetail {
  type: "buildBetaDetails";
  id: string;
  attributes?: {
    autoNotifyEnabled?: boolean;
    internalBuildState?: InternalBetaState;
    externalBuildState?: ExternalBetaState;
  };
  relationships?: { build?: { links?: { self?: string; related?: string }; data?: { type: "builds"; id: string } } };
  links: ResourceLinks;
}

export interface BuildBetaDetailsResponse {
  data: BuildBetaDetail[];
  included?: Build[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BuildBetaDetailResponse {
  data: BuildBetaDetail;
  included?: Build[];
  links: DocumentLinks;
}

export interface BuildBetaDetailUpdateRequest {
  data: { type: "buildBetaDetails"; id: string; attributes?: { autoNotifyEnabled?: boolean } };
}

export interface BuildBetaNotification {
  type: "buildBetaNotifications";
  id: string;
  links: ResourceLinks;
}

export interface BuildBetaNotificationResponse {
  data: BuildBetaNotification;
  links: DocumentLinks;
}

export interface BuildBetaNotificationCreateRequest {
  data: { type: "buildBetaNotifications"; relationships: { build: { data: { type: "builds"; id: string } } } };
}

export interface BuildBundleFileSize {
  type: "buildBundleFileSizes";
  id: string;
  attributes?: { deviceModel?: string; osVersion?: string; downloadBytes?: number; installBytes?: number };
  links: ResourceLinks;
}

export interface BuildBundleFileSizesResponse {
  data: BuildBundleFileSize[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BuildBundle {
  type: "buildBundles";
  id: string;
  attributes?: {
    bundleId?: string;
    bundleType?: "APP" | "APP_CLIP";
    sdkBuild?: string;
    platformBuild?: string;
    fileName?: string;
    hasSirikit?: boolean;
    hasOnDemandResources?: boolean;
    hasPrerenderedIcon?: boolean;
    usesLocationServices?: boolean;
    isIosBuildMacAppStoreCompatible?: boolean;
    includesSymbols?: boolean;
    dSYMUrl?: string;
    supportedArchitectures?: string[];
    requiredCapabilities?: string[];
    deviceProtocols?: string[];
    locales?: string[];
    entitlements?: Record<string, Record<string, string>>;
  };
  relationships?: {
    appClipDomainCacheStatus?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipDomainStatuses"; id: string };
    };
    appClipDomainDebugStatus?: {
      links?: { self?: string; related?: string };
      data?: { type: "appClipDomainStatuses"; id: string };
    };
    betaAppClipInvocations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaAppClipInvocations"; id: string }[];
    };
    buildBundleFileSizes?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "buildBundleFileSizes"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface BuildIcon {
  type: "buildIcons";
  id: string;
  attributes?: { name?: string; iconAsset?: ImageAsset; iconType?: IconAssetType };
  links: ResourceLinks;
}

export interface BuildIconsResponse {
  data: BuildIcon[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface Build {
  type: "builds";
  id: string;
  attributes?: {
    version?: string;
    uploadedDate?: string;
    expirationDate?: string;
    expired?: boolean;
    minOsVersion?: string;
    lsMinimumSystemVersion?: string;
    computedMinMacOsVersion?: string;
    iconAssetToken?: ImageAsset;
    processingState?: "PROCESSING" | "FAILED" | "INVALID" | "VALID";
    buildAudienceType?: BuildAudienceType;
    usesNonExemptEncryption?: boolean;
  };
  relationships?: {
    preReleaseVersion?: {
      links?: { self?: string; related?: string };
      data?: { type: "preReleaseVersions"; id: string };
    };
    individualTesters?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaTesters"; id: string }[];
    };
    betaGroups?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaGroups"; id: string }[];
    };
    betaBuildLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "betaBuildLocalizations"; id: string }[];
    };
    appEncryptionDeclaration?: {
      links?: { self?: string; related?: string };
      data?: { type: "appEncryptionDeclarations"; id: string };
    };
    betaAppReviewSubmission?: {
      links?: { self?: string; related?: string };
      data?: { type: "betaAppReviewSubmissions"; id: string };
    };
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    buildBetaDetail?: { links?: { self?: string; related?: string }; data?: { type: "buildBetaDetails"; id: string } };
    appStoreVersion?: { links?: { self?: string; related?: string }; data?: { type: "appStoreVersions"; id: string } };
    icons?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "buildIcons"; id: string }[];
    };
    buildBundles?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "buildBundles"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface BuildsResponse {
  data: Build[];
  included?: (
    | PrereleaseVersion
    | BetaTester
    | BetaGroup
    | BetaBuildLocalization
    | AppEncryptionDeclaration
    | BetaAppReviewSubmission
    | App
    | BuildBetaDetail
    | AppStoreVersion
    | BuildIcon
    | BuildBundle
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BuildResponse {
  data: Build;
  included?: (
    | PrereleaseVersion
    | BetaTester
    | BetaGroup
    | BetaBuildLocalization
    | AppEncryptionDeclaration
    | BetaAppReviewSubmission
    | App
    | BuildBetaDetail
    | AppStoreVersion
    | BuildIcon
    | BuildBundle
  )[];
  links: DocumentLinks;
}

export interface BuildUpdateRequest {
  data: {
    type: "builds";
    id: string;
    attributes?: { expired?: boolean; usesNonExemptEncryption?: boolean };
    relationships?: { appEncryptionDeclaration?: { data?: { type: "appEncryptionDeclarations"; id: string } } };
  };
}

export interface BundleIdCapability {
  type: "bundleIdCapabilities";
  id: string;
  attributes?: { capabilityType?: CapabilityType; settings?: CapabilitySetting[] };
  links: ResourceLinks;
}

export interface BundleIdCapabilitiesResponse {
  data: BundleIdCapability[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BundleIdCapabilityResponse {
  data: BundleIdCapability;
  links: DocumentLinks;
}

export interface BundleIdCapabilityCreateRequest {
  data: {
    type: "bundleIdCapabilities";
    attributes: { capabilityType: CapabilityType; settings?: CapabilitySetting[] };
    relationships: { bundleId: { data: { type: "bundleIds"; id: string } } };
  };
}

export interface BundleIdCapabilityUpdateRequest {
  data: {
    type: "bundleIdCapabilities";
    id: string;
    attributes?: { capabilityType?: CapabilityType; settings?: CapabilitySetting[] };
  };
}

export interface BundleId {
  type: "bundleIds";
  id: string;
  attributes?: { name?: string; platform?: BundleIdPlatform; identifier?: string; seedId?: string };
  relationships?: {
    profiles?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "profiles"; id: string }[];
    };
    bundleIdCapabilities?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "bundleIdCapabilities"; id: string }[];
    };
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
  };
  links: ResourceLinks;
}

export interface BundleIdsResponse {
  data: BundleId[];
  included?: (Profile | BundleIdCapability | App)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BundleIdResponse {
  data: BundleId;
  included?: (Profile | BundleIdCapability | App)[];
  links: DocumentLinks;
}

export interface BundleIdCreateRequest {
  data: {
    type: "bundleIds";
    attributes: { name: string; platform: BundleIdPlatform; identifier: string; seedId?: string };
  };
}

export interface BundleIdUpdateRequest {
  data: { type: "bundleIds"; id: string; attributes?: { name?: string } };
}

export interface Certificate {
  type: "certificates";
  id: string;
  attributes?: {
    name?: string;
    certificateType?: CertificateType;
    displayName?: string;
    serialNumber?: string;
    platform?: BundleIdPlatform;
    expirationDate?: string;
    certificateContent?: string;
  };
  links: ResourceLinks;
}

export interface CertificatesResponse {
  data: Certificate[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CertificateResponse {
  data: Certificate;
  links: DocumentLinks;
}

export interface CertificateCreateRequest {
  data: { type: "certificates"; attributes: { csrContent: string; certificateType: CertificateType } };
}

export interface CiArtifact {
  type: "ciArtifacts";
  id: string;
  attributes?: {
    fileType?: "ARCHIVE" | "ARCHIVE_EXPORT" | "LOG_BUNDLE" | "RESULT_BUNDLE" | "TEST_PRODUCTS" | "XCODEBUILD_PRODUCTS";
    fileName?: string;
    fileSize?: number;
    downloadUrl?: string;
  };
  links: ResourceLinks;
}

export interface CiArtifactsResponse {
  data: CiArtifact[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiArtifactResponse {
  data: CiArtifact;
  links: DocumentLinks;
}

export interface CiBuildAction {
  type: "ciBuildActions";
  id: string;
  attributes?: {
    name?: string;
    actionType?: CiActionType;
    startedDate?: string;
    finishedDate?: string;
    issueCounts?: CiIssueCounts;
    executionProgress?: CiExecutionProgress;
    completionStatus?: CiCompletionStatus;
    isRequiredToPass?: boolean;
  };
  relationships?: {
    buildRun?: { links?: { self?: string; related?: string }; data?: { type: "ciBuildRuns"; id: string } };
  };
  links: ResourceLinks;
}

export interface CiBuildActionsResponse {
  data: CiBuildAction[];
  included?: CiBuildRun[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiBuildActionResponse {
  data: CiBuildAction;
  included?: CiBuildRun[];
  links: DocumentLinks;
}

export interface CiBuildRun {
  type: "ciBuildRuns";
  id: string;
  attributes?: {
    number?: number;
    createdDate?: string;
    startedDate?: string;
    finishedDate?: string;
    sourceCommit?: { commitSha?: string; message?: string; author?: CiGitUser; committer?: CiGitUser; webUrl?: string };
    destinationCommit?: {
      commitSha?: string;
      message?: string;
      author?: CiGitUser;
      committer?: CiGitUser;
      webUrl?: string;
    };
    isPullRequestBuild?: boolean;
    issueCounts?: CiIssueCounts;
    executionProgress?: CiExecutionProgress;
    completionStatus?: CiCompletionStatus;
    startReason?:
      | "GIT_REF_CHANGE"
      | "MANUAL"
      | "MANUAL_REBUILD"
      | "PULL_REQUEST_OPEN"
      | "PULL_REQUEST_UPDATE"
      | "SCHEDULE";
    cancelReason?: "AUTOMATICALLY_BY_NEWER_BUILD" | "MANUALLY_BY_USER";
  };
  relationships?: {
    builds?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "builds"; id: string }[];
    };
    workflow?: { links?: { self?: string; related?: string }; data?: { type: "ciWorkflows"; id: string } };
    product?: { links?: { self?: string; related?: string }; data?: { type: "ciProducts"; id: string } };
    sourceBranchOrTag?: {
      links?: { self?: string; related?: string };
      data?: { type: "scmGitReferences"; id: string };
    };
    destinationBranch?: {
      links?: { self?: string; related?: string };
      data?: { type: "scmGitReferences"; id: string };
    };
    pullRequest?: { links?: { self?: string; related?: string }; data?: { type: "scmPullRequests"; id: string } };
  };
  links: ResourceLinks;
}

export interface CiBuildRunsResponse {
  data: CiBuildRun[];
  included?: (Build | CiWorkflow | CiProduct | ScmGitReference | ScmGitReference | ScmPullRequest)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiBuildRunResponse {
  data: CiBuildRun;
  included?: (Build | CiWorkflow | CiProduct | ScmGitReference | ScmGitReference | ScmPullRequest)[];
  links: DocumentLinks;
}

export interface CiBuildRunCreateRequest {
  data: {
    type: "ciBuildRuns";
    attributes?: { clean?: boolean };
    relationships?: {
      buildRun?: { data?: { type: "ciBuildRuns"; id: string } };
      workflow?: { data?: { type: "ciWorkflows"; id: string } };
      sourceBranchOrTag?: { data?: { type: "scmGitReferences"; id: string } };
      pullRequest?: { data?: { type: "scmPullRequests"; id: string } };
    };
  };
}

export interface CiIssue {
  type: "ciIssues";
  id: string;
  attributes?: {
    issueType?: "ANALYZER_WARNING" | "ERROR" | "TEST_FAILURE" | "WARNING";
    message?: string;
    fileSource?: FileLocation;
    category?: string;
  };
  links: ResourceLinks;
}

export interface CiIssuesResponse {
  data: CiIssue[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiIssueResponse {
  data: CiIssue;
  links: DocumentLinks;
}

export interface CiMacOsVersion {
  type: "ciMacOsVersions";
  id: string;
  attributes?: { version?: string; name?: string };
  relationships?: {
    xcodeVersions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "ciXcodeVersions"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface CiMacOsVersionsResponse {
  data: CiMacOsVersion[];
  included?: CiXcodeVersion[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiMacOsVersionResponse {
  data: CiMacOsVersion;
  included?: CiXcodeVersion[];
  links: DocumentLinks;
}

export interface CiProduct {
  type: "ciProducts";
  id: string;
  attributes?: { name?: string; createdDate?: string; productType?: "APP" | "FRAMEWORK" };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    bundleId?: { links?: { self?: string; related?: string }; data?: { type: "bundleIds"; id: string } };
    primaryRepositories?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "scmRepositories"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface CiProductsResponse {
  data: CiProduct[];
  included?: (App | BundleId | ScmRepository)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiProductResponse {
  data: CiProduct;
  included?: (App | BundleId | ScmRepository)[];
  links: DocumentLinks;
}

export interface CiTestResult {
  type: "ciTestResults";
  id: string;
  attributes?: {
    className?: string;
    name?: string;
    status?: CiTestStatus;
    fileSource?: FileLocation;
    message?: string;
    destinationTestResults?: {
      uuid?: string;
      deviceName?: string;
      osVersion?: string;
      status?: CiTestStatus;
      duration?: number;
    }[];
  };
  links: ResourceLinks;
}

export interface CiTestResultsResponse {
  data: CiTestResult[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiTestResultResponse {
  data: CiTestResult;
  links: DocumentLinks;
}

export interface CiWorkflow {
  type: "ciWorkflows";
  id: string;
  attributes?: {
    name?: string;
    description?: string;
    branchStartCondition?: CiBranchStartCondition;
    tagStartCondition?: CiTagStartCondition;
    pullRequestStartCondition?: CiPullRequestStartCondition;
    scheduledStartCondition?: CiScheduledStartCondition;
    actions?: CiAction[];
    isEnabled?: boolean;
    isLockedForEditing?: boolean;
    clean?: boolean;
    containerFilePath?: string;
    lastModifiedDate?: string;
  };
  relationships?: {
    product?: { links?: { self?: string; related?: string }; data?: { type: "ciProducts"; id: string } };
    repository?: { links?: { self?: string; related?: string }; data?: { type: "scmRepositories"; id: string } };
    xcodeVersion?: { links?: { self?: string; related?: string }; data?: { type: "ciXcodeVersions"; id: string } };
    macOsVersion?: { links?: { self?: string; related?: string }; data?: { type: "ciMacOsVersions"; id: string } };
  };
  links: ResourceLinks;
}

export interface CiWorkflowsResponse {
  data: CiWorkflow[];
  included?: (CiProduct | ScmRepository | CiXcodeVersion | CiMacOsVersion)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiWorkflowResponse {
  data: CiWorkflow;
  included?: (CiProduct | ScmRepository | CiXcodeVersion | CiMacOsVersion)[];
  links: DocumentLinks;
}

export interface CiWorkflowCreateRequest {
  data: {
    type: "ciWorkflows";
    attributes: {
      name: string;
      description: string;
      branchStartCondition?: CiBranchStartCondition;
      tagStartCondition?: CiTagStartCondition;
      pullRequestStartCondition?: CiPullRequestStartCondition;
      scheduledStartCondition?: CiScheduledStartCondition;
      actions: CiAction[];
      isEnabled: boolean;
      isLockedForEditing?: boolean;
      clean: boolean;
      containerFilePath: string;
    };
    relationships: {
      product: { data: { type: "ciProducts"; id: string } };
      repository: { data: { type: "scmRepositories"; id: string } };
      xcodeVersion: { data: { type: "ciXcodeVersions"; id: string } };
      macOsVersion: { data: { type: "ciMacOsVersions"; id: string } };
    };
  };
}

export interface CiWorkflowUpdateRequest {
  data: {
    type: "ciWorkflows";
    id: string;
    attributes?: {
      name?: string;
      description?: string;
      branchStartCondition?: CiBranchStartCondition;
      tagStartCondition?: CiTagStartCondition;
      pullRequestStartCondition?: CiPullRequestStartCondition;
      scheduledStartCondition?: CiScheduledStartCondition;
      actions?: CiAction[];
      isEnabled?: boolean;
      isLockedForEditing?: boolean;
      clean?: boolean;
      containerFilePath?: string;
    };
    relationships?: {
      xcodeVersion?: { data?: { type: "ciXcodeVersions"; id: string } };
      macOsVersion?: { data?: { type: "ciMacOsVersions"; id: string } };
    };
  };
}

export interface CiXcodeVersion {
  type: "ciXcodeVersions";
  id: string;
  attributes?: {
    version?: string;
    name?: string;
    testDestinations?: {
      deviceTypeName?: string;
      deviceTypeIdentifier?: string;
      availableRuntimes?: { runtimeName?: string; runtimeIdentifier?: string }[];
      kind?: CiTestDestinationKind;
    }[];
  };
  relationships?: {
    macOsVersions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "ciMacOsVersions"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface CiXcodeVersionsResponse {
  data: CiXcodeVersion[];
  included?: CiMacOsVersion[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CiXcodeVersionResponse {
  data: CiXcodeVersion;
  included?: CiMacOsVersion[];
  links: DocumentLinks;
}

export interface CustomerReviewResponseV1 {
  type: "customerReviewResponses";
  id: string;
  attributes?: { responseBody?: string; lastModifiedDate?: string; state?: "PUBLISHED" | "PENDING_PUBLISH" };
  relationships?: {
    review?: { links?: { self?: string; related?: string }; data?: { type: "customerReviews"; id: string } };
  };
  links: ResourceLinks;
}

export interface CustomerReviewResponseV1Response {
  data: CustomerReviewResponseV1;
  included?: CustomerReview[];
  links: DocumentLinks;
}

export interface CustomerReviewResponseV1CreateRequest {
  data: {
    type: "customerReviewResponses";
    attributes: { responseBody: string };
    relationships: { review: { data: { type: "customerReviews"; id: string } } };
  };
}

export interface CustomerReview {
  type: "customerReviews";
  id: string;
  attributes?: {
    rating?: number;
    title?: string;
    body?: string;
    reviewerNickname?: string;
    createdDate?: string;
    territory?: TerritoryCode;
  };
  relationships?: {
    response?: { links?: { self?: string; related?: string }; data?: { type: "customerReviewResponses"; id: string } };
  };
  links: ResourceLinks;
}

export interface CustomerReviewsResponse {
  data: CustomerReview[];
  included?: CustomerReviewResponseV1[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface CustomerReviewResponse {
  data: CustomerReview;
  included?: CustomerReviewResponseV1[];
  links: DocumentLinks;
}

export interface Device {
  type: "devices";
  id: string;
  attributes?: {
    name?: string;
    platform?: BundleIdPlatform;
    udid?: string;
    deviceClass?: "APPLE_WATCH" | "IPAD" | "IPHONE" | "IPOD" | "APPLE_TV" | "MAC";
    status?: "ENABLED" | "DISABLED";
    model?: string;
    addedDate?: string;
  };
  links: ResourceLinks;
}

export interface DevicesResponse {
  data: Device[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface DeviceResponse {
  data: Device;
  links: DocumentLinks;
}

export interface DeviceCreateRequest {
  data: { type: "devices"; attributes: { name: string; platform: BundleIdPlatform; udid: string } };
}

export interface DeviceUpdateRequest {
  data: { type: "devices"; id: string; attributes?: { name?: string; status?: "ENABLED" | "DISABLED" } };
}

export interface DiagnosticLog {
  type: "diagnosticLogs";
  id: string;
  links: ResourceLinks;
}

export interface DiagnosticSignature {
  type: "diagnosticSignatures";
  id: string;
  attributes?: { diagnosticType?: "DISK_WRITES" | "HANGS"; signature?: string; weight?: number };
  links: ResourceLinks;
}

export interface DiagnosticSignaturesResponse {
  data: DiagnosticSignature[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface EndUserLicenseAgreement {
  type: "endUserLicenseAgreements";
  id: string;
  attributes?: { agreementText?: string };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    territories?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "territories"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface EndUserLicenseAgreementResponse {
  data: EndUserLicenseAgreement;
  included?: (App | Territory)[];
  links: DocumentLinks;
}

export interface EndUserLicenseAgreementCreateRequest {
  data: {
    type: "endUserLicenseAgreements";
    attributes: { agreementText: string };
    relationships: {
      app: { data: { type: "apps"; id: string } };
      territories: { data: { type: "territories"; id: string }[] };
    };
  };
}

export interface EndUserLicenseAgreementUpdateRequest {
  data: {
    type: "endUserLicenseAgreements";
    id: string;
    attributes?: { agreementText?: string };
    relationships?: { territories?: { data?: { type: "territories"; id: string }[] } };
  };
}

export interface GameCenterEnabledVersion {
  type: "gameCenterEnabledVersions";
  id: string;
  attributes?: { platform?: Platform; versionString?: string; iconAsset?: ImageAsset };
  relationships?: {
    compatibleVersions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "gameCenterEnabledVersions"; id: string }[];
    };
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
  };
  links: ResourceLinks;
}

export interface GameCenterEnabledVersionsResponse {
  data: GameCenterEnabledVersion[];
  included?: (GameCenterEnabledVersion | App)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface InAppPurchaseAppStoreReviewScreenshot {
  type: "inAppPurchaseAppStoreReviewScreenshots";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    imageAsset?: ImageAsset;
    assetToken?: string;
    assetType?: string;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
  };
  relationships?: {
    inAppPurchaseV2?: { links?: { self?: string; related?: string }; data?: { type: "inAppPurchases"; id: string } };
  };
  links: ResourceLinks;
}

export interface InAppPurchaseAppStoreReviewScreenshotResponse {
  data: InAppPurchaseAppStoreReviewScreenshot;
  included?: InAppPurchaseV2[];
  links: DocumentLinks;
}

export interface InAppPurchaseAppStoreReviewScreenshotCreateRequest {
  data: {
    type: "inAppPurchaseAppStoreReviewScreenshots";
    attributes: { fileSize: number; fileName: string };
    relationships: { inAppPurchaseV2: { data: { type: "inAppPurchases"; id: string } } };
  };
}

export interface InAppPurchaseAppStoreReviewScreenshotUpdateRequest {
  data: {
    type: "inAppPurchaseAppStoreReviewScreenshots";
    id: string;
    attributes?: { sourceFileChecksum?: string; uploaded?: boolean };
  };
}

export interface InAppPurchaseContent {
  type: "inAppPurchaseContents";
  id: string;
  attributes?: { fileName?: string; fileSize?: number; url?: string; lastModifiedDate?: string };
  relationships?: {
    inAppPurchaseV2?: { links?: { self?: string; related?: string }; data?: { type: "inAppPurchases"; id: string } };
  };
  links: ResourceLinks;
}

export interface InAppPurchaseContentResponse {
  data: InAppPurchaseContent;
  included?: InAppPurchaseV2[];
  links: DocumentLinks;
}

export interface InAppPurchaseLocalization {
  type: "inAppPurchaseLocalizations";
  id: string;
  attributes?: {
    name?: string;
    locale?: string;
    description?: string;
    state?: "PREPARE_FOR_SUBMISSION" | "WAITING_FOR_REVIEW" | "APPROVED" | "REJECTED";
  };
  relationships?: {
    inAppPurchaseV2?: { links?: { self?: string; related?: string }; data?: { type: "inAppPurchases"; id: string } };
  };
  links: ResourceLinks;
}

export interface InAppPurchaseLocalizationsResponse {
  data: InAppPurchaseLocalization[];
  included?: InAppPurchaseV2[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface InAppPurchaseLocalizationResponse {
  data: InAppPurchaseLocalization;
  included?: InAppPurchaseV2[];
  links: DocumentLinks;
}

export interface InAppPurchaseLocalizationCreateRequest {
  data: {
    type: "inAppPurchaseLocalizations";
    attributes: { name: string; locale: string; description?: string };
    relationships: { inAppPurchaseV2: { data: { type: "inAppPurchases"; id: string } } };
  };
}

export interface InAppPurchaseLocalizationUpdateRequest {
  data: { type: "inAppPurchaseLocalizations"; id: string; attributes?: { name?: string; description?: string } };
}

export interface InAppPurchasePricePoint {
  type: "inAppPurchasePricePoints";
  id: string;
  attributes?: { customerPrice?: string; proceeds?: string; priceTier?: string };
  relationships?: {
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
  };
  links: ResourceLinks;
}

export interface InAppPurchasePricePointsResponse {
  data: InAppPurchasePricePoint[];
  included?: Territory[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface InAppPurchasePriceSchedule {
  type: "inAppPurchasePriceSchedules";
  id: string;
  relationships?: {
    inAppPurchase?: { links?: { self?: string; related?: string }; data?: { type: "inAppPurchases"; id: string } };
    manualPrices?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "inAppPurchasePrices"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface InAppPurchasePriceScheduleResponse {
  data: InAppPurchasePriceSchedule;
  included?: (InAppPurchaseV2 | InAppPurchasePrice)[];
  links: DocumentLinks;
}

export interface InAppPurchasePriceScheduleCreateRequest {
  data: {
    type: "inAppPurchasePriceSchedules";
    relationships: {
      inAppPurchase: { data: { type: "inAppPurchases"; id: string } };
      manualPrices: { data: { type: "inAppPurchasePrices"; id: string }[] };
    };
  };
  included?: InAppPurchasePriceInlineCreate[];
}

export interface InAppPurchasePrice {
  type: "inAppPurchasePrices";
  id: string;
  attributes?: { startDate?: string };
  relationships?: {
    inAppPurchasePricePoint?: {
      links?: { self?: string; related?: string };
      data?: { type: "inAppPurchasePricePoints"; id: string };
    };
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
  };
  links: ResourceLinks;
}

export interface InAppPurchasePriceInlineCreate {
  type: "inAppPurchasePrices";
  id?: string;
  attributes?: { startDate?: string };
  relationships?: {
    inAppPurchaseV2?: { data?: { type: "inAppPurchases"; id: string } };
    inAppPurchasePricePoint?: { data?: { type: "inAppPurchasePricePoints"; id: string } };
  };
}

export interface InAppPurchasePricesResponse {
  data: InAppPurchasePrice[];
  included?: (InAppPurchasePricePoint | Territory)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface InAppPurchaseSubmission {
  type: "inAppPurchaseSubmissions";
  id: string;
  relationships?: {
    inAppPurchaseV2?: { links?: { self?: string; related?: string }; data?: { type: "inAppPurchases"; id: string } };
  };
  links: ResourceLinks;
}

export interface InAppPurchaseSubmissionResponse {
  data: InAppPurchaseSubmission;
  included?: InAppPurchaseV2[];
  links: DocumentLinks;
}

export interface InAppPurchaseSubmissionCreateRequest {
  data: {
    type: "inAppPurchaseSubmissions";
    relationships: { inAppPurchaseV2: { data: { type: "inAppPurchases"; id: string } } };
  };
}

export interface InAppPurchase {
  type: "inAppPurchases";
  id: string;
  attributes?: {
    referenceName?: string;
    productId?: string;
    inAppPurchaseType?:
      | "AUTOMATICALLY_RENEWABLE_SUBSCRIPTION"
      | "NON_CONSUMABLE"
      | "CONSUMABLE"
      | "NON_RENEWING_SUBSCRIPTION"
      | "FREE_SUBSCRIPTION";
    state?:
      | "CREATED"
      | "DEVELOPER_SIGNED_OFF"
      | "DEVELOPER_ACTION_NEEDED"
      | "DELETION_IN_PROGRESS"
      | "APPROVED"
      | "DELETED"
      | "REMOVED_FROM_SALE"
      | "DEVELOPER_REMOVED_FROM_SALE"
      | "WAITING_FOR_UPLOAD"
      | "PROCESSING_CONTENT"
      | "REPLACED"
      | "REJECTED"
      | "WAITING_FOR_SCREENSHOT"
      | "PREPARE_FOR_SUBMISSION"
      | "MISSING_METADATA"
      | "READY_TO_SUBMIT"
      | "WAITING_FOR_REVIEW"
      | "IN_REVIEW"
      | "PENDING_DEVELOPER_RELEASE";
  };
  relationships?: {
    apps?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "apps"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface InAppPurchasesResponse {
  data: InAppPurchase[];
  included?: App[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface InAppPurchaseResponse {
  data: InAppPurchase;
  included?: App[];
  links: DocumentLinks;
}

export interface InAppPurchaseV2 {
  type: "inAppPurchases";
  id: string;
  attributes?: {
    name?: string;
    productId?: string;
    inAppPurchaseType?: InAppPurchaseType;
    state?: InAppPurchaseState;
    reviewNote?: string;
    familySharable?: boolean;
    contentHosting?: boolean;
    availableInAllTerritories?: boolean;
  };
  relationships?: {
    inAppPurchaseLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "inAppPurchaseLocalizations"; id: string }[];
    };
    pricePoints?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "inAppPurchasePricePoints"; id: string }[];
    };
    content?: { links?: { self?: string; related?: string }; data?: { type: "inAppPurchaseContents"; id: string } };
    appStoreReviewScreenshot?: {
      links?: { self?: string; related?: string };
      data?: { type: "inAppPurchaseAppStoreReviewScreenshots"; id: string };
    };
    promotedPurchase?: {
      links?: { self?: string; related?: string };
      data?: { type: "promotedPurchases"; id: string };
    };
    iapPriceSchedule?: {
      links?: { self?: string; related?: string };
      data?: { type: "inAppPurchasePriceSchedules"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface InAppPurchasesV2Response {
  data: InAppPurchaseV2[];
  included?: (
    | InAppPurchaseLocalization
    | InAppPurchasePricePoint
    | InAppPurchaseContent
    | InAppPurchaseAppStoreReviewScreenshot
    | PromotedPurchase
    | InAppPurchasePriceSchedule
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface InAppPurchaseV2Response {
  data: InAppPurchaseV2;
  included?: (
    | InAppPurchaseLocalization
    | InAppPurchasePricePoint
    | InAppPurchaseContent
    | InAppPurchaseAppStoreReviewScreenshot
    | PromotedPurchase
    | InAppPurchasePriceSchedule
  )[];
  links: DocumentLinks;
}

export interface InAppPurchaseV2CreateRequest {
  data: {
    type: "inAppPurchases";
    attributes: {
      name: string;
      productId: string;
      inAppPurchaseType: InAppPurchaseType;
      reviewNote?: string;
      familySharable?: boolean;
      availableInAllTerritories?: boolean;
    };
    relationships: { app: { data: { type: "apps"; id: string } } };
  };
}

export interface InAppPurchaseV2UpdateRequest {
  data: {
    type: "inAppPurchases";
    id: string;
    attributes?: { name?: string; reviewNote?: string; familySharable?: boolean; availableInAllTerritories?: boolean };
  };
}

export interface PerfPowerMetric {
  type: "perfPowerMetrics";
  id: string;
  attributes?: {
    platform?: "IOS";
    metricType?: "DISK" | "HANG" | "BATTERY" | "LAUNCH" | "MEMORY" | "ANIMATION" | "TERMINATION";
    deviceType?: string;
  };
  links: ResourceLinks;
}

export interface PrereleaseVersion {
  type: "preReleaseVersions";
  id: string;
  attributes?: { version?: string; platform?: Platform };
  relationships?: {
    builds?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "builds"; id: string }[];
    };
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
  };
  links: ResourceLinks;
}

export interface PreReleaseVersionsResponse {
  data: PrereleaseVersion[];
  included?: (Build | App)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface PrereleaseVersionResponse {
  data: PrereleaseVersion;
  included?: (Build | App)[];
  links: DocumentLinks;
}

export interface Profile {
  type: "profiles";
  id: string;
  attributes?: {
    name?: string;
    platform?: BundleIdPlatform;
    profileType?:
      | "IOS_APP_DEVELOPMENT"
      | "IOS_APP_STORE"
      | "IOS_APP_ADHOC"
      | "IOS_APP_INHOUSE"
      | "MAC_APP_DEVELOPMENT"
      | "MAC_APP_STORE"
      | "MAC_APP_DIRECT"
      | "TVOS_APP_DEVELOPMENT"
      | "TVOS_APP_STORE"
      | "TVOS_APP_ADHOC"
      | "TVOS_APP_INHOUSE"
      | "MAC_CATALYST_APP_DEVELOPMENT"
      | "MAC_CATALYST_APP_STORE"
      | "MAC_CATALYST_APP_DIRECT";
    profileState?: "ACTIVE" | "INVALID";
    profileContent?: string;
    uuid?: string;
    createdDate?: string;
    expirationDate?: string;
  };
  relationships?: {
    bundleId?: { links?: { self?: string; related?: string }; data?: { type: "bundleIds"; id: string } };
    devices?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "devices"; id: string }[];
    };
    certificates?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "certificates"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface ProfilesResponse {
  data: Profile[];
  included?: (BundleId | Device | Certificate)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface ProfileResponse {
  data: Profile;
  included?: (BundleId | Device | Certificate)[];
  links: DocumentLinks;
}

export interface ProfileCreateRequest {
  data: {
    type: "profiles";
    attributes: {
      name: string;
      profileType:
        | "IOS_APP_DEVELOPMENT"
        | "IOS_APP_STORE"
        | "IOS_APP_ADHOC"
        | "IOS_APP_INHOUSE"
        | "MAC_APP_DEVELOPMENT"
        | "MAC_APP_STORE"
        | "MAC_APP_DIRECT"
        | "TVOS_APP_DEVELOPMENT"
        | "TVOS_APP_STORE"
        | "TVOS_APP_ADHOC"
        | "TVOS_APP_INHOUSE"
        | "MAC_CATALYST_APP_DEVELOPMENT"
        | "MAC_CATALYST_APP_STORE"
        | "MAC_CATALYST_APP_DIRECT";
    };
    relationships: {
      bundleId: { data: { type: "bundleIds"; id: string } };
      devices?: { data?: { type: "devices"; id: string }[] };
      certificates: { data: { type: "certificates"; id: string }[] };
    };
  };
}

export interface PromotedPurchaseImage {
  type: "promotedPurchaseImages";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    assetToken?: string;
    imageAsset?: ImageAsset;
    assetType?: string;
    uploadOperations?: UploadOperation[];
    state?:
      | "AWAITING_UPLOAD"
      | "UPLOAD_COMPLETE"
      | "FAILED"
      | "PREPARE_FOR_SUBMISSION"
      | "WAITING_FOR_REVIEW"
      | "APPROVED"
      | "REJECTED";
  };
  relationships?: {
    promotedPurchase?: {
      links?: { self?: string; related?: string };
      data?: { type: "promotedPurchases"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface PromotedPurchaseImagesResponse {
  data: PromotedPurchaseImage[];
  included?: PromotedPurchase[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface PromotedPurchaseImageResponse {
  data: PromotedPurchaseImage;
  included?: PromotedPurchase[];
  links: DocumentLinks;
}

export interface PromotedPurchaseImageCreateRequest {
  data: {
    type: "promotedPurchaseImages";
    attributes: { fileSize: number; fileName: string };
    relationships: { promotedPurchase: { data: { type: "promotedPurchases"; id: string } } };
  };
}

export interface PromotedPurchaseImageUpdateRequest {
  data: {
    type: "promotedPurchaseImages";
    id: string;
    attributes?: { sourceFileChecksum?: string; uploaded?: boolean };
  };
}

export interface PromotedPurchase {
  type: "promotedPurchases";
  id: string;
  attributes?: {
    visibleForAllUsers?: boolean;
    enabled?: boolean;
    state?: "APPROVED" | "IN_REVIEW" | "PREPARE_FOR_SUBMISSION" | "REJECTED";
  };
  relationships?: {
    inAppPurchaseV2?: { links?: { self?: string; related?: string }; data?: { type: "inAppPurchases"; id: string } };
    subscription?: { links?: { self?: string; related?: string }; data?: { type: "subscriptions"; id: string } };
    promotionImages?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "promotedPurchaseImages"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface PromotedPurchasesResponse {
  data: PromotedPurchase[];
  included?: (InAppPurchaseV2 | Subscription | PromotedPurchaseImage)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface PromotedPurchaseResponse {
  data: PromotedPurchase;
  included?: (InAppPurchaseV2 | Subscription | PromotedPurchaseImage)[];
  links: DocumentLinks;
}

export interface PromotedPurchaseCreateRequest {
  data: {
    type: "promotedPurchases";
    attributes: { visibleForAllUsers: boolean; enabled?: boolean };
    relationships: {
      app: { data: { type: "apps"; id: string } };
      inAppPurchaseV2?: { data?: { type: "inAppPurchases"; id: string } };
      subscription?: { data?: { type: "subscriptions"; id: string } };
    };
  };
}

export interface PromotedPurchaseUpdateRequest {
  data: { type: "promotedPurchases"; id: string; attributes?: { visibleForAllUsers?: boolean; enabled?: boolean } };
}

export interface ReviewSubmissionItem {
  type: "reviewSubmissionItems";
  id: string;
  attributes?: { state?: "READY_FOR_REVIEW" | "ACCEPTED" | "APPROVED" | "REJECTED" | "REMOVED" };
  relationships?: {
    appStoreVersion?: { links?: { self?: string; related?: string }; data?: { type: "appStoreVersions"; id: string } };
    appCustomProductPageVersion?: {
      links?: { self?: string; related?: string };
      data?: { type: "appCustomProductPageVersions"; id: string };
    };
    appStoreVersionExperiment?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersionExperiments"; id: string };
    };
    appEvent?: { links?: { self?: string; related?: string }; data?: { type: "appEvents"; id: string } };
  };
  links: ResourceLinks;
}

export interface ReviewSubmissionItemsResponse {
  data: ReviewSubmissionItem[];
  included?: (AppStoreVersion | AppCustomProductPageVersion | AppStoreVersionExperiment | AppEvent)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface ReviewSubmissionItemResponse {
  data: ReviewSubmissionItem;
  included?: (AppStoreVersion | AppCustomProductPageVersion | AppStoreVersionExperiment | AppEvent)[];
  links: DocumentLinks;
}

export interface ReviewSubmissionItemCreateRequest {
  data: {
    type: "reviewSubmissionItems";
    relationships: {
      reviewSubmission: { data: { type: "reviewSubmissions"; id: string } };
      appStoreVersion?: { data?: { type: "appStoreVersions"; id: string } };
      appCustomProductPageVersion?: { data?: { type: "appCustomProductPageVersions"; id: string } };
      appStoreVersionExperiment?: { data?: { type: "appStoreVersionExperiments"; id: string } };
      appEvent?: { data?: { type: "appEvents"; id: string } };
    };
  };
}

export interface ReviewSubmissionItemUpdateRequest {
  data: { type: "reviewSubmissionItems"; id: string; attributes?: { resolved?: boolean; removed?: boolean } };
}

export interface ReviewSubmission {
  type: "reviewSubmissions";
  id: string;
  attributes?: {
    platform?: Platform;
    submittedDate?: string;
    state?:
      | "READY_FOR_REVIEW"
      | "WAITING_FOR_REVIEW"
      | "IN_REVIEW"
      | "UNRESOLVED_ISSUES"
      | "CANCELING"
      | "COMPLETING"
      | "COMPLETE";
  };
  relationships?: {
    app?: { links?: { self?: string; related?: string }; data?: { type: "apps"; id: string } };
    items?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "reviewSubmissionItems"; id: string }[];
    };
    appStoreVersionForReview?: {
      links?: { self?: string; related?: string };
      data?: { type: "appStoreVersions"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface ReviewSubmissionsResponse {
  data: ReviewSubmission[];
  included?: (App | ReviewSubmissionItem | AppStoreVersion)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface ReviewSubmissionResponse {
  data: ReviewSubmission;
  included?: (App | ReviewSubmissionItem | AppStoreVersion)[];
  links: DocumentLinks;
}

export interface ReviewSubmissionCreateRequest {
  data: {
    type: "reviewSubmissions";
    attributes: { platform: Platform };
    relationships: { app: { data: { type: "apps"; id: string } } };
  };
}

export interface ReviewSubmissionUpdateRequest {
  data: { type: "reviewSubmissions"; id: string; attributes?: { submitted?: boolean; canceled?: boolean } };
}

export interface RoutingAppCoverage {
  type: "routingAppCoverages";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
  };
  relationships?: {
    appStoreVersion?: { links?: { self?: string; related?: string }; data?: { type: "appStoreVersions"; id: string } };
  };
  links: ResourceLinks;
}

export interface RoutingAppCoverageResponse {
  data: RoutingAppCoverage;
  included?: AppStoreVersion[];
  links: DocumentLinks;
}

export interface RoutingAppCoverageCreateRequest {
  data: {
    type: "routingAppCoverages";
    attributes: { fileSize: number; fileName: string };
    relationships: { appStoreVersion: { data: { type: "appStoreVersions"; id: string } } };
  };
}

export interface RoutingAppCoverageUpdateRequest {
  data: { type: "routingAppCoverages"; id: string; attributes?: { sourceFileChecksum?: string; uploaded?: boolean } };
}

export interface ScmGitReference {
  type: "scmGitReferences";
  id: string;
  attributes?: { name?: string; canonicalName?: string; isDeleted?: boolean; kind?: CiGitRefKind };
  relationships?: {
    repository?: { links?: { self?: string; related?: string }; data?: { type: "scmRepositories"; id: string } };
  };
  links: ResourceLinks;
}

export interface ScmGitReferencesResponse {
  data: ScmGitReference[];
  included?: ScmRepository[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface ScmGitReferenceResponse {
  data: ScmGitReference;
  included?: ScmRepository[];
  links: DocumentLinks;
}

export interface ScmProvider {
  type: "scmProviders";
  id: string;
  attributes?: { scmProviderType?: ScmProviderType; url?: string };
  links: ResourceLinks;
}

export interface ScmProvidersResponse {
  data: ScmProvider[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface ScmProviderResponse {
  data: ScmProvider;
  links: DocumentLinks;
}

export interface ScmPullRequest {
  type: "scmPullRequests";
  id: string;
  attributes?: {
    title?: string;
    number?: number;
    webUrl?: string;
    sourceRepositoryOwner?: string;
    sourceRepositoryName?: string;
    sourceBranchName?: string;
    destinationRepositoryOwner?: string;
    destinationRepositoryName?: string;
    destinationBranchName?: string;
    isClosed?: boolean;
    isCrossRepository?: boolean;
  };
  relationships?: {
    repository?: { links?: { self?: string; related?: string }; data?: { type: "scmRepositories"; id: string } };
  };
  links: ResourceLinks;
}

export interface ScmPullRequestsResponse {
  data: ScmPullRequest[];
  included?: ScmRepository[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface ScmPullRequestResponse {
  data: ScmPullRequest;
  included?: ScmRepository[];
  links: DocumentLinks;
}

export interface ScmRepository {
  type: "scmRepositories";
  id: string;
  attributes?: {
    lastAccessedDate?: string;
    httpCloneUrl?: string;
    sshCloneUrl?: string;
    ownerName?: string;
    repositoryName?: string;
  };
  relationships?: {
    scmProvider?: { links?: { self?: string; related?: string }; data?: { type: "scmProviders"; id: string } };
    defaultBranch?: { links?: { self?: string; related?: string }; data?: { type: "scmGitReferences"; id: string } };
  };
  links: ResourceLinks;
}

export interface ScmRepositoriesResponse {
  data: ScmRepository[];
  included?: (ScmProvider | ScmGitReference)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface ScmRepositoryResponse {
  data: ScmRepository;
  included?: (ScmProvider | ScmGitReference)[];
  links: DocumentLinks;
}

export interface SubscriptionAppStoreReviewScreenshot {
  type: "subscriptionAppStoreReviewScreenshots";
  id: string;
  attributes?: {
    fileSize?: number;
    fileName?: string;
    sourceFileChecksum?: string;
    imageAsset?: ImageAsset;
    assetToken?: string;
    assetType?: string;
    uploadOperations?: UploadOperation[];
    assetDeliveryState?: AppMediaAssetState;
  };
  relationships?: {
    subscription?: { links?: { self?: string; related?: string }; data?: { type: "subscriptions"; id: string } };
  };
  links: ResourceLinks;
}

export interface SubscriptionAppStoreReviewScreenshotResponse {
  data: SubscriptionAppStoreReviewScreenshot;
  included?: Subscription[];
  links: DocumentLinks;
}

export interface SubscriptionAppStoreReviewScreenshotCreateRequest {
  data: {
    type: "subscriptionAppStoreReviewScreenshots";
    attributes: { fileSize: number; fileName: string };
    relationships: { subscription: { data: { type: "subscriptions"; id: string } } };
  };
}

export interface SubscriptionAppStoreReviewScreenshotUpdateRequest {
  data: {
    type: "subscriptionAppStoreReviewScreenshots";
    id: string;
    attributes?: { sourceFileChecksum?: string; uploaded?: boolean };
  };
}

export interface SubscriptionGracePeriod {
  type: "subscriptionGracePeriods";
  id: string;
  attributes?: { optIn?: boolean };
  links: ResourceLinks;
}

export interface SubscriptionGracePeriodResponse {
  data: SubscriptionGracePeriod;
  links: DocumentLinks;
}

export interface SubscriptionGracePeriodUpdateRequest {
  data: {
    type: "subscriptionGracePeriods";
    id: string;
    attributes?: { optIn?: boolean };
    relationships?: { app?: { data?: { type: "apps"; id: string } } };
  };
  included?: AppInlineCreate[];
}

export interface SubscriptionGroupLocalization {
  type: "subscriptionGroupLocalizations";
  id: string;
  attributes?: {
    name?: string;
    customAppName?: string;
    locale?: string;
    state?: "PREPARE_FOR_SUBMISSION" | "WAITING_FOR_REVIEW" | "APPROVED" | "REJECTED";
  };
  relationships?: {
    subscriptionGroup?: {
      links?: { self?: string; related?: string };
      data?: { type: "subscriptionGroups"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionGroupLocalizationsResponse {
  data: SubscriptionGroupLocalization[];
  included?: SubscriptionGroup[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionGroupLocalizationResponse {
  data: SubscriptionGroupLocalization;
  included?: SubscriptionGroup[];
  links: DocumentLinks;
}

export interface SubscriptionGroupLocalizationCreateRequest {
  data: {
    type: "subscriptionGroupLocalizations";
    attributes: { name: string; customAppName?: string; locale: string };
    relationships: { subscriptionGroup: { data: { type: "subscriptionGroups"; id: string } } };
  };
}

export interface SubscriptionGroupLocalizationUpdateRequest {
  data: { type: "subscriptionGroupLocalizations"; id: string; attributes?: { name?: string; customAppName?: string } };
}

export interface SubscriptionGroupSubmission {
  type: "subscriptionGroupSubmissions";
  id: string;
  links: ResourceLinks;
}

export interface SubscriptionGroupSubmissionResponse {
  data: SubscriptionGroupSubmission;
  links: DocumentLinks;
}

export interface SubscriptionGroupSubmissionCreateRequest {
  data: {
    type: "subscriptionGroupSubmissions";
    relationships: { subscriptionGroup: { data: { type: "subscriptionGroups"; id: string } } };
  };
}

export interface SubscriptionGroup {
  type: "subscriptionGroups";
  id: string;
  attributes?: { referenceName?: string };
  relationships?: {
    subscriptions?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptions"; id: string }[];
    };
    subscriptionGroupLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionGroupLocalizations"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionGroupsResponse {
  data: SubscriptionGroup[];
  included?: (Subscription | SubscriptionGroupLocalization)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionGroupResponse {
  data: SubscriptionGroup;
  included?: (Subscription | SubscriptionGroupLocalization)[];
  links: DocumentLinks;
}

export interface SubscriptionGroupCreateRequest {
  data: {
    type: "subscriptionGroups";
    attributes: { referenceName: string };
    relationships: { app: { data: { type: "apps"; id: string } } };
  };
}

export interface SubscriptionGroupUpdateRequest {
  data: { type: "subscriptionGroups"; id: string; attributes?: { referenceName?: string } };
}

export interface SubscriptionIntroductoryOffer {
  type: "subscriptionIntroductoryOffers";
  id: string;
  attributes?: {
    startDate?: string;
    endDate?: string;
    duration?: SubscriptionOfferDuration;
    offerMode?: SubscriptionOfferMode;
    numberOfPeriods?: number;
  };
  relationships?: {
    subscription?: { links?: { self?: string; related?: string }; data?: { type: "subscriptions"; id: string } };
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
    subscriptionPricePoint?: {
      links?: { self?: string; related?: string };
      data?: { type: "subscriptionPricePoints"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionIntroductoryOfferInlineCreate {
  type: "subscriptionIntroductoryOffers";
  id?: string;
  attributes: {
    startDate?: string;
    endDate?: string;
    duration: SubscriptionOfferDuration;
    offerMode: SubscriptionOfferMode;
    numberOfPeriods: number;
  };
  relationships?: {
    subscription?: { data?: { type: "subscriptions"; id: string } };
    territory?: { data?: { type: "territories"; id: string } };
    subscriptionPricePoint?: { data?: { type: "subscriptionPricePoints"; id: string } };
  };
}

export interface SubscriptionIntroductoryOffersResponse {
  data: SubscriptionIntroductoryOffer[];
  included?: (Subscription | Territory | SubscriptionPricePoint)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionIntroductoryOfferResponse {
  data: SubscriptionIntroductoryOffer;
  included?: (Subscription | Territory | SubscriptionPricePoint)[];
  links: DocumentLinks;
}

export interface SubscriptionIntroductoryOfferCreateRequest {
  data: {
    type: "subscriptionIntroductoryOffers";
    attributes: {
      startDate?: string;
      endDate?: string;
      duration: SubscriptionOfferDuration;
      offerMode: SubscriptionOfferMode;
      numberOfPeriods: number;
    };
    relationships: {
      subscription: { data: { type: "subscriptions"; id: string } };
      territory?: { data?: { type: "territories"; id: string } };
      subscriptionPricePoint?: { data?: { type: "subscriptionPricePoints"; id: string } };
    };
  };
  included?: SubscriptionPricePointInlineCreate[];
}

export interface SubscriptionIntroductoryOfferUpdateRequest {
  data: { type: "subscriptionIntroductoryOffers"; id: string; attributes?: { endDate?: string } };
}

export interface SubscriptionLocalization {
  type: "subscriptionLocalizations";
  id: string;
  attributes?: {
    name?: string;
    locale?: string;
    description?: string;
    state?: "PREPARE_FOR_SUBMISSION" | "WAITING_FOR_REVIEW" | "APPROVED" | "REJECTED";
  };
  relationships?: {
    subscription?: { links?: { self?: string; related?: string }; data?: { type: "subscriptions"; id: string } };
  };
  links: ResourceLinks;
}

export interface SubscriptionLocalizationsResponse {
  data: SubscriptionLocalization[];
  included?: Subscription[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionLocalizationResponse {
  data: SubscriptionLocalization;
  included?: Subscription[];
  links: DocumentLinks;
}

export interface SubscriptionLocalizationCreateRequest {
  data: {
    type: "subscriptionLocalizations";
    attributes: { name: string; locale: string; description?: string };
    relationships: { subscription: { data: { type: "subscriptions"; id: string } } };
  };
}

export interface SubscriptionLocalizationUpdateRequest {
  data: { type: "subscriptionLocalizations"; id: string; attributes?: { name?: string; description?: string } };
}

export interface SubscriptionOfferCodeCustomCode {
  type: "subscriptionOfferCodeCustomCodes";
  id: string;
  attributes?: {
    customCode?: string;
    numberOfCodes?: number;
    createdDate?: string;
    expirationDate?: string;
    active?: boolean;
  };
  relationships?: {
    offerCode?: { links?: { self?: string; related?: string }; data?: { type: "subscriptionOfferCodes"; id: string } };
  };
  links: ResourceLinks;
}

export interface SubscriptionOfferCodeCustomCodesResponse {
  data: SubscriptionOfferCodeCustomCode[];
  included?: SubscriptionOfferCode[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionOfferCodeCustomCodeResponse {
  data: SubscriptionOfferCodeCustomCode;
  included?: SubscriptionOfferCode[];
  links: DocumentLinks;
}

export interface SubscriptionOfferCodeCustomCodeCreateRequest {
  data: {
    type: "subscriptionOfferCodeCustomCodes";
    attributes: { customCode: string; numberOfCodes: number; expirationDate?: string };
    relationships: { offerCode: { data: { type: "subscriptionOfferCodes"; id: string } } };
  };
}

export interface SubscriptionOfferCodeCustomCodeUpdateRequest {
  data: { type: "subscriptionOfferCodeCustomCodes"; id: string; attributes?: { active?: boolean } };
}

export interface SubscriptionOfferCodeOneTimeUseCodeValue {
  type: "subscriptionOfferCodeOneTimeUseCodeValues";
  id: string;
  links: ResourceLinks;
}

export interface SubscriptionOfferCodeOneTimeUseCode {
  type: "subscriptionOfferCodeOneTimeUseCodes";
  id: string;
  attributes?: { numberOfCodes?: number; createdDate?: string; expirationDate?: string; active?: boolean };
  relationships?: {
    offerCode?: { links?: { self?: string; related?: string }; data?: { type: "subscriptionOfferCodes"; id: string } };
  };
  links: ResourceLinks;
}

export interface SubscriptionOfferCodeOneTimeUseCodesResponse {
  data: SubscriptionOfferCodeOneTimeUseCode[];
  included?: SubscriptionOfferCode[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionOfferCodeOneTimeUseCodeResponse {
  data: SubscriptionOfferCodeOneTimeUseCode;
  included?: SubscriptionOfferCode[];
  links: DocumentLinks;
}

export interface SubscriptionOfferCodeOneTimeUseCodeCreateRequest {
  data: {
    type: "subscriptionOfferCodeOneTimeUseCodes";
    attributes: { numberOfCodes: number; expirationDate: string };
    relationships: { offerCode: { data: { type: "subscriptionOfferCodes"; id: string } } };
  };
}

export interface SubscriptionOfferCodeOneTimeUseCodeUpdateRequest {
  data: { type: "subscriptionOfferCodeOneTimeUseCodes"; id: string; attributes?: { active?: boolean } };
}

export interface SubscriptionOfferCodePrice {
  type: "subscriptionOfferCodePrices";
  id: string;
  relationships?: {
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
    subscriptionPricePoint?: {
      links?: { self?: string; related?: string };
      data?: { type: "subscriptionPricePoints"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionOfferCodePriceInlineCreate {
  type: "subscriptionOfferCodePrices";
  id?: string;
  relationships?: {
    territory?: { data?: { type: "territories"; id: string } };
    subscriptionPricePoint?: { data?: { type: "subscriptionPricePoints"; id: string } };
  };
}

export interface SubscriptionOfferCodePricesResponse {
  data: SubscriptionOfferCodePrice[];
  included?: (Territory | SubscriptionPricePoint)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionOfferCode {
  type: "subscriptionOfferCodes";
  id: string;
  attributes?: {
    name?: string;
    customerEligibilities?: SubscriptionCustomerEligibility[];
    offerEligibility?: SubscriptionOfferEligibility;
    duration?: SubscriptionOfferDuration;
    offerMode?: SubscriptionOfferMode;
    numberOfPeriods?: number;
    totalNumberOfCodes?: number;
    active?: boolean;
  };
  relationships?: {
    subscription?: { links?: { self?: string; related?: string }; data?: { type: "subscriptions"; id: string } };
    oneTimeUseCodes?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionOfferCodeOneTimeUseCodes"; id: string }[];
    };
    customCodes?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionOfferCodeCustomCodes"; id: string }[];
    };
    prices?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionOfferCodePrices"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionOfferCodesResponse {
  data: SubscriptionOfferCode[];
  included?: (
    | Subscription
    | SubscriptionOfferCodeOneTimeUseCode
    | SubscriptionOfferCodeCustomCode
    | SubscriptionOfferCodePrice
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionOfferCodeResponse {
  data: SubscriptionOfferCode;
  included?: (
    | Subscription
    | SubscriptionOfferCodeOneTimeUseCode
    | SubscriptionOfferCodeCustomCode
    | SubscriptionOfferCodePrice
  )[];
  links: DocumentLinks;
}

export interface SubscriptionOfferCodeCreateRequest {
  data: {
    type: "subscriptionOfferCodes";
    attributes: {
      name: string;
      customerEligibilities: SubscriptionCustomerEligibility[];
      offerEligibility: SubscriptionOfferEligibility;
      duration: SubscriptionOfferDuration;
      offerMode: SubscriptionOfferMode;
      numberOfPeriods: number;
    };
    relationships: {
      subscription: { data: { type: "subscriptions"; id: string } };
      prices: { data: { type: "subscriptionOfferCodePrices"; id: string }[] };
    };
  };
  included?: SubscriptionOfferCodePriceInlineCreate[];
}

export interface SubscriptionOfferCodeUpdateRequest {
  data: { type: "subscriptionOfferCodes"; id: string; attributes?: { active?: boolean } };
}

export interface SubscriptionPricePoint {
  type: "subscriptionPricePoints";
  id: string;
  attributes?: { customerPrice?: string; proceeds?: string; proceedsYear2?: string };
  relationships?: {
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
  };
  links: ResourceLinks;
}

export interface SubscriptionPricePointInlineCreate {
  type: "subscriptionPricePoints";
  id?: string;
}

export interface SubscriptionPricePointsResponse {
  data: SubscriptionPricePoint[];
  included?: Territory[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionPricePointResponse {
  data: SubscriptionPricePoint;
  included?: Territory[];
  links: DocumentLinks;
}

export interface SubscriptionPrice {
  type: "subscriptionPrices";
  id: string;
  attributes?: { startDate?: string; preserved?: boolean };
  relationships?: {
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
    subscriptionPricePoint?: {
      links?: { self?: string; related?: string };
      data?: { type: "subscriptionPricePoints"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionPriceInlineCreate {
  type: "subscriptionPrices";
  id?: string;
  attributes?: { startDate?: string; preserveCurrentPrice?: boolean };
  relationships?: {
    subscription?: { data?: { type: "subscriptions"; id: string } };
    territory?: { data?: { type: "territories"; id: string } };
    subscriptionPricePoint?: { data?: { type: "subscriptionPricePoints"; id: string } };
  };
}

export interface SubscriptionPricesResponse {
  data: SubscriptionPrice[];
  included?: (Territory | SubscriptionPricePoint)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionPriceResponse {
  data: SubscriptionPrice;
  included?: (Territory | SubscriptionPricePoint)[];
  links: DocumentLinks;
}

export interface SubscriptionPriceCreateRequest {
  data: {
    type: "subscriptionPrices";
    attributes?: { startDate?: string; preserveCurrentPrice?: boolean };
    relationships: {
      subscription: { data: { type: "subscriptions"; id: string } };
      territory?: { data?: { type: "territories"; id: string } };
      subscriptionPricePoint: { data: { type: "subscriptionPricePoints"; id: string } };
    };
  };
}

export interface SubscriptionPromotionalOfferPrice {
  type: "subscriptionPromotionalOfferPrices";
  id: string;
  relationships?: {
    territory?: { links?: { self?: string; related?: string }; data?: { type: "territories"; id: string } };
    subscriptionPricePoint?: {
      links?: { self?: string; related?: string };
      data?: { type: "subscriptionPricePoints"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionPromotionalOfferPriceInlineCreate {
  type: "subscriptionPromotionalOfferPrices";
  id?: string;
  relationships?: {
    territory?: { data?: { type: "territories"; id: string } };
    subscriptionPricePoint?: { data?: { type: "subscriptionPricePoints"; id: string } };
  };
}

export interface SubscriptionPromotionalOfferPricesResponse {
  data: SubscriptionPromotionalOfferPrice[];
  included?: (Territory | SubscriptionPricePoint)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionPromotionalOffer {
  type: "subscriptionPromotionalOffers";
  id: string;
  attributes?: {
    name?: string;
    offerCode?: string;
    duration?: SubscriptionOfferDuration;
    offerMode?: SubscriptionOfferMode;
    numberOfPeriods?: number;
  };
  relationships?: {
    subscription?: { links?: { self?: string; related?: string }; data?: { type: "subscriptions"; id: string } };
    prices?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionPromotionalOfferPrices"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionPromotionalOfferInlineCreate {
  type: "subscriptionPromotionalOffers";
  id?: string;
  attributes: {
    name: string;
    offerCode: string;
    duration: SubscriptionOfferDuration;
    offerMode: SubscriptionOfferMode;
    numberOfPeriods: number;
  };
  relationships?: {
    subscription?: { data?: { type: "subscriptions"; id: string } };
    prices?: { data?: { type: "subscriptionPromotionalOfferPrices"; id: string }[] };
  };
}

export interface SubscriptionPromotionalOffersResponse {
  data: SubscriptionPromotionalOffer[];
  included?: (Subscription | SubscriptionPromotionalOfferPrice)[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionPromotionalOfferResponse {
  data: SubscriptionPromotionalOffer;
  included?: (Subscription | SubscriptionPromotionalOfferPrice)[];
  links: DocumentLinks;
}

export interface SubscriptionPromotionalOfferCreateRequest {
  data: {
    type: "subscriptionPromotionalOffers";
    attributes: {
      name: string;
      offerCode: string;
      duration: SubscriptionOfferDuration;
      offerMode: SubscriptionOfferMode;
      numberOfPeriods: number;
    };
    relationships: {
      subscription: { data: { type: "subscriptions"; id: string } };
      prices: { data: { type: "subscriptionPromotionalOfferPrices"; id: string }[] };
    };
  };
  included?: SubscriptionPromotionalOfferPriceInlineCreate[];
}

export interface SubscriptionPromotionalOfferUpdateRequest {
  data: {
    type: "subscriptionPromotionalOffers";
    id: string;
    relationships?: { prices?: { data?: { type: "subscriptionPromotionalOfferPrices"; id: string }[] } };
  };
  included?: SubscriptionPromotionalOfferPriceInlineCreate[];
}

export interface SubscriptionSubmission {
  type: "subscriptionSubmissions";
  id: string;
  relationships?: {
    subscription?: { links?: { self?: string; related?: string }; data?: { type: "subscriptions"; id: string } };
  };
  links: ResourceLinks;
}

export interface SubscriptionSubmissionResponse {
  data: SubscriptionSubmission;
  included?: Subscription[];
  links: DocumentLinks;
}

export interface SubscriptionSubmissionCreateRequest {
  data: {
    type: "subscriptionSubmissions";
    relationships: { subscription: { data: { type: "subscriptions"; id: string } } };
  };
}

export interface Subscription {
  type: "subscriptions";
  id: string;
  attributes?: {
    name?: string;
    productId?: string;
    familySharable?: boolean;
    state?:
      | "MISSING_METADATA"
      | "READY_TO_SUBMIT"
      | "WAITING_FOR_REVIEW"
      | "IN_REVIEW"
      | "DEVELOPER_ACTION_NEEDED"
      | "PENDING_BINARY_APPROVAL"
      | "APPROVED"
      | "DEVELOPER_REMOVED_FROM_SALE"
      | "REMOVED_FROM_SALE"
      | "REJECTED";
    subscriptionPeriod?: "ONE_WEEK" | "ONE_MONTH" | "TWO_MONTHS" | "THREE_MONTHS" | "SIX_MONTHS" | "ONE_YEAR";
    reviewNote?: string;
    groupLevel?: number;
    availableInAllTerritories?: boolean;
  };
  relationships?: {
    subscriptionLocalizations?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionLocalizations"; id: string }[];
    };
    appStoreReviewScreenshot?: {
      links?: { self?: string; related?: string };
      data?: { type: "subscriptionAppStoreReviewScreenshots"; id: string };
    };
    group?: { links?: { self?: string; related?: string }; data?: { type: "subscriptionGroups"; id: string } };
    introductoryOffers?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionIntroductoryOffers"; id: string }[];
    };
    promotionalOffers?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionPromotionalOffers"; id: string }[];
    };
    offerCodes?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionOfferCodes"; id: string }[];
    };
    prices?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "subscriptionPrices"; id: string }[];
    };
    promotedPurchase?: {
      links?: { self?: string; related?: string };
      data?: { type: "promotedPurchases"; id: string };
    };
  };
  links: ResourceLinks;
}

export interface SubscriptionsResponse {
  data: Subscription[];
  included?: (
    | SubscriptionLocalization
    | SubscriptionAppStoreReviewScreenshot
    | SubscriptionGroup
    | SubscriptionIntroductoryOffer
    | SubscriptionPromotionalOffer
    | SubscriptionOfferCode
    | SubscriptionPrice
    | PromotedPurchase
  )[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionResponse {
  data: Subscription;
  included?: (
    | SubscriptionLocalization
    | SubscriptionAppStoreReviewScreenshot
    | SubscriptionGroup
    | SubscriptionIntroductoryOffer
    | SubscriptionPromotionalOffer
    | SubscriptionOfferCode
    | SubscriptionPrice
    | PromotedPurchase
  )[];
  links: DocumentLinks;
}

export interface SubscriptionCreateRequest {
  data: {
    type: "subscriptions";
    attributes: {
      name: string;
      productId: string;
      familySharable?: boolean;
      subscriptionPeriod?: "ONE_WEEK" | "ONE_MONTH" | "TWO_MONTHS" | "THREE_MONTHS" | "SIX_MONTHS" | "ONE_YEAR";
      reviewNote?: string;
      groupLevel?: number;
      availableInAllTerritories?: boolean;
    };
    relationships: { group: { data: { type: "subscriptionGroups"; id: string } } };
  };
}

export interface SubscriptionUpdateRequest {
  data: {
    type: "subscriptions";
    id: string;
    attributes?: {
      name?: string;
      familySharable?: boolean;
      subscriptionPeriod?: "ONE_WEEK" | "ONE_MONTH" | "TWO_MONTHS" | "THREE_MONTHS" | "SIX_MONTHS" | "ONE_YEAR";
      reviewNote?: string;
      groupLevel?: number;
      availableInAllTerritories?: boolean;
    };
    relationships?: {
      introductoryOffers?: { data?: { type: "subscriptionIntroductoryOffers"; id: string }[] };
      promotionalOffers?: { data?: { type: "subscriptionPromotionalOffers"; id: string }[] };
      prices?: { data?: { type: "subscriptionPrices"; id: string }[] };
    };
  };
  included?: (
    | SubscriptionPromotionalOfferInlineCreate
    | SubscriptionPriceInlineCreate
    | SubscriptionIntroductoryOfferInlineCreate
  )[];
}

export interface Territory {
  type: "territories";
  id: string;
  attributes?: { currency?: string };
  links: ResourceLinks;
}

export interface TerritoriesResponse {
  data: Territory[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface TerritoryResponse {
  data: Territory;
  links: DocumentLinks;
}

export interface UserInvitation {
  type: "userInvitations";
  id: string;
  attributes?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    expirationDate?: string;
    roles?: UserRole[];
    allAppsVisible?: boolean;
    provisioningAllowed?: boolean;
  };
  relationships?: {
    visibleApps?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "apps"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface UserInvitationsResponse {
  data: UserInvitation[];
  included?: App[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface UserInvitationResponse {
  data: UserInvitation;
  included?: App[];
  links: DocumentLinks;
}

export interface UserInvitationCreateRequest {
  data: {
    type: "userInvitations";
    attributes: {
      email: string;
      firstName: string;
      lastName: string;
      roles: UserRole[];
      allAppsVisible?: boolean;
      provisioningAllowed?: boolean;
    };
    relationships?: { visibleApps?: { data?: { type: "apps"; id: string }[] } };
  };
}

export interface User {
  type: "users";
  id: string;
  attributes?: {
    username?: string;
    firstName?: string;
    lastName?: string;
    roles?: UserRole[];
    allAppsVisible?: boolean;
    provisioningAllowed?: boolean;
  };
  relationships?: {
    visibleApps?: {
      links?: { self?: string; related?: string };
      meta?: PagingInformation;
      data?: { type: "apps"; id: string }[];
    };
  };
  links: ResourceLinks;
}

export interface UsersResponse {
  data: User[];
  included?: App[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface UserResponse {
  data: User;
  included?: App[];
  links: DocumentLinks;
}

export interface UserUpdateRequest {
  data: {
    type: "users";
    id: string;
    attributes?: { roles?: UserRole[]; allAppsVisible?: boolean; provisioningAllowed?: boolean };
    relationships?: { visibleApps?: { data?: { type: "apps"; id: string }[] } };
  };
}

export interface AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse {
  data: { type: "appStoreVersions"; id: string };
  links: DocumentLinks;
}

export interface AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest {
  data: { type: "appStoreVersions"; id: string };
}

export interface AppEncryptionDeclarationBuildsLinkagesRequest {
  data: { type: "builds"; id: string }[];
}

export interface AppPreviewSetAppPreviewsLinkagesResponse {
  data: { type: "appPreviews"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppPreviewSetAppPreviewsLinkagesRequest {
  data: { type: "appPreviews"; id: string }[];
}

export interface AppScreenshotSetAppScreenshotsLinkagesResponse {
  data: { type: "appScreenshots"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppScreenshotSetAppScreenshotsLinkagesRequest {
  data: { type: "appScreenshots"; id: string }[];
}

export interface AppStoreVersionAppClipDefaultExperienceLinkageResponse {
  data: { type: "appClipDefaultExperiences"; id: string };
  links: DocumentLinks;
}

export interface AppStoreVersionAppClipDefaultExperienceLinkageRequest {
  data: { type: "appClipDefaultExperiences"; id: string };
}

export interface AppStoreVersionBuildLinkageResponse {
  data: { type: "builds"; id: string };
  links: DocumentLinks;
}

export interface AppStoreVersionBuildLinkageRequest {
  data: { type: "builds"; id: string };
}

export interface AppBetaTestersLinkagesRequest {
  data: { type: "betaTesters"; id: string }[];
}

export interface AppPromotedPurchasesLinkagesResponse {
  data: { type: "promotedPurchases"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface AppPromotedPurchasesLinkagesRequest {
  data: { type: "promotedPurchases"; id: string }[];
}

export interface BetaGroupBetaTestersLinkagesResponse {
  data: { type: "betaTesters"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaGroupBetaTestersLinkagesRequest {
  data: { type: "betaTesters"; id: string }[];
}

export interface BetaGroupBuildsLinkagesResponse {
  data: { type: "builds"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaGroupBuildsLinkagesRequest {
  data: { type: "builds"; id: string }[];
}

export interface BetaTesterAppsLinkagesResponse {
  data: { type: "apps"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaTesterAppsLinkagesRequest {
  data: { type: "apps"; id: string }[];
}

export interface BetaTesterBetaGroupsLinkagesResponse {
  data: { type: "betaGroups"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaTesterBetaGroupsLinkagesRequest {
  data: { type: "betaGroups"; id: string }[];
}

export interface BetaTesterBuildsLinkagesResponse {
  data: { type: "builds"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BetaTesterBuildsLinkagesRequest {
  data: { type: "builds"; id: string }[];
}

export interface BuildAppEncryptionDeclarationLinkageResponse {
  data: { type: "appEncryptionDeclarations"; id: string };
  links: DocumentLinks;
}

export interface BuildAppEncryptionDeclarationLinkageRequest {
  data: { type: "appEncryptionDeclarations"; id: string };
}

export interface BuildBetaGroupsLinkagesRequest {
  data: { type: "betaGroups"; id: string }[];
}

export interface BuildIndividualTestersLinkagesResponse {
  data: { type: "betaTesters"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface BuildIndividualTestersLinkagesRequest {
  data: { type: "betaTesters"; id: string }[];
}

export interface GameCenterEnabledVersionCompatibleVersionsLinkagesResponse {
  data: { type: "gameCenterEnabledVersions"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface GameCenterEnabledVersionCompatibleVersionsLinkagesRequest {
  data: { type: "gameCenterEnabledVersions"; id: string }[];
}

export interface SubscriptionIntroductoryOffersLinkagesResponse {
  data: { type: "subscriptionIntroductoryOffers"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionIntroductoryOffersLinkagesRequest {
  data: { type: "subscriptionIntroductoryOffers"; id: string }[];
}

export interface SubscriptionPricesLinkagesResponse {
  data: { type: "subscriptionPrices"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface SubscriptionPricesLinkagesRequest {
  data: { type: "subscriptionPrices"; id: string }[];
}

export interface UserVisibleAppsLinkagesResponse {
  data: { type: "apps"; id: string }[];
  links: PagedDocumentLinks;
  meta?: PagingInformation;
}

export interface UserVisibleAppsLinkagesRequest {
  data: { type: "apps"; id: string }[];
}

export interface ErrorResponse {
  errors?: {
    id?: string;
    status: string;
    code: string;
    title: string;
    detail: string;
    source?: ErrorSourcePointer | ErrorSourceParameter;
  }[];
}

export interface ErrorSourceParameter {
  parameter?: string;
}

export interface ErrorSourcePointer {
  pointer?: string;
}

export interface PagedDocumentLinks {
  /** @format uri-reference */
  self: string;

  /** @format uri-reference */
  first?: string;

  /** @format uri-reference */
  next?: string;
}

export interface PagingInformation {
  paging: { total?: number; limit: number };
}

export interface DocumentLinks {
  /** @format uri-reference */
  self: string;
}

export interface ResourceLinks {
  /** @format uri-reference */
  self: string;
}

export enum AppClipAction {
  OPEN = "OPEN",
  VIEW = "VIEW",
  PLAY = "PLAY",
}

export enum AppClipAdvancedExperienceLanguage {
  AR = "AR",
  CA = "CA",
  CS = "CS",
  DA = "DA",
  DE = "DE",
  EL = "EL",
  EN = "EN",
  ES = "ES",
  FI = "FI",
  FR = "FR",
  HE = "HE",
  HI = "HI",
  HR = "HR",
  HU = "HU",
  ID = "ID",
  IT = "IT",
  JA = "JA",
  KO = "KO",
  MS = "MS",
  NL = "NL",
  NO = "NO",
  PL = "PL",
  PT = "PT",
  RO = "RO",
  RU = "RU",
  SK = "SK",
  SV = "SV",
  TH = "TH",
  TR = "TR",
  UK = "UK",
  VI = "VI",
  ZH = "ZH",
}

export enum AppEncryptionDeclarationState {
  IN_REVIEW = "IN_REVIEW",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  INVALID = "INVALID",
  EXPIRED = "EXPIRED",
}

export enum AppEventAssetType {
  EVENT_CARD = "EVENT_CARD",
  EVENT_DETAILS_PAGE = "EVENT_DETAILS_PAGE",
}

export interface AppMediaAssetState {
  errors?: AppMediaStateError[];
  warnings?: AppMediaStateError[];
  state?: "AWAITING_UPLOAD" | "UPLOAD_COMPLETE" | "COMPLETE" | "FAILED";
}

export interface AppMediaStateError {
  code?: string;
  description?: string;
}

export enum AppStoreAgeRating {
  FOUR_PLUS = "FOUR_PLUS",
  NINE_PLUS = "NINE_PLUS",
  TWELVE_PLUS = "TWELVE_PLUS",
  SEVENTEEN_PLUS = "SEVENTEEN_PLUS",
}

export enum AppStoreVersionState {
  ACCEPTED = "ACCEPTED",
  DEVELOPER_REMOVED_FROM_SALE = "DEVELOPER_REMOVED_FROM_SALE",
  DEVELOPER_REJECTED = "DEVELOPER_REJECTED",
  IN_REVIEW = "IN_REVIEW",
  INVALID_BINARY = "INVALID_BINARY",
  METADATA_REJECTED = "METADATA_REJECTED",
  PENDING_APPLE_RELEASE = "PENDING_APPLE_RELEASE",
  PENDING_CONTRACT = "PENDING_CONTRACT",
  PENDING_DEVELOPER_RELEASE = "PENDING_DEVELOPER_RELEASE",
  PREPARE_FOR_SUBMISSION = "PREPARE_FOR_SUBMISSION",
  PREORDER_READY_FOR_SALE = "PREORDER_READY_FOR_SALE",
  PROCESSING_FOR_APP_STORE = "PROCESSING_FOR_APP_STORE",
  READY_FOR_REVIEW = "READY_FOR_REVIEW",
  READY_FOR_SALE = "READY_FOR_SALE",
  REJECTED = "REJECTED",
  REMOVED_FROM_SALE = "REMOVED_FROM_SALE",
  WAITING_FOR_EXPORT_COMPLIANCE = "WAITING_FOR_EXPORT_COMPLIANCE",
  WAITING_FOR_REVIEW = "WAITING_FOR_REVIEW",
  REPLACED_WITH_NEW_VERSION = "REPLACED_WITH_NEW_VERSION",
}

export enum BetaInviteType {
  EMAIL = "EMAIL",
  PUBLIC_LINK = "PUBLIC_LINK",
}

export enum BetaReviewState {
  WAITING_FOR_REVIEW = "WAITING_FOR_REVIEW",
  IN_REVIEW = "IN_REVIEW",
  REJECTED = "REJECTED",
  APPROVED = "APPROVED",
}

export enum BrazilAgeRating {
  L = "L",
  TEN = "TEN",
  TWELVE = "TWELVE",
  FOURTEEN = "FOURTEEN",
  SIXTEEN = "SIXTEEN",
  EIGHTEEN = "EIGHTEEN",
}

export enum BuildAudienceType {
  INTERNAL_ONLY = "INTERNAL_ONLY",
  APP_STORE_ELIGIBLE = "APP_STORE_ELIGIBLE",
}

export enum BundleIdPlatform {
  IOS = "IOS",
  MAC_OS = "MAC_OS",
}

export interface CapabilityOption {
  key?:
    | "XCODE_5"
    | "XCODE_6"
    | "COMPLETE_PROTECTION"
    | "PROTECTED_UNLESS_OPEN"
    | "PROTECTED_UNTIL_FIRST_USER_AUTH"
    | "PRIMARY_APP_CONSENT";
  name?: string;
  description?: string;
  enabledByDefault?: boolean;
  enabled?: boolean;
  supportsWildcard?: boolean;
}

export interface CapabilitySetting {
  key?: "ICLOUD_VERSION" | "DATA_PROTECTION_PERMISSION_LEVEL" | "APPLE_ID_AUTH_APP_CONSENT";
  name?: string;
  description?: string;
  enabledByDefault?: boolean;
  visible?: boolean;
  allowedInstances?: "ENTRY" | "SINGLE" | "MULTIPLE";
  minInstances?: number;
  options?: CapabilityOption[];
}

export enum CapabilityType {
  ICLOUD = "ICLOUD",
  IN_APP_PURCHASE = "IN_APP_PURCHASE",
  GAME_CENTER = "GAME_CENTER",
  PUSH_NOTIFICATIONS = "PUSH_NOTIFICATIONS",
  WALLET = "WALLET",
  INTER_APP_AUDIO = "INTER_APP_AUDIO",
  MAPS = "MAPS",
  ASSOCIATED_DOMAINS = "ASSOCIATED_DOMAINS",
  PERSONAL_VPN = "PERSONAL_VPN",
  APP_GROUPS = "APP_GROUPS",
  HEALTHKIT = "HEALTHKIT",
  HOMEKIT = "HOMEKIT",
  WIRELESS_ACCESSORY_CONFIGURATION = "WIRELESS_ACCESSORY_CONFIGURATION",
  APPLE_PAY = "APPLE_PAY",
  DATA_PROTECTION = "DATA_PROTECTION",
  SIRIKIT = "SIRIKIT",
  NETWORK_EXTENSIONS = "NETWORK_EXTENSIONS",
  MULTIPATH = "MULTIPATH",
  HOT_SPOT = "HOT_SPOT",
  NFC_TAG_READING = "NFC_TAG_READING",
  CLASSKIT = "CLASSKIT",
  AUTOFILL_CREDENTIAL_PROVIDER = "AUTOFILL_CREDENTIAL_PROVIDER",
  ACCESS_WIFI_INFORMATION = "ACCESS_WIFI_INFORMATION",
  NETWORK_CUSTOM_PROTOCOL = "NETWORK_CUSTOM_PROTOCOL",
  COREMEDIA_HLS_LOW_LATENCY = "COREMEDIA_HLS_LOW_LATENCY",
  SYSTEM_EXTENSION_INSTALL = "SYSTEM_EXTENSION_INSTALL",
  USER_MANAGEMENT = "USER_MANAGEMENT",
  APPLE_ID_AUTH = "APPLE_ID_AUTH",
}

export enum CertificateType {
  IOS_DEVELOPMENT = "IOS_DEVELOPMENT",
  IOS_DISTRIBUTION = "IOS_DISTRIBUTION",
  MAC_APP_DISTRIBUTION = "MAC_APP_DISTRIBUTION",
  MAC_INSTALLER_DISTRIBUTION = "MAC_INSTALLER_DISTRIBUTION",
  MAC_APP_DEVELOPMENT = "MAC_APP_DEVELOPMENT",
  DEVELOPER_ID_KEXT = "DEVELOPER_ID_KEXT",
  DEVELOPER_ID_APPLICATION = "DEVELOPER_ID_APPLICATION",
  DEVELOPMENT = "DEVELOPMENT",
  DISTRIBUTION = "DISTRIBUTION",
  PASS_TYPE_ID = "PASS_TYPE_ID",
  PASS_TYPE_ID_WITH_NFC = "PASS_TYPE_ID_WITH_NFC",
}

export interface CiAction {
  name?: string;
  actionType?: CiActionType;
  destination?:
    | "ANY_IOS_DEVICE"
    | "ANY_IOS_SIMULATOR"
    | "ANY_TVOS_DEVICE"
    | "ANY_TVOS_SIMULATOR"
    | "ANY_WATCHOS_DEVICE"
    | "ANY_WATCHOS_SIMULATOR"
    | "ANY_MAC"
    | "ANY_MAC_CATALYST";
  buildDistributionAudience?: BuildAudienceType;
  testConfiguration?: {
    kind?: "USE_SCHEME_SETTINGS" | "SPECIFIC_TEST_PLANS";
    testPlanName?: string;
    testDestinations?: CiTestDestination[];
  };
  scheme?: string;
  platform?: "MACOS" | "IOS" | "TVOS" | "WATCHOS";
  isRequiredToPass?: boolean;
}

export enum CiActionType {
  BUILD = "BUILD",
  ANALYZE = "ANALYZE",
  TEST = "TEST",
  ARCHIVE = "ARCHIVE",
}

export interface CiBranchPatterns {
  isAllMatch?: boolean;
  patterns?: { pattern?: string; isPrefix?: boolean }[];
}

export interface CiBranchStartCondition {
  source?: CiBranchPatterns;
  filesAndFoldersRule?: CiFilesAndFoldersRule;
  autoCancel?: boolean;
}

export enum CiCompletionStatus {
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
  ERRORED = "ERRORED",
  CANCELED = "CANCELED",
  SKIPPED = "SKIPPED",
}

export enum CiExecutionProgress {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETE = "COMPLETE",
}

export interface CiFilesAndFoldersRule {
  mode?: "START_IF_ANY_FILE_MATCHES" | "DO_NOT_START_IF_ALL_FILES_MATCH";
  matchers?: CiStartConditionFileMatcher[];
}

export enum CiGitRefKind {
  BRANCH = "BRANCH",
  TAG = "TAG",
}

export interface CiGitUser {
  displayName?: string;

  /** @format uri */
  avatarUrl?: string;
}

export interface CiIssueCounts {
  analyzerWarnings?: number;
  errors?: number;
  testFailures?: number;
  warnings?: number;
}

export interface CiPullRequestStartCondition {
  source?: CiBranchPatterns;
  destination?: CiBranchPatterns;
  filesAndFoldersRule?: CiFilesAndFoldersRule;
  autoCancel?: boolean;
}

export interface CiScheduledStartCondition {
  source?: CiBranchPatterns;
  schedule?: {
    frequency?: "WEEKLY" | "DAILY" | "HOURLY";
    days?: ("SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY")[];
    hour?: number;
    minute?: number;
    timezone?: string;
  };
}

export interface CiStartConditionFileMatcher {
  directory?: string;
  fileExtension?: string;
  fileName?: string;
}

export interface CiTagPatterns {
  isAllMatch?: boolean;
  patterns?: { pattern?: string; isPrefix?: boolean }[];
}

export interface CiTagStartCondition {
  source?: CiTagPatterns;
  filesAndFoldersRule?: CiFilesAndFoldersRule;
  autoCancel?: boolean;
}

export interface CiTestDestination {
  deviceTypeName?: string;
  deviceTypeIdentifier?: string;
  runtimeName?: string;
  runtimeIdentifier?: string;
  kind?: CiTestDestinationKind;
}

export enum CiTestDestinationKind {
  SIMULATOR = "SIMULATOR",
  MAC = "MAC",
}

export enum CiTestStatus {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  MIXED = "MIXED",
  SKIPPED = "SKIPPED",
  EXPECTED_FAILURE = "EXPECTED_FAILURE",
}

export interface DiagnosticLogCallStackNode {
  sampleCount?: number;
  isBlameFrame?: boolean;
  symbolName?: string;
  insightsCategory?: string;
  offsetIntoSymbol?: string;
  binaryName?: string;
  fileName?: string;
  binaryUUID?: string;
  lineNumber?: string;
  address?: string;
  offsetIntoBinaryTextSegment?: string;
  rawFrame?: string;
  subFrames?: DiagnosticLogCallStackNode[];
}

export enum ExternalBetaState {
  PROCESSING = "PROCESSING",
  PROCESSING_EXCEPTION = "PROCESSING_EXCEPTION",
  MISSING_EXPORT_COMPLIANCE = "MISSING_EXPORT_COMPLIANCE",
  READY_FOR_BETA_TESTING = "READY_FOR_BETA_TESTING",
  IN_BETA_TESTING = "IN_BETA_TESTING",
  EXPIRED = "EXPIRED",
  READY_FOR_BETA_SUBMISSION = "READY_FOR_BETA_SUBMISSION",
  IN_EXPORT_COMPLIANCE_REVIEW = "IN_EXPORT_COMPLIANCE_REVIEW",
  WAITING_FOR_BETA_REVIEW = "WAITING_FOR_BETA_REVIEW",
  IN_BETA_REVIEW = "IN_BETA_REVIEW",
  BETA_REJECTED = "BETA_REJECTED",
  BETA_APPROVED = "BETA_APPROVED",
}

export interface FileLocation {
  path?: string;
  lineNumber?: number;
}

export interface HttpHeader {
  name?: string;
  value?: string;
}

export enum IconAssetType {
  APP_STORE = "APP_STORE",
  MESSAGES_APP_STORE = "MESSAGES_APP_STORE",
  WATCH_APP_STORE = "WATCH_APP_STORE",
  TV_OS_HOME_SCREEN = "TV_OS_HOME_SCREEN",
  TV_OS_TOP_SHELF = "TV_OS_TOP_SHELF",
  ALTERNATE_EXPERIMENT = "ALTERNATE_EXPERIMENT",
}

export interface ImageAsset {
  templateUrl?: string;
  width?: number;
  height?: number;
}

export enum InAppPurchaseState {
  MISSING_METADATA = "MISSING_METADATA",
  WAITING_FOR_UPLOAD = "WAITING_FOR_UPLOAD",
  PROCESSING_CONTENT = "PROCESSING_CONTENT",
  READY_TO_SUBMIT = "READY_TO_SUBMIT",
  WAITING_FOR_REVIEW = "WAITING_FOR_REVIEW",
  IN_REVIEW = "IN_REVIEW",
  DEVELOPER_ACTION_NEEDED = "DEVELOPER_ACTION_NEEDED",
  PENDING_BINARY_APPROVAL = "PENDING_BINARY_APPROVAL",
  APPROVED = "APPROVED",
  DEVELOPER_REMOVED_FROM_SALE = "DEVELOPER_REMOVED_FROM_SALE",
  REMOVED_FROM_SALE = "REMOVED_FROM_SALE",
  REJECTED = "REJECTED",
}

export enum InAppPurchaseType {
  CONSUMABLE = "CONSUMABLE",
  NON_CONSUMABLE = "NON_CONSUMABLE",
  NON_RENEWING_SUBSCRIPTION = "NON_RENEWING_SUBSCRIPTION",
}

export enum InternalBetaState {
  PROCESSING = "PROCESSING",
  PROCESSING_EXCEPTION = "PROCESSING_EXCEPTION",
  MISSING_EXPORT_COMPLIANCE = "MISSING_EXPORT_COMPLIANCE",
  READY_FOR_BETA_TESTING = "READY_FOR_BETA_TESTING",
  IN_BETA_TESTING = "IN_BETA_TESTING",
  EXPIRED = "EXPIRED",
  IN_EXPORT_COMPLIANCE_REVIEW = "IN_EXPORT_COMPLIANCE_REVIEW",
}

export enum KidsAgeBand {
  FIVE_AND_UNDER = "FIVE_AND_UNDER",
  SIX_TO_EIGHT = "SIX_TO_EIGHT",
  NINE_TO_ELEVEN = "NINE_TO_ELEVEN",
}

export enum MetricCategory {
  HANG = "HANG",
  LAUNCH = "LAUNCH",
  MEMORY = "MEMORY",
  DISK = "DISK",
  BATTERY = "BATTERY",
  TERMINATION = "TERMINATION",
  ANIMATION = "ANIMATION",
}

export interface MetricsInsight {
  metricCategory?: MetricCategory;
  latestVersion?: string;
  metric?: string;
  summaryString?: string;
  referenceVersions?: string;
  maxLatestVersionValue?: number;
  subSystemLabel?: string;
  highImpact?: boolean;
  populations?: {
    deltaPercentage?: number;
    percentile?: string;
    summaryString?: string;
    referenceAverageValue?: number;
    latestVersionValue?: number;
    device?: string;
  }[];
}

export enum PhasedReleaseState {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
  COMPLETE = "COMPLETE",
}

export enum Platform {
  IOS = "IOS",
  MAC_OS = "MAC_OS",
  TV_OS = "TV_OS",
}

export enum PreviewType {
  IPHONE65 = "IPHONE_65",
  IPHONE58 = "IPHONE_58",
  IPHONE55 = "IPHONE_55",
  IPHONE47 = "IPHONE_47",
  IPHONE40 = "IPHONE_40",
  IPHONE35 = "IPHONE_35",
  IPADPRO3GEN129 = "IPAD_PRO_3GEN_129",
  IPADPRO3GEN11 = "IPAD_PRO_3GEN_11",
  IPADPRO129 = "IPAD_PRO_129",
  IPAD105 = "IPAD_105",
  IPAD97 = "IPAD_97",
  DESKTOP = "DESKTOP",
  WATCHSERIES4 = "WATCH_SERIES_4",
  WATCHSERIES3 = "WATCH_SERIES_3",
  APPLE_TV = "APPLE_TV",
}

export interface ScmProviderType {
  kind?:
    | "BITBUCKET_CLOUD"
    | "BITBUCKET_SERVER"
    | "GITHUB_CLOUD"
    | "GITHUB_ENTERPRISE"
    | "GITLAB_CLOUD"
    | "GITLAB_SELF_MANAGED";
  displayName?: string;
  isOnPremise?: boolean;
}

export enum ScreenshotDisplayType {
  APPIPHONE65 = "APP_IPHONE_65",
  APPIPHONE58 = "APP_IPHONE_58",
  APPIPHONE55 = "APP_IPHONE_55",
  APPIPHONE47 = "APP_IPHONE_47",
  APPIPHONE40 = "APP_IPHONE_40",
  APPIPHONE35 = "APP_IPHONE_35",
  APPIPADPRO3GEN129 = "APP_IPAD_PRO_3GEN_129",
  APPIPADPRO3GEN11 = "APP_IPAD_PRO_3GEN_11",
  APPIPADPRO129 = "APP_IPAD_PRO_129",
  APPIPAD105 = "APP_IPAD_105",
  APPIPAD97 = "APP_IPAD_97",
  APP_DESKTOP = "APP_DESKTOP",
  APPWATCHSERIES7 = "APP_WATCH_SERIES_7",
  APPWATCHSERIES4 = "APP_WATCH_SERIES_4",
  APPWATCHSERIES3 = "APP_WATCH_SERIES_3",
  APP_APPLE_TV = "APP_APPLE_TV",
  IMESSAGEAPPIPHONE65 = "IMESSAGE_APP_IPHONE_65",
  IMESSAGEAPPIPHONE58 = "IMESSAGE_APP_IPHONE_58",
  IMESSAGEAPPIPHONE55 = "IMESSAGE_APP_IPHONE_55",
  IMESSAGEAPPIPHONE47 = "IMESSAGE_APP_IPHONE_47",
  IMESSAGEAPPIPHONE40 = "IMESSAGE_APP_IPHONE_40",
  IMESSAGEAPPIPADPRO3GEN129 = "IMESSAGE_APP_IPAD_PRO_3GEN_129",
  IMESSAGEAPPIPADPRO3GEN11 = "IMESSAGE_APP_IPAD_PRO_3GEN_11",
  IMESSAGEAPPIPADPRO129 = "IMESSAGE_APP_IPAD_PRO_129",
  IMESSAGEAPPIPAD105 = "IMESSAGE_APP_IPAD_105",
  IMESSAGEAPPIPAD97 = "IMESSAGE_APP_IPAD_97",
}

export enum SubscriptionCustomerEligibility {
  NEW = "NEW",
  EXISTING = "EXISTING",
  EXPIRED = "EXPIRED",
}

export enum SubscriptionOfferDuration {
  ONE_DAY = "ONE_DAY",
  THREE_DAYS = "THREE_DAYS",
  ONE_WEEK = "ONE_WEEK",
  TWO_WEEKS = "TWO_WEEKS",
  ONE_MONTH = "ONE_MONTH",
  TWO_MONTHS = "TWO_MONTHS",
  THREE_MONTHS = "THREE_MONTHS",
  SIX_MONTHS = "SIX_MONTHS",
  ONE_YEAR = "ONE_YEAR",
}

export enum SubscriptionOfferEligibility {
  STACK_WITH_INTRO_OFFERS = "STACK_WITH_INTRO_OFFERS",
  REPLACE_INTRO_OFFERS = "REPLACE_INTRO_OFFERS",
}

export enum SubscriptionOfferMode {
  PAY_AS_YOU_GO = "PAY_AS_YOU_GO",
  PAY_UP_FRONT = "PAY_UP_FRONT",
  FREE_TRIAL = "FREE_TRIAL",
}

export enum SubscriptionStatusUrlVersion {
  V1 = "V1",
  V2 = "V2",
  V1 = "v1",
  V2 = "v2",
}

export enum TerritoryCode {
  ABW = "ABW",
  AFG = "AFG",
  AGO = "AGO",
  AIA = "AIA",
  ALB = "ALB",
  AND = "AND",
  ANT = "ANT",
  ARE = "ARE",
  ARG = "ARG",
  ARM = "ARM",
  ASM = "ASM",
  ATG = "ATG",
  AUS = "AUS",
  AUT = "AUT",
  AZE = "AZE",
  BDI = "BDI",
  BEL = "BEL",
  BEN = "BEN",
  BES = "BES",
  BFA = "BFA",
  BGD = "BGD",
  BGR = "BGR",
  BHR = "BHR",
  BHS = "BHS",
  BIH = "BIH",
  BLR = "BLR",
  BLZ = "BLZ",
  BMU = "BMU",
  BOL = "BOL",
  BRA = "BRA",
  BRB = "BRB",
  BRN = "BRN",
  BTN = "BTN",
  BWA = "BWA",
  CAF = "CAF",
  CAN = "CAN",
  CHE = "CHE",
  CHL = "CHL",
  CHN = "CHN",
  CIV = "CIV",
  CMR = "CMR",
  COD = "COD",
  COG = "COG",
  COK = "COK",
  COL = "COL",
  COM = "COM",
  CPV = "CPV",
  CRI = "CRI",
  CUB = "CUB",
  CUW = "CUW",
  CXR = "CXR",
  CYM = "CYM",
  CYP = "CYP",
  CZE = "CZE",
  DEU = "DEU",
  DJI = "DJI",
  DMA = "DMA",
  DNK = "DNK",
  DOM = "DOM",
  DZA = "DZA",
  ECU = "ECU",
  EGY = "EGY",
  ERI = "ERI",
  ESP = "ESP",
  EST = "EST",
  ETH = "ETH",
  FIN = "FIN",
  FJI = "FJI",
  FLK = "FLK",
  FRA = "FRA",
  FRO = "FRO",
  FSM = "FSM",
  GAB = "GAB",
  GBR = "GBR",
  GEO = "GEO",
  GGY = "GGY",
  GHA = "GHA",
  GIB = "GIB",
  GIN = "GIN",
  GLP = "GLP",
  GMB = "GMB",
  GNB = "GNB",
  GNQ = "GNQ",
  GRC = "GRC",
  GRD = "GRD",
  GRL = "GRL",
  GTM = "GTM",
  GUF = "GUF",
  GUM = "GUM",
  GUY = "GUY",
  HKG = "HKG",
  HND = "HND",
  HRV = "HRV",
  HTI = "HTI",
  HUN = "HUN",
  IDN = "IDN",
  IMN = "IMN",
  IND = "IND",
  IRL = "IRL",
  IRQ = "IRQ",
  ISL = "ISL",
  ISR = "ISR",
  ITA = "ITA",
  JAM = "JAM",
  JEY = "JEY",
  JOR = "JOR",
  JPN = "JPN",
  KAZ = "KAZ",
  KEN = "KEN",
  KGZ = "KGZ",
  KHM = "KHM",
  KIR = "KIR",
  KNA = "KNA",
  KOR = "KOR",
  KWT = "KWT",
  LAO = "LAO",
  LBN = "LBN",
  LBR = "LBR",
  LBY = "LBY",
  LCA = "LCA",
  LIE = "LIE",
  LKA = "LKA",
  LSO = "LSO",
  LTU = "LTU",
  LUX = "LUX",
  LVA = "LVA",
  MAC = "MAC",
  MAR = "MAR",
  MCO = "MCO",
  MDA = "MDA",
  MDG = "MDG",
  MDV = "MDV",
  MEX = "MEX",
  MHL = "MHL",
  MKD = "MKD",
  MLI = "MLI",
  MLT = "MLT",
  MMR = "MMR",
  MNE = "MNE",
  MNG = "MNG",
  MNP = "MNP",
  MOZ = "MOZ",
  MRT = "MRT",
  MSR = "MSR",
  MTQ = "MTQ",
  MUS = "MUS",
  MWI = "MWI",
  MYS = "MYS",
  MYT = "MYT",
  NAM = "NAM",
  NCL = "NCL",
  NER = "NER",
  NFK = "NFK",
  NGA = "NGA",
  NIC = "NIC",
  NIU = "NIU",
  NLD = "NLD",
  NOR = "NOR",
  NPL = "NPL",
  NRU = "NRU",
  NZL = "NZL",
  OMN = "OMN",
  PAK = "PAK",
  PAN = "PAN",
  PER = "PER",
  PHL = "PHL",
  PLW = "PLW",
  PNG = "PNG",
  POL = "POL",
  PRI = "PRI",
  PRT = "PRT",
  PRY = "PRY",
  PSE = "PSE",
  PYF = "PYF",
  QAT = "QAT",
  REU = "REU",
  ROU = "ROU",
  RUS = "RUS",
  RWA = "RWA",
  SAU = "SAU",
  SEN = "SEN",
  SGP = "SGP",
  SHN = "SHN",
  SLB = "SLB",
  SLE = "SLE",
  SLV = "SLV",
  SMR = "SMR",
  SOM = "SOM",
  SPM = "SPM",
  SRB = "SRB",
  SSD = "SSD",
  STP = "STP",
  SUR = "SUR",
  SVK = "SVK",
  SVN = "SVN",
  SWE = "SWE",
  SWZ = "SWZ",
  SXM = "SXM",
  SYC = "SYC",
  TCA = "TCA",
  TCD = "TCD",
  TGO = "TGO",
  THA = "THA",
  TJK = "TJK",
  TKM = "TKM",
  TLS = "TLS",
  TON = "TON",
  TTO = "TTO",
  TUN = "TUN",
  TUR = "TUR",
  TUV = "TUV",
  TWN = "TWN",
  TZA = "TZA",
  UGA = "UGA",
  UKR = "UKR",
  UMI = "UMI",
  URY = "URY",
  USA = "USA",
  UZB = "UZB",
  VAT = "VAT",
  VCT = "VCT",
  VEN = "VEN",
  VGB = "VGB",
  VIR = "VIR",
  VNM = "VNM",
  VUT = "VUT",
  WLF = "WLF",
  WSM = "WSM",
  YEM = "YEM",
  ZAF = "ZAF",
  ZMB = "ZMB",
  ZWE = "ZWE",
}

export interface UploadOperation {
  method?: string;
  url?: string;
  length?: number;
  offset?: number;
  requestHeaders?: HttpHeader[];
}

export enum UserRole {
  ADMIN = "ADMIN",
  FINANCE = "FINANCE",
  ACCOUNT_HOLDER = "ACCOUNT_HOLDER",
  SALES = "SALES",
  MARKETING = "MARKETING",
  APP_MANAGER = "APP_MANAGER",
  DEVELOPER = "DEVELOPER",
  ACCESS_TO_REPORTS = "ACCESS_TO_REPORTS",
  CUSTOMER_SUPPORT = "CUSTOMER_SUPPORT",
  IMAGE_MANAGER = "IMAGE_MANAGER",
  CREATE_APPS = "CREATE_APPS",
  CLOUD_MANAGED_DEVELOPER_ID = "CLOUD_MANAGED_DEVELOPER_ID",
  CLOUD_MANAGED_APP_DISTRIBUTION = "CLOUD_MANAGED_APP_DISTRIBUTION",
}

export type Csv = string;

export interface DiagnosticLogs {
  productData?: {
    signatureId?: string;
    diagnosticInsights?: { insightsURL?: string; insightsCategory?: string; insightsString?: string }[];
    diagnosticLogs?: {
      callStackTree?: {
        callStackPerThread?: boolean;
        callStacks?: { callStackRootFrames?: DiagnosticLogCallStackNode[] }[];
      }[];
      diagnosticMetaData?: {
        bundleId?: string;
        event?: string;
        osVersion?: string;
        appVersion?: string;
        writesCaused?: string;
        deviceType?: string;
        platformArchitecture?: string;
        eventDetail?: string;
        buildVersion?: string;
      };
    }[];
  }[];
  version?: string;
}

/**
 * @format binary
 */
export type Gzip = File;

export interface XcodeMetrics {
  version?: string;
  insights?: { trendingUp?: MetricsInsight[]; regressions?: MetricsInsight[] };
  productData?: {
    platform?: string;
    metricCategories?: {
      identifier?: MetricCategory;
      metrics?: {
        identifier?: string;
        goalKeys?: { goalKey?: string; lowerBound?: number; upperBound?: number }[];
        unit?: { identifier?: string; displayName?: string };
        datasets?: {
          filterCriteria?: { percentile?: string; device?: string; deviceMarketingName?: string };
          points?: {
            version?: string;
            value?: number;
            errorMargin?: number;
            percentageBreakdown?: { value?: number; subSystemLabel?: string };
            goal?: string;
          }[];
        }[];
      }[];
    }[];
  }[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.appstoreconnect.apple.com/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title App Store Connect API
 * @version 2.0
 * @baseUrl https://api.appstoreconnect.apple.com/
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags AgeRatingDeclarations
     * @name AgeRatingDeclarationsUpdateInstance
     * @request PATCH:/v1/ageRatingDeclarations/{id}
     * @secure
     */
    ageRatingDeclarationsUpdateInstance: (
      id: string,
      data: AgeRatingDeclarationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AgeRatingDeclarationResponse, ErrorResponse>({
        path: `/v1/ageRatingDeclarations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCategories
     * @name AppCategoriesGetCollection
     * @request GET:/v1/appCategories
     * @secure
     */
    appCategoriesGetCollection: (
      query?: {
        "filter[platforms]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "exists[parent]"?: boolean;
        "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[];
        limit?: number;
        include?: ("parent" | "subcategories")[];
        "limit[subcategories]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoriesResponse, ErrorResponse>({
        path: `/v1/appCategories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCategories
     * @name AppCategoriesGetInstance
     * @request GET:/v1/appCategories/{id}
     * @secure
     */
    appCategoriesGetInstance: (
      id: string,
      query?: {
        "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[];
        include?: ("parent" | "subcategories")[];
        "limit[subcategories]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoryResponse, ErrorResponse>({
        path: `/v1/appCategories/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAdvancedExperienceImages
     * @name AppClipAdvancedExperienceImagesCreateInstance
     * @request POST:/v1/appClipAdvancedExperienceImages
     * @secure
     */
    appClipAdvancedExperienceImagesCreateInstance: (
      data: AppClipAdvancedExperienceImageCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipAdvancedExperienceImageResponse, ErrorResponse>({
        path: `/v1/appClipAdvancedExperienceImages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAdvancedExperienceImages
     * @name AppClipAdvancedExperienceImagesGetInstance
     * @request GET:/v1/appClipAdvancedExperienceImages/{id}
     * @secure
     */
    appClipAdvancedExperienceImagesGetInstance: (
      id: string,
      query?: {
        "fields[appClipAdvancedExperienceImages]"?: (
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipAdvancedExperienceImageResponse, ErrorResponse>({
        path: `/v1/appClipAdvancedExperienceImages/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAdvancedExperienceImages
     * @name AppClipAdvancedExperienceImagesUpdateInstance
     * @request PATCH:/v1/appClipAdvancedExperienceImages/{id}
     * @secure
     */
    appClipAdvancedExperienceImagesUpdateInstance: (
      id: string,
      data: AppClipAdvancedExperienceImageUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipAdvancedExperienceImageResponse, ErrorResponse>({
        path: `/v1/appClipAdvancedExperienceImages/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAdvancedExperiences
     * @name AppClipAdvancedExperiencesCreateInstance
     * @request POST:/v1/appClipAdvancedExperiences
     * @secure
     */
    appClipAdvancedExperiencesCreateInstance: (
      data: AppClipAdvancedExperienceCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipAdvancedExperienceResponse, ErrorResponse>({
        path: `/v1/appClipAdvancedExperiences`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAdvancedExperiences
     * @name AppClipAdvancedExperiencesGetInstance
     * @request GET:/v1/appClipAdvancedExperiences/{id}
     * @secure
     */
    appClipAdvancedExperiencesGetInstance: (
      id: string,
      query?: {
        "fields[appClipAdvancedExperiences]"?: (
          | "action"
          | "appClip"
          | "businessCategory"
          | "defaultLanguage"
          | "headerImage"
          | "isPoweredBy"
          | "link"
          | "localizations"
          | "place"
          | "placeStatus"
          | "removed"
          | "status"
          | "version"
        )[];
        include?: ("appClip" | "headerImage" | "localizations")[];
        "limit[localizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipAdvancedExperienceResponse, ErrorResponse>({
        path: `/v1/appClipAdvancedExperiences/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAdvancedExperiences
     * @name AppClipAdvancedExperiencesUpdateInstance
     * @request PATCH:/v1/appClipAdvancedExperiences/{id}
     * @secure
     */
    appClipAdvancedExperiencesUpdateInstance: (
      id: string,
      data: AppClipAdvancedExperienceUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipAdvancedExperienceResponse, ErrorResponse>({
        path: `/v1/appClipAdvancedExperiences/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAppStoreReviewDetails
     * @name AppClipAppStoreReviewDetailsCreateInstance
     * @request POST:/v1/appClipAppStoreReviewDetails
     * @secure
     */
    appClipAppStoreReviewDetailsCreateInstance: (
      data: AppClipAppStoreReviewDetailCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipAppStoreReviewDetailResponse, ErrorResponse>({
        path: `/v1/appClipAppStoreReviewDetails`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAppStoreReviewDetails
     * @name AppClipAppStoreReviewDetailsGetInstance
     * @request GET:/v1/appClipAppStoreReviewDetails/{id}
     * @secure
     */
    appClipAppStoreReviewDetailsGetInstance: (
      id: string,
      query?: {
        "fields[appClipAppStoreReviewDetails]"?: ("appClipDefaultExperience" | "invocationUrls")[];
        include?: "appClipDefaultExperience"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipAppStoreReviewDetailResponse, ErrorResponse>({
        path: `/v1/appClipAppStoreReviewDetails/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipAppStoreReviewDetails
     * @name AppClipAppStoreReviewDetailsUpdateInstance
     * @request PATCH:/v1/appClipAppStoreReviewDetails/{id}
     * @secure
     */
    appClipAppStoreReviewDetailsUpdateInstance: (
      id: string,
      data: AppClipAppStoreReviewDetailUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipAppStoreReviewDetailResponse, ErrorResponse>({
        path: `/v1/appClipAppStoreReviewDetails/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperienceLocalizations
     * @name AppClipDefaultExperienceLocalizationsCreateInstance
     * @request POST:/v1/appClipDefaultExperienceLocalizations
     * @secure
     */
    appClipDefaultExperienceLocalizationsCreateInstance: (
      data: AppClipDefaultExperienceLocalizationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperienceLocalizationResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperienceLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperienceLocalizations
     * @name AppClipDefaultExperienceLocalizationsGetInstance
     * @request GET:/v1/appClipDefaultExperienceLocalizations/{id}
     * @secure
     */
    appClipDefaultExperienceLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[appClipDefaultExperienceLocalizations]"?: (
          | "appClipDefaultExperience"
          | "appClipHeaderImage"
          | "locale"
          | "subtitle"
        )[];
        include?: ("appClipDefaultExperience" | "appClipHeaderImage")[];
        "fields[appClipHeaderImages]"?: (
          | "appClipDefaultExperienceLocalization"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperienceLocalizationResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperienceLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperienceLocalizations
     * @name AppClipDefaultExperienceLocalizationsUpdateInstance
     * @request PATCH:/v1/appClipDefaultExperienceLocalizations/{id}
     * @secure
     */
    appClipDefaultExperienceLocalizationsUpdateInstance: (
      id: string,
      data: AppClipDefaultExperienceLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperienceLocalizationResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperienceLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperienceLocalizations
     * @name AppClipDefaultExperienceLocalizationsDeleteInstance
     * @request DELETE:/v1/appClipDefaultExperienceLocalizations/{id}
     * @secure
     */
    appClipDefaultExperienceLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appClipDefaultExperienceLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesCreateInstance
     * @request POST:/v1/appClipDefaultExperiences
     * @secure
     */
    appClipDefaultExperiencesCreateInstance: (
      data: AppClipDefaultExperienceCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperienceResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesGetInstance
     * @request GET:/v1/appClipDefaultExperiences/{id}
     * @secure
     */
    appClipDefaultExperiencesGetInstance: (
      id: string,
      query?: {
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        include?: (
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "releaseWithAppStoreVersion"
        )[];
        "fields[appClipAppStoreReviewDetails]"?: ("appClipDefaultExperience" | "invocationUrls")[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appClipDefaultExperienceLocalizations]"?: (
          | "appClipDefaultExperience"
          | "appClipHeaderImage"
          | "locale"
          | "subtitle"
        )[];
        "limit[appClipDefaultExperienceLocalizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperienceResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesUpdateInstance
     * @request PATCH:/v1/appClipDefaultExperiences/{id}
     * @secure
     */
    appClipDefaultExperiencesUpdateInstance: (
      id: string,
      data: AppClipDefaultExperienceUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperienceResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesDeleteInstance
     * @request DELETE:/v1/appClipDefaultExperiences/{id}
     * @secure
     */
    appClipDefaultExperiencesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipHeaderImages
     * @name AppClipHeaderImagesCreateInstance
     * @request POST:/v1/appClipHeaderImages
     * @secure
     */
    appClipHeaderImagesCreateInstance: (data: AppClipHeaderImageCreateRequest, params: RequestParams = {}) =>
      this.request<AppClipHeaderImageResponse, ErrorResponse>({
        path: `/v1/appClipHeaderImages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipHeaderImages
     * @name AppClipHeaderImagesGetInstance
     * @request GET:/v1/appClipHeaderImages/{id}
     * @secure
     */
    appClipHeaderImagesGetInstance: (
      id: string,
      query?: {
        "fields[appClipHeaderImages]"?: (
          | "appClipDefaultExperienceLocalization"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        include?: "appClipDefaultExperienceLocalization"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipHeaderImageResponse, ErrorResponse>({
        path: `/v1/appClipHeaderImages/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipHeaderImages
     * @name AppClipHeaderImagesUpdateInstance
     * @request PATCH:/v1/appClipHeaderImages/{id}
     * @secure
     */
    appClipHeaderImagesUpdateInstance: (
      id: string,
      data: AppClipHeaderImageUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppClipHeaderImageResponse, ErrorResponse>({
        path: `/v1/appClipHeaderImages/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipHeaderImages
     * @name AppClipHeaderImagesDeleteInstance
     * @request DELETE:/v1/appClipHeaderImages/{id}
     * @secure
     */
    appClipHeaderImagesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appClipHeaderImages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClips
     * @name AppClipsGetInstance
     * @request GET:/v1/appClips/{id}
     * @secure
     */
    appClipsGetInstance: (
      id: string,
      query?: {
        "fields[appClips]"?: ("app" | "appClipAdvancedExperiences" | "appClipDefaultExperiences" | "bundleId")[];
        include?: ("app" | "appClipDefaultExperiences")[];
        "fields[appClipAdvancedExperiences]"?: (
          | "action"
          | "appClip"
          | "businessCategory"
          | "defaultLanguage"
          | "headerImage"
          | "isPoweredBy"
          | "link"
          | "localizations"
          | "place"
          | "placeStatus"
          | "removed"
          | "status"
          | "version"
        )[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        "limit[appClipDefaultExperiences]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipResponse, ErrorResponse>({
        path: `/v1/appClips/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageLocalizations
     * @name AppCustomProductPageLocalizationsCreateInstance
     * @request POST:/v1/appCustomProductPageLocalizations
     * @secure
     */
    appCustomProductPageLocalizationsCreateInstance: (
      data: AppCustomProductPageLocalizationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageLocalizationResponse, ErrorResponse>({
        path: `/v1/appCustomProductPageLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageLocalizations
     * @name AppCustomProductPageLocalizationsGetInstance
     * @request GET:/v1/appCustomProductPageLocalizations/{id}
     * @secure
     */
    appCustomProductPageLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        include?: ("appCustomProductPageVersion" | "appPreviewSets" | "appScreenshotSets")[];
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        "limit[appPreviewSets]"?: number;
        "limit[appScreenshotSets]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageLocalizationResponse, ErrorResponse>({
        path: `/v1/appCustomProductPageLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageLocalizations
     * @name AppCustomProductPageLocalizationsUpdateInstance
     * @request PATCH:/v1/appCustomProductPageLocalizations/{id}
     * @secure
     */
    appCustomProductPageLocalizationsUpdateInstance: (
      id: string,
      data: AppCustomProductPageLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageLocalizationResponse, ErrorResponse>({
        path: `/v1/appCustomProductPageLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageLocalizations
     * @name AppCustomProductPageLocalizationsDeleteInstance
     * @request DELETE:/v1/appCustomProductPageLocalizations/{id}
     * @secure
     */
    appCustomProductPageLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appCustomProductPageLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageVersions
     * @name AppCustomProductPageVersionsCreateInstance
     * @request POST:/v1/appCustomProductPageVersions
     * @secure
     */
    appCustomProductPageVersionsCreateInstance: (
      data: AppCustomProductPageVersionCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageVersionResponse, ErrorResponse>({
        path: `/v1/appCustomProductPageVersions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageVersions
     * @name AppCustomProductPageVersionsGetInstance
     * @request GET:/v1/appCustomProductPageVersions/{id}
     * @secure
     */
    appCustomProductPageVersionsGetInstance: (
      id: string,
      query?: {
        "fields[appCustomProductPageVersions]"?: (
          | "appCustomProductPage"
          | "appCustomProductPageLocalizations"
          | "state"
          | "version"
        )[];
        include?: ("appCustomProductPage" | "appCustomProductPageLocalizations")[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "limit[appCustomProductPageLocalizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageVersionResponse, ErrorResponse>({
        path: `/v1/appCustomProductPageVersions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPages
     * @name AppCustomProductPagesCreateInstance
     * @request POST:/v1/appCustomProductPages
     * @secure
     */
    appCustomProductPagesCreateInstance: (data: AppCustomProductPageCreateRequest, params: RequestParams = {}) =>
      this.request<AppCustomProductPageResponse, ErrorResponse>({
        path: `/v1/appCustomProductPages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPages
     * @name AppCustomProductPagesGetInstance
     * @request GET:/v1/appCustomProductPages/{id}
     * @secure
     */
    appCustomProductPagesGetInstance: (
      id: string,
      query?: {
        "fields[appCustomProductPages]"?: (
          | "app"
          | "appCustomProductPageVersions"
          | "appStoreVersionTemplate"
          | "customProductPageTemplate"
          | "name"
          | "url"
          | "visible"
        )[];
        include?: ("app" | "appCustomProductPageVersions")[];
        "fields[appCustomProductPageVersions]"?: (
          | "appCustomProductPage"
          | "appCustomProductPageLocalizations"
          | "state"
          | "version"
        )[];
        "limit[appCustomProductPageVersions]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageResponse, ErrorResponse>({
        path: `/v1/appCustomProductPages/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPages
     * @name AppCustomProductPagesUpdateInstance
     * @request PATCH:/v1/appCustomProductPages/{id}
     * @secure
     */
    appCustomProductPagesUpdateInstance: (
      id: string,
      data: AppCustomProductPageUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageResponse, ErrorResponse>({
        path: `/v1/appCustomProductPages/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPages
     * @name AppCustomProductPagesDeleteInstance
     * @request DELETE:/v1/appCustomProductPages/{id}
     * @secure
     */
    appCustomProductPagesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appCustomProductPages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEncryptionDeclarations
     * @name AppEncryptionDeclarationsGetCollection
     * @request GET:/v1/appEncryptionDeclarations
     * @secure
     */
    appEncryptionDeclarationsGetCollection: (
      query?: {
        "filter[platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[app]"?: string[];
        "filter[builds]"?: string[];
        "fields[appEncryptionDeclarations]"?: (
          | "app"
          | "appEncryptionDeclarationState"
          | "availableOnFrenchStore"
          | "builds"
          | "codeValue"
          | "containsProprietaryCryptography"
          | "containsThirdPartyCryptography"
          | "documentName"
          | "documentType"
          | "documentUrl"
          | "exempt"
          | "platform"
          | "uploadedDate"
          | "usesEncryption"
        )[];
        limit?: number;
        include?: "app"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEncryptionDeclarationsResponse, ErrorResponse>({
        path: `/v1/appEncryptionDeclarations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEncryptionDeclarations
     * @name AppEncryptionDeclarationsGetInstance
     * @request GET:/v1/appEncryptionDeclarations/{id}
     * @secure
     */
    appEncryptionDeclarationsGetInstance: (
      id: string,
      query?: {
        "fields[appEncryptionDeclarations]"?: (
          | "app"
          | "appEncryptionDeclarationState"
          | "availableOnFrenchStore"
          | "builds"
          | "codeValue"
          | "containsProprietaryCryptography"
          | "containsThirdPartyCryptography"
          | "documentName"
          | "documentType"
          | "documentUrl"
          | "exempt"
          | "platform"
          | "uploadedDate"
          | "usesEncryption"
        )[];
        include?: "app"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEncryptionDeclarationResponse, ErrorResponse>({
        path: `/v1/appEncryptionDeclarations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventLocalizations
     * @name AppEventLocalizationsCreateInstance
     * @request POST:/v1/appEventLocalizations
     * @secure
     */
    appEventLocalizationsCreateInstance: (data: AppEventLocalizationCreateRequest, params: RequestParams = {}) =>
      this.request<AppEventLocalizationResponse, ErrorResponse>({
        path: `/v1/appEventLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventLocalizations
     * @name AppEventLocalizationsGetInstance
     * @request GET:/v1/appEventLocalizations/{id}
     * @secure
     */
    appEventLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[appEventLocalizations]"?: (
          | "appEvent"
          | "appEventScreenshots"
          | "appEventVideoClips"
          | "locale"
          | "longDescription"
          | "name"
          | "shortDescription"
        )[];
        include?: ("appEvent" | "appEventScreenshots" | "appEventVideoClips")[];
        "fields[appEventScreenshots]"?: (
          | "appEventAssetType"
          | "appEventLocalization"
          | "assetDeliveryState"
          | "assetToken"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appEventVideoClips]"?: (
          | "appEventAssetType"
          | "appEventLocalization"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "previewFrameTimeCode"
          | "previewImage"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        "limit[appEventScreenshots]"?: number;
        "limit[appEventVideoClips]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEventLocalizationResponse, ErrorResponse>({
        path: `/v1/appEventLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventLocalizations
     * @name AppEventLocalizationsUpdateInstance
     * @request PATCH:/v1/appEventLocalizations/{id}
     * @secure
     */
    appEventLocalizationsUpdateInstance: (
      id: string,
      data: AppEventLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppEventLocalizationResponse, ErrorResponse>({
        path: `/v1/appEventLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventLocalizations
     * @name AppEventLocalizationsDeleteInstance
     * @request DELETE:/v1/appEventLocalizations/{id}
     * @secure
     */
    appEventLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appEventLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventScreenshots
     * @name AppEventScreenshotsCreateInstance
     * @request POST:/v1/appEventScreenshots
     * @secure
     */
    appEventScreenshotsCreateInstance: (data: AppEventScreenshotCreateRequest, params: RequestParams = {}) =>
      this.request<AppEventScreenshotResponse, ErrorResponse>({
        path: `/v1/appEventScreenshots`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventScreenshots
     * @name AppEventScreenshotsGetInstance
     * @request GET:/v1/appEventScreenshots/{id}
     * @secure
     */
    appEventScreenshotsGetInstance: (
      id: string,
      query?: {
        "fields[appEventScreenshots]"?: (
          | "appEventAssetType"
          | "appEventLocalization"
          | "assetDeliveryState"
          | "assetToken"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "uploadOperations"
          | "uploaded"
        )[];
        include?: "appEventLocalization"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEventScreenshotResponse, ErrorResponse>({
        path: `/v1/appEventScreenshots/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventScreenshots
     * @name AppEventScreenshotsUpdateInstance
     * @request PATCH:/v1/appEventScreenshots/{id}
     * @secure
     */
    appEventScreenshotsUpdateInstance: (
      id: string,
      data: AppEventScreenshotUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppEventScreenshotResponse, ErrorResponse>({
        path: `/v1/appEventScreenshots/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventScreenshots
     * @name AppEventScreenshotsDeleteInstance
     * @request DELETE:/v1/appEventScreenshots/{id}
     * @secure
     */
    appEventScreenshotsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appEventScreenshots/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventVideoClips
     * @name AppEventVideoClipsCreateInstance
     * @request POST:/v1/appEventVideoClips
     * @secure
     */
    appEventVideoClipsCreateInstance: (data: AppEventVideoClipCreateRequest, params: RequestParams = {}) =>
      this.request<AppEventVideoClipResponse, ErrorResponse>({
        path: `/v1/appEventVideoClips`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventVideoClips
     * @name AppEventVideoClipsGetInstance
     * @request GET:/v1/appEventVideoClips/{id}
     * @secure
     */
    appEventVideoClipsGetInstance: (
      id: string,
      query?: {
        "fields[appEventVideoClips]"?: (
          | "appEventAssetType"
          | "appEventLocalization"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "previewFrameTimeCode"
          | "previewImage"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        include?: "appEventLocalization"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEventVideoClipResponse, ErrorResponse>({
        path: `/v1/appEventVideoClips/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventVideoClips
     * @name AppEventVideoClipsUpdateInstance
     * @request PATCH:/v1/appEventVideoClips/{id}
     * @secure
     */
    appEventVideoClipsUpdateInstance: (id: string, data: AppEventVideoClipUpdateRequest, params: RequestParams = {}) =>
      this.request<AppEventVideoClipResponse, ErrorResponse>({
        path: `/v1/appEventVideoClips/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventVideoClips
     * @name AppEventVideoClipsDeleteInstance
     * @request DELETE:/v1/appEventVideoClips/{id}
     * @secure
     */
    appEventVideoClipsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appEventVideoClips/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEvents
     * @name AppEventsCreateInstance
     * @request POST:/v1/appEvents
     * @secure
     */
    appEventsCreateInstance: (data: AppEventCreateRequest, params: RequestParams = {}) =>
      this.request<AppEventResponse, ErrorResponse>({
        path: `/v1/appEvents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEvents
     * @name AppEventsGetInstance
     * @request GET:/v1/appEvents/{id}
     * @secure
     */
    appEventsGetInstance: (
      id: string,
      query?: {
        "fields[appEvents]"?: (
          | "app"
          | "archivedTerritorySchedules"
          | "badge"
          | "deepLink"
          | "eventState"
          | "localizations"
          | "primaryLocale"
          | "priority"
          | "purchaseRequirement"
          | "purpose"
          | "referenceName"
          | "territorySchedules"
        )[];
        include?: "localizations"[];
        "fields[appEventLocalizations]"?: (
          | "appEvent"
          | "appEventScreenshots"
          | "appEventVideoClips"
          | "locale"
          | "longDescription"
          | "name"
          | "shortDescription"
        )[];
        "limit[localizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEventResponse, ErrorResponse>({
        path: `/v1/appEvents/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEvents
     * @name AppEventsUpdateInstance
     * @request PATCH:/v1/appEvents/{id}
     * @secure
     */
    appEventsUpdateInstance: (id: string, data: AppEventUpdateRequest, params: RequestParams = {}) =>
      this.request<AppEventResponse, ErrorResponse>({
        path: `/v1/appEvents/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEvents
     * @name AppEventsDeleteInstance
     * @request DELETE:/v1/appEvents/{id}
     * @secure
     */
    appEventsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appEvents/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfoLocalizations
     * @name AppInfoLocalizationsCreateInstance
     * @request POST:/v1/appInfoLocalizations
     * @secure
     */
    appInfoLocalizationsCreateInstance: (data: AppInfoLocalizationCreateRequest, params: RequestParams = {}) =>
      this.request<AppInfoLocalizationResponse, ErrorResponse>({
        path: `/v1/appInfoLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfoLocalizations
     * @name AppInfoLocalizationsGetInstance
     * @request GET:/v1/appInfoLocalizations/{id}
     * @secure
     */
    appInfoLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[appInfoLocalizations]"?: (
          | "appInfo"
          | "locale"
          | "name"
          | "privacyChoicesUrl"
          | "privacyPolicyText"
          | "privacyPolicyUrl"
          | "subtitle"
        )[];
        include?: "appInfo"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppInfoLocalizationResponse, ErrorResponse>({
        path: `/v1/appInfoLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfoLocalizations
     * @name AppInfoLocalizationsUpdateInstance
     * @request PATCH:/v1/appInfoLocalizations/{id}
     * @secure
     */
    appInfoLocalizationsUpdateInstance: (
      id: string,
      data: AppInfoLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppInfoLocalizationResponse, ErrorResponse>({
        path: `/v1/appInfoLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfoLocalizations
     * @name AppInfoLocalizationsDeleteInstance
     * @request DELETE:/v1/appInfoLocalizations/{id}
     * @secure
     */
    appInfoLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appInfoLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosGetInstance
     * @request GET:/v1/appInfos/{id}
     * @secure
     */
    appInfosGetInstance: (
      id: string,
      query?: {
        "fields[appInfos]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appInfoLocalizations"
          | "appStoreAgeRating"
          | "appStoreState"
          | "brazilAgeRating"
          | "kidsAgeBand"
          | "primaryCategory"
          | "primarySubcategoryOne"
          | "primarySubcategoryTwo"
          | "secondaryCategory"
          | "secondarySubcategoryOne"
          | "secondarySubcategoryTwo"
        )[];
        include?: (
          | "ageRatingDeclaration"
          | "app"
          | "appInfoLocalizations"
          | "primaryCategory"
          | "primarySubcategoryOne"
          | "primarySubcategoryTwo"
          | "secondaryCategory"
          | "secondarySubcategoryOne"
          | "secondarySubcategoryTwo"
        )[];
        "fields[ageRatingDeclarations]"?: (
          | "alcoholTobaccoOrDrugUseOrReferences"
          | "contests"
          | "gambling"
          | "gamblingAndContests"
          | "gamblingSimulated"
          | "horrorOrFearThemes"
          | "kidsAgeBand"
          | "matureOrSuggestiveThemes"
          | "medicalOrTreatmentInformation"
          | "profanityOrCrudeHumor"
          | "seventeenPlus"
          | "sexualContentGraphicAndNudity"
          | "sexualContentOrNudity"
          | "unrestrictedWebAccess"
          | "violenceCartoonOrFantasy"
          | "violenceRealistic"
          | "violenceRealisticProlongedGraphicOrSadistic"
        )[];
        "fields[appInfoLocalizations]"?: (
          | "appInfo"
          | "locale"
          | "name"
          | "privacyChoicesUrl"
          | "privacyPolicyText"
          | "privacyPolicyUrl"
          | "subtitle"
        )[];
        "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[];
        "limit[appInfoLocalizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppInfoResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosUpdateInstance
     * @request PATCH:/v1/appInfos/{id}
     * @secure
     */
    appInfosUpdateInstance: (id: string, data: AppInfoUpdateRequest, params: RequestParams = {}) =>
      this.request<AppInfoResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreOrders
     * @name AppPreOrdersCreateInstance
     * @request POST:/v1/appPreOrders
     * @secure
     */
    appPreOrdersCreateInstance: (data: AppPreOrderCreateRequest, params: RequestParams = {}) =>
      this.request<AppPreOrderResponse, ErrorResponse>({
        path: `/v1/appPreOrders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreOrders
     * @name AppPreOrdersGetInstance
     * @request GET:/v1/appPreOrders/{id}
     * @secure
     */
    appPreOrdersGetInstance: (
      id: string,
      query?: { "fields[appPreOrders]"?: ("app" | "appReleaseDate" | "preOrderAvailableDate")[]; include?: "app"[] },
      params: RequestParams = {},
    ) =>
      this.request<AppPreOrderResponse, ErrorResponse>({
        path: `/v1/appPreOrders/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreOrders
     * @name AppPreOrdersUpdateInstance
     * @request PATCH:/v1/appPreOrders/{id}
     * @secure
     */
    appPreOrdersUpdateInstance: (id: string, data: AppPreOrderUpdateRequest, params: RequestParams = {}) =>
      this.request<AppPreOrderResponse, ErrorResponse>({
        path: `/v1/appPreOrders/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreOrders
     * @name AppPreOrdersDeleteInstance
     * @request DELETE:/v1/appPreOrders/{id}
     * @secure
     */
    appPreOrdersDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appPreOrders/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviewSets
     * @name AppPreviewSetsCreateInstance
     * @request POST:/v1/appPreviewSets
     * @secure
     */
    appPreviewSetsCreateInstance: (data: AppPreviewSetCreateRequest, params: RequestParams = {}) =>
      this.request<AppPreviewSetResponse, ErrorResponse>({
        path: `/v1/appPreviewSets`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviewSets
     * @name AppPreviewSetsGetInstance
     * @request GET:/v1/appPreviewSets/{id}
     * @secure
     */
    appPreviewSetsGetInstance: (
      id: string,
      query?: {
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        include?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
        )[];
        "fields[appPreviews]"?: (
          | "appPreviewSet"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "mimeType"
          | "previewFrameTimeCode"
          | "previewImage"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        "limit[appPreviews]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPreviewSetResponse, ErrorResponse>({
        path: `/v1/appPreviewSets/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviewSets
     * @name AppPreviewSetsDeleteInstance
     * @request DELETE:/v1/appPreviewSets/{id}
     * @secure
     */
    appPreviewSetsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appPreviewSets/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviews
     * @name AppPreviewsCreateInstance
     * @request POST:/v1/appPreviews
     * @secure
     */
    appPreviewsCreateInstance: (data: AppPreviewCreateRequest, params: RequestParams = {}) =>
      this.request<AppPreviewResponse, ErrorResponse>({
        path: `/v1/appPreviews`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviews
     * @name AppPreviewsGetInstance
     * @request GET:/v1/appPreviews/{id}
     * @secure
     */
    appPreviewsGetInstance: (
      id: string,
      query?: {
        "fields[appPreviews]"?: (
          | "appPreviewSet"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "mimeType"
          | "previewFrameTimeCode"
          | "previewImage"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        include?: "appPreviewSet"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPreviewResponse, ErrorResponse>({
        path: `/v1/appPreviews/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviews
     * @name AppPreviewsUpdateInstance
     * @request PATCH:/v1/appPreviews/{id}
     * @secure
     */
    appPreviewsUpdateInstance: (id: string, data: AppPreviewUpdateRequest, params: RequestParams = {}) =>
      this.request<AppPreviewResponse, ErrorResponse>({
        path: `/v1/appPreviews/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviews
     * @name AppPreviewsDeleteInstance
     * @request DELETE:/v1/appPreviews/{id}
     * @secure
     */
    appPreviewsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appPreviews/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPricePoints
     * @name AppPricePointsGetCollection
     * @request GET:/v1/appPricePoints
     * @deprecated
     * @secure
     */
    appPricePointsGetCollection: (
      query?: {
        "filter[priceTier]"?: string[];
        "filter[territory]"?: string[];
        "fields[appPricePoints]"?: ("customerPrice" | "priceTier" | "proceeds" | "territory")[];
        limit?: number;
        include?: ("priceTier" | "territory")[];
        "fields[territories]"?: "currency"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPricePointsResponse, ErrorResponse>({
        path: `/v1/appPricePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPricePoints
     * @name AppPricePointsGetInstance
     * @request GET:/v1/appPricePoints/{id}
     * @deprecated
     * @secure
     */
    appPricePointsGetInstance: (
      id: string,
      query?: {
        "fields[appPricePoints]"?: ("customerPrice" | "priceTier" | "proceeds" | "territory")[];
        include?: ("priceTier" | "territory")[];
        "fields[territories]"?: "currency"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPricePointResponse, ErrorResponse>({
        path: `/v1/appPricePoints/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPriceTiers
     * @name AppPriceTiersGetCollection
     * @request GET:/v1/appPriceTiers
     * @secure
     */
    appPriceTiersGetCollection: (
      query?: {
        "filter[id]"?: string[];
        "fields[appPriceTiers]"?: "pricePoints"[];
        limit?: number;
        include?: "pricePoints"[];
        "fields[appPricePoints]"?: ("customerPrice" | "priceTier" | "proceeds" | "territory")[];
        "limit[pricePoints]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPriceTiersResponse, ErrorResponse>({
        path: `/v1/appPriceTiers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPriceTiers
     * @name AppPriceTiersGetInstance
     * @request GET:/v1/appPriceTiers/{id}
     * @secure
     */
    appPriceTiersGetInstance: (
      id: string,
      query?: {
        "fields[appPriceTiers]"?: "pricePoints"[];
        include?: "pricePoints"[];
        "fields[appPricePoints]"?: ("customerPrice" | "priceTier" | "proceeds" | "territory")[];
        "limit[pricePoints]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPriceTierResponse, ErrorResponse>({
        path: `/v1/appPriceTiers/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPrices
     * @name AppPricesGetInstance
     * @request GET:/v1/appPrices/{id}
     * @secure
     */
    appPricesGetInstance: (
      id: string,
      query?: { "fields[appPrices]"?: ("app" | "priceTier")[]; include?: ("app" | "priceTier")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppPriceResponse, ErrorResponse>({
        path: `/v1/appPrices/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshotSets
     * @name AppScreenshotSetsCreateInstance
     * @request POST:/v1/appScreenshotSets
     * @secure
     */
    appScreenshotSetsCreateInstance: (data: AppScreenshotSetCreateRequest, params: RequestParams = {}) =>
      this.request<AppScreenshotSetResponse, ErrorResponse>({
        path: `/v1/appScreenshotSets`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshotSets
     * @name AppScreenshotSetsGetInstance
     * @request GET:/v1/appScreenshotSets/{id}
     * @secure
     */
    appScreenshotSetsGetInstance: (
      id: string,
      query?: {
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        include?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
        )[];
        "fields[appScreenshots]"?: (
          | "appScreenshotSet"
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "limit[appScreenshots]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppScreenshotSetResponse, ErrorResponse>({
        path: `/v1/appScreenshotSets/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshotSets
     * @name AppScreenshotSetsDeleteInstance
     * @request DELETE:/v1/appScreenshotSets/{id}
     * @secure
     */
    appScreenshotSetsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appScreenshotSets/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshots
     * @name AppScreenshotsCreateInstance
     * @request POST:/v1/appScreenshots
     * @secure
     */
    appScreenshotsCreateInstance: (data: AppScreenshotCreateRequest, params: RequestParams = {}) =>
      this.request<AppScreenshotResponse, ErrorResponse>({
        path: `/v1/appScreenshots`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshots
     * @name AppScreenshotsGetInstance
     * @request GET:/v1/appScreenshots/{id}
     * @secure
     */
    appScreenshotsGetInstance: (
      id: string,
      query?: {
        "fields[appScreenshots]"?: (
          | "appScreenshotSet"
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        include?: "appScreenshotSet"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppScreenshotResponse, ErrorResponse>({
        path: `/v1/appScreenshots/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshots
     * @name AppScreenshotsUpdateInstance
     * @request PATCH:/v1/appScreenshots/{id}
     * @secure
     */
    appScreenshotsUpdateInstance: (id: string, data: AppScreenshotUpdateRequest, params: RequestParams = {}) =>
      this.request<AppScreenshotResponse, ErrorResponse>({
        path: `/v1/appScreenshots/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshots
     * @name AppScreenshotsDeleteInstance
     * @request DELETE:/v1/appScreenshots/{id}
     * @secure
     */
    appScreenshotsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appScreenshots/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreReviewAttachments
     * @name AppStoreReviewAttachmentsCreateInstance
     * @request POST:/v1/appStoreReviewAttachments
     * @secure
     */
    appStoreReviewAttachmentsCreateInstance: (
      data: AppStoreReviewAttachmentCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreReviewAttachmentResponse, ErrorResponse>({
        path: `/v1/appStoreReviewAttachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreReviewAttachments
     * @name AppStoreReviewAttachmentsGetInstance
     * @request GET:/v1/appStoreReviewAttachments/{id}
     * @secure
     */
    appStoreReviewAttachmentsGetInstance: (
      id: string,
      query?: {
        "fields[appStoreReviewAttachments]"?: (
          | "appStoreReviewDetail"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        include?: "appStoreReviewDetail"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreReviewAttachmentResponse, ErrorResponse>({
        path: `/v1/appStoreReviewAttachments/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreReviewAttachments
     * @name AppStoreReviewAttachmentsUpdateInstance
     * @request PATCH:/v1/appStoreReviewAttachments/{id}
     * @secure
     */
    appStoreReviewAttachmentsUpdateInstance: (
      id: string,
      data: AppStoreReviewAttachmentUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreReviewAttachmentResponse, ErrorResponse>({
        path: `/v1/appStoreReviewAttachments/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreReviewAttachments
     * @name AppStoreReviewAttachmentsDeleteInstance
     * @request DELETE:/v1/appStoreReviewAttachments/{id}
     * @secure
     */
    appStoreReviewAttachmentsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreReviewAttachments/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreReviewDetails
     * @name AppStoreReviewDetailsCreateInstance
     * @request POST:/v1/appStoreReviewDetails
     * @secure
     */
    appStoreReviewDetailsCreateInstance: (data: AppStoreReviewDetailCreateRequest, params: RequestParams = {}) =>
      this.request<AppStoreReviewDetailResponse, ErrorResponse>({
        path: `/v1/appStoreReviewDetails`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreReviewDetails
     * @name AppStoreReviewDetailsGetInstance
     * @request GET:/v1/appStoreReviewDetails/{id}
     * @secure
     */
    appStoreReviewDetailsGetInstance: (
      id: string,
      query?: {
        "fields[appStoreReviewDetails]"?: (
          | "appStoreReviewAttachments"
          | "appStoreVersion"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        include?: ("appStoreReviewAttachments" | "appStoreVersion")[];
        "fields[appStoreReviewAttachments]"?: (
          | "appStoreReviewDetail"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "limit[appStoreReviewAttachments]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreReviewDetailResponse, ErrorResponse>({
        path: `/v1/appStoreReviewDetails/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreReviewDetails
     * @name AppStoreReviewDetailsUpdateInstance
     * @request PATCH:/v1/appStoreReviewDetails/{id}
     * @secure
     */
    appStoreReviewDetailsUpdateInstance: (
      id: string,
      data: AppStoreReviewDetailUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreReviewDetailResponse, ErrorResponse>({
        path: `/v1/appStoreReviewDetails/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatmentLocalizations
     * @name AppStoreVersionExperimentTreatmentLocalizationsCreateInstance
     * @request POST:/v1/appStoreVersionExperimentTreatmentLocalizations
     * @secure
     */
    appStoreVersionExperimentTreatmentLocalizationsCreateInstance: (
      data: AppStoreVersionExperimentTreatmentLocalizationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentTreatmentLocalizationResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatmentLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatmentLocalizations
     * @name AppStoreVersionExperimentTreatmentLocalizationsGetInstance
     * @request GET:/v1/appStoreVersionExperimentTreatmentLocalizations/{id}
     * @secure
     */
    appStoreVersionExperimentTreatmentLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        include?: ("appPreviewSets" | "appScreenshotSets" | "appStoreVersionExperimentTreatment")[];
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        "limit[appPreviewSets]"?: number;
        "limit[appScreenshotSets]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentTreatmentLocalizationResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatmentLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatmentLocalizations
     * @name AppStoreVersionExperimentTreatmentLocalizationsDeleteInstance
     * @request DELETE:/v1/appStoreVersionExperimentTreatmentLocalizations/{id}
     * @secure
     */
    appStoreVersionExperimentTreatmentLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatmentLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatments
     * @name AppStoreVersionExperimentTreatmentsCreateInstance
     * @request POST:/v1/appStoreVersionExperimentTreatments
     * @secure
     */
    appStoreVersionExperimentTreatmentsCreateInstance: (
      data: AppStoreVersionExperimentTreatmentCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentTreatmentResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatments
     * @name AppStoreVersionExperimentTreatmentsGetInstance
     * @request GET:/v1/appStoreVersionExperimentTreatments/{id}
     * @secure
     */
    appStoreVersionExperimentTreatmentsGetInstance: (
      id: string,
      query?: {
        "fields[appStoreVersionExperimentTreatments]"?: (
          | "appIcon"
          | "appIconName"
          | "appStoreVersionExperiment"
          | "appStoreVersionExperimentTreatmentLocalizations"
          | "name"
          | "promotedDate"
        )[];
        include?: ("appStoreVersionExperiment" | "appStoreVersionExperimentTreatmentLocalizations")[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        "limit[appStoreVersionExperimentTreatmentLocalizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentTreatmentResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatments/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatments
     * @name AppStoreVersionExperimentTreatmentsUpdateInstance
     * @request PATCH:/v1/appStoreVersionExperimentTreatments/{id}
     * @secure
     */
    appStoreVersionExperimentTreatmentsUpdateInstance: (
      id: string,
      data: AppStoreVersionExperimentTreatmentUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentTreatmentResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatments/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatments
     * @name AppStoreVersionExperimentTreatmentsDeleteInstance
     * @request DELETE:/v1/appStoreVersionExperimentTreatments/{id}
     * @secure
     */
    appStoreVersionExperimentTreatmentsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatments/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperiments
     * @name AppStoreVersionExperimentsCreateInstance
     * @request POST:/v1/appStoreVersionExperiments
     * @secure
     */
    appStoreVersionExperimentsCreateInstance: (
      data: AppStoreVersionExperimentCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperiments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperiments
     * @name AppStoreVersionExperimentsGetInstance
     * @request GET:/v1/appStoreVersionExperiments/{id}
     * @secure
     */
    appStoreVersionExperimentsGetInstance: (
      id: string,
      query?: {
        "fields[appStoreVersionExperiments]"?: (
          | "appStoreVersion"
          | "appStoreVersionExperimentTreatments"
          | "endDate"
          | "name"
          | "reviewRequired"
          | "startDate"
          | "started"
          | "state"
          | "trafficProportion"
        )[];
        include?: ("appStoreVersion" | "appStoreVersionExperimentTreatments")[];
        "fields[appStoreVersionExperimentTreatments]"?: (
          | "appIcon"
          | "appIconName"
          | "appStoreVersionExperiment"
          | "appStoreVersionExperimentTreatmentLocalizations"
          | "name"
          | "promotedDate"
        )[];
        "limit[appStoreVersionExperimentTreatments]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperiments/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperiments
     * @name AppStoreVersionExperimentsUpdateInstance
     * @request PATCH:/v1/appStoreVersionExperiments/{id}
     * @secure
     */
    appStoreVersionExperimentsUpdateInstance: (
      id: string,
      data: AppStoreVersionExperimentUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperiments/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperiments
     * @name AppStoreVersionExperimentsDeleteInstance
     * @request DELETE:/v1/appStoreVersionExperiments/{id}
     * @secure
     */
    appStoreVersionExperimentsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersionExperiments/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionLocalizations
     * @name AppStoreVersionLocalizationsCreateInstance
     * @request POST:/v1/appStoreVersionLocalizations
     * @secure
     */
    appStoreVersionLocalizationsCreateInstance: (
      data: AppStoreVersionLocalizationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionLocalizationResponse, ErrorResponse>({
        path: `/v1/appStoreVersionLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionLocalizations
     * @name AppStoreVersionLocalizationsGetInstance
     * @request GET:/v1/appStoreVersionLocalizations/{id}
     * @secure
     */
    appStoreVersionLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        include?: ("appPreviewSets" | "appScreenshotSets" | "appStoreVersion")[];
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        "limit[appPreviewSets]"?: number;
        "limit[appScreenshotSets]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionLocalizationResponse, ErrorResponse>({
        path: `/v1/appStoreVersionLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionLocalizations
     * @name AppStoreVersionLocalizationsUpdateInstance
     * @request PATCH:/v1/appStoreVersionLocalizations/{id}
     * @secure
     */
    appStoreVersionLocalizationsUpdateInstance: (
      id: string,
      data: AppStoreVersionLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionLocalizationResponse, ErrorResponse>({
        path: `/v1/appStoreVersionLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionLocalizations
     * @name AppStoreVersionLocalizationsDeleteInstance
     * @request DELETE:/v1/appStoreVersionLocalizations/{id}
     * @secure
     */
    appStoreVersionLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersionLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionPhasedReleases
     * @name AppStoreVersionPhasedReleasesCreateInstance
     * @request POST:/v1/appStoreVersionPhasedReleases
     * @secure
     */
    appStoreVersionPhasedReleasesCreateInstance: (
      data: AppStoreVersionPhasedReleaseCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionPhasedReleaseResponse, ErrorResponse>({
        path: `/v1/appStoreVersionPhasedReleases`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionPhasedReleases
     * @name AppStoreVersionPhasedReleasesUpdateInstance
     * @request PATCH:/v1/appStoreVersionPhasedReleases/{id}
     * @secure
     */
    appStoreVersionPhasedReleasesUpdateInstance: (
      id: string,
      data: AppStoreVersionPhasedReleaseUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionPhasedReleaseResponse, ErrorResponse>({
        path: `/v1/appStoreVersionPhasedReleases/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionPhasedReleases
     * @name AppStoreVersionPhasedReleasesDeleteInstance
     * @request DELETE:/v1/appStoreVersionPhasedReleases/{id}
     * @secure
     */
    appStoreVersionPhasedReleasesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersionPhasedReleases/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionPromotions
     * @name AppStoreVersionPromotionsCreateInstance
     * @request POST:/v1/appStoreVersionPromotions
     * @secure
     */
    appStoreVersionPromotionsCreateInstance: (
      data: AppStoreVersionPromotionCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionPromotionResponse, ErrorResponse>({
        path: `/v1/appStoreVersionPromotions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionReleaseRequests
     * @name AppStoreVersionReleaseRequestsCreateInstance
     * @request POST:/v1/appStoreVersionReleaseRequests
     * @secure
     */
    appStoreVersionReleaseRequestsCreateInstance: (
      data: AppStoreVersionReleaseRequestCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionReleaseRequestResponse, ErrorResponse>({
        path: `/v1/appStoreVersionReleaseRequests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionSubmissions
     * @name AppStoreVersionSubmissionsCreateInstance
     * @request POST:/v1/appStoreVersionSubmissions
     * @deprecated
     * @secure
     */
    appStoreVersionSubmissionsCreateInstance: (
      data: AppStoreVersionSubmissionCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionSubmissionResponse, ErrorResponse>({
        path: `/v1/appStoreVersionSubmissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionSubmissions
     * @name AppStoreVersionSubmissionsDeleteInstance
     * @request DELETE:/v1/appStoreVersionSubmissions/{id}
     * @deprecated
     * @secure
     */
    appStoreVersionSubmissionsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersionSubmissions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsCreateInstance
     * @request POST:/v1/appStoreVersions
     * @secure
     */
    appStoreVersionsCreateInstance: (data: AppStoreVersionCreateRequest, params: RequestParams = {}) =>
      this.request<AppStoreVersionResponse, ErrorResponse>({
        path: `/v1/appStoreVersions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsGetInstance
     * @request GET:/v1/appStoreVersions/{id}
     * @secure
     */
    appStoreVersionsGetInstance: (
      id: string,
      query?: {
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        include?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "routingAppCoverage"
        )[];
        "fields[appStoreVersionExperiments]"?: (
          | "appStoreVersion"
          | "appStoreVersionExperimentTreatments"
          | "endDate"
          | "name"
          | "reviewRequired"
          | "startDate"
          | "started"
          | "state"
          | "trafficProportion"
        )[];
        "fields[appStoreVersionSubmissions]"?: "appStoreVersion"[];
        "fields[ageRatingDeclarations]"?: (
          | "alcoholTobaccoOrDrugUseOrReferences"
          | "contests"
          | "gambling"
          | "gamblingAndContests"
          | "gamblingSimulated"
          | "horrorOrFearThemes"
          | "kidsAgeBand"
          | "matureOrSuggestiveThemes"
          | "medicalOrTreatmentInformation"
          | "profanityOrCrudeHumor"
          | "seventeenPlus"
          | "sexualContentGraphicAndNudity"
          | "sexualContentOrNudity"
          | "unrestrictedWebAccess"
          | "violenceCartoonOrFantasy"
          | "violenceRealistic"
          | "violenceRealisticProlongedGraphicOrSadistic"
        )[];
        "fields[customerReviews]"?: (
          | "body"
          | "createdDate"
          | "rating"
          | "response"
          | "reviewerNickname"
          | "territory"
          | "title"
        )[];
        "fields[appStoreReviewDetails]"?: (
          | "appStoreReviewAttachments"
          | "appStoreVersion"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        "fields[routingAppCoverages]"?: (
          | "appStoreVersion"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appStoreVersionPhasedReleases]"?: (
          | "appStoreVersion"
          | "currentDayNumber"
          | "phasedReleaseState"
          | "startDate"
          | "totalPauseDuration"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        "limit[appStoreVersionExperiments]"?: number;
        "limit[appStoreVersionLocalizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsUpdateInstance
     * @request PATCH:/v1/appStoreVersions/{id}
     * @secure
     */
    appStoreVersionsUpdateInstance: (id: string, data: AppStoreVersionUpdateRequest, params: RequestParams = {}) =>
      this.request<AppStoreVersionResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsDeleteInstance
     * @request DELETE:/v1/appStoreVersions/{id}
     * @secure
     */
    appStoreVersionsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsGetCollection
     * @request GET:/v1/apps
     * @secure
     */
    appsGetCollection: (
      query?: {
        "filter[appStoreVersions.appStoreState]"?: (
          | "ACCEPTED"
          | "DEVELOPER_REMOVED_FROM_SALE"
          | "DEVELOPER_REJECTED"
          | "IN_REVIEW"
          | "INVALID_BINARY"
          | "METADATA_REJECTED"
          | "PENDING_APPLE_RELEASE"
          | "PENDING_CONTRACT"
          | "PENDING_DEVELOPER_RELEASE"
          | "PREPARE_FOR_SUBMISSION"
          | "PREORDER_READY_FOR_SALE"
          | "PROCESSING_FOR_APP_STORE"
          | "READY_FOR_REVIEW"
          | "READY_FOR_SALE"
          | "REJECTED"
          | "REMOVED_FROM_SALE"
          | "WAITING_FOR_EXPORT_COMPLIANCE"
          | "WAITING_FOR_REVIEW"
          | "REPLACED_WITH_NEW_VERSION"
        )[];
        "filter[appStoreVersions.platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[bundleId]"?: string[];
        "filter[name]"?: string[];
        "filter[sku]"?: string[];
        "filter[appStoreVersions]"?: string[];
        "filter[id]"?: string[];
        "exists[gameCenterEnabledVersions]"?: boolean;
        sort?: ("bundleId" | "-bundleId" | "name" | "-name" | "sku" | "-sku")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
        include?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "builds"
          | "ciProduct"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "preOrder"
          | "preReleaseVersions"
          | "prices"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
        )[];
        "fields[betaAppReviewDetails]"?: (
          | "app"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        "fields[reviewSubmissions]"?: (
          | "app"
          | "appStoreVersionForReview"
          | "canceled"
          | "items"
          | "platform"
          | "state"
          | "submitted"
          | "submittedDate"
        )[];
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[customerReviews]"?: (
          | "body"
          | "createdDate"
          | "rating"
          | "response"
          | "reviewerNickname"
          | "territory"
          | "title"
        )[];
        "fields[appEvents]"?: (
          | "app"
          | "archivedTerritorySchedules"
          | "badge"
          | "deepLink"
          | "eventState"
          | "localizations"
          | "primaryLocale"
          | "priority"
          | "purchaseRequirement"
          | "purpose"
          | "referenceName"
          | "territorySchedules"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[betaLicenseAgreements]"?: ("agreementText" | "app")[];
        "fields[appClips]"?: ("app" | "appClipAdvancedExperiences" | "appClipDefaultExperiences" | "bundleId")[];
        "fields[appInfos]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appInfoLocalizations"
          | "appStoreAgeRating"
          | "appStoreState"
          | "brazilAgeRating"
          | "kidsAgeBand"
          | "primaryCategory"
          | "primarySubcategoryOne"
          | "primarySubcategoryTwo"
          | "secondaryCategory"
          | "secondarySubcategoryOne"
          | "secondarySubcategoryTwo"
        )[];
        "fields[betaAppLocalizations]"?: (
          | "app"
          | "description"
          | "feedbackEmail"
          | "locale"
          | "marketingUrl"
          | "privacyPolicyUrl"
          | "tvOsPrivacyPolicy"
        )[];
        "fields[appPricePoints]"?: ("app" | "customerPrice" | "priceTier" | "proceeds" | "territory")[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[];
        "fields[subscriptionGroups]"?: ("app" | "referenceName" | "subscriptionGroupLocalizations" | "subscriptions")[];
        "fields[appPrices]"?: ("app" | "priceTier")[];
        "fields[appPreOrders]"?: ("app" | "appReleaseDate" | "preOrderAvailableDate")[];
        "fields[gameCenterEnabledVersions]"?: (
          | "app"
          | "compatibleVersions"
          | "iconAsset"
          | "platform"
          | "versionString"
        )[];
        "fields[subscriptionGracePeriods]"?: ("app" | "optIn")[];
        "fields[endUserLicenseAgreements]"?: ("agreementText" | "app" | "territories")[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appCustomProductPages]"?: (
          | "app"
          | "appCustomProductPageVersions"
          | "appStoreVersionTemplate"
          | "customProductPageTemplate"
          | "name"
          | "url"
          | "visible"
        )[];
        "fields[territories]"?: "currency"[];
        "fields[perfPowerMetrics]"?: ("deviceType" | "metricType" | "platform")[];
        "limit[appClips]"?: number;
        "limit[appCustomProductPages]"?: number;
        "limit[appEvents]"?: number;
        "limit[appInfos]"?: number;
        "limit[appStoreVersions]"?: number;
        "limit[availableTerritories]"?: number;
        "limit[betaAppLocalizations]"?: number;
        "limit[betaGroups]"?: number;
        "limit[builds]"?: number;
        "limit[gameCenterEnabledVersions]"?: number;
        "limit[inAppPurchases]"?: number;
        "limit[inAppPurchasesV2]"?: number;
        "limit[preReleaseVersions]"?: number;
        "limit[prices]"?: number;
        "limit[promotedPurchases]"?: number;
        "limit[reviewSubmissions]"?: number;
        "limit[subscriptionGroups]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppsResponse, ErrorResponse>({
        path: `/v1/apps`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsGetInstance
     * @request GET:/v1/apps/{id}
     * @secure
     */
    appsGetInstance: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        include?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "builds"
          | "ciProduct"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "preOrder"
          | "preReleaseVersions"
          | "prices"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
        )[];
        "fields[betaAppReviewDetails]"?: (
          | "app"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        "fields[reviewSubmissions]"?: (
          | "app"
          | "appStoreVersionForReview"
          | "canceled"
          | "items"
          | "platform"
          | "state"
          | "submitted"
          | "submittedDate"
        )[];
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[customerReviews]"?: (
          | "body"
          | "createdDate"
          | "rating"
          | "response"
          | "reviewerNickname"
          | "territory"
          | "title"
        )[];
        "fields[appEvents]"?: (
          | "app"
          | "archivedTerritorySchedules"
          | "badge"
          | "deepLink"
          | "eventState"
          | "localizations"
          | "primaryLocale"
          | "priority"
          | "purchaseRequirement"
          | "purpose"
          | "referenceName"
          | "territorySchedules"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[betaLicenseAgreements]"?: ("agreementText" | "app")[];
        "fields[appClips]"?: ("app" | "appClipAdvancedExperiences" | "appClipDefaultExperiences" | "bundleId")[];
        "fields[appInfos]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appInfoLocalizations"
          | "appStoreAgeRating"
          | "appStoreState"
          | "brazilAgeRating"
          | "kidsAgeBand"
          | "primaryCategory"
          | "primarySubcategoryOne"
          | "primarySubcategoryTwo"
          | "secondaryCategory"
          | "secondarySubcategoryOne"
          | "secondarySubcategoryTwo"
        )[];
        "fields[betaAppLocalizations]"?: (
          | "app"
          | "description"
          | "feedbackEmail"
          | "locale"
          | "marketingUrl"
          | "privacyPolicyUrl"
          | "tvOsPrivacyPolicy"
        )[];
        "fields[appPricePoints]"?: ("app" | "customerPrice" | "priceTier" | "proceeds" | "territory")[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[];
        "fields[subscriptionGroups]"?: ("app" | "referenceName" | "subscriptionGroupLocalizations" | "subscriptions")[];
        "fields[appPrices]"?: ("app" | "priceTier")[];
        "fields[appPreOrders]"?: ("app" | "appReleaseDate" | "preOrderAvailableDate")[];
        "fields[gameCenterEnabledVersions]"?: (
          | "app"
          | "compatibleVersions"
          | "iconAsset"
          | "platform"
          | "versionString"
        )[];
        "fields[subscriptionGracePeriods]"?: ("app" | "optIn")[];
        "fields[endUserLicenseAgreements]"?: ("agreementText" | "app" | "territories")[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appCustomProductPages]"?: (
          | "app"
          | "appCustomProductPageVersions"
          | "appStoreVersionTemplate"
          | "customProductPageTemplate"
          | "name"
          | "url"
          | "visible"
        )[];
        "fields[territories]"?: "currency"[];
        "fields[perfPowerMetrics]"?: ("deviceType" | "metricType" | "platform")[];
        "limit[appClips]"?: number;
        "limit[appCustomProductPages]"?: number;
        "limit[appEvents]"?: number;
        "limit[appInfos]"?: number;
        "limit[appStoreVersions]"?: number;
        "limit[availableTerritories]"?: number;
        "limit[betaAppLocalizations]"?: number;
        "limit[betaGroups]"?: number;
        "limit[builds]"?: number;
        "limit[gameCenterEnabledVersions]"?: number;
        "limit[inAppPurchases]"?: number;
        "limit[inAppPurchasesV2]"?: number;
        "limit[preReleaseVersions]"?: number;
        "limit[prices]"?: number;
        "limit[promotedPurchases]"?: number;
        "limit[reviewSubmissions]"?: number;
        "limit[subscriptionGroups]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/apps/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsUpdateInstance
     * @request PATCH:/v1/apps/{id}
     * @secure
     */
    appsUpdateInstance: (id: string, data: AppUpdateRequest, params: RequestParams = {}) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/apps/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppClipInvocationLocalizations
     * @name BetaAppClipInvocationLocalizationsCreateInstance
     * @request POST:/v1/betaAppClipInvocationLocalizations
     * @secure
     */
    betaAppClipInvocationLocalizationsCreateInstance: (
      data: BetaAppClipInvocationLocalizationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<BetaAppClipInvocationLocalizationResponse, ErrorResponse>({
        path: `/v1/betaAppClipInvocationLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppClipInvocationLocalizations
     * @name BetaAppClipInvocationLocalizationsUpdateInstance
     * @request PATCH:/v1/betaAppClipInvocationLocalizations/{id}
     * @secure
     */
    betaAppClipInvocationLocalizationsUpdateInstance: (
      id: string,
      data: BetaAppClipInvocationLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<BetaAppClipInvocationLocalizationResponse, ErrorResponse>({
        path: `/v1/betaAppClipInvocationLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppClipInvocationLocalizations
     * @name BetaAppClipInvocationLocalizationsDeleteInstance
     * @request DELETE:/v1/betaAppClipInvocationLocalizations/{id}
     * @secure
     */
    betaAppClipInvocationLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaAppClipInvocationLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppClipInvocations
     * @name BetaAppClipInvocationsCreateInstance
     * @request POST:/v1/betaAppClipInvocations
     * @secure
     */
    betaAppClipInvocationsCreateInstance: (data: BetaAppClipInvocationCreateRequest, params: RequestParams = {}) =>
      this.request<BetaAppClipInvocationResponse, ErrorResponse>({
        path: `/v1/betaAppClipInvocations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppClipInvocations
     * @name BetaAppClipInvocationsGetInstance
     * @request GET:/v1/betaAppClipInvocations/{id}
     * @secure
     */
    betaAppClipInvocationsGetInstance: (
      id: string,
      query?: {
        "fields[betaAppClipInvocations]"?: ("betaAppClipInvocationLocalizations" | "buildBundle" | "url")[];
        include?: "betaAppClipInvocationLocalizations"[];
        "limit[betaAppClipInvocationLocalizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppClipInvocationResponse, ErrorResponse>({
        path: `/v1/betaAppClipInvocations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppClipInvocations
     * @name BetaAppClipInvocationsUpdateInstance
     * @request PATCH:/v1/betaAppClipInvocations/{id}
     * @secure
     */
    betaAppClipInvocationsUpdateInstance: (
      id: string,
      data: BetaAppClipInvocationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<BetaAppClipInvocationResponse, ErrorResponse>({
        path: `/v1/betaAppClipInvocations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppClipInvocations
     * @name BetaAppClipInvocationsDeleteInstance
     * @request DELETE:/v1/betaAppClipInvocations/{id}
     * @secure
     */
    betaAppClipInvocationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaAppClipInvocations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppLocalizations
     * @name BetaAppLocalizationsGetCollection
     * @request GET:/v1/betaAppLocalizations
     * @secure
     */
    betaAppLocalizationsGetCollection: (
      query?: {
        "filter[locale]"?: string[];
        "filter[app]"?: string[];
        "fields[betaAppLocalizations]"?: (
          | "app"
          | "description"
          | "feedbackEmail"
          | "locale"
          | "marketingUrl"
          | "privacyPolicyUrl"
          | "tvOsPrivacyPolicy"
        )[];
        limit?: number;
        include?: "app"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppLocalizationsResponse, ErrorResponse>({
        path: `/v1/betaAppLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppLocalizations
     * @name BetaAppLocalizationsCreateInstance
     * @request POST:/v1/betaAppLocalizations
     * @secure
     */
    betaAppLocalizationsCreateInstance: (data: BetaAppLocalizationCreateRequest, params: RequestParams = {}) =>
      this.request<BetaAppLocalizationResponse, ErrorResponse>({
        path: `/v1/betaAppLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppLocalizations
     * @name BetaAppLocalizationsGetInstance
     * @request GET:/v1/betaAppLocalizations/{id}
     * @secure
     */
    betaAppLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[betaAppLocalizations]"?: (
          | "app"
          | "description"
          | "feedbackEmail"
          | "locale"
          | "marketingUrl"
          | "privacyPolicyUrl"
          | "tvOsPrivacyPolicy"
        )[];
        include?: "app"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppLocalizationResponse, ErrorResponse>({
        path: `/v1/betaAppLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppLocalizations
     * @name BetaAppLocalizationsUpdateInstance
     * @request PATCH:/v1/betaAppLocalizations/{id}
     * @secure
     */
    betaAppLocalizationsUpdateInstance: (
      id: string,
      data: BetaAppLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<BetaAppLocalizationResponse, ErrorResponse>({
        path: `/v1/betaAppLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppLocalizations
     * @name BetaAppLocalizationsDeleteInstance
     * @request DELETE:/v1/betaAppLocalizations/{id}
     * @secure
     */
    betaAppLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaAppLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppReviewDetails
     * @name BetaAppReviewDetailsGetCollection
     * @request GET:/v1/betaAppReviewDetails
     * @secure
     */
    betaAppReviewDetailsGetCollection: (
      query: {
        "filter[app]": string[];
        "fields[betaAppReviewDetails]"?: (
          | "app"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        limit?: number;
        include?: "app"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppReviewDetailsResponse, ErrorResponse>({
        path: `/v1/betaAppReviewDetails`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppReviewDetails
     * @name BetaAppReviewDetailsGetInstance
     * @request GET:/v1/betaAppReviewDetails/{id}
     * @secure
     */
    betaAppReviewDetailsGetInstance: (
      id: string,
      query?: {
        "fields[betaAppReviewDetails]"?: (
          | "app"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        include?: "app"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppReviewDetailResponse, ErrorResponse>({
        path: `/v1/betaAppReviewDetails/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppReviewDetails
     * @name BetaAppReviewDetailsUpdateInstance
     * @request PATCH:/v1/betaAppReviewDetails/{id}
     * @secure
     */
    betaAppReviewDetailsUpdateInstance: (
      id: string,
      data: BetaAppReviewDetailUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<BetaAppReviewDetailResponse, ErrorResponse>({
        path: `/v1/betaAppReviewDetails/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppReviewSubmissions
     * @name BetaAppReviewSubmissionsGetCollection
     * @request GET:/v1/betaAppReviewSubmissions
     * @secure
     */
    betaAppReviewSubmissionsGetCollection: (
      query: {
        "filter[betaReviewState]"?: ("WAITING_FOR_REVIEW" | "IN_REVIEW" | "REJECTED" | "APPROVED")[];
        "filter[build]": string[];
        "fields[betaAppReviewSubmissions]"?: ("betaReviewState" | "build" | "submittedDate")[];
        limit?: number;
        include?: "build"[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppReviewSubmissionsResponse, ErrorResponse>({
        path: `/v1/betaAppReviewSubmissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppReviewSubmissions
     * @name BetaAppReviewSubmissionsCreateInstance
     * @request POST:/v1/betaAppReviewSubmissions
     * @secure
     */
    betaAppReviewSubmissionsCreateInstance: (data: BetaAppReviewSubmissionCreateRequest, params: RequestParams = {}) =>
      this.request<BetaAppReviewSubmissionResponse, ErrorResponse>({
        path: `/v1/betaAppReviewSubmissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppReviewSubmissions
     * @name BetaAppReviewSubmissionsGetInstance
     * @request GET:/v1/betaAppReviewSubmissions/{id}
     * @secure
     */
    betaAppReviewSubmissionsGetInstance: (
      id: string,
      query?: {
        "fields[betaAppReviewSubmissions]"?: ("betaReviewState" | "build" | "submittedDate")[];
        include?: "build"[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppReviewSubmissionResponse, ErrorResponse>({
        path: `/v1/betaAppReviewSubmissions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaBuildLocalizations
     * @name BetaBuildLocalizationsGetCollection
     * @request GET:/v1/betaBuildLocalizations
     * @secure
     */
    betaBuildLocalizationsGetCollection: (
      query?: {
        "filter[locale]"?: string[];
        "filter[build]"?: string[];
        "fields[betaBuildLocalizations]"?: ("build" | "locale" | "whatsNew")[];
        limit?: number;
        include?: "build"[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaBuildLocalizationsResponse, ErrorResponse>({
        path: `/v1/betaBuildLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaBuildLocalizations
     * @name BetaBuildLocalizationsCreateInstance
     * @request POST:/v1/betaBuildLocalizations
     * @secure
     */
    betaBuildLocalizationsCreateInstance: (data: BetaBuildLocalizationCreateRequest, params: RequestParams = {}) =>
      this.request<BetaBuildLocalizationResponse, ErrorResponse>({
        path: `/v1/betaBuildLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaBuildLocalizations
     * @name BetaBuildLocalizationsGetInstance
     * @request GET:/v1/betaBuildLocalizations/{id}
     * @secure
     */
    betaBuildLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[betaBuildLocalizations]"?: ("build" | "locale" | "whatsNew")[];
        include?: "build"[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaBuildLocalizationResponse, ErrorResponse>({
        path: `/v1/betaBuildLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaBuildLocalizations
     * @name BetaBuildLocalizationsUpdateInstance
     * @request PATCH:/v1/betaBuildLocalizations/{id}
     * @secure
     */
    betaBuildLocalizationsUpdateInstance: (
      id: string,
      data: BetaBuildLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<BetaBuildLocalizationResponse, ErrorResponse>({
        path: `/v1/betaBuildLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaBuildLocalizations
     * @name BetaBuildLocalizationsDeleteInstance
     * @request DELETE:/v1/betaBuildLocalizations/{id}
     * @secure
     */
    betaBuildLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaBuildLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsGetCollection
     * @request GET:/v1/betaGroups
     * @secure
     */
    betaGroupsGetCollection: (
      query?: {
        "filter[isInternalGroup]"?: string[];
        "filter[name]"?: string[];
        "filter[publicLink]"?: string[];
        "filter[publicLinkEnabled]"?: string[];
        "filter[publicLinkLimitEnabled]"?: string[];
        "filter[app]"?: string[];
        "filter[builds]"?: string[];
        "filter[id]"?: string[];
        sort?: (
          | "createdDate"
          | "-createdDate"
          | "name"
          | "-name"
          | "publicLinkEnabled"
          | "-publicLinkEnabled"
          | "publicLinkLimit"
          | "-publicLinkLimit"
        )[];
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        limit?: number;
        include?: ("app" | "betaTesters" | "builds")[];
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "limit[betaTesters]"?: number;
        "limit[builds]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaGroupsResponse, ErrorResponse>({
        path: `/v1/betaGroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsCreateInstance
     * @request POST:/v1/betaGroups
     * @secure
     */
    betaGroupsCreateInstance: (data: BetaGroupCreateRequest, params: RequestParams = {}) =>
      this.request<BetaGroupResponse, ErrorResponse>({
        path: `/v1/betaGroups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsGetInstance
     * @request GET:/v1/betaGroups/{id}
     * @secure
     */
    betaGroupsGetInstance: (
      id: string,
      query?: {
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        include?: ("app" | "betaTesters" | "builds")[];
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "limit[betaTesters]"?: number;
        "limit[builds]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaGroupResponse, ErrorResponse>({
        path: `/v1/betaGroups/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsUpdateInstance
     * @request PATCH:/v1/betaGroups/{id}
     * @secure
     */
    betaGroupsUpdateInstance: (id: string, data: BetaGroupUpdateRequest, params: RequestParams = {}) =>
      this.request<BetaGroupResponse, ErrorResponse>({
        path: `/v1/betaGroups/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsDeleteInstance
     * @request DELETE:/v1/betaGroups/{id}
     * @secure
     */
    betaGroupsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaGroups/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaLicenseAgreements
     * @name BetaLicenseAgreementsGetCollection
     * @request GET:/v1/betaLicenseAgreements
     * @secure
     */
    betaLicenseAgreementsGetCollection: (
      query?: {
        "filter[app]"?: string[];
        "fields[betaLicenseAgreements]"?: ("agreementText" | "app")[];
        limit?: number;
        include?: "app"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaLicenseAgreementsResponse, ErrorResponse>({
        path: `/v1/betaLicenseAgreements`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaLicenseAgreements
     * @name BetaLicenseAgreementsGetInstance
     * @request GET:/v1/betaLicenseAgreements/{id}
     * @secure
     */
    betaLicenseAgreementsGetInstance: (
      id: string,
      query?: {
        "fields[betaLicenseAgreements]"?: ("agreementText" | "app")[];
        include?: "app"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaLicenseAgreementResponse, ErrorResponse>({
        path: `/v1/betaLicenseAgreements/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaLicenseAgreements
     * @name BetaLicenseAgreementsUpdateInstance
     * @request PATCH:/v1/betaLicenseAgreements/{id}
     * @secure
     */
    betaLicenseAgreementsUpdateInstance: (
      id: string,
      data: BetaLicenseAgreementUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<BetaLicenseAgreementResponse, ErrorResponse>({
        path: `/v1/betaLicenseAgreements/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesterInvitations
     * @name BetaTesterInvitationsCreateInstance
     * @request POST:/v1/betaTesterInvitations
     * @secure
     */
    betaTesterInvitationsCreateInstance: (data: BetaTesterInvitationCreateRequest, params: RequestParams = {}) =>
      this.request<BetaTesterInvitationResponse, ErrorResponse>({
        path: `/v1/betaTesterInvitations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersGetCollection
     * @request GET:/v1/betaTesters
     * @secure
     */
    betaTestersGetCollection: (
      query?: {
        "filter[email]"?: string[];
        "filter[firstName]"?: string[];
        "filter[inviteType]"?: ("EMAIL" | "PUBLIC_LINK")[];
        "filter[lastName]"?: string[];
        "filter[apps]"?: string[];
        "filter[betaGroups]"?: string[];
        "filter[builds]"?: string[];
        "filter[id]"?: string[];
        sort?: (
          | "email"
          | "-email"
          | "firstName"
          | "-firstName"
          | "inviteType"
          | "-inviteType"
          | "lastName"
          | "-lastName"
        )[];
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        limit?: number;
        include?: ("apps" | "betaGroups" | "builds")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        "limit[apps]"?: number;
        "limit[betaGroups]"?: number;
        "limit[builds]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaTestersResponse, ErrorResponse>({
        path: `/v1/betaTesters`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersCreateInstance
     * @request POST:/v1/betaTesters
     * @secure
     */
    betaTestersCreateInstance: (data: BetaTesterCreateRequest, params: RequestParams = {}) =>
      this.request<BetaTesterResponse, ErrorResponse>({
        path: `/v1/betaTesters`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersGetInstance
     * @request GET:/v1/betaTesters/{id}
     * @secure
     */
    betaTestersGetInstance: (
      id: string,
      query?: {
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        include?: ("apps" | "betaGroups" | "builds")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        "limit[apps]"?: number;
        "limit[betaGroups]"?: number;
        "limit[builds]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaTesterResponse, ErrorResponse>({
        path: `/v1/betaTesters/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersDeleteInstance
     * @request DELETE:/v1/betaTesters/{id}
     * @secure
     */
    betaTestersDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaTesters/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBetaDetails
     * @name BuildBetaDetailsGetCollection
     * @request GET:/v1/buildBetaDetails
     * @secure
     */
    buildBetaDetailsGetCollection: (
      query?: {
        "filter[build]"?: string[];
        "filter[id]"?: string[];
        "fields[buildBetaDetails]"?: ("autoNotifyEnabled" | "build" | "externalBuildState" | "internalBuildState")[];
        limit?: number;
        include?: "build"[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildBetaDetailsResponse, ErrorResponse>({
        path: `/v1/buildBetaDetails`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBetaDetails
     * @name BuildBetaDetailsGetInstance
     * @request GET:/v1/buildBetaDetails/{id}
     * @secure
     */
    buildBetaDetailsGetInstance: (
      id: string,
      query?: {
        "fields[buildBetaDetails]"?: ("autoNotifyEnabled" | "build" | "externalBuildState" | "internalBuildState")[];
        include?: "build"[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildBetaDetailResponse, ErrorResponse>({
        path: `/v1/buildBetaDetails/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBetaDetails
     * @name BuildBetaDetailsUpdateInstance
     * @request PATCH:/v1/buildBetaDetails/{id}
     * @secure
     */
    buildBetaDetailsUpdateInstance: (id: string, data: BuildBetaDetailUpdateRequest, params: RequestParams = {}) =>
      this.request<BuildBetaDetailResponse, ErrorResponse>({
        path: `/v1/buildBetaDetails/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBetaNotifications
     * @name BuildBetaNotificationsCreateInstance
     * @request POST:/v1/buildBetaNotifications
     * @secure
     */
    buildBetaNotificationsCreateInstance: (data: BuildBetaNotificationCreateRequest, params: RequestParams = {}) =>
      this.request<BuildBetaNotificationResponse, ErrorResponse>({
        path: `/v1/buildBetaNotifications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsGetCollection
     * @request GET:/v1/builds
     * @secure
     */
    buildsGetCollection: (
      query?: {
        "filter[betaAppReviewSubmission.betaReviewState]"?: (
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "REJECTED"
          | "APPROVED"
        )[];
        "filter[buildAudienceType]"?: ("INTERNAL_ONLY" | "APP_STORE_ELIGIBLE")[];
        "filter[expired]"?: string[];
        "filter[preReleaseVersion.platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[preReleaseVersion.version]"?: string[];
        "filter[processingState]"?: ("PROCESSING" | "FAILED" | "INVALID" | "VALID")[];
        "filter[usesNonExemptEncryption]"?: string[];
        "filter[version]"?: string[];
        "filter[app]"?: string[];
        "filter[appStoreVersion]"?: string[];
        "filter[betaGroups]"?: string[];
        "filter[preReleaseVersion]"?: string[];
        "filter[id]"?: string[];
        sort?: (
          | "preReleaseVersion"
          | "-preReleaseVersion"
          | "uploadedDate"
          | "-uploadedDate"
          | "version"
          | "-version"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        limit?: number;
        include?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildBetaDetail"
          | "buildBundles"
          | "icons"
          | "individualTesters"
          | "preReleaseVersion"
        )[];
        "fields[diagnosticSignatures]"?: ("diagnosticType" | "logs" | "signature" | "weight")[];
        "fields[buildIcons]"?: ("iconAsset" | "iconType" | "name")[];
        "fields[buildBetaDetails]"?: ("autoNotifyEnabled" | "build" | "externalBuildState" | "internalBuildState")[];
        "fields[betaAppReviewSubmissions]"?: ("betaReviewState" | "build" | "submittedDate")[];
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[betaBuildLocalizations]"?: ("build" | "locale" | "whatsNew")[];
        "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[];
        "fields[appEncryptionDeclarations]"?: (
          | "app"
          | "appEncryptionDeclarationState"
          | "availableOnFrenchStore"
          | "builds"
          | "codeValue"
          | "containsProprietaryCryptography"
          | "containsThirdPartyCryptography"
          | "documentName"
          | "documentType"
          | "documentUrl"
          | "exempt"
          | "platform"
          | "uploadedDate"
          | "usesEncryption"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[perfPowerMetrics]"?: ("deviceType" | "metricType" | "platform")[];
        "limit[betaBuildLocalizations]"?: number;
        "limit[betaGroups]"?: number;
        "limit[buildBundles]"?: number;
        "limit[icons]"?: number;
        "limit[individualTesters]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildsResponse, ErrorResponse>({
        path: `/v1/builds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsGetInstance
     * @request GET:/v1/builds/{id}
     * @secure
     */
    buildsGetInstance: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        include?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildBetaDetail"
          | "buildBundles"
          | "icons"
          | "individualTesters"
          | "preReleaseVersion"
        )[];
        "fields[diagnosticSignatures]"?: ("diagnosticType" | "logs" | "signature" | "weight")[];
        "fields[buildIcons]"?: ("iconAsset" | "iconType" | "name")[];
        "fields[buildBetaDetails]"?: ("autoNotifyEnabled" | "build" | "externalBuildState" | "internalBuildState")[];
        "fields[betaAppReviewSubmissions]"?: ("betaReviewState" | "build" | "submittedDate")[];
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[betaBuildLocalizations]"?: ("build" | "locale" | "whatsNew")[];
        "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[];
        "fields[appEncryptionDeclarations]"?: (
          | "app"
          | "appEncryptionDeclarationState"
          | "availableOnFrenchStore"
          | "builds"
          | "codeValue"
          | "containsProprietaryCryptography"
          | "containsThirdPartyCryptography"
          | "documentName"
          | "documentType"
          | "documentUrl"
          | "exempt"
          | "platform"
          | "uploadedDate"
          | "usesEncryption"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[perfPowerMetrics]"?: ("deviceType" | "metricType" | "platform")[];
        "limit[betaBuildLocalizations]"?: number;
        "limit[betaGroups]"?: number;
        "limit[buildBundles]"?: number;
        "limit[icons]"?: number;
        "limit[individualTesters]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildResponse, ErrorResponse>({
        path: `/v1/builds/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsUpdateInstance
     * @request PATCH:/v1/builds/{id}
     * @secure
     */
    buildsUpdateInstance: (id: string, data: BuildUpdateRequest, params: RequestParams = {}) =>
      this.request<BuildResponse, ErrorResponse>({
        path: `/v1/builds/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIdCapabilities
     * @name BundleIdCapabilitiesCreateInstance
     * @request POST:/v1/bundleIdCapabilities
     * @secure
     */
    bundleIdCapabilitiesCreateInstance: (data: BundleIdCapabilityCreateRequest, params: RequestParams = {}) =>
      this.request<BundleIdCapabilityResponse, ErrorResponse>({
        path: `/v1/bundleIdCapabilities`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIdCapabilities
     * @name BundleIdCapabilitiesUpdateInstance
     * @request PATCH:/v1/bundleIdCapabilities/{id}
     * @secure
     */
    bundleIdCapabilitiesUpdateInstance: (
      id: string,
      data: BundleIdCapabilityUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<BundleIdCapabilityResponse, ErrorResponse>({
        path: `/v1/bundleIdCapabilities/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIdCapabilities
     * @name BundleIdCapabilitiesDeleteInstance
     * @request DELETE:/v1/bundleIdCapabilities/{id}
     * @secure
     */
    bundleIdCapabilitiesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/bundleIdCapabilities/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIds
     * @name BundleIdsGetCollection
     * @request GET:/v1/bundleIds
     * @secure
     */
    bundleIdsGetCollection: (
      query?: {
        "filter[identifier]"?: string[];
        "filter[name]"?: string[];
        "filter[platform]"?: ("IOS" | "MAC_OS")[];
        "filter[seedId]"?: string[];
        "filter[id]"?: string[];
        sort?: (
          | "id"
          | "-id"
          | "identifier"
          | "-identifier"
          | "name"
          | "-name"
          | "platform"
          | "-platform"
          | "seedId"
          | "-seedId"
        )[];
        "fields[bundleIds]"?: (
          | "app"
          | "bundleIdCapabilities"
          | "identifier"
          | "name"
          | "platform"
          | "profiles"
          | "seedId"
        )[];
        limit?: number;
        include?: ("app" | "bundleIdCapabilities" | "profiles")[];
        "fields[bundleIdCapabilities]"?: ("bundleId" | "capabilityType" | "settings")[];
        "fields[profiles]"?: (
          | "bundleId"
          | "certificates"
          | "createdDate"
          | "devices"
          | "expirationDate"
          | "name"
          | "platform"
          | "profileContent"
          | "profileState"
          | "profileType"
          | "uuid"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "limit[bundleIdCapabilities]"?: number;
        "limit[profiles]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BundleIdsResponse, ErrorResponse>({
        path: `/v1/bundleIds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIds
     * @name BundleIdsCreateInstance
     * @request POST:/v1/bundleIds
     * @secure
     */
    bundleIdsCreateInstance: (data: BundleIdCreateRequest, params: RequestParams = {}) =>
      this.request<BundleIdResponse, ErrorResponse>({
        path: `/v1/bundleIds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIds
     * @name BundleIdsGetInstance
     * @request GET:/v1/bundleIds/{id}
     * @secure
     */
    bundleIdsGetInstance: (
      id: string,
      query?: {
        "fields[bundleIds]"?: (
          | "app"
          | "bundleIdCapabilities"
          | "identifier"
          | "name"
          | "platform"
          | "profiles"
          | "seedId"
        )[];
        include?: ("app" | "bundleIdCapabilities" | "profiles")[];
        "fields[bundleIdCapabilities]"?: ("bundleId" | "capabilityType" | "settings")[];
        "fields[profiles]"?: (
          | "bundleId"
          | "certificates"
          | "createdDate"
          | "devices"
          | "expirationDate"
          | "name"
          | "platform"
          | "profileContent"
          | "profileState"
          | "profileType"
          | "uuid"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "limit[bundleIdCapabilities]"?: number;
        "limit[profiles]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BundleIdResponse, ErrorResponse>({
        path: `/v1/bundleIds/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIds
     * @name BundleIdsUpdateInstance
     * @request PATCH:/v1/bundleIds/{id}
     * @secure
     */
    bundleIdsUpdateInstance: (id: string, data: BundleIdUpdateRequest, params: RequestParams = {}) =>
      this.request<BundleIdResponse, ErrorResponse>({
        path: `/v1/bundleIds/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIds
     * @name BundleIdsDeleteInstance
     * @request DELETE:/v1/bundleIds/{id}
     * @secure
     */
    bundleIdsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/bundleIds/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Certificates
     * @name CertificatesGetCollection
     * @request GET:/v1/certificates
     * @secure
     */
    certificatesGetCollection: (
      query?: {
        "filter[certificateType]"?: (
          | "IOS_DEVELOPMENT"
          | "IOS_DISTRIBUTION"
          | "MAC_APP_DISTRIBUTION"
          | "MAC_INSTALLER_DISTRIBUTION"
          | "MAC_APP_DEVELOPMENT"
          | "DEVELOPER_ID_KEXT"
          | "DEVELOPER_ID_APPLICATION"
          | "DEVELOPMENT"
          | "DISTRIBUTION"
          | "PASS_TYPE_ID"
          | "PASS_TYPE_ID_WITH_NFC"
        )[];
        "filter[displayName]"?: string[];
        "filter[serialNumber]"?: string[];
        "filter[id]"?: string[];
        sort?: (
          | "certificateType"
          | "-certificateType"
          | "displayName"
          | "-displayName"
          | "id"
          | "-id"
          | "serialNumber"
          | "-serialNumber"
        )[];
        "fields[certificates]"?: (
          | "certificateContent"
          | "certificateType"
          | "csrContent"
          | "displayName"
          | "expirationDate"
          | "name"
          | "platform"
          | "serialNumber"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CertificatesResponse, ErrorResponse>({
        path: `/v1/certificates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Certificates
     * @name CertificatesCreateInstance
     * @request POST:/v1/certificates
     * @secure
     */
    certificatesCreateInstance: (data: CertificateCreateRequest, params: RequestParams = {}) =>
      this.request<CertificateResponse, ErrorResponse>({
        path: `/v1/certificates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Certificates
     * @name CertificatesGetInstance
     * @request GET:/v1/certificates/{id}
     * @secure
     */
    certificatesGetInstance: (
      id: string,
      query?: {
        "fields[certificates]"?: (
          | "certificateContent"
          | "certificateType"
          | "csrContent"
          | "displayName"
          | "expirationDate"
          | "name"
          | "platform"
          | "serialNumber"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CertificateResponse, ErrorResponse>({
        path: `/v1/certificates/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Certificates
     * @name CertificatesDeleteInstance
     * @request DELETE:/v1/certificates/{id}
     * @secure
     */
    certificatesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/certificates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiArtifacts
     * @name CiArtifactsGetInstance
     * @request GET:/v1/ciArtifacts/{id}
     * @secure
     */
    ciArtifactsGetInstance: (
      id: string,
      query?: { "fields[ciArtifacts]"?: ("downloadUrl" | "fileName" | "fileSize" | "fileType")[] },
      params: RequestParams = {},
    ) =>
      this.request<CiArtifactResponse, ErrorResponse>({
        path: `/v1/ciArtifacts/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildActions
     * @name CiBuildActionsGetInstance
     * @request GET:/v1/ciBuildActions/{id}
     * @secure
     */
    ciBuildActionsGetInstance: (
      id: string,
      query?: {
        "fields[ciBuildActions]"?: (
          | "actionType"
          | "artifacts"
          | "buildRun"
          | "completionStatus"
          | "executionProgress"
          | "finishedDate"
          | "isRequiredToPass"
          | "issueCounts"
          | "issues"
          | "name"
          | "startedDate"
          | "testResults"
        )[];
        include?: "buildRun"[];
        "fields[ciIssues]"?: ("category" | "fileSource" | "issueType" | "message")[];
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        "fields[ciTestResults]"?: (
          | "className"
          | "destinationTestResults"
          | "fileSource"
          | "message"
          | "name"
          | "status"
        )[];
        "fields[ciArtifacts]"?: ("downloadUrl" | "fileName" | "fileSize" | "fileType")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiBuildActionResponse, ErrorResponse>({
        path: `/v1/ciBuildActions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildRuns
     * @name CiBuildRunsCreateInstance
     * @request POST:/v1/ciBuildRuns
     * @secure
     */
    ciBuildRunsCreateInstance: (data: CiBuildRunCreateRequest, params: RequestParams = {}) =>
      this.request<CiBuildRunResponse, ErrorResponse>({
        path: `/v1/ciBuildRuns`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildRuns
     * @name CiBuildRunsGetInstance
     * @request GET:/v1/ciBuildRuns/{id}
     * @secure
     */
    ciBuildRunsGetInstance: (
      id: string,
      query?: {
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        include?: ("builds" | "destinationBranch" | "product" | "pullRequest" | "sourceBranchOrTag" | "workflow")[];
        "fields[ciBuildActions]"?: (
          | "actionType"
          | "artifacts"
          | "buildRun"
          | "completionStatus"
          | "executionProgress"
          | "finishedDate"
          | "isRequiredToPass"
          | "issueCounts"
          | "issues"
          | "name"
          | "startedDate"
          | "testResults"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "limit[builds]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CiBuildRunResponse, ErrorResponse>({
        path: `/v1/ciBuildRuns/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiIssues
     * @name CiIssuesGetInstance
     * @request GET:/v1/ciIssues/{id}
     * @secure
     */
    ciIssuesGetInstance: (
      id: string,
      query?: { "fields[ciIssues]"?: ("category" | "fileSource" | "issueType" | "message")[] },
      params: RequestParams = {},
    ) =>
      this.request<CiIssueResponse, ErrorResponse>({
        path: `/v1/ciIssues/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiMacOsVersions
     * @name CiMacOsVersionsGetCollection
     * @request GET:/v1/ciMacOsVersions
     * @secure
     */
    ciMacOsVersionsGetCollection: (
      query?: {
        "fields[ciMacOsVersions]"?: ("name" | "version" | "xcodeVersions")[];
        limit?: number;
        include?: "xcodeVersions"[];
        "fields[ciXcodeVersions]"?: ("macOsVersions" | "name" | "testDestinations" | "version")[];
        "limit[xcodeVersions]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CiMacOsVersionsResponse, ErrorResponse>({
        path: `/v1/ciMacOsVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiMacOsVersions
     * @name CiMacOsVersionsGetInstance
     * @request GET:/v1/ciMacOsVersions/{id}
     * @secure
     */
    ciMacOsVersionsGetInstance: (
      id: string,
      query?: {
        "fields[ciMacOsVersions]"?: ("name" | "version" | "xcodeVersions")[];
        include?: "xcodeVersions"[];
        "fields[ciXcodeVersions]"?: ("macOsVersions" | "name" | "testDestinations" | "version")[];
        "limit[xcodeVersions]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CiMacOsVersionResponse, ErrorResponse>({
        path: `/v1/ciMacOsVersions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiProducts
     * @name CiProductsGetCollection
     * @request GET:/v1/ciProducts
     * @secure
     */
    ciProductsGetCollection: (
      query?: {
        "filter[productType]"?: ("APP" | "FRAMEWORK")[];
        "filter[app]"?: string[];
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        limit?: number;
        include?: ("app" | "bundleId" | "primaryRepositories")[];
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        "fields[ciWorkflows]"?: (
          | "actions"
          | "branchStartCondition"
          | "buildRuns"
          | "clean"
          | "containerFilePath"
          | "description"
          | "isEnabled"
          | "isLockedForEditing"
          | "lastModifiedDate"
          | "macOsVersion"
          | "name"
          | "product"
          | "pullRequestStartCondition"
          | "repository"
          | "scheduledStartCondition"
          | "tagStartCondition"
          | "xcodeVersion"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        "limit[primaryRepositories]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CiProductsResponse, ErrorResponse>({
        path: `/v1/ciProducts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiProducts
     * @name CiProductsGetInstance
     * @request GET:/v1/ciProducts/{id}
     * @secure
     */
    ciProductsGetInstance: (
      id: string,
      query?: {
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        include?: ("app" | "bundleId" | "primaryRepositories")[];
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        "fields[ciWorkflows]"?: (
          | "actions"
          | "branchStartCondition"
          | "buildRuns"
          | "clean"
          | "containerFilePath"
          | "description"
          | "isEnabled"
          | "isLockedForEditing"
          | "lastModifiedDate"
          | "macOsVersion"
          | "name"
          | "product"
          | "pullRequestStartCondition"
          | "repository"
          | "scheduledStartCondition"
          | "tagStartCondition"
          | "xcodeVersion"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        "limit[primaryRepositories]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CiProductResponse, ErrorResponse>({
        path: `/v1/ciProducts/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiProducts
     * @name CiProductsDeleteInstance
     * @request DELETE:/v1/ciProducts/{id}
     * @secure
     */
    ciProductsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/ciProducts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiTestResults
     * @name CiTestResultsGetInstance
     * @request GET:/v1/ciTestResults/{id}
     * @secure
     */
    ciTestResultsGetInstance: (
      id: string,
      query?: {
        "fields[ciTestResults]"?: (
          | "className"
          | "destinationTestResults"
          | "fileSource"
          | "message"
          | "name"
          | "status"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiTestResultResponse, ErrorResponse>({
        path: `/v1/ciTestResults/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiWorkflows
     * @name CiWorkflowsCreateInstance
     * @request POST:/v1/ciWorkflows
     * @secure
     */
    ciWorkflowsCreateInstance: (data: CiWorkflowCreateRequest, params: RequestParams = {}) =>
      this.request<CiWorkflowResponse, ErrorResponse>({
        path: `/v1/ciWorkflows`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiWorkflows
     * @name CiWorkflowsGetInstance
     * @request GET:/v1/ciWorkflows/{id}
     * @secure
     */
    ciWorkflowsGetInstance: (
      id: string,
      query?: {
        "fields[ciWorkflows]"?: (
          | "actions"
          | "branchStartCondition"
          | "buildRuns"
          | "clean"
          | "containerFilePath"
          | "description"
          | "isEnabled"
          | "isLockedForEditing"
          | "lastModifiedDate"
          | "macOsVersion"
          | "name"
          | "product"
          | "pullRequestStartCondition"
          | "repository"
          | "scheduledStartCondition"
          | "tagStartCondition"
          | "xcodeVersion"
        )[];
        include?: ("macOsVersion" | "product" | "repository" | "xcodeVersion")[];
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiWorkflowResponse, ErrorResponse>({
        path: `/v1/ciWorkflows/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiWorkflows
     * @name CiWorkflowsUpdateInstance
     * @request PATCH:/v1/ciWorkflows/{id}
     * @secure
     */
    ciWorkflowsUpdateInstance: (id: string, data: CiWorkflowUpdateRequest, params: RequestParams = {}) =>
      this.request<CiWorkflowResponse, ErrorResponse>({
        path: `/v1/ciWorkflows/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiWorkflows
     * @name CiWorkflowsDeleteInstance
     * @request DELETE:/v1/ciWorkflows/{id}
     * @secure
     */
    ciWorkflowsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/ciWorkflows/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiXcodeVersions
     * @name CiXcodeVersionsGetCollection
     * @request GET:/v1/ciXcodeVersions
     * @secure
     */
    ciXcodeVersionsGetCollection: (
      query?: {
        "fields[ciXcodeVersions]"?: ("macOsVersions" | "name" | "testDestinations" | "version")[];
        limit?: number;
        include?: "macOsVersions"[];
        "fields[ciMacOsVersions]"?: ("name" | "version" | "xcodeVersions")[];
        "limit[macOsVersions]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CiXcodeVersionsResponse, ErrorResponse>({
        path: `/v1/ciXcodeVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiXcodeVersions
     * @name CiXcodeVersionsGetInstance
     * @request GET:/v1/ciXcodeVersions/{id}
     * @secure
     */
    ciXcodeVersionsGetInstance: (
      id: string,
      query?: {
        "fields[ciXcodeVersions]"?: ("macOsVersions" | "name" | "testDestinations" | "version")[];
        include?: "macOsVersions"[];
        "fields[ciMacOsVersions]"?: ("name" | "version" | "xcodeVersions")[];
        "limit[macOsVersions]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CiXcodeVersionResponse, ErrorResponse>({
        path: `/v1/ciXcodeVersions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerReviewResponses
     * @name CustomerReviewResponsesCreateInstance
     * @request POST:/v1/customerReviewResponses
     * @secure
     */
    customerReviewResponsesCreateInstance: (data: CustomerReviewResponseV1CreateRequest, params: RequestParams = {}) =>
      this.request<CustomerReviewResponseV1Response, ErrorResponse>({
        path: `/v1/customerReviewResponses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerReviewResponses
     * @name CustomerReviewResponsesGetInstance
     * @request GET:/v1/customerReviewResponses/{id}
     * @secure
     */
    customerReviewResponsesGetInstance: (
      id: string,
      query?: {
        "fields[customerReviewResponses]"?: ("lastModifiedDate" | "responseBody" | "review" | "state")[];
        include?: "review"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerReviewResponseV1Response, ErrorResponse>({
        path: `/v1/customerReviewResponses/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerReviewResponses
     * @name CustomerReviewResponsesDeleteInstance
     * @request DELETE:/v1/customerReviewResponses/{id}
     * @secure
     */
    customerReviewResponsesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/customerReviewResponses/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerReviews
     * @name CustomerReviewsGetInstance
     * @request GET:/v1/customerReviews/{id}
     * @secure
     */
    customerReviewsGetInstance: (
      id: string,
      query?: {
        "fields[customerReviews]"?: (
          | "body"
          | "createdDate"
          | "rating"
          | "response"
          | "reviewerNickname"
          | "territory"
          | "title"
        )[];
        include?: "response"[];
        "fields[customerReviewResponses]"?: ("lastModifiedDate" | "responseBody" | "review" | "state")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerReviewResponse, ErrorResponse>({
        path: `/v1/customerReviews/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name DevicesGetCollection
     * @request GET:/v1/devices
     * @secure
     */
    devicesGetCollection: (
      query?: {
        "filter[name]"?: string[];
        "filter[platform]"?: ("IOS" | "MAC_OS")[];
        "filter[status]"?: ("ENABLED" | "DISABLED")[];
        "filter[udid]"?: string[];
        "filter[id]"?: string[];
        sort?: ("id" | "-id" | "name" | "-name" | "platform" | "-platform" | "status" | "-status" | "udid" | "-udid")[];
        "fields[devices]"?: ("addedDate" | "deviceClass" | "model" | "name" | "platform" | "status" | "udid")[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DevicesResponse, ErrorResponse>({
        path: `/v1/devices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name DevicesCreateInstance
     * @request POST:/v1/devices
     * @secure
     */
    devicesCreateInstance: (data: DeviceCreateRequest, params: RequestParams = {}) =>
      this.request<DeviceResponse, ErrorResponse>({
        path: `/v1/devices`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name DevicesGetInstance
     * @request GET:/v1/devices/{id}
     * @secure
     */
    devicesGetInstance: (
      id: string,
      query?: {
        "fields[devices]"?: ("addedDate" | "deviceClass" | "model" | "name" | "platform" | "status" | "udid")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<DeviceResponse, ErrorResponse>({
        path: `/v1/devices/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name DevicesUpdateInstance
     * @request PATCH:/v1/devices/{id}
     * @secure
     */
    devicesUpdateInstance: (id: string, data: DeviceUpdateRequest, params: RequestParams = {}) =>
      this.request<DeviceResponse, ErrorResponse>({
        path: `/v1/devices/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EndUserLicenseAgreements
     * @name EndUserLicenseAgreementsCreateInstance
     * @request POST:/v1/endUserLicenseAgreements
     * @secure
     */
    endUserLicenseAgreementsCreateInstance: (data: EndUserLicenseAgreementCreateRequest, params: RequestParams = {}) =>
      this.request<EndUserLicenseAgreementResponse, ErrorResponse>({
        path: `/v1/endUserLicenseAgreements`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EndUserLicenseAgreements
     * @name EndUserLicenseAgreementsGetInstance
     * @request GET:/v1/endUserLicenseAgreements/{id}
     * @secure
     */
    endUserLicenseAgreementsGetInstance: (
      id: string,
      query?: {
        "fields[endUserLicenseAgreements]"?: ("agreementText" | "app" | "territories")[];
        include?: ("app" | "territories")[];
        "fields[territories]"?: "currency"[];
        "limit[territories]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EndUserLicenseAgreementResponse, ErrorResponse>({
        path: `/v1/endUserLicenseAgreements/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EndUserLicenseAgreements
     * @name EndUserLicenseAgreementsUpdateInstance
     * @request PATCH:/v1/endUserLicenseAgreements/{id}
     * @secure
     */
    endUserLicenseAgreementsUpdateInstance: (
      id: string,
      data: EndUserLicenseAgreementUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EndUserLicenseAgreementResponse, ErrorResponse>({
        path: `/v1/endUserLicenseAgreements/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EndUserLicenseAgreements
     * @name EndUserLicenseAgreementsDeleteInstance
     * @request DELETE:/v1/endUserLicenseAgreements/{id}
     * @secure
     */
    endUserLicenseAgreementsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/endUserLicenseAgreements/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FinanceReports
     * @name FinanceReportsGetCollection
     * @request GET:/v1/financeReports
     * @secure
     */
    financeReportsGetCollection: (
      query: {
        "filter[regionCode]": string[];
        "filter[reportDate]": string[];
        "filter[reportType]": ("FINANCIAL" | "FINANCE_DETAIL")[];
        "filter[vendorNumber]": string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<Gzip, ErrorResponse>({
        path: `/v1/financeReports`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseAppStoreReviewScreenshots
     * @name InAppPurchaseAppStoreReviewScreenshotsCreateInstance
     * @request POST:/v1/inAppPurchaseAppStoreReviewScreenshots
     * @secure
     */
    inAppPurchaseAppStoreReviewScreenshotsCreateInstance: (
      data: InAppPurchaseAppStoreReviewScreenshotCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseAppStoreReviewScreenshotResponse, ErrorResponse>({
        path: `/v1/inAppPurchaseAppStoreReviewScreenshots`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseAppStoreReviewScreenshots
     * @name InAppPurchaseAppStoreReviewScreenshotsGetInstance
     * @request GET:/v1/inAppPurchaseAppStoreReviewScreenshots/{id}
     * @secure
     */
    inAppPurchaseAppStoreReviewScreenshotsGetInstance: (
      id: string,
      query?: {
        "fields[inAppPurchaseAppStoreReviewScreenshots]"?: (
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "inAppPurchaseV2"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        include?: "inAppPurchaseV2"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseAppStoreReviewScreenshotResponse, ErrorResponse>({
        path: `/v1/inAppPurchaseAppStoreReviewScreenshots/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseAppStoreReviewScreenshots
     * @name InAppPurchaseAppStoreReviewScreenshotsUpdateInstance
     * @request PATCH:/v1/inAppPurchaseAppStoreReviewScreenshots/{id}
     * @secure
     */
    inAppPurchaseAppStoreReviewScreenshotsUpdateInstance: (
      id: string,
      data: InAppPurchaseAppStoreReviewScreenshotUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseAppStoreReviewScreenshotResponse, ErrorResponse>({
        path: `/v1/inAppPurchaseAppStoreReviewScreenshots/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseAppStoreReviewScreenshots
     * @name InAppPurchaseAppStoreReviewScreenshotsDeleteInstance
     * @request DELETE:/v1/inAppPurchaseAppStoreReviewScreenshots/{id}
     * @secure
     */
    inAppPurchaseAppStoreReviewScreenshotsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/inAppPurchaseAppStoreReviewScreenshots/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseContents
     * @name InAppPurchaseContentsGetInstance
     * @request GET:/v1/inAppPurchaseContents/{id}
     * @secure
     */
    inAppPurchaseContentsGetInstance: (
      id: string,
      query?: {
        "fields[inAppPurchaseContents]"?: ("fileName" | "fileSize" | "inAppPurchaseV2" | "lastModifiedDate" | "url")[];
        include?: "inAppPurchaseV2"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseContentResponse, ErrorResponse>({
        path: `/v1/inAppPurchaseContents/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseLocalizations
     * @name InAppPurchaseLocalizationsCreateInstance
     * @request POST:/v1/inAppPurchaseLocalizations
     * @secure
     */
    inAppPurchaseLocalizationsCreateInstance: (
      data: InAppPurchaseLocalizationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseLocalizationResponse, ErrorResponse>({
        path: `/v1/inAppPurchaseLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseLocalizations
     * @name InAppPurchaseLocalizationsGetInstance
     * @request GET:/v1/inAppPurchaseLocalizations/{id}
     * @secure
     */
    inAppPurchaseLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[inAppPurchaseLocalizations]"?: ("description" | "inAppPurchaseV2" | "locale" | "name" | "state")[];
        include?: "inAppPurchaseV2"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseLocalizationResponse, ErrorResponse>({
        path: `/v1/inAppPurchaseLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseLocalizations
     * @name InAppPurchaseLocalizationsUpdateInstance
     * @request PATCH:/v1/inAppPurchaseLocalizations/{id}
     * @secure
     */
    inAppPurchaseLocalizationsUpdateInstance: (
      id: string,
      data: InAppPurchaseLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseLocalizationResponse, ErrorResponse>({
        path: `/v1/inAppPurchaseLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseLocalizations
     * @name InAppPurchaseLocalizationsDeleteInstance
     * @request DELETE:/v1/inAppPurchaseLocalizations/{id}
     * @secure
     */
    inAppPurchaseLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/inAppPurchaseLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchasePriceSchedules
     * @name InAppPurchasePriceSchedulesCreateInstance
     * @request POST:/v1/inAppPurchasePriceSchedules
     * @secure
     */
    inAppPurchasePriceSchedulesCreateInstance: (
      data: InAppPurchasePriceScheduleCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchasePriceScheduleResponse, ErrorResponse>({
        path: `/v1/inAppPurchasePriceSchedules`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchasePriceSchedules
     * @name InAppPurchasePriceSchedulesGetInstance
     * @request GET:/v1/inAppPurchasePriceSchedules/{id}
     * @secure
     */
    inAppPurchasePriceSchedulesGetInstance: (
      id: string,
      query?: {
        "fields[inAppPurchasePriceSchedules]"?: ("inAppPurchase" | "manualPrices")[];
        include?: ("inAppPurchase" | "manualPrices")[];
        "fields[inAppPurchasePrices]"?: ("inAppPurchasePricePoint" | "inAppPurchaseV2" | "startDate" | "territory")[];
        "limit[manualPrices]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchasePriceScheduleResponse, ErrorResponse>({
        path: `/v1/inAppPurchasePriceSchedules/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchaseSubmissions
     * @name InAppPurchaseSubmissionsCreateInstance
     * @request POST:/v1/inAppPurchaseSubmissions
     * @secure
     */
    inAppPurchaseSubmissionsCreateInstance: (data: InAppPurchaseSubmissionCreateRequest, params: RequestParams = {}) =>
      this.request<InAppPurchaseSubmissionResponse, ErrorResponse>({
        path: `/v1/inAppPurchaseSubmissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesGetInstance
     * @request GET:/v1/inAppPurchases/{id}
     * @secure
     */
    inAppPurchasesGetInstance: (
      id: string,
      query?: {
        "fields[inAppPurchases]"?: ("apps" | "inAppPurchaseType" | "productId" | "referenceName" | "state")[];
        include?: "apps"[];
        "limit[apps]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseResponse, ErrorResponse>({
        path: `/v1/inAppPurchases/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreReleaseVersions
     * @name PreReleaseVersionsGetCollection
     * @request GET:/v1/preReleaseVersions
     * @secure
     */
    preReleaseVersionsGetCollection: (
      query?: {
        "filter[builds.expired]"?: string[];
        "filter[builds.processingState]"?: ("PROCESSING" | "FAILED" | "INVALID" | "VALID")[];
        "filter[builds.version]"?: string[];
        "filter[platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[version]"?: string[];
        "filter[app]"?: string[];
        "filter[builds]"?: string[];
        sort?: ("version" | "-version")[];
        "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[];
        limit?: number;
        include?: ("app" | "builds")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "limit[builds]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PreReleaseVersionsResponse, ErrorResponse>({
        path: `/v1/preReleaseVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreReleaseVersions
     * @name PreReleaseVersionsGetInstance
     * @request GET:/v1/preReleaseVersions/{id}
     * @secure
     */
    preReleaseVersionsGetInstance: (
      id: string,
      query?: {
        "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[];
        include?: ("app" | "builds")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "limit[builds]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PrereleaseVersionResponse, ErrorResponse>({
        path: `/v1/preReleaseVersions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesGetCollection
     * @request GET:/v1/profiles
     * @secure
     */
    profilesGetCollection: (
      query?: {
        "filter[name]"?: string[];
        "filter[profileState]"?: ("ACTIVE" | "INVALID")[];
        "filter[profileType]"?: (
          | "IOS_APP_DEVELOPMENT"
          | "IOS_APP_STORE"
          | "IOS_APP_ADHOC"
          | "IOS_APP_INHOUSE"
          | "MAC_APP_DEVELOPMENT"
          | "MAC_APP_STORE"
          | "MAC_APP_DIRECT"
          | "TVOS_APP_DEVELOPMENT"
          | "TVOS_APP_STORE"
          | "TVOS_APP_ADHOC"
          | "TVOS_APP_INHOUSE"
          | "MAC_CATALYST_APP_DEVELOPMENT"
          | "MAC_CATALYST_APP_STORE"
          | "MAC_CATALYST_APP_DIRECT"
        )[];
        "filter[id]"?: string[];
        sort?: ("id" | "-id" | "name" | "-name" | "profileState" | "-profileState" | "profileType" | "-profileType")[];
        "fields[profiles]"?: (
          | "bundleId"
          | "certificates"
          | "createdDate"
          | "devices"
          | "expirationDate"
          | "name"
          | "platform"
          | "profileContent"
          | "profileState"
          | "profileType"
          | "uuid"
        )[];
        limit?: number;
        include?: ("bundleId" | "certificates" | "devices")[];
        "fields[certificates]"?: (
          | "certificateContent"
          | "certificateType"
          | "csrContent"
          | "displayName"
          | "expirationDate"
          | "name"
          | "platform"
          | "serialNumber"
        )[];
        "fields[devices]"?: ("addedDate" | "deviceClass" | "model" | "name" | "platform" | "status" | "udid")[];
        "fields[bundleIds]"?: (
          | "app"
          | "bundleIdCapabilities"
          | "identifier"
          | "name"
          | "platform"
          | "profiles"
          | "seedId"
        )[];
        "limit[certificates]"?: number;
        "limit[devices]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProfilesResponse, ErrorResponse>({
        path: `/v1/profiles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesCreateInstance
     * @request POST:/v1/profiles
     * @secure
     */
    profilesCreateInstance: (data: ProfileCreateRequest, params: RequestParams = {}) =>
      this.request<ProfileResponse, ErrorResponse>({
        path: `/v1/profiles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesGetInstance
     * @request GET:/v1/profiles/{id}
     * @secure
     */
    profilesGetInstance: (
      id: string,
      query?: {
        "fields[profiles]"?: (
          | "bundleId"
          | "certificates"
          | "createdDate"
          | "devices"
          | "expirationDate"
          | "name"
          | "platform"
          | "profileContent"
          | "profileState"
          | "profileType"
          | "uuid"
        )[];
        include?: ("bundleId" | "certificates" | "devices")[];
        "fields[certificates]"?: (
          | "certificateContent"
          | "certificateType"
          | "csrContent"
          | "displayName"
          | "expirationDate"
          | "name"
          | "platform"
          | "serialNumber"
        )[];
        "fields[devices]"?: ("addedDate" | "deviceClass" | "model" | "name" | "platform" | "status" | "udid")[];
        "fields[bundleIds]"?: (
          | "app"
          | "bundleIdCapabilities"
          | "identifier"
          | "name"
          | "platform"
          | "profiles"
          | "seedId"
        )[];
        "limit[certificates]"?: number;
        "limit[devices]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProfileResponse, ErrorResponse>({
        path: `/v1/profiles/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesDeleteInstance
     * @request DELETE:/v1/profiles/{id}
     * @secure
     */
    profilesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/profiles/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchaseImages
     * @name PromotedPurchaseImagesCreateInstance
     * @request POST:/v1/promotedPurchaseImages
     * @secure
     */
    promotedPurchaseImagesCreateInstance: (data: PromotedPurchaseImageCreateRequest, params: RequestParams = {}) =>
      this.request<PromotedPurchaseImageResponse, ErrorResponse>({
        path: `/v1/promotedPurchaseImages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchaseImages
     * @name PromotedPurchaseImagesGetInstance
     * @request GET:/v1/promotedPurchaseImages/{id}
     * @secure
     */
    promotedPurchaseImagesGetInstance: (
      id: string,
      query?: {
        "fields[promotedPurchaseImages]"?: (
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "promotedPurchase"
          | "sourceFileChecksum"
          | "state"
          | "uploadOperations"
          | "uploaded"
        )[];
        include?: "promotedPurchase"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PromotedPurchaseImageResponse, ErrorResponse>({
        path: `/v1/promotedPurchaseImages/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchaseImages
     * @name PromotedPurchaseImagesUpdateInstance
     * @request PATCH:/v1/promotedPurchaseImages/{id}
     * @secure
     */
    promotedPurchaseImagesUpdateInstance: (
      id: string,
      data: PromotedPurchaseImageUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<PromotedPurchaseImageResponse, ErrorResponse>({
        path: `/v1/promotedPurchaseImages/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchaseImages
     * @name PromotedPurchaseImagesDeleteInstance
     * @request DELETE:/v1/promotedPurchaseImages/{id}
     * @secure
     */
    promotedPurchaseImagesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/promotedPurchaseImages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchases
     * @name PromotedPurchasesCreateInstance
     * @request POST:/v1/promotedPurchases
     * @secure
     */
    promotedPurchasesCreateInstance: (data: PromotedPurchaseCreateRequest, params: RequestParams = {}) =>
      this.request<PromotedPurchaseResponse, ErrorResponse>({
        path: `/v1/promotedPurchases`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchases
     * @name PromotedPurchasesGetInstance
     * @request GET:/v1/promotedPurchases/{id}
     * @secure
     */
    promotedPurchasesGetInstance: (
      id: string,
      query?: {
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        include?: ("inAppPurchaseV2" | "promotionImages" | "subscription")[];
        "fields[promotedPurchaseImages]"?: (
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "promotedPurchase"
          | "sourceFileChecksum"
          | "state"
          | "uploadOperations"
          | "uploaded"
        )[];
        "limit[promotionImages]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PromotedPurchaseResponse, ErrorResponse>({
        path: `/v1/promotedPurchases/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchases
     * @name PromotedPurchasesUpdateInstance
     * @request PATCH:/v1/promotedPurchases/{id}
     * @secure
     */
    promotedPurchasesUpdateInstance: (id: string, data: PromotedPurchaseUpdateRequest, params: RequestParams = {}) =>
      this.request<PromotedPurchaseResponse, ErrorResponse>({
        path: `/v1/promotedPurchases/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchases
     * @name PromotedPurchasesDeleteInstance
     * @request DELETE:/v1/promotedPurchases/{id}
     * @secure
     */
    promotedPurchasesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/promotedPurchases/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReviewSubmissionItems
     * @name ReviewSubmissionItemsCreateInstance
     * @request POST:/v1/reviewSubmissionItems
     * @secure
     */
    reviewSubmissionItemsCreateInstance: (data: ReviewSubmissionItemCreateRequest, params: RequestParams = {}) =>
      this.request<ReviewSubmissionItemResponse, ErrorResponse>({
        path: `/v1/reviewSubmissionItems`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReviewSubmissionItems
     * @name ReviewSubmissionItemsUpdateInstance
     * @request PATCH:/v1/reviewSubmissionItems/{id}
     * @secure
     */
    reviewSubmissionItemsUpdateInstance: (
      id: string,
      data: ReviewSubmissionItemUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<ReviewSubmissionItemResponse, ErrorResponse>({
        path: `/v1/reviewSubmissionItems/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReviewSubmissionItems
     * @name ReviewSubmissionItemsDeleteInstance
     * @request DELETE:/v1/reviewSubmissionItems/{id}
     * @secure
     */
    reviewSubmissionItemsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/reviewSubmissionItems/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReviewSubmissions
     * @name ReviewSubmissionsGetCollection
     * @request GET:/v1/reviewSubmissions
     * @secure
     */
    reviewSubmissionsGetCollection: (
      query: {
        "filter[platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[state]"?: (
          | "READY_FOR_REVIEW"
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "UNRESOLVED_ISSUES"
          | "CANCELING"
          | "COMPLETING"
          | "COMPLETE"
        )[];
        "filter[app]": string[];
        "fields[reviewSubmissions]"?: (
          | "app"
          | "appStoreVersionForReview"
          | "canceled"
          | "items"
          | "platform"
          | "state"
          | "submitted"
          | "submittedDate"
        )[];
        limit?: number;
        include?: ("app" | "appStoreVersionForReview" | "items")[];
        "fields[reviewSubmissionItems]"?: (
          | "appCustomProductPageVersion"
          | "appEvent"
          | "appStoreVersion"
          | "appStoreVersionExperiment"
          | "removed"
          | "resolved"
          | "reviewSubmission"
          | "state"
        )[];
        "limit[items]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewSubmissionsResponse, ErrorResponse>({
        path: `/v1/reviewSubmissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReviewSubmissions
     * @name ReviewSubmissionsCreateInstance
     * @request POST:/v1/reviewSubmissions
     * @secure
     */
    reviewSubmissionsCreateInstance: (data: ReviewSubmissionCreateRequest, params: RequestParams = {}) =>
      this.request<ReviewSubmissionResponse, ErrorResponse>({
        path: `/v1/reviewSubmissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReviewSubmissions
     * @name ReviewSubmissionsGetInstance
     * @request GET:/v1/reviewSubmissions/{id}
     * @secure
     */
    reviewSubmissionsGetInstance: (
      id: string,
      query?: {
        "fields[reviewSubmissions]"?: (
          | "app"
          | "appStoreVersionForReview"
          | "canceled"
          | "items"
          | "platform"
          | "state"
          | "submitted"
          | "submittedDate"
        )[];
        include?: ("app" | "appStoreVersionForReview" | "items")[];
        "fields[reviewSubmissionItems]"?: (
          | "appCustomProductPageVersion"
          | "appEvent"
          | "appStoreVersion"
          | "appStoreVersionExperiment"
          | "removed"
          | "resolved"
          | "reviewSubmission"
          | "state"
        )[];
        "limit[items]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewSubmissionResponse, ErrorResponse>({
        path: `/v1/reviewSubmissions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReviewSubmissions
     * @name ReviewSubmissionsUpdateInstance
     * @request PATCH:/v1/reviewSubmissions/{id}
     * @secure
     */
    reviewSubmissionsUpdateInstance: (id: string, data: ReviewSubmissionUpdateRequest, params: RequestParams = {}) =>
      this.request<ReviewSubmissionResponse, ErrorResponse>({
        path: `/v1/reviewSubmissions/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RoutingAppCoverages
     * @name RoutingAppCoveragesCreateInstance
     * @request POST:/v1/routingAppCoverages
     * @secure
     */
    routingAppCoveragesCreateInstance: (data: RoutingAppCoverageCreateRequest, params: RequestParams = {}) =>
      this.request<RoutingAppCoverageResponse, ErrorResponse>({
        path: `/v1/routingAppCoverages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RoutingAppCoverages
     * @name RoutingAppCoveragesGetInstance
     * @request GET:/v1/routingAppCoverages/{id}
     * @secure
     */
    routingAppCoveragesGetInstance: (
      id: string,
      query?: {
        "fields[routingAppCoverages]"?: (
          | "appStoreVersion"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        include?: "appStoreVersion"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RoutingAppCoverageResponse, ErrorResponse>({
        path: `/v1/routingAppCoverages/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RoutingAppCoverages
     * @name RoutingAppCoveragesUpdateInstance
     * @request PATCH:/v1/routingAppCoverages/{id}
     * @secure
     */
    routingAppCoveragesUpdateInstance: (
      id: string,
      data: RoutingAppCoverageUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<RoutingAppCoverageResponse, ErrorResponse>({
        path: `/v1/routingAppCoverages/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RoutingAppCoverages
     * @name RoutingAppCoveragesDeleteInstance
     * @request DELETE:/v1/routingAppCoverages/{id}
     * @secure
     */
    routingAppCoveragesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/routingAppCoverages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesReports
     * @name SalesReportsGetCollection
     * @request GET:/v1/salesReports
     * @secure
     */
    salesReportsGetCollection: (
      query: {
        "filter[frequency]": ("DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY")[];
        "filter[reportDate]"?: string[];
        "filter[reportSubType]": ("SUMMARY" | "DETAILED")[];
        "filter[reportType]": (
          | "SALES"
          | "PRE_ORDER"
          | "NEWSSTAND"
          | "SUBSCRIPTION"
          | "SUBSCRIPTION_EVENT"
          | "SUBSCRIBER"
          | "SUBSCRIPTION_OFFER_CODE_REDEMPTION"
        )[];
        "filter[vendorNumber]": string[];
        "filter[version]"?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<Gzip, ErrorResponse>({
        path: `/v1/salesReports`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmGitReferences
     * @name ScmGitReferencesGetInstance
     * @request GET:/v1/scmGitReferences/{id}
     * @secure
     */
    scmGitReferencesGetInstance: (
      id: string,
      query?: {
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        include?: "repository"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmGitReferenceResponse, ErrorResponse>({
        path: `/v1/scmGitReferences/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmProviders
     * @name ScmProvidersGetCollection
     * @request GET:/v1/scmProviders
     * @secure
     */
    scmProvidersGetCollection: (
      query?: {
        "fields[scmProviders]"?: ("repositories" | "scmProviderType" | "url")[];
        limit?: number;
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmProvidersResponse, ErrorResponse>({
        path: `/v1/scmProviders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmProviders
     * @name ScmProvidersGetInstance
     * @request GET:/v1/scmProviders/{id}
     * @secure
     */
    scmProvidersGetInstance: (
      id: string,
      query?: {
        "fields[scmProviders]"?: ("repositories" | "scmProviderType" | "url")[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmProviderResponse, ErrorResponse>({
        path: `/v1/scmProviders/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmPullRequests
     * @name ScmPullRequestsGetInstance
     * @request GET:/v1/scmPullRequests/{id}
     * @secure
     */
    scmPullRequestsGetInstance: (
      id: string,
      query?: {
        "fields[scmPullRequests]"?: (
          | "destinationBranchName"
          | "destinationRepositoryName"
          | "destinationRepositoryOwner"
          | "isClosed"
          | "isCrossRepository"
          | "number"
          | "repository"
          | "sourceBranchName"
          | "sourceRepositoryName"
          | "sourceRepositoryOwner"
          | "title"
          | "webUrl"
        )[];
        include?: "repository"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmPullRequestResponse, ErrorResponse>({
        path: `/v1/scmPullRequests/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmRepositories
     * @name ScmRepositoriesGetCollection
     * @request GET:/v1/scmRepositories
     * @secure
     */
    scmRepositoriesGetCollection: (
      query?: {
        "filter[id]"?: string[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        limit?: number;
        include?: ("defaultBranch" | "scmProvider")[];
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[scmPullRequests]"?: (
          | "destinationBranchName"
          | "destinationRepositoryName"
          | "destinationRepositoryOwner"
          | "isClosed"
          | "isCrossRepository"
          | "number"
          | "repository"
          | "sourceBranchName"
          | "sourceRepositoryName"
          | "sourceRepositoryOwner"
          | "title"
          | "webUrl"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmRepositoriesResponse, ErrorResponse>({
        path: `/v1/scmRepositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmRepositories
     * @name ScmRepositoriesGetInstance
     * @request GET:/v1/scmRepositories/{id}
     * @secure
     */
    scmRepositoriesGetInstance: (
      id: string,
      query?: {
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        include?: ("defaultBranch" | "scmProvider")[];
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[scmPullRequests]"?: (
          | "destinationBranchName"
          | "destinationRepositoryName"
          | "destinationRepositoryOwner"
          | "isClosed"
          | "isCrossRepository"
          | "number"
          | "repository"
          | "sourceBranchName"
          | "sourceRepositoryName"
          | "sourceRepositoryOwner"
          | "title"
          | "webUrl"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmRepositoryResponse, ErrorResponse>({
        path: `/v1/scmRepositories/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionAppStoreReviewScreenshots
     * @name SubscriptionAppStoreReviewScreenshotsCreateInstance
     * @request POST:/v1/subscriptionAppStoreReviewScreenshots
     * @secure
     */
    subscriptionAppStoreReviewScreenshotsCreateInstance: (
      data: SubscriptionAppStoreReviewScreenshotCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionAppStoreReviewScreenshotResponse, ErrorResponse>({
        path: `/v1/subscriptionAppStoreReviewScreenshots`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionAppStoreReviewScreenshots
     * @name SubscriptionAppStoreReviewScreenshotsGetInstance
     * @request GET:/v1/subscriptionAppStoreReviewScreenshots/{id}
     * @secure
     */
    subscriptionAppStoreReviewScreenshotsGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionAppStoreReviewScreenshots]"?: (
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "subscription"
          | "uploadOperations"
          | "uploaded"
        )[];
        include?: "subscription"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionAppStoreReviewScreenshotResponse, ErrorResponse>({
        path: `/v1/subscriptionAppStoreReviewScreenshots/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionAppStoreReviewScreenshots
     * @name SubscriptionAppStoreReviewScreenshotsUpdateInstance
     * @request PATCH:/v1/subscriptionAppStoreReviewScreenshots/{id}
     * @secure
     */
    subscriptionAppStoreReviewScreenshotsUpdateInstance: (
      id: string,
      data: SubscriptionAppStoreReviewScreenshotUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionAppStoreReviewScreenshotResponse, ErrorResponse>({
        path: `/v1/subscriptionAppStoreReviewScreenshots/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionAppStoreReviewScreenshots
     * @name SubscriptionAppStoreReviewScreenshotsDeleteInstance
     * @request DELETE:/v1/subscriptionAppStoreReviewScreenshots/{id}
     * @secure
     */
    subscriptionAppStoreReviewScreenshotsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptionAppStoreReviewScreenshots/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGracePeriods
     * @name SubscriptionGracePeriodsGetInstance
     * @request GET:/v1/subscriptionGracePeriods/{id}
     * @secure
     */
    subscriptionGracePeriodsGetInstance: (
      id: string,
      query?: { "fields[subscriptionGracePeriods]"?: ("app" | "optIn")[] },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGracePeriodResponse, ErrorResponse>({
        path: `/v1/subscriptionGracePeriods/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGracePeriods
     * @name SubscriptionGracePeriodsUpdateInstance
     * @request PATCH:/v1/subscriptionGracePeriods/{id}
     * @secure
     */
    subscriptionGracePeriodsUpdateInstance: (
      id: string,
      data: SubscriptionGracePeriodUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGracePeriodResponse, ErrorResponse>({
        path: `/v1/subscriptionGracePeriods/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroupLocalizations
     * @name SubscriptionGroupLocalizationsCreateInstance
     * @request POST:/v1/subscriptionGroupLocalizations
     * @secure
     */
    subscriptionGroupLocalizationsCreateInstance: (
      data: SubscriptionGroupLocalizationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGroupLocalizationResponse, ErrorResponse>({
        path: `/v1/subscriptionGroupLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroupLocalizations
     * @name SubscriptionGroupLocalizationsGetInstance
     * @request GET:/v1/subscriptionGroupLocalizations/{id}
     * @secure
     */
    subscriptionGroupLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionGroupLocalizations]"?: (
          | "customAppName"
          | "locale"
          | "name"
          | "state"
          | "subscriptionGroup"
        )[];
        include?: "subscriptionGroup"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGroupLocalizationResponse, ErrorResponse>({
        path: `/v1/subscriptionGroupLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroupLocalizations
     * @name SubscriptionGroupLocalizationsUpdateInstance
     * @request PATCH:/v1/subscriptionGroupLocalizations/{id}
     * @secure
     */
    subscriptionGroupLocalizationsUpdateInstance: (
      id: string,
      data: SubscriptionGroupLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGroupLocalizationResponse, ErrorResponse>({
        path: `/v1/subscriptionGroupLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroupLocalizations
     * @name SubscriptionGroupLocalizationsDeleteInstance
     * @request DELETE:/v1/subscriptionGroupLocalizations/{id}
     * @secure
     */
    subscriptionGroupLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptionGroupLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroupSubmissions
     * @name SubscriptionGroupSubmissionsCreateInstance
     * @request POST:/v1/subscriptionGroupSubmissions
     * @secure
     */
    subscriptionGroupSubmissionsCreateInstance: (
      data: SubscriptionGroupSubmissionCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGroupSubmissionResponse, ErrorResponse>({
        path: `/v1/subscriptionGroupSubmissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroups
     * @name SubscriptionGroupsCreateInstance
     * @request POST:/v1/subscriptionGroups
     * @secure
     */
    subscriptionGroupsCreateInstance: (data: SubscriptionGroupCreateRequest, params: RequestParams = {}) =>
      this.request<SubscriptionGroupResponse, ErrorResponse>({
        path: `/v1/subscriptionGroups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroups
     * @name SubscriptionGroupsGetInstance
     * @request GET:/v1/subscriptionGroups/{id}
     * @secure
     */
    subscriptionGroupsGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionGroups]"?: ("app" | "referenceName" | "subscriptionGroupLocalizations" | "subscriptions")[];
        include?: ("subscriptionGroupLocalizations" | "subscriptions")[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[subscriptionGroupLocalizations]"?: (
          | "customAppName"
          | "locale"
          | "name"
          | "state"
          | "subscriptionGroup"
        )[];
        "limit[subscriptionGroupLocalizations]"?: number;
        "limit[subscriptions]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGroupResponse, ErrorResponse>({
        path: `/v1/subscriptionGroups/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroups
     * @name SubscriptionGroupsUpdateInstance
     * @request PATCH:/v1/subscriptionGroups/{id}
     * @secure
     */
    subscriptionGroupsUpdateInstance: (id: string, data: SubscriptionGroupUpdateRequest, params: RequestParams = {}) =>
      this.request<SubscriptionGroupResponse, ErrorResponse>({
        path: `/v1/subscriptionGroups/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroups
     * @name SubscriptionGroupsDeleteInstance
     * @request DELETE:/v1/subscriptionGroups/{id}
     * @secure
     */
    subscriptionGroupsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptionGroups/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionIntroductoryOffers
     * @name SubscriptionIntroductoryOffersCreateInstance
     * @request POST:/v1/subscriptionIntroductoryOffers
     * @secure
     */
    subscriptionIntroductoryOffersCreateInstance: (
      data: SubscriptionIntroductoryOfferCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionIntroductoryOfferResponse, ErrorResponse>({
        path: `/v1/subscriptionIntroductoryOffers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionIntroductoryOffers
     * @name SubscriptionIntroductoryOffersUpdateInstance
     * @request PATCH:/v1/subscriptionIntroductoryOffers/{id}
     * @secure
     */
    subscriptionIntroductoryOffersUpdateInstance: (
      id: string,
      data: SubscriptionIntroductoryOfferUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionIntroductoryOfferResponse, ErrorResponse>({
        path: `/v1/subscriptionIntroductoryOffers/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionIntroductoryOffers
     * @name SubscriptionIntroductoryOffersDeleteInstance
     * @request DELETE:/v1/subscriptionIntroductoryOffers/{id}
     * @secure
     */
    subscriptionIntroductoryOffersDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptionIntroductoryOffers/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionLocalizations
     * @name SubscriptionLocalizationsCreateInstance
     * @request POST:/v1/subscriptionLocalizations
     * @secure
     */
    subscriptionLocalizationsCreateInstance: (
      data: SubscriptionLocalizationCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionLocalizationResponse, ErrorResponse>({
        path: `/v1/subscriptionLocalizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionLocalizations
     * @name SubscriptionLocalizationsGetInstance
     * @request GET:/v1/subscriptionLocalizations/{id}
     * @secure
     */
    subscriptionLocalizationsGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionLocalizations]"?: ("description" | "locale" | "name" | "state" | "subscription")[];
        include?: "subscription"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionLocalizationResponse, ErrorResponse>({
        path: `/v1/subscriptionLocalizations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionLocalizations
     * @name SubscriptionLocalizationsUpdateInstance
     * @request PATCH:/v1/subscriptionLocalizations/{id}
     * @secure
     */
    subscriptionLocalizationsUpdateInstance: (
      id: string,
      data: SubscriptionLocalizationUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionLocalizationResponse, ErrorResponse>({
        path: `/v1/subscriptionLocalizations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionLocalizations
     * @name SubscriptionLocalizationsDeleteInstance
     * @request DELETE:/v1/subscriptionLocalizations/{id}
     * @secure
     */
    subscriptionLocalizationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptionLocalizations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodeCustomCodes
     * @name SubscriptionOfferCodeCustomCodesCreateInstance
     * @request POST:/v1/subscriptionOfferCodeCustomCodes
     * @secure
     */
    subscriptionOfferCodeCustomCodesCreateInstance: (
      data: SubscriptionOfferCodeCustomCodeCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeCustomCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodeCustomCodes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodeCustomCodes
     * @name SubscriptionOfferCodeCustomCodesGetInstance
     * @request GET:/v1/subscriptionOfferCodeCustomCodes/{id}
     * @secure
     */
    subscriptionOfferCodeCustomCodesGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionOfferCodeCustomCodes]"?: (
          | "active"
          | "createdDate"
          | "customCode"
          | "expirationDate"
          | "numberOfCodes"
          | "offerCode"
        )[];
        include?: "offerCode"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeCustomCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodeCustomCodes/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodeCustomCodes
     * @name SubscriptionOfferCodeCustomCodesUpdateInstance
     * @request PATCH:/v1/subscriptionOfferCodeCustomCodes/{id}
     * @secure
     */
    subscriptionOfferCodeCustomCodesUpdateInstance: (
      id: string,
      data: SubscriptionOfferCodeCustomCodeUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeCustomCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodeCustomCodes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodeOneTimeUseCodes
     * @name SubscriptionOfferCodeOneTimeUseCodesCreateInstance
     * @request POST:/v1/subscriptionOfferCodeOneTimeUseCodes
     * @secure
     */
    subscriptionOfferCodeOneTimeUseCodesCreateInstance: (
      data: SubscriptionOfferCodeOneTimeUseCodeCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeOneTimeUseCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodeOneTimeUseCodes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodeOneTimeUseCodes
     * @name SubscriptionOfferCodeOneTimeUseCodesGetInstance
     * @request GET:/v1/subscriptionOfferCodeOneTimeUseCodes/{id}
     * @secure
     */
    subscriptionOfferCodeOneTimeUseCodesGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionOfferCodeOneTimeUseCodes]"?: (
          | "active"
          | "createdDate"
          | "expirationDate"
          | "numberOfCodes"
          | "offerCode"
          | "values"
        )[];
        include?: "offerCode"[];
        "fields[subscriptionOfferCodeOneTimeUseCodeValues]"?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeOneTimeUseCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodeOneTimeUseCodes/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodeOneTimeUseCodes
     * @name SubscriptionOfferCodeOneTimeUseCodesUpdateInstance
     * @request PATCH:/v1/subscriptionOfferCodeOneTimeUseCodes/{id}
     * @secure
     */
    subscriptionOfferCodeOneTimeUseCodesUpdateInstance: (
      id: string,
      data: SubscriptionOfferCodeOneTimeUseCodeUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeOneTimeUseCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodeOneTimeUseCodes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodes
     * @name SubscriptionOfferCodesCreateInstance
     * @request POST:/v1/subscriptionOfferCodes
     * @secure
     */
    subscriptionOfferCodesCreateInstance: (data: SubscriptionOfferCodeCreateRequest, params: RequestParams = {}) =>
      this.request<SubscriptionOfferCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodes
     * @name SubscriptionOfferCodesGetInstance
     * @request GET:/v1/subscriptionOfferCodes/{id}
     * @secure
     */
    subscriptionOfferCodesGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionOfferCodes]"?: (
          | "active"
          | "customCodes"
          | "customerEligibilities"
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerEligibility"
          | "offerMode"
          | "oneTimeUseCodes"
          | "prices"
          | "subscription"
          | "totalNumberOfCodes"
        )[];
        include?: ("customCodes" | "oneTimeUseCodes" | "prices" | "subscription")[];
        "fields[subscriptionOfferCodeCustomCodes]"?: (
          | "active"
          | "createdDate"
          | "customCode"
          | "expirationDate"
          | "numberOfCodes"
          | "offerCode"
        )[];
        "fields[subscriptionOfferCodeOneTimeUseCodes]"?: (
          | "active"
          | "createdDate"
          | "expirationDate"
          | "numberOfCodes"
          | "offerCode"
          | "values"
        )[];
        "fields[subscriptionOfferCodePrices]"?: ("subscriptionPricePoint" | "territory")[];
        "limit[customCodes]"?: number;
        "limit[oneTimeUseCodes]"?: number;
        "limit[prices]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodes/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodes
     * @name SubscriptionOfferCodesUpdateInstance
     * @request PATCH:/v1/subscriptionOfferCodes/{id}
     * @secure
     */
    subscriptionOfferCodesUpdateInstance: (
      id: string,
      data: SubscriptionOfferCodeUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPricePoints
     * @name SubscriptionPricePointsGetInstance
     * @request GET:/v1/subscriptionPricePoints/{id}
     * @secure
     */
    subscriptionPricePointsGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionPricePoints]"?: (
          | "customerPrice"
          | "equalizations"
          | "proceeds"
          | "proceedsYear2"
          | "subscription"
          | "territory"
        )[];
        include?: "territory"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPricePointResponse, ErrorResponse>({
        path: `/v1/subscriptionPricePoints/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPrices
     * @name SubscriptionPricesCreateInstance
     * @request POST:/v1/subscriptionPrices
     * @secure
     */
    subscriptionPricesCreateInstance: (data: SubscriptionPriceCreateRequest, params: RequestParams = {}) =>
      this.request<SubscriptionPriceResponse, ErrorResponse>({
        path: `/v1/subscriptionPrices`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPrices
     * @name SubscriptionPricesDeleteInstance
     * @request DELETE:/v1/subscriptionPrices/{id}
     * @secure
     */
    subscriptionPricesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptionPrices/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPromotionalOffers
     * @name SubscriptionPromotionalOffersCreateInstance
     * @request POST:/v1/subscriptionPromotionalOffers
     * @secure
     */
    subscriptionPromotionalOffersCreateInstance: (
      data: SubscriptionPromotionalOfferCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPromotionalOfferResponse, ErrorResponse>({
        path: `/v1/subscriptionPromotionalOffers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPromotionalOffers
     * @name SubscriptionPromotionalOffersGetInstance
     * @request GET:/v1/subscriptionPromotionalOffers/{id}
     * @secure
     */
    subscriptionPromotionalOffersGetInstance: (
      id: string,
      query?: {
        "fields[subscriptionPromotionalOffers]"?: (
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerCode"
          | "offerMode"
          | "prices"
          | "subscription"
        )[];
        include?: ("prices" | "subscription")[];
        "fields[subscriptionPromotionalOfferPrices]"?: ("subscriptionPricePoint" | "territory")[];
        "limit[prices]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPromotionalOfferResponse, ErrorResponse>({
        path: `/v1/subscriptionPromotionalOffers/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPromotionalOffers
     * @name SubscriptionPromotionalOffersUpdateInstance
     * @request PATCH:/v1/subscriptionPromotionalOffers/{id}
     * @secure
     */
    subscriptionPromotionalOffersUpdateInstance: (
      id: string,
      data: SubscriptionPromotionalOfferUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPromotionalOfferResponse, ErrorResponse>({
        path: `/v1/subscriptionPromotionalOffers/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPromotionalOffers
     * @name SubscriptionPromotionalOffersDeleteInstance
     * @request DELETE:/v1/subscriptionPromotionalOffers/{id}
     * @secure
     */
    subscriptionPromotionalOffersDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptionPromotionalOffers/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionSubmissions
     * @name SubscriptionSubmissionsCreateInstance
     * @request POST:/v1/subscriptionSubmissions
     * @secure
     */
    subscriptionSubmissionsCreateInstance: (data: SubscriptionSubmissionCreateRequest, params: RequestParams = {}) =>
      this.request<SubscriptionSubmissionResponse, ErrorResponse>({
        path: `/v1/subscriptionSubmissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsCreateInstance
     * @request POST:/v1/subscriptions
     * @secure
     */
    subscriptionsCreateInstance: (data: SubscriptionCreateRequest, params: RequestParams = {}) =>
      this.request<SubscriptionResponse, ErrorResponse>({
        path: `/v1/subscriptions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsGetInstance
     * @request GET:/v1/subscriptions/{id}
     * @secure
     */
    subscriptionsGetInstance: (
      id: string,
      query?: {
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        include?: (
          | "appStoreReviewScreenshot"
          | "group"
          | "introductoryOffers"
          | "offerCodes"
          | "prices"
          | "promotedPurchase"
          | "promotionalOffers"
          | "subscriptionLocalizations"
        )[];
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[subscriptionPricePoints]"?: (
          | "customerPrice"
          | "equalizations"
          | "proceeds"
          | "proceedsYear2"
          | "subscription"
          | "territory"
        )[];
        "fields[subscriptionPromotionalOffers]"?: (
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerCode"
          | "offerMode"
          | "prices"
          | "subscription"
        )[];
        "fields[subscriptionOfferCodes]"?: (
          | "active"
          | "customCodes"
          | "customerEligibilities"
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerEligibility"
          | "offerMode"
          | "oneTimeUseCodes"
          | "prices"
          | "subscription"
          | "totalNumberOfCodes"
        )[];
        "fields[subscriptionAppStoreReviewScreenshots]"?: (
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "subscription"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[subscriptionPrices]"?: (
          | "preserveCurrentPrice"
          | "preserved"
          | "startDate"
          | "subscription"
          | "subscriptionPricePoint"
          | "territory"
        )[];
        "fields[subscriptionIntroductoryOffers]"?: (
          | "duration"
          | "endDate"
          | "numberOfPeriods"
          | "offerMode"
          | "startDate"
          | "subscription"
          | "subscriptionPricePoint"
          | "territory"
        )[];
        "fields[subscriptionLocalizations]"?: ("description" | "locale" | "name" | "state" | "subscription")[];
        "limit[introductoryOffers]"?: number;
        "limit[offerCodes]"?: number;
        "limit[prices]"?: number;
        "limit[promotionalOffers]"?: number;
        "limit[subscriptionLocalizations]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsUpdateInstance
     * @request PATCH:/v1/subscriptions/{id}
     * @secure
     */
    subscriptionsUpdateInstance: (id: string, data: SubscriptionUpdateRequest, params: RequestParams = {}) =>
      this.request<SubscriptionResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsDeleteInstance
     * @request DELETE:/v1/subscriptions/{id}
     * @secure
     */
    subscriptionsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Territories
     * @name TerritoriesGetCollection
     * @request GET:/v1/territories
     * @secure
     */
    territoriesGetCollection: (
      query?: { "fields[territories]"?: "currency"[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<TerritoriesResponse, ErrorResponse>({
        path: `/v1/territories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserInvitations
     * @name UserInvitationsGetCollection
     * @request GET:/v1/userInvitations
     * @secure
     */
    userInvitationsGetCollection: (
      query?: {
        "filter[email]"?: string[];
        "filter[roles]"?: (
          | "ADMIN"
          | "FINANCE"
          | "ACCOUNT_HOLDER"
          | "SALES"
          | "MARKETING"
          | "APP_MANAGER"
          | "DEVELOPER"
          | "ACCESS_TO_REPORTS"
          | "CUSTOMER_SUPPORT"
          | "IMAGE_MANAGER"
          | "CREATE_APPS"
          | "CLOUD_MANAGED_DEVELOPER_ID"
          | "CLOUD_MANAGED_APP_DISTRIBUTION"
        )[];
        "filter[visibleApps]"?: string[];
        sort?: ("email" | "-email" | "lastName" | "-lastName")[];
        "fields[userInvitations]"?: (
          | "allAppsVisible"
          | "email"
          | "expirationDate"
          | "firstName"
          | "lastName"
          | "provisioningAllowed"
          | "roles"
          | "visibleApps"
        )[];
        limit?: number;
        include?: "visibleApps"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "limit[visibleApps]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserInvitationsResponse, ErrorResponse>({
        path: `/v1/userInvitations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserInvitations
     * @name UserInvitationsCreateInstance
     * @request POST:/v1/userInvitations
     * @secure
     */
    userInvitationsCreateInstance: (data: UserInvitationCreateRequest, params: RequestParams = {}) =>
      this.request<UserInvitationResponse, ErrorResponse>({
        path: `/v1/userInvitations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserInvitations
     * @name UserInvitationsGetInstance
     * @request GET:/v1/userInvitations/{id}
     * @secure
     */
    userInvitationsGetInstance: (
      id: string,
      query?: {
        "fields[userInvitations]"?: (
          | "allAppsVisible"
          | "email"
          | "expirationDate"
          | "firstName"
          | "lastName"
          | "provisioningAllowed"
          | "roles"
          | "visibleApps"
        )[];
        include?: "visibleApps"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "limit[visibleApps]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserInvitationResponse, ErrorResponse>({
        path: `/v1/userInvitations/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserInvitations
     * @name UserInvitationsDeleteInstance
     * @request DELETE:/v1/userInvitations/{id}
     * @secure
     */
    userInvitationsDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/userInvitations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersGetCollection
     * @request GET:/v1/users
     * @secure
     */
    usersGetCollection: (
      query?: {
        "filter[roles]"?: (
          | "ADMIN"
          | "FINANCE"
          | "ACCOUNT_HOLDER"
          | "SALES"
          | "MARKETING"
          | "APP_MANAGER"
          | "DEVELOPER"
          | "ACCESS_TO_REPORTS"
          | "CUSTOMER_SUPPORT"
          | "IMAGE_MANAGER"
          | "CREATE_APPS"
          | "CLOUD_MANAGED_DEVELOPER_ID"
          | "CLOUD_MANAGED_APP_DISTRIBUTION"
        )[];
        "filter[username]"?: string[];
        "filter[visibleApps]"?: string[];
        sort?: ("lastName" | "-lastName" | "username" | "-username")[];
        "fields[users]"?: (
          | "allAppsVisible"
          | "firstName"
          | "lastName"
          | "provisioningAllowed"
          | "roles"
          | "username"
          | "visibleApps"
        )[];
        limit?: number;
        include?: "visibleApps"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "limit[visibleApps]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersResponse, ErrorResponse>({
        path: `/v1/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersGetInstance
     * @request GET:/v1/users/{id}
     * @secure
     */
    usersGetInstance: (
      id: string,
      query?: {
        "fields[users]"?: (
          | "allAppsVisible"
          | "firstName"
          | "lastName"
          | "provisioningAllowed"
          | "roles"
          | "username"
          | "visibleApps"
        )[];
        include?: "visibleApps"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "limit[visibleApps]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserResponse, ErrorResponse>({
        path: `/v1/users/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersUpdateInstance
     * @request PATCH:/v1/users/{id}
     * @secure
     */
    usersUpdateInstance: (id: string, data: UserUpdateRequest, params: RequestParams = {}) =>
      this.request<UserResponse, ErrorResponse>({
        path: `/v1/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersDeleteInstance
     * @request DELETE:/v1/users/{id}
     * @secure
     */
    usersDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v1/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCategories
     * @name AppCategoriesParentGetToOneRelated
     * @request GET:/v1/appCategories/{id}/parent
     * @secure
     */
    appCategoriesParentGetToOneRelated: (
      id: string,
      query?: { "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoryResponse, ErrorResponse>({
        path: `/v1/appCategories/${id}/parent`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCategories
     * @name AppCategoriesSubcategoriesGetToManyRelated
     * @request GET:/v1/appCategories/{id}/subcategories
     * @secure
     */
    appCategoriesSubcategoriesGetToManyRelated: (
      id: string,
      query?: { "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoriesResponse, ErrorResponse>({
        path: `/v1/appCategories/${id}/subcategories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperienceLocalizations
     * @name AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated
     * @request GET:/v1/appClipDefaultExperienceLocalizations/{id}/appClipHeaderImage
     * @secure
     */
    appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated: (
      id: string,
      query?: {
        "fields[appClipHeaderImages]"?: (
          | "appClipDefaultExperienceLocalization"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appClipDefaultExperienceLocalizations]"?: (
          | "appClipDefaultExperience"
          | "appClipHeaderImage"
          | "locale"
          | "subtitle"
        )[];
        include?: "appClipDefaultExperienceLocalization"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipHeaderImageResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperienceLocalizations/${id}/appClipHeaderImage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated
     * @request GET:/v1/appClipDefaultExperiences/{id}/appClipAppStoreReviewDetail
     * @secure
     */
    appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated: (
      id: string,
      query?: {
        "fields[appClipAppStoreReviewDetails]"?: ("appClipDefaultExperience" | "invocationUrls")[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        include?: "appClipDefaultExperience"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipAppStoreReviewDetailResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences/${id}/appClipAppStoreReviewDetail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated
     * @request GET:/v1/appClipDefaultExperiences/{id}/appClipDefaultExperienceLocalizations
     * @secure
     */
    appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "filter[locale]"?: string[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        "fields[appClipDefaultExperienceLocalizations]"?: (
          | "appClipDefaultExperience"
          | "appClipHeaderImage"
          | "locale"
          | "subtitle"
        )[];
        "fields[appClipHeaderImages]"?: (
          | "appClipDefaultExperienceLocalization"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        limit?: number;
        include?: ("appClipDefaultExperience" | "appClipHeaderImage")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperienceLocalizationsResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences/${id}/appClipDefaultExperienceLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship
     * @request GET:/v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion
     * @secure
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship: (id: string, params: RequestParams = {}) =>
      this.request<AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences/${id}/relationships/releaseWithAppStoreVersion`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship
     * @request PATCH:/v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion
     * @secure
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship: (
      id: string,
      data: AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences/${id}/relationships/releaseWithAppStoreVersion`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClipDefaultExperiences
     * @name AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated
     * @request GET:/v1/appClipDefaultExperiences/{id}/releaseWithAppStoreVersion
     * @secure
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated: (
      id: string,
      query?: {
        "fields[appStoreVersionExperiments]"?: (
          | "appStoreVersion"
          | "appStoreVersionExperimentTreatments"
          | "endDate"
          | "name"
          | "reviewRequired"
          | "startDate"
          | "started"
          | "state"
          | "trafficProportion"
        )[];
        "fields[ageRatingDeclarations]"?: (
          | "alcoholTobaccoOrDrugUseOrReferences"
          | "contests"
          | "gambling"
          | "gamblingAndContests"
          | "gamblingSimulated"
          | "horrorOrFearThemes"
          | "kidsAgeBand"
          | "matureOrSuggestiveThemes"
          | "medicalOrTreatmentInformation"
          | "profanityOrCrudeHumor"
          | "seventeenPlus"
          | "sexualContentGraphicAndNudity"
          | "sexualContentOrNudity"
          | "unrestrictedWebAccess"
          | "violenceCartoonOrFantasy"
          | "violenceRealistic"
          | "violenceRealisticProlongedGraphicOrSadistic"
        )[];
        "fields[appStoreVersionSubmissions]"?: "appStoreVersion"[];
        "fields[appStoreReviewDetails]"?: (
          | "appStoreReviewAttachments"
          | "appStoreVersion"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[routingAppCoverages]"?: (
          | "appStoreVersion"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        "fields[appStoreVersionPhasedReleases]"?: (
          | "appStoreVersion"
          | "currentDayNumber"
          | "phasedReleaseState"
          | "startDate"
          | "totalPauseDuration"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        "limit[appStoreVersionLocalizations]"?: number;
        "limit[appStoreVersionExperiments]"?: number;
        include?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "routingAppCoverage"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionResponse, ErrorResponse>({
        path: `/v1/appClipDefaultExperiences/${id}/releaseWithAppStoreVersion`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClips
     * @name AppClipsAppClipAdvancedExperiencesGetToManyRelated
     * @request GET:/v1/appClips/{id}/appClipAdvancedExperiences
     * @secure
     */
    appClipsAppClipAdvancedExperiencesGetToManyRelated: (
      id: string,
      query?: {
        "filter[action]"?: ("OPEN" | "VIEW" | "PLAY")[];
        "filter[placeStatus]"?: ("PENDING" | "MATCHED" | "NO_MATCH")[];
        "filter[status]"?: ("RECEIVED" | "DEACTIVATED" | "APP_TRANSFER_IN_PROGRESS")[];
        "fields[appClipAdvancedExperiences]"?: (
          | "action"
          | "appClip"
          | "businessCategory"
          | "defaultLanguage"
          | "headerImage"
          | "isPoweredBy"
          | "link"
          | "localizations"
          | "place"
          | "placeStatus"
          | "removed"
          | "status"
          | "version"
        )[];
        "fields[appClips]"?: ("app" | "appClipAdvancedExperiences" | "appClipDefaultExperiences" | "bundleId")[];
        "fields[appClipAdvancedExperienceImages]"?: (
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appClipAdvancedExperienceLocalizations]"?: ("language" | "subtitle" | "title")[];
        limit?: number;
        "limit[localizations]"?: number;
        include?: ("appClip" | "headerImage" | "localizations")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipAdvancedExperiencesResponse, ErrorResponse>({
        path: `/v1/appClips/${id}/appClipAdvancedExperiences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppClips
     * @name AppClipsAppClipDefaultExperiencesGetToManyRelated
     * @request GET:/v1/appClips/{id}/appClipDefaultExperiences
     * @secure
     */
    appClipsAppClipDefaultExperiencesGetToManyRelated: (
      id: string,
      query?: {
        "exists[releaseWithAppStoreVersion]"?: boolean;
        "fields[appClips]"?: ("app" | "appClipAdvancedExperiences" | "appClipDefaultExperiences" | "bundleId")[];
        "fields[appClipAppStoreReviewDetails]"?: ("appClipDefaultExperience" | "invocationUrls")[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        "fields[appClipDefaultExperienceLocalizations]"?: (
          | "appClipDefaultExperience"
          | "appClipHeaderImage"
          | "locale"
          | "subtitle"
        )[];
        limit?: number;
        "limit[appClipDefaultExperienceLocalizations]"?: number;
        include?: (
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "releaseWithAppStoreVersion"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperiencesResponse, ErrorResponse>({
        path: `/v1/appClips/${id}/appClipDefaultExperiences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageLocalizations
     * @name AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated
     * @request GET:/v1/appCustomProductPageLocalizations/{id}/appPreviewSets
     * @secure
     */
    appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated: (
      id: string,
      query?: {
        "filter[previewType]"?: (
          | "IPHONE_65"
          | "IPHONE_58"
          | "IPHONE_55"
          | "IPHONE_47"
          | "IPHONE_40"
          | "IPHONE_35"
          | "IPAD_PRO_3GEN_129"
          | "IPAD_PRO_3GEN_11"
          | "IPAD_PRO_129"
          | "IPAD_105"
          | "IPAD_97"
          | "DESKTOP"
          | "WATCH_SERIES_4"
          | "WATCH_SERIES_3"
          | "APPLE_TV"
        )[];
        "filter[appStoreVersionExperimentTreatmentLocalization]"?: string[];
        "filter[appStoreVersionLocalization]"?: string[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        "fields[appPreviews]"?: (
          | "appPreviewSet"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "mimeType"
          | "previewFrameTimeCode"
          | "previewImage"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        limit?: number;
        "limit[appPreviews]"?: number;
        include?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPreviewSetsResponse, ErrorResponse>({
        path: `/v1/appCustomProductPageLocalizations/${id}/appPreviewSets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageLocalizations
     * @name AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated
     * @request GET:/v1/appCustomProductPageLocalizations/{id}/appScreenshotSets
     * @secure
     */
    appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated: (
      id: string,
      query?: {
        "filter[screenshotDisplayType]"?: (
          | "APP_IPHONE_65"
          | "APP_IPHONE_58"
          | "APP_IPHONE_55"
          | "APP_IPHONE_47"
          | "APP_IPHONE_40"
          | "APP_IPHONE_35"
          | "APP_IPAD_PRO_3GEN_129"
          | "APP_IPAD_PRO_3GEN_11"
          | "APP_IPAD_PRO_129"
          | "APP_IPAD_105"
          | "APP_IPAD_97"
          | "APP_DESKTOP"
          | "APP_WATCH_SERIES_7"
          | "APP_WATCH_SERIES_4"
          | "APP_WATCH_SERIES_3"
          | "APP_APPLE_TV"
          | "IMESSAGE_APP_IPHONE_65"
          | "IMESSAGE_APP_IPHONE_58"
          | "IMESSAGE_APP_IPHONE_55"
          | "IMESSAGE_APP_IPHONE_47"
          | "IMESSAGE_APP_IPHONE_40"
          | "IMESSAGE_APP_IPAD_PRO_3GEN_129"
          | "IMESSAGE_APP_IPAD_PRO_3GEN_11"
          | "IMESSAGE_APP_IPAD_PRO_129"
          | "IMESSAGE_APP_IPAD_105"
          | "IMESSAGE_APP_IPAD_97"
        )[];
        "filter[appStoreVersionExperimentTreatmentLocalization]"?: string[];
        "filter[appStoreVersionLocalization]"?: string[];
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        "fields[appScreenshots]"?: (
          | "appScreenshotSet"
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        limit?: number;
        "limit[appScreenshots]"?: number;
        include?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppScreenshotSetsResponse, ErrorResponse>({
        path: `/v1/appCustomProductPageLocalizations/${id}/appScreenshotSets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPageVersions
     * @name AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated
     * @request GET:/v1/appCustomProductPageVersions/{id}/appCustomProductPageLocalizations
     * @secure
     */
    appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "filter[locale]"?: string[];
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "fields[appCustomProductPageVersions]"?: (
          | "appCustomProductPage"
          | "appCustomProductPageLocalizations"
          | "state"
          | "version"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        limit?: number;
        "limit[appScreenshotSets]"?: number;
        "limit[appPreviewSets]"?: number;
        include?: ("appCustomProductPageVersion" | "appPreviewSets" | "appScreenshotSets")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageLocalizationsResponse, ErrorResponse>({
        path: `/v1/appCustomProductPageVersions/${id}/appCustomProductPageLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppCustomProductPages
     * @name AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelated
     * @request GET:/v1/appCustomProductPages/{id}/appCustomProductPageVersions
     * @secure
     */
    appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated: (
      id: string,
      query?: {
        "filter[state]"?: (
          | "PREPARE_FOR_SUBMISSION"
          | "READY_FOR_REVIEW"
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "ACCEPTED"
          | "APPROVED"
          | "REPLACED_WITH_NEW_VERSION"
          | "REJECTED"
        )[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "fields[appCustomProductPageVersions]"?: (
          | "appCustomProductPage"
          | "appCustomProductPageLocalizations"
          | "state"
          | "version"
        )[];
        "fields[appCustomProductPages]"?: (
          | "app"
          | "appCustomProductPageVersions"
          | "appStoreVersionTemplate"
          | "customProductPageTemplate"
          | "name"
          | "url"
          | "visible"
        )[];
        limit?: number;
        "limit[appCustomProductPageLocalizations]"?: number;
        include?: ("appCustomProductPage" | "appCustomProductPageLocalizations")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPageVersionsResponse, ErrorResponse>({
        path: `/v1/appCustomProductPages/${id}/appCustomProductPageVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEncryptionDeclarations
     * @name AppEncryptionDeclarationsAppGetToOneRelated
     * @request GET:/v1/appEncryptionDeclarations/{id}/app
     * @secure
     */
    appEncryptionDeclarationsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/appEncryptionDeclarations/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEncryptionDeclarations
     * @name AppEncryptionDeclarationsBuildsCreateToManyRelationship
     * @request POST:/v1/appEncryptionDeclarations/{id}/relationships/builds
     * @secure
     */
    appEncryptionDeclarationsBuildsCreateToManyRelationship: (
      id: string,
      data: AppEncryptionDeclarationBuildsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appEncryptionDeclarations/${id}/relationships/builds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventLocalizations
     * @name AppEventLocalizationsAppEventScreenshotsGetToManyRelated
     * @request GET:/v1/appEventLocalizations/{id}/appEventScreenshots
     * @secure
     */
    appEventLocalizationsAppEventScreenshotsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appEventScreenshots]"?: (
          | "appEventAssetType"
          | "appEventLocalization"
          | "assetDeliveryState"
          | "assetToken"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appEventLocalizations]"?: (
          | "appEvent"
          | "appEventScreenshots"
          | "appEventVideoClips"
          | "locale"
          | "longDescription"
          | "name"
          | "shortDescription"
        )[];
        limit?: number;
        include?: "appEventLocalization"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEventScreenshotsResponse, ErrorResponse>({
        path: `/v1/appEventLocalizations/${id}/appEventScreenshots`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEventLocalizations
     * @name AppEventLocalizationsAppEventVideoClipsGetToManyRelated
     * @request GET:/v1/appEventLocalizations/{id}/appEventVideoClips
     * @secure
     */
    appEventLocalizationsAppEventVideoClipsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appEventVideoClips]"?: (
          | "appEventAssetType"
          | "appEventLocalization"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "previewFrameTimeCode"
          | "previewImage"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        "fields[appEventLocalizations]"?: (
          | "appEvent"
          | "appEventScreenshots"
          | "appEventVideoClips"
          | "locale"
          | "longDescription"
          | "name"
          | "shortDescription"
        )[];
        limit?: number;
        include?: "appEventLocalization"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEventVideoClipsResponse, ErrorResponse>({
        path: `/v1/appEventLocalizations/${id}/appEventVideoClips`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppEvents
     * @name AppEventsLocalizationsGetToManyRelated
     * @request GET:/v1/appEvents/{id}/localizations
     * @secure
     */
    appEventsLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appEventScreenshots]"?: (
          | "appEventAssetType"
          | "appEventLocalization"
          | "assetDeliveryState"
          | "assetToken"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appEventVideoClips]"?: (
          | "appEventAssetType"
          | "appEventLocalization"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "previewFrameTimeCode"
          | "previewImage"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        "fields[appEventLocalizations]"?: (
          | "appEvent"
          | "appEventScreenshots"
          | "appEventVideoClips"
          | "locale"
          | "longDescription"
          | "name"
          | "shortDescription"
        )[];
        "fields[appEvents]"?: (
          | "app"
          | "archivedTerritorySchedules"
          | "badge"
          | "deepLink"
          | "eventState"
          | "localizations"
          | "primaryLocale"
          | "priority"
          | "purchaseRequirement"
          | "purpose"
          | "referenceName"
          | "territorySchedules"
        )[];
        limit?: number;
        "limit[appEventScreenshots]"?: number;
        "limit[appEventVideoClips]"?: number;
        include?: ("appEvent" | "appEventScreenshots" | "appEventVideoClips")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEventLocalizationsResponse, ErrorResponse>({
        path: `/v1/appEvents/${id}/localizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosAgeRatingDeclarationGetToOneRelated
     * @request GET:/v1/appInfos/{id}/ageRatingDeclaration
     * @secure
     */
    appInfosAgeRatingDeclarationGetToOneRelated: (
      id: string,
      query?: {
        "fields[ageRatingDeclarations]"?: (
          | "alcoholTobaccoOrDrugUseOrReferences"
          | "contests"
          | "gambling"
          | "gamblingAndContests"
          | "gamblingSimulated"
          | "horrorOrFearThemes"
          | "kidsAgeBand"
          | "matureOrSuggestiveThemes"
          | "medicalOrTreatmentInformation"
          | "profanityOrCrudeHumor"
          | "seventeenPlus"
          | "sexualContentGraphicAndNudity"
          | "sexualContentOrNudity"
          | "unrestrictedWebAccess"
          | "violenceCartoonOrFantasy"
          | "violenceRealistic"
          | "violenceRealisticProlongedGraphicOrSadistic"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AgeRatingDeclarationResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}/ageRatingDeclaration`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosAppInfoLocalizationsGetToManyRelated
     * @request GET:/v1/appInfos/{id}/appInfoLocalizations
     * @secure
     */
    appInfosAppInfoLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "filter[locale]"?: string[];
        "fields[appInfos]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appInfoLocalizations"
          | "appStoreAgeRating"
          | "appStoreState"
          | "brazilAgeRating"
          | "kidsAgeBand"
          | "primaryCategory"
          | "primarySubcategoryOne"
          | "primarySubcategoryTwo"
          | "secondaryCategory"
          | "secondarySubcategoryOne"
          | "secondarySubcategoryTwo"
        )[];
        "fields[appInfoLocalizations]"?: (
          | "appInfo"
          | "locale"
          | "name"
          | "privacyChoicesUrl"
          | "privacyPolicyText"
          | "privacyPolicyUrl"
          | "subtitle"
        )[];
        limit?: number;
        include?: "appInfo"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppInfoLocalizationsResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}/appInfoLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosPrimaryCategoryGetToOneRelated
     * @request GET:/v1/appInfos/{id}/primaryCategory
     * @secure
     */
    appInfosPrimaryCategoryGetToOneRelated: (
      id: string,
      query?: { "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoryResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}/primaryCategory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosPrimarySubcategoryOneGetToOneRelated
     * @request GET:/v1/appInfos/{id}/primarySubcategoryOne
     * @secure
     */
    appInfosPrimarySubcategoryOneGetToOneRelated: (
      id: string,
      query?: { "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoryResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}/primarySubcategoryOne`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosPrimarySubcategoryTwoGetToOneRelated
     * @request GET:/v1/appInfos/{id}/primarySubcategoryTwo
     * @secure
     */
    appInfosPrimarySubcategoryTwoGetToOneRelated: (
      id: string,
      query?: { "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoryResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}/primarySubcategoryTwo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosSecondaryCategoryGetToOneRelated
     * @request GET:/v1/appInfos/{id}/secondaryCategory
     * @secure
     */
    appInfosSecondaryCategoryGetToOneRelated: (
      id: string,
      query?: { "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoryResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}/secondaryCategory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosSecondarySubcategoryOneGetToOneRelated
     * @request GET:/v1/appInfos/{id}/secondarySubcategoryOne
     * @secure
     */
    appInfosSecondarySubcategoryOneGetToOneRelated: (
      id: string,
      query?: { "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoryResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}/secondarySubcategoryOne`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppInfos
     * @name AppInfosSecondarySubcategoryTwoGetToOneRelated
     * @request GET:/v1/appInfos/{id}/secondarySubcategoryTwo
     * @secure
     */
    appInfosSecondarySubcategoryTwoGetToOneRelated: (
      id: string,
      query?: { "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppCategoryResponse, ErrorResponse>({
        path: `/v1/appInfos/${id}/secondarySubcategoryTwo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviewSets
     * @name AppPreviewSetsAppPreviewsGetToManyRelationship
     * @request GET:/v1/appPreviewSets/{id}/relationships/appPreviews
     * @secure
     */
    appPreviewSetsAppPreviewsGetToManyRelationship: (
      id: string,
      query?: { limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<AppPreviewSetAppPreviewsLinkagesResponse, ErrorResponse>({
        path: `/v1/appPreviewSets/${id}/relationships/appPreviews`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviewSets
     * @name AppPreviewSetsAppPreviewsReplaceToManyRelationship
     * @request PATCH:/v1/appPreviewSets/{id}/relationships/appPreviews
     * @secure
     */
    appPreviewSetsAppPreviewsReplaceToManyRelationship: (
      id: string,
      data: AppPreviewSetAppPreviewsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appPreviewSets/${id}/relationships/appPreviews`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPreviewSets
     * @name AppPreviewSetsAppPreviewsGetToManyRelated
     * @request GET:/v1/appPreviewSets/{id}/appPreviews
     * @secure
     */
    appPreviewSetsAppPreviewsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appPreviews]"?: (
          | "appPreviewSet"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "mimeType"
          | "previewFrameTimeCode"
          | "previewImage"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        limit?: number;
        include?: "appPreviewSet"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPreviewsResponse, ErrorResponse>({
        path: `/v1/appPreviewSets/${id}/appPreviews`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPricePoints
     * @name AppPricePointsTerritoryGetToOneRelated
     * @request GET:/v1/appPricePoints/{id}/territory
     * @deprecated
     * @secure
     */
    appPricePointsTerritoryGetToOneRelated: (
      id: string,
      query?: { "fields[territories]"?: "currency"[] },
      params: RequestParams = {},
    ) =>
      this.request<TerritoryResponse, ErrorResponse>({
        path: `/v1/appPricePoints/${id}/territory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppPriceTiers
     * @name AppPriceTiersPricePointsGetToManyRelated
     * @request GET:/v1/appPriceTiers/{id}/pricePoints
     * @deprecated
     * @secure
     */
    appPriceTiersPricePointsGetToManyRelated: (
      id: string,
      query?: {
        "filter[territory]"?: string[];
        "fields[appPriceTiers]"?: "pricePoints"[];
        "fields[appPricePoints]"?: ("customerPrice" | "priceTier" | "proceeds" | "territory")[];
        "fields[territories]"?: "currency"[];
        limit?: number;
        include?: ("priceTier" | "territory")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPricePointsResponse, ErrorResponse>({
        path: `/v1/appPriceTiers/${id}/pricePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshotSets
     * @name AppScreenshotSetsAppScreenshotsGetToManyRelationship
     * @request GET:/v1/appScreenshotSets/{id}/relationships/appScreenshots
     * @secure
     */
    appScreenshotSetsAppScreenshotsGetToManyRelationship: (
      id: string,
      query?: { limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<AppScreenshotSetAppScreenshotsLinkagesResponse, ErrorResponse>({
        path: `/v1/appScreenshotSets/${id}/relationships/appScreenshots`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshotSets
     * @name AppScreenshotSetsAppScreenshotsReplaceToManyRelationship
     * @request PATCH:/v1/appScreenshotSets/{id}/relationships/appScreenshots
     * @secure
     */
    appScreenshotSetsAppScreenshotsReplaceToManyRelationship: (
      id: string,
      data: AppScreenshotSetAppScreenshotsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appScreenshotSets/${id}/relationships/appScreenshots`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppScreenshotSets
     * @name AppScreenshotSetsAppScreenshotsGetToManyRelated
     * @request GET:/v1/appScreenshotSets/{id}/appScreenshots
     * @secure
     */
    appScreenshotSetsAppScreenshotsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appScreenshots]"?: (
          | "appScreenshotSet"
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        limit?: number;
        include?: "appScreenshotSet"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppScreenshotsResponse, ErrorResponse>({
        path: `/v1/appScreenshotSets/${id}/appScreenshots`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreReviewDetails
     * @name AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated
     * @request GET:/v1/appStoreReviewDetails/{id}/appStoreReviewAttachments
     * @secure
     */
    appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appStoreReviewDetails]"?: (
          | "appStoreReviewAttachments"
          | "appStoreVersion"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[appStoreReviewAttachments]"?: (
          | "appStoreReviewDetail"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        limit?: number;
        include?: "appStoreReviewDetail"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreReviewAttachmentsResponse, ErrorResponse>({
        path: `/v1/appStoreReviewDetails/${id}/appStoreReviewAttachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatmentLocalizations
     * @name AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated
     * @request GET:/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appPreviewSets
     * @secure
     */
    appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated: (
      id: string,
      query?: {
        "filter[previewType]"?: (
          | "IPHONE_65"
          | "IPHONE_58"
          | "IPHONE_55"
          | "IPHONE_47"
          | "IPHONE_40"
          | "IPHONE_35"
          | "IPAD_PRO_3GEN_129"
          | "IPAD_PRO_3GEN_11"
          | "IPAD_PRO_129"
          | "IPAD_105"
          | "IPAD_97"
          | "DESKTOP"
          | "WATCH_SERIES_4"
          | "WATCH_SERIES_3"
          | "APPLE_TV"
        )[];
        "filter[appCustomProductPageLocalization]"?: string[];
        "filter[appStoreVersionLocalization]"?: string[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        "fields[appPreviews]"?: (
          | "appPreviewSet"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "mimeType"
          | "previewFrameTimeCode"
          | "previewImage"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        limit?: number;
        "limit[appPreviews]"?: number;
        include?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPreviewSetsResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatmentLocalizations/${id}/appPreviewSets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatmentLocalizations
     * @name AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated
     * @request GET:/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appScreenshotSets
     * @secure
     */
    appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated: (
      id: string,
      query?: {
        "filter[screenshotDisplayType]"?: (
          | "APP_IPHONE_65"
          | "APP_IPHONE_58"
          | "APP_IPHONE_55"
          | "APP_IPHONE_47"
          | "APP_IPHONE_40"
          | "APP_IPHONE_35"
          | "APP_IPAD_PRO_3GEN_129"
          | "APP_IPAD_PRO_3GEN_11"
          | "APP_IPAD_PRO_129"
          | "APP_IPAD_105"
          | "APP_IPAD_97"
          | "APP_DESKTOP"
          | "APP_WATCH_SERIES_7"
          | "APP_WATCH_SERIES_4"
          | "APP_WATCH_SERIES_3"
          | "APP_APPLE_TV"
          | "IMESSAGE_APP_IPHONE_65"
          | "IMESSAGE_APP_IPHONE_58"
          | "IMESSAGE_APP_IPHONE_55"
          | "IMESSAGE_APP_IPHONE_47"
          | "IMESSAGE_APP_IPHONE_40"
          | "IMESSAGE_APP_IPAD_PRO_3GEN_129"
          | "IMESSAGE_APP_IPAD_PRO_3GEN_11"
          | "IMESSAGE_APP_IPAD_PRO_129"
          | "IMESSAGE_APP_IPAD_105"
          | "IMESSAGE_APP_IPAD_97"
        )[];
        "filter[appCustomProductPageLocalization]"?: string[];
        "filter[appStoreVersionLocalization]"?: string[];
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        "fields[appScreenshots]"?: (
          | "appScreenshotSet"
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        limit?: number;
        "limit[appScreenshots]"?: number;
        include?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppScreenshotSetsResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatmentLocalizations/${id}/appScreenshotSets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperimentTreatments
     * @name AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated
     * @request GET:/v1/appStoreVersionExperimentTreatments/{id}/appStoreVersionExperimentTreatmentLocalizations
     * @secure
     */
    appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "filter[locale]"?: string[];
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appStoreVersionExperimentTreatments]"?: (
          | "appIcon"
          | "appIconName"
          | "appStoreVersionExperiment"
          | "appStoreVersionExperimentTreatmentLocalizations"
          | "name"
          | "promotedDate"
        )[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        limit?: number;
        "limit[appScreenshotSets]"?: number;
        "limit[appPreviewSets]"?: number;
        include?: ("appPreviewSets" | "appScreenshotSets" | "appStoreVersionExperimentTreatment")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentTreatmentLocalizationsResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperimentTreatments/${id}/appStoreVersionExperimentTreatmentLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionExperiments
     * @name AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated
     * @request GET:/v1/appStoreVersionExperiments/{id}/appStoreVersionExperimentTreatments
     * @secure
     */
    appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appStoreVersionExperiments]"?: (
          | "appStoreVersion"
          | "appStoreVersionExperimentTreatments"
          | "endDate"
          | "name"
          | "reviewRequired"
          | "startDate"
          | "started"
          | "state"
          | "trafficProportion"
        )[];
        "fields[appStoreVersionExperimentTreatments]"?: (
          | "appIcon"
          | "appIconName"
          | "appStoreVersionExperiment"
          | "appStoreVersionExperimentTreatmentLocalizations"
          | "name"
          | "promotedDate"
        )[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        limit?: number;
        "limit[appStoreVersionExperimentTreatmentLocalizations]"?: number;
        include?: ("appStoreVersionExperiment" | "appStoreVersionExperimentTreatmentLocalizations")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentTreatmentsResponse, ErrorResponse>({
        path: `/v1/appStoreVersionExperiments/${id}/appStoreVersionExperimentTreatments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionLocalizations
     * @name AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelated
     * @request GET:/v1/appStoreVersionLocalizations/{id}/appPreviewSets
     * @secure
     */
    appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated: (
      id: string,
      query?: {
        "filter[previewType]"?: (
          | "IPHONE_65"
          | "IPHONE_58"
          | "IPHONE_55"
          | "IPHONE_47"
          | "IPHONE_40"
          | "IPHONE_35"
          | "IPAD_PRO_3GEN_129"
          | "IPAD_PRO_3GEN_11"
          | "IPAD_PRO_129"
          | "IPAD_105"
          | "IPAD_97"
          | "DESKTOP"
          | "WATCH_SERIES_4"
          | "WATCH_SERIES_3"
          | "APPLE_TV"
        )[];
        "filter[appCustomProductPageLocalization]"?: string[];
        "filter[appStoreVersionExperimentTreatmentLocalization]"?: string[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        "fields[appPreviews]"?: (
          | "appPreviewSet"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "mimeType"
          | "previewFrameTimeCode"
          | "previewImage"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
          | "videoUrl"
        )[];
        "fields[appPreviewSets]"?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "previewType"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        limit?: number;
        "limit[appPreviews]"?: number;
        include?: (
          | "appCustomProductPageLocalization"
          | "appPreviews"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPreviewSetsResponse, ErrorResponse>({
        path: `/v1/appStoreVersionLocalizations/${id}/appPreviewSets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersionLocalizations
     * @name AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated
     * @request GET:/v1/appStoreVersionLocalizations/{id}/appScreenshotSets
     * @secure
     */
    appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated: (
      id: string,
      query?: {
        "filter[screenshotDisplayType]"?: (
          | "APP_IPHONE_65"
          | "APP_IPHONE_58"
          | "APP_IPHONE_55"
          | "APP_IPHONE_47"
          | "APP_IPHONE_40"
          | "APP_IPHONE_35"
          | "APP_IPAD_PRO_3GEN_129"
          | "APP_IPAD_PRO_3GEN_11"
          | "APP_IPAD_PRO_129"
          | "APP_IPAD_105"
          | "APP_IPAD_97"
          | "APP_DESKTOP"
          | "APP_WATCH_SERIES_7"
          | "APP_WATCH_SERIES_4"
          | "APP_WATCH_SERIES_3"
          | "APP_APPLE_TV"
          | "IMESSAGE_APP_IPHONE_65"
          | "IMESSAGE_APP_IPHONE_58"
          | "IMESSAGE_APP_IPHONE_55"
          | "IMESSAGE_APP_IPHONE_47"
          | "IMESSAGE_APP_IPHONE_40"
          | "IMESSAGE_APP_IPAD_PRO_3GEN_129"
          | "IMESSAGE_APP_IPAD_PRO_3GEN_11"
          | "IMESSAGE_APP_IPAD_PRO_129"
          | "IMESSAGE_APP_IPAD_105"
          | "IMESSAGE_APP_IPAD_97"
        )[];
        "filter[appCustomProductPageLocalization]"?: string[];
        "filter[appStoreVersionExperimentTreatmentLocalization]"?: string[];
        "fields[appScreenshotSets]"?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
          | "screenshotDisplayType"
        )[];
        "fields[appCustomProductPageLocalizations]"?: (
          | "appCustomProductPageVersion"
          | "appPreviewSets"
          | "appScreenshotSets"
          | "locale"
          | "promotionalText"
        )[];
        "fields[appStoreVersionExperimentTreatmentLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersionExperimentTreatment"
          | "locale"
        )[];
        "fields[appScreenshots]"?: (
          | "appScreenshotSet"
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        limit?: number;
        "limit[appScreenshots]"?: number;
        include?: (
          | "appCustomProductPageLocalization"
          | "appScreenshots"
          | "appStoreVersionExperimentTreatmentLocalization"
          | "appStoreVersionLocalization"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppScreenshotSetsResponse, ErrorResponse>({
        path: `/v1/appStoreVersionLocalizations/${id}/appScreenshotSets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAgeRatingDeclarationGetToOneRelated
     * @request GET:/v1/appStoreVersions/{id}/ageRatingDeclaration
     * @deprecated
     * @secure
     */
    appStoreVersionsAgeRatingDeclarationGetToOneRelated: (
      id: string,
      query?: {
        "fields[ageRatingDeclarations]"?: (
          | "alcoholTobaccoOrDrugUseOrReferences"
          | "contests"
          | "gambling"
          | "gamblingAndContests"
          | "gamblingSimulated"
          | "horrorOrFearThemes"
          | "kidsAgeBand"
          | "matureOrSuggestiveThemes"
          | "medicalOrTreatmentInformation"
          | "profanityOrCrudeHumor"
          | "seventeenPlus"
          | "sexualContentGraphicAndNudity"
          | "sexualContentOrNudity"
          | "unrestrictedWebAccess"
          | "violenceCartoonOrFantasy"
          | "violenceRealistic"
          | "violenceRealisticProlongedGraphicOrSadistic"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AgeRatingDeclarationResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/ageRatingDeclaration`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAppClipDefaultExperienceGetToOneRelationship
     * @request GET:/v1/appStoreVersions/{id}/relationships/appClipDefaultExperience
     * @secure
     */
    appStoreVersionsAppClipDefaultExperienceGetToOneRelationship: (id: string, params: RequestParams = {}) =>
      this.request<AppStoreVersionAppClipDefaultExperienceLinkageResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/relationships/appClipDefaultExperience`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship
     * @request PATCH:/v1/appStoreVersions/{id}/relationships/appClipDefaultExperience
     * @secure
     */
    appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship: (
      id: string,
      data: AppStoreVersionAppClipDefaultExperienceLinkageRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/relationships/appClipDefaultExperience`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAppClipDefaultExperienceGetToOneRelated
     * @request GET:/v1/appStoreVersions/{id}/appClipDefaultExperience
     * @secure
     */
    appStoreVersionsAppClipDefaultExperienceGetToOneRelated: (
      id: string,
      query?: {
        "fields[appClips]"?: ("app" | "appClipAdvancedExperiences" | "appClipDefaultExperiences" | "bundleId")[];
        "fields[appClipAppStoreReviewDetails]"?: ("appClipDefaultExperience" | "invocationUrls")[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        "fields[appClipDefaultExperienceLocalizations]"?: (
          | "appClipDefaultExperience"
          | "appClipHeaderImage"
          | "locale"
          | "subtitle"
        )[];
        "limit[appClipDefaultExperienceLocalizations]"?: number;
        include?: (
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "releaseWithAppStoreVersion"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipDefaultExperienceResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/appClipDefaultExperience`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAppStoreReviewDetailGetToOneRelated
     * @request GET:/v1/appStoreVersions/{id}/appStoreReviewDetail
     * @secure
     */
    appStoreVersionsAppStoreReviewDetailGetToOneRelated: (
      id: string,
      query?: {
        "fields[appStoreReviewDetails]"?: (
          | "appStoreReviewAttachments"
          | "appStoreVersion"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appStoreReviewAttachments]"?: (
          | "appStoreReviewDetail"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "limit[appStoreReviewAttachments]"?: number;
        include?: ("appStoreReviewAttachments" | "appStoreVersion")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreReviewDetailResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/appStoreReviewDetail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAppStoreVersionExperimentsGetToManyRelated
     * @request GET:/v1/appStoreVersions/{id}/appStoreVersionExperiments
     * @secure
     */
    appStoreVersionsAppStoreVersionExperimentsGetToManyRelated: (
      id: string,
      query?: {
        "filter[state]"?: (
          | "PREPARE_FOR_SUBMISSION"
          | "READY_FOR_REVIEW"
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "ACCEPTED"
          | "APPROVED"
          | "REJECTED"
          | "COMPLETED"
          | "STOPPED"
        )[];
        "fields[appStoreVersionExperiments]"?: (
          | "appStoreVersion"
          | "appStoreVersionExperimentTreatments"
          | "endDate"
          | "name"
          | "reviewRequired"
          | "startDate"
          | "started"
          | "state"
          | "trafficProportion"
        )[];
        "fields[appStoreVersionExperimentTreatments]"?: (
          | "appIcon"
          | "appIconName"
          | "appStoreVersionExperiment"
          | "appStoreVersionExperimentTreatmentLocalizations"
          | "name"
          | "promotedDate"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        limit?: number;
        "limit[appStoreVersionExperimentTreatments]"?: number;
        include?: ("appStoreVersion" | "appStoreVersionExperimentTreatments")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionExperimentsResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/appStoreVersionExperiments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAppStoreVersionLocalizationsGetToManyRelated
     * @request GET:/v1/appStoreVersions/{id}/appStoreVersionLocalizations
     * @secure
     */
    appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionLocalizationsResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/appStoreVersionLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated
     * @request GET:/v1/appStoreVersions/{id}/appStoreVersionPhasedRelease
     * @secure
     */
    appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated: (
      id: string,
      query?: {
        "fields[appStoreVersionPhasedReleases]"?: (
          | "appStoreVersion"
          | "currentDayNumber"
          | "phasedReleaseState"
          | "startDate"
          | "totalPauseDuration"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionPhasedReleaseResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/appStoreVersionPhasedRelease`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsAppStoreVersionSubmissionGetToOneRelated
     * @request GET:/v1/appStoreVersions/{id}/appStoreVersionSubmission
     * @deprecated
     * @secure
     */
    appStoreVersionsAppStoreVersionSubmissionGetToOneRelated: (
      id: string,
      query?: {
        "fields[appStoreVersionSubmissions]"?: "appStoreVersion"[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        include?: "appStoreVersion"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionSubmissionResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/appStoreVersionSubmission`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsBuildGetToOneRelationship
     * @request GET:/v1/appStoreVersions/{id}/relationships/build
     * @secure
     */
    appStoreVersionsBuildGetToOneRelationship: (id: string, params: RequestParams = {}) =>
      this.request<AppStoreVersionBuildLinkageResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/relationships/build`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsBuildUpdateToOneRelationship
     * @request PATCH:/v1/appStoreVersions/{id}/relationships/build
     * @secure
     */
    appStoreVersionsBuildUpdateToOneRelationship: (
      id: string,
      data: AppStoreVersionBuildLinkageRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/relationships/build`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsBuildGetToOneRelated
     * @request GET:/v1/appStoreVersions/{id}/build
     * @secure
     */
    appStoreVersionsBuildGetToOneRelated: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/build`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsCustomerReviewsGetToManyRelated
     * @request GET:/v1/appStoreVersions/{id}/customerReviews
     * @secure
     */
    appStoreVersionsCustomerReviewsGetToManyRelated: (
      id: string,
      query?: {
        "filter[rating]"?: string[];
        "filter[territory]"?: (
          | "ABW"
          | "AFG"
          | "AGO"
          | "AIA"
          | "ALB"
          | "AND"
          | "ANT"
          | "ARE"
          | "ARG"
          | "ARM"
          | "ASM"
          | "ATG"
          | "AUS"
          | "AUT"
          | "AZE"
          | "BDI"
          | "BEL"
          | "BEN"
          | "BES"
          | "BFA"
          | "BGD"
          | "BGR"
          | "BHR"
          | "BHS"
          | "BIH"
          | "BLR"
          | "BLZ"
          | "BMU"
          | "BOL"
          | "BRA"
          | "BRB"
          | "BRN"
          | "BTN"
          | "BWA"
          | "CAF"
          | "CAN"
          | "CHE"
          | "CHL"
          | "CHN"
          | "CIV"
          | "CMR"
          | "COD"
          | "COG"
          | "COK"
          | "COL"
          | "COM"
          | "CPV"
          | "CRI"
          | "CUB"
          | "CUW"
          | "CXR"
          | "CYM"
          | "CYP"
          | "CZE"
          | "DEU"
          | "DJI"
          | "DMA"
          | "DNK"
          | "DOM"
          | "DZA"
          | "ECU"
          | "EGY"
          | "ERI"
          | "ESP"
          | "EST"
          | "ETH"
          | "FIN"
          | "FJI"
          | "FLK"
          | "FRA"
          | "FRO"
          | "FSM"
          | "GAB"
          | "GBR"
          | "GEO"
          | "GGY"
          | "GHA"
          | "GIB"
          | "GIN"
          | "GLP"
          | "GMB"
          | "GNB"
          | "GNQ"
          | "GRC"
          | "GRD"
          | "GRL"
          | "GTM"
          | "GUF"
          | "GUM"
          | "GUY"
          | "HKG"
          | "HND"
          | "HRV"
          | "HTI"
          | "HUN"
          | "IDN"
          | "IMN"
          | "IND"
          | "IRL"
          | "IRQ"
          | "ISL"
          | "ISR"
          | "ITA"
          | "JAM"
          | "JEY"
          | "JOR"
          | "JPN"
          | "KAZ"
          | "KEN"
          | "KGZ"
          | "KHM"
          | "KIR"
          | "KNA"
          | "KOR"
          | "KWT"
          | "LAO"
          | "LBN"
          | "LBR"
          | "LBY"
          | "LCA"
          | "LIE"
          | "LKA"
          | "LSO"
          | "LTU"
          | "LUX"
          | "LVA"
          | "MAC"
          | "MAR"
          | "MCO"
          | "MDA"
          | "MDG"
          | "MDV"
          | "MEX"
          | "MHL"
          | "MKD"
          | "MLI"
          | "MLT"
          | "MMR"
          | "MNE"
          | "MNG"
          | "MNP"
          | "MOZ"
          | "MRT"
          | "MSR"
          | "MTQ"
          | "MUS"
          | "MWI"
          | "MYS"
          | "MYT"
          | "NAM"
          | "NCL"
          | "NER"
          | "NFK"
          | "NGA"
          | "NIC"
          | "NIU"
          | "NLD"
          | "NOR"
          | "NPL"
          | "NRU"
          | "NZL"
          | "OMN"
          | "PAK"
          | "PAN"
          | "PER"
          | "PHL"
          | "PLW"
          | "PNG"
          | "POL"
          | "PRI"
          | "PRT"
          | "PRY"
          | "PSE"
          | "PYF"
          | "QAT"
          | "REU"
          | "ROU"
          | "RUS"
          | "RWA"
          | "SAU"
          | "SEN"
          | "SGP"
          | "SHN"
          | "SLB"
          | "SLE"
          | "SLV"
          | "SMR"
          | "SOM"
          | "SPM"
          | "SRB"
          | "SSD"
          | "STP"
          | "SUR"
          | "SVK"
          | "SVN"
          | "SWE"
          | "SWZ"
          | "SXM"
          | "SYC"
          | "TCA"
          | "TCD"
          | "TGO"
          | "THA"
          | "TJK"
          | "TKM"
          | "TLS"
          | "TON"
          | "TTO"
          | "TUN"
          | "TUR"
          | "TUV"
          | "TWN"
          | "TZA"
          | "UGA"
          | "UKR"
          | "UMI"
          | "URY"
          | "USA"
          | "UZB"
          | "VAT"
          | "VCT"
          | "VEN"
          | "VGB"
          | "VIR"
          | "VNM"
          | "VUT"
          | "WLF"
          | "WSM"
          | "YEM"
          | "ZAF"
          | "ZMB"
          | "ZWE"
        )[];
        "exists[publishedResponse]"?: boolean;
        sort?: ("createdDate" | "-createdDate" | "rating" | "-rating")[];
        "fields[customerReviews]"?: (
          | "body"
          | "createdDate"
          | "rating"
          | "response"
          | "reviewerNickname"
          | "territory"
          | "title"
        )[];
        "fields[customerReviewResponses]"?: ("lastModifiedDate" | "responseBody" | "review" | "state")[];
        limit?: number;
        include?: "response"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerReviewsResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/customerReviews`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppStoreVersions
     * @name AppStoreVersionsRoutingAppCoverageGetToOneRelated
     * @request GET:/v1/appStoreVersions/{id}/routingAppCoverage
     * @secure
     */
    appStoreVersionsRoutingAppCoverageGetToOneRelated: (
      id: string,
      query?: {
        "fields[routingAppCoverages]"?: (
          | "appStoreVersion"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RoutingAppCoverageResponse, ErrorResponse>({
        path: `/v1/appStoreVersions/${id}/routingAppCoverage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsAppClipsGetToManyRelated
     * @request GET:/v1/apps/{id}/appClips
     * @secure
     */
    appsAppClipsGetToManyRelated: (
      id: string,
      query?: {
        "filter[bundleId]"?: string[];
        "fields[appClips]"?: ("app" | "appClipAdvancedExperiences" | "appClipDefaultExperiences" | "bundleId")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        limit?: number;
        "limit[appClipDefaultExperiences]"?: number;
        include?: ("app" | "appClipDefaultExperiences")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppClipsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/appClips`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsAppCustomProductPagesGetToManyRelated
     * @request GET:/v1/apps/{id}/appCustomProductPages
     * @secure
     */
    appsAppCustomProductPagesGetToManyRelated: (
      id: string,
      query?: {
        "filter[visible]"?: string[];
        "fields[appCustomProductPages]"?: (
          | "app"
          | "appCustomProductPageVersions"
          | "appStoreVersionTemplate"
          | "customProductPageTemplate"
          | "name"
          | "url"
          | "visible"
        )[];
        "fields[appCustomProductPageVersions]"?: (
          | "appCustomProductPage"
          | "appCustomProductPageLocalizations"
          | "state"
          | "version"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
        "limit[appCustomProductPageVersions]"?: number;
        include?: ("app" | "appCustomProductPageVersions")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppCustomProductPagesResponse, ErrorResponse>({
        path: `/v1/apps/${id}/appCustomProductPages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsAppEventsGetToManyRelated
     * @request GET:/v1/apps/{id}/appEvents
     * @secure
     */
    appsAppEventsGetToManyRelated: (
      id: string,
      query?: {
        "filter[eventState]"?: (
          | "DRAFT"
          | "READY_FOR_REVIEW"
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "REJECTED"
          | "ACCEPTED"
          | "APPROVED"
          | "PUBLISHED"
          | "PAST"
          | "ARCHIVED"
        )[];
        "filter[id]"?: string[];
        "fields[appEventLocalizations]"?: (
          | "appEvent"
          | "appEventScreenshots"
          | "appEventVideoClips"
          | "locale"
          | "longDescription"
          | "name"
          | "shortDescription"
        )[];
        "fields[appEvents]"?: (
          | "app"
          | "archivedTerritorySchedules"
          | "badge"
          | "deepLink"
          | "eventState"
          | "localizations"
          | "primaryLocale"
          | "priority"
          | "purchaseRequirement"
          | "purpose"
          | "referenceName"
          | "territorySchedules"
        )[];
        limit?: number;
        "limit[localizations]"?: number;
        include?: "localizations"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEventsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/appEvents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsAppInfosGetToManyRelated
     * @request GET:/v1/apps/{id}/appInfos
     * @secure
     */
    appsAppInfosGetToManyRelated: (
      id: string,
      query?: {
        "fields[ageRatingDeclarations]"?: (
          | "alcoholTobaccoOrDrugUseOrReferences"
          | "contests"
          | "gambling"
          | "gamblingAndContests"
          | "gamblingSimulated"
          | "horrorOrFearThemes"
          | "kidsAgeBand"
          | "matureOrSuggestiveThemes"
          | "medicalOrTreatmentInformation"
          | "profanityOrCrudeHumor"
          | "seventeenPlus"
          | "sexualContentGraphicAndNudity"
          | "sexualContentOrNudity"
          | "unrestrictedWebAccess"
          | "violenceCartoonOrFantasy"
          | "violenceRealistic"
          | "violenceRealisticProlongedGraphicOrSadistic"
        )[];
        "fields[appInfos]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appInfoLocalizations"
          | "appStoreAgeRating"
          | "appStoreState"
          | "brazilAgeRating"
          | "kidsAgeBand"
          | "primaryCategory"
          | "primarySubcategoryOne"
          | "primarySubcategoryTwo"
          | "secondaryCategory"
          | "secondarySubcategoryOne"
          | "secondarySubcategoryTwo"
        )[];
        "fields[appInfoLocalizations]"?: (
          | "appInfo"
          | "locale"
          | "name"
          | "privacyChoicesUrl"
          | "privacyPolicyText"
          | "privacyPolicyUrl"
          | "subtitle"
        )[];
        "fields[appCategories]"?: ("parent" | "platforms" | "subcategories")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
        "limit[appInfoLocalizations]"?: number;
        include?: (
          | "ageRatingDeclaration"
          | "app"
          | "appInfoLocalizations"
          | "primaryCategory"
          | "primarySubcategoryOne"
          | "primarySubcategoryTwo"
          | "secondaryCategory"
          | "secondarySubcategoryOne"
          | "secondarySubcategoryTwo"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppInfosResponse, ErrorResponse>({
        path: `/v1/apps/${id}/appInfos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsAppStoreVersionsGetToManyRelated
     * @request GET:/v1/apps/{id}/appStoreVersions
     * @secure
     */
    appsAppStoreVersionsGetToManyRelated: (
      id: string,
      query?: {
        "filter[appStoreState]"?: (
          | "ACCEPTED"
          | "DEVELOPER_REMOVED_FROM_SALE"
          | "DEVELOPER_REJECTED"
          | "IN_REVIEW"
          | "INVALID_BINARY"
          | "METADATA_REJECTED"
          | "PENDING_APPLE_RELEASE"
          | "PENDING_CONTRACT"
          | "PENDING_DEVELOPER_RELEASE"
          | "PREPARE_FOR_SUBMISSION"
          | "PREORDER_READY_FOR_SALE"
          | "PROCESSING_FOR_APP_STORE"
          | "READY_FOR_REVIEW"
          | "READY_FOR_SALE"
          | "REJECTED"
          | "REMOVED_FROM_SALE"
          | "WAITING_FOR_EXPORT_COMPLIANCE"
          | "WAITING_FOR_REVIEW"
          | "REPLACED_WITH_NEW_VERSION"
        )[];
        "filter[platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[versionString]"?: string[];
        "filter[id]"?: string[];
        "fields[appStoreVersionExperiments]"?: (
          | "appStoreVersion"
          | "appStoreVersionExperimentTreatments"
          | "endDate"
          | "name"
          | "reviewRequired"
          | "startDate"
          | "started"
          | "state"
          | "trafficProportion"
        )[];
        "fields[ageRatingDeclarations]"?: (
          | "alcoholTobaccoOrDrugUseOrReferences"
          | "contests"
          | "gambling"
          | "gamblingAndContests"
          | "gamblingSimulated"
          | "horrorOrFearThemes"
          | "kidsAgeBand"
          | "matureOrSuggestiveThemes"
          | "medicalOrTreatmentInformation"
          | "profanityOrCrudeHumor"
          | "seventeenPlus"
          | "sexualContentGraphicAndNudity"
          | "sexualContentOrNudity"
          | "unrestrictedWebAccess"
          | "violenceCartoonOrFantasy"
          | "violenceRealistic"
          | "violenceRealisticProlongedGraphicOrSadistic"
        )[];
        "fields[appStoreVersionSubmissions]"?: "appStoreVersion"[];
        "fields[appStoreReviewDetails]"?: (
          | "appStoreReviewAttachments"
          | "appStoreVersion"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[routingAppCoverages]"?: (
          | "appStoreVersion"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        "fields[appStoreVersionPhasedReleases]"?: (
          | "appStoreVersion"
          | "currentDayNumber"
          | "phasedReleaseState"
          | "startDate"
          | "totalPauseDuration"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        limit?: number;
        "limit[appStoreVersionLocalizations]"?: number;
        "limit[appStoreVersionExperiments]"?: number;
        include?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "routingAppCoverage"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/appStoreVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsAvailableTerritoriesGetToManyRelated
     * @request GET:/v1/apps/{id}/availableTerritories
     * @secure
     */
    appsAvailableTerritoriesGetToManyRelated: (
      id: string,
      query?: { "fields[territories]"?: "currency"[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<TerritoriesResponse, ErrorResponse>({
        path: `/v1/apps/${id}/availableTerritories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsBetaAppLocalizationsGetToManyRelated
     * @request GET:/v1/apps/{id}/betaAppLocalizations
     * @secure
     */
    appsBetaAppLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "fields[betaAppLocalizations]"?: (
          | "app"
          | "description"
          | "feedbackEmail"
          | "locale"
          | "marketingUrl"
          | "privacyPolicyUrl"
          | "tvOsPrivacyPolicy"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppLocalizationsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/betaAppLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsBetaAppReviewDetailGetToOneRelated
     * @request GET:/v1/apps/{id}/betaAppReviewDetail
     * @secure
     */
    appsBetaAppReviewDetailGetToOneRelated: (
      id: string,
      query?: {
        "fields[betaAppReviewDetails]"?: (
          | "app"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppReviewDetailResponse, ErrorResponse>({
        path: `/v1/apps/${id}/betaAppReviewDetail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsBetaGroupsGetToManyRelated
     * @request GET:/v1/apps/{id}/betaGroups
     * @secure
     */
    appsBetaGroupsGetToManyRelated: (
      id: string,
      query?: {
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaGroupsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/betaGroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsBetaLicenseAgreementGetToOneRelated
     * @request GET:/v1/apps/{id}/betaLicenseAgreement
     * @secure
     */
    appsBetaLicenseAgreementGetToOneRelated: (
      id: string,
      query?: { "fields[betaLicenseAgreements]"?: ("agreementText" | "app")[] },
      params: RequestParams = {},
    ) =>
      this.request<BetaLicenseAgreementResponse, ErrorResponse>({
        path: `/v1/apps/${id}/betaLicenseAgreement`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsBetaTestersDeleteToManyRelationship
     * @request DELETE:/v1/apps/{id}/relationships/betaTesters
     * @secure
     */
    appsBetaTestersDeleteToManyRelationship: (
      id: string,
      data: AppBetaTestersLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/apps/${id}/relationships/betaTesters`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsBuildsGetToManyRelated
     * @request GET:/v1/apps/{id}/builds
     * @secure
     */
    appsBuildsGetToManyRelated: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/builds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsCiProductGetToOneRelated
     * @request GET:/v1/apps/{id}/ciProduct
     * @secure
     */
    appsCiProductGetToOneRelated: (
      id: string,
      query?: {
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        "fields[bundleIds]"?: (
          | "app"
          | "bundleIdCapabilities"
          | "identifier"
          | "name"
          | "platform"
          | "profiles"
          | "seedId"
        )[];
        "limit[primaryRepositories]"?: number;
        include?: ("app" | "bundleId" | "primaryRepositories")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiProductResponse, ErrorResponse>({
        path: `/v1/apps/${id}/ciProduct`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsCustomerReviewsGetToManyRelated
     * @request GET:/v1/apps/{id}/customerReviews
     * @secure
     */
    appsCustomerReviewsGetToManyRelated: (
      id: string,
      query?: {
        "filter[rating]"?: string[];
        "filter[territory]"?: (
          | "ABW"
          | "AFG"
          | "AGO"
          | "AIA"
          | "ALB"
          | "AND"
          | "ANT"
          | "ARE"
          | "ARG"
          | "ARM"
          | "ASM"
          | "ATG"
          | "AUS"
          | "AUT"
          | "AZE"
          | "BDI"
          | "BEL"
          | "BEN"
          | "BES"
          | "BFA"
          | "BGD"
          | "BGR"
          | "BHR"
          | "BHS"
          | "BIH"
          | "BLR"
          | "BLZ"
          | "BMU"
          | "BOL"
          | "BRA"
          | "BRB"
          | "BRN"
          | "BTN"
          | "BWA"
          | "CAF"
          | "CAN"
          | "CHE"
          | "CHL"
          | "CHN"
          | "CIV"
          | "CMR"
          | "COD"
          | "COG"
          | "COK"
          | "COL"
          | "COM"
          | "CPV"
          | "CRI"
          | "CUB"
          | "CUW"
          | "CXR"
          | "CYM"
          | "CYP"
          | "CZE"
          | "DEU"
          | "DJI"
          | "DMA"
          | "DNK"
          | "DOM"
          | "DZA"
          | "ECU"
          | "EGY"
          | "ERI"
          | "ESP"
          | "EST"
          | "ETH"
          | "FIN"
          | "FJI"
          | "FLK"
          | "FRA"
          | "FRO"
          | "FSM"
          | "GAB"
          | "GBR"
          | "GEO"
          | "GGY"
          | "GHA"
          | "GIB"
          | "GIN"
          | "GLP"
          | "GMB"
          | "GNB"
          | "GNQ"
          | "GRC"
          | "GRD"
          | "GRL"
          | "GTM"
          | "GUF"
          | "GUM"
          | "GUY"
          | "HKG"
          | "HND"
          | "HRV"
          | "HTI"
          | "HUN"
          | "IDN"
          | "IMN"
          | "IND"
          | "IRL"
          | "IRQ"
          | "ISL"
          | "ISR"
          | "ITA"
          | "JAM"
          | "JEY"
          | "JOR"
          | "JPN"
          | "KAZ"
          | "KEN"
          | "KGZ"
          | "KHM"
          | "KIR"
          | "KNA"
          | "KOR"
          | "KWT"
          | "LAO"
          | "LBN"
          | "LBR"
          | "LBY"
          | "LCA"
          | "LIE"
          | "LKA"
          | "LSO"
          | "LTU"
          | "LUX"
          | "LVA"
          | "MAC"
          | "MAR"
          | "MCO"
          | "MDA"
          | "MDG"
          | "MDV"
          | "MEX"
          | "MHL"
          | "MKD"
          | "MLI"
          | "MLT"
          | "MMR"
          | "MNE"
          | "MNG"
          | "MNP"
          | "MOZ"
          | "MRT"
          | "MSR"
          | "MTQ"
          | "MUS"
          | "MWI"
          | "MYS"
          | "MYT"
          | "NAM"
          | "NCL"
          | "NER"
          | "NFK"
          | "NGA"
          | "NIC"
          | "NIU"
          | "NLD"
          | "NOR"
          | "NPL"
          | "NRU"
          | "NZL"
          | "OMN"
          | "PAK"
          | "PAN"
          | "PER"
          | "PHL"
          | "PLW"
          | "PNG"
          | "POL"
          | "PRI"
          | "PRT"
          | "PRY"
          | "PSE"
          | "PYF"
          | "QAT"
          | "REU"
          | "ROU"
          | "RUS"
          | "RWA"
          | "SAU"
          | "SEN"
          | "SGP"
          | "SHN"
          | "SLB"
          | "SLE"
          | "SLV"
          | "SMR"
          | "SOM"
          | "SPM"
          | "SRB"
          | "SSD"
          | "STP"
          | "SUR"
          | "SVK"
          | "SVN"
          | "SWE"
          | "SWZ"
          | "SXM"
          | "SYC"
          | "TCA"
          | "TCD"
          | "TGO"
          | "THA"
          | "TJK"
          | "TKM"
          | "TLS"
          | "TON"
          | "TTO"
          | "TUN"
          | "TUR"
          | "TUV"
          | "TWN"
          | "TZA"
          | "UGA"
          | "UKR"
          | "UMI"
          | "URY"
          | "USA"
          | "UZB"
          | "VAT"
          | "VCT"
          | "VEN"
          | "VGB"
          | "VIR"
          | "VNM"
          | "VUT"
          | "WLF"
          | "WSM"
          | "YEM"
          | "ZAF"
          | "ZMB"
          | "ZWE"
        )[];
        "exists[publishedResponse]"?: boolean;
        sort?: ("createdDate" | "-createdDate" | "rating" | "-rating")[];
        "fields[customerReviews]"?: (
          | "body"
          | "createdDate"
          | "rating"
          | "response"
          | "reviewerNickname"
          | "territory"
          | "title"
        )[];
        "fields[customerReviewResponses]"?: ("lastModifiedDate" | "responseBody" | "review" | "state")[];
        limit?: number;
        include?: "response"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerReviewsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/customerReviews`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsEndUserLicenseAgreementGetToOneRelated
     * @request GET:/v1/apps/{id}/endUserLicenseAgreement
     * @secure
     */
    appsEndUserLicenseAgreementGetToOneRelated: (
      id: string,
      query?: { "fields[endUserLicenseAgreements]"?: ("agreementText" | "app" | "territories")[] },
      params: RequestParams = {},
    ) =>
      this.request<EndUserLicenseAgreementResponse, ErrorResponse>({
        path: `/v1/apps/${id}/endUserLicenseAgreement`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsGameCenterEnabledVersionsGetToManyRelated
     * @request GET:/v1/apps/{id}/gameCenterEnabledVersions
     * @secure
     */
    appsGameCenterEnabledVersionsGetToManyRelated: (
      id: string,
      query?: {
        "filter[platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[versionString]"?: string[];
        "filter[id]"?: string[];
        sort?: ("versionString" | "-versionString")[];
        "fields[gameCenterEnabledVersions]"?: (
          | "app"
          | "compatibleVersions"
          | "iconAsset"
          | "platform"
          | "versionString"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
        "limit[compatibleVersions]"?: number;
        include?: ("app" | "compatibleVersions")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<GameCenterEnabledVersionsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/gameCenterEnabledVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsInAppPurchasesGetToManyRelated
     * @request GET:/v1/apps/{id}/inAppPurchases
     * @deprecated
     * @secure
     */
    appsInAppPurchasesGetToManyRelated: (
      id: string,
      query?: {
        "filter[inAppPurchaseType]"?: (
          | "AUTOMATICALLY_RENEWABLE_SUBSCRIPTION"
          | "NON_CONSUMABLE"
          | "CONSUMABLE"
          | "NON_RENEWING_SUBSCRIPTION"
          | "FREE_SUBSCRIPTION"
        )[];
        "filter[canBeSubmitted]"?: string[];
        sort?: (
          | "inAppPurchaseType"
          | "-inAppPurchaseType"
          | "productId"
          | "-productId"
          | "referenceName"
          | "-referenceName"
        )[];
        "fields[inAppPurchases]"?: ("apps" | "inAppPurchaseType" | "productId" | "referenceName" | "state")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
        "limit[apps]"?: number;
        include?: "apps"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchasesResponse, ErrorResponse>({
        path: `/v1/apps/${id}/inAppPurchases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsInAppPurchasesV2GetToManyRelated
     * @request GET:/v1/apps/{id}/inAppPurchasesV2
     * @secure
     */
    appsInAppPurchasesV2GetToManyRelated: (
      id: string,
      query?: {
        "filter[inAppPurchaseType]"?: ("CONSUMABLE" | "NON_CONSUMABLE" | "NON_RENEWING_SUBSCRIPTION")[];
        "filter[name]"?: string[];
        "filter[productId]"?: string[];
        "filter[state]"?: (
          | "MISSING_METADATA"
          | "WAITING_FOR_UPLOAD"
          | "PROCESSING_CONTENT"
          | "READY_TO_SUBMIT"
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "DEVELOPER_ACTION_NEEDED"
          | "PENDING_BINARY_APPROVAL"
          | "APPROVED"
          | "DEVELOPER_REMOVED_FROM_SALE"
          | "REMOVED_FROM_SALE"
          | "REJECTED"
        )[];
        sort?: ("inAppPurchaseType" | "-inAppPurchaseType" | "name" | "-name")[];
        "fields[inAppPurchaseAppStoreReviewScreenshots]"?: (
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "inAppPurchaseV2"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[inAppPurchasePricePoints]"?: (
          | "customerPrice"
          | "inAppPurchaseV2"
          | "priceTier"
          | "proceeds"
          | "territory"
        )[];
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[inAppPurchaseLocalizations]"?: ("description" | "inAppPurchaseV2" | "locale" | "name" | "state")[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[inAppPurchasePriceSchedules]"?: ("inAppPurchase" | "manualPrices")[];
        "fields[inAppPurchaseContents]"?: ("fileName" | "fileSize" | "inAppPurchaseV2" | "lastModifiedDate" | "url")[];
        limit?: number;
        "limit[inAppPurchaseLocalizations]"?: number;
        "limit[pricePoints]"?: number;
        include?: (
          | "appStoreReviewScreenshot"
          | "content"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "pricePoints"
          | "promotedPurchase"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchasesV2Response, ErrorResponse>({
        path: `/v1/apps/${id}/inAppPurchasesV2`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsPerfPowerMetricsGetToManyRelated
     * @request GET:/v1/apps/{id}/perfPowerMetrics
     * @secure
     */
    appsPerfPowerMetricsGetToManyRelated: (
      id: string,
      query?: {
        "filter[deviceType]"?: string[];
        "filter[metricType]"?: ("DISK" | "HANG" | "BATTERY" | "LAUNCH" | "MEMORY" | "ANIMATION" | "TERMINATION")[];
        "filter[platform]"?: "IOS"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<XcodeMetrics, ErrorResponse>({
        path: `/v1/apps/${id}/perfPowerMetrics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsPreOrderGetToOneRelated
     * @request GET:/v1/apps/{id}/preOrder
     * @secure
     */
    appsPreOrderGetToOneRelated: (
      id: string,
      query?: { "fields[appPreOrders]"?: ("app" | "appReleaseDate" | "preOrderAvailableDate")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppPreOrderResponse, ErrorResponse>({
        path: `/v1/apps/${id}/preOrder`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsPreReleaseVersionsGetToManyRelated
     * @request GET:/v1/apps/{id}/preReleaseVersions
     * @secure
     */
    appsPreReleaseVersionsGetToManyRelated: (
      id: string,
      query?: { "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<PreReleaseVersionsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/preReleaseVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsPricePointsGetToManyRelated
     * @request GET:/v1/apps/{id}/pricePoints
     * @secure
     */
    appsPricePointsGetToManyRelated: (
      id: string,
      query?: {
        "filter[priceTier]"?: string[];
        "filter[territory]"?: string[];
        "fields[appPriceTiers]"?: "pricePoints"[];
        "fields[appPricePoints]"?: ("app" | "customerPrice" | "priceTier" | "proceeds" | "territory")[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[territories]"?: "currency"[];
        limit?: number;
        include?: ("app" | "priceTier" | "territory")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPricePointsV2Response, ErrorResponse>({
        path: `/v1/apps/${id}/pricePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsPricesGetToManyRelated
     * @request GET:/v1/apps/{id}/prices
     * @secure
     */
    appsPricesGetToManyRelated: (
      id: string,
      query?: {
        "fields[appPriceTiers]"?: "pricePoints"[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[appPrices]"?: ("app" | "priceTier")[];
        limit?: number;
        include?: ("app" | "priceTier")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppPricesResponse, ErrorResponse>({
        path: `/v1/apps/${id}/prices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsPromotedPurchasesGetToManyRelationship
     * @request GET:/v1/apps/{id}/relationships/promotedPurchases
     * @secure
     */
    appsPromotedPurchasesGetToManyRelationship: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<AppPromotedPurchasesLinkagesResponse, ErrorResponse>({
        path: `/v1/apps/${id}/relationships/promotedPurchases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsPromotedPurchasesReplaceToManyRelationship
     * @request PATCH:/v1/apps/{id}/relationships/promotedPurchases
     * @secure
     */
    appsPromotedPurchasesReplaceToManyRelationship: (
      id: string,
      data: AppPromotedPurchasesLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/apps/${id}/relationships/promotedPurchases`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsPromotedPurchasesGetToManyRelated
     * @request GET:/v1/apps/{id}/promotedPurchases
     * @secure
     */
    appsPromotedPurchasesGetToManyRelated: (
      id: string,
      query?: {
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[promotedPurchaseImages]"?: (
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "promotedPurchase"
          | "sourceFileChecksum"
          | "state"
          | "uploadOperations"
          | "uploaded"
        )[];
        limit?: number;
        "limit[promotionImages]"?: number;
        include?: ("inAppPurchaseV2" | "promotionImages" | "subscription")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PromotedPurchasesResponse, ErrorResponse>({
        path: `/v1/apps/${id}/promotedPurchases`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsReviewSubmissionsGetToManyRelated
     * @request GET:/v1/apps/{id}/reviewSubmissions
     * @secure
     */
    appsReviewSubmissionsGetToManyRelated: (
      id: string,
      query?: {
        "filter[platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[state]"?: (
          | "READY_FOR_REVIEW"
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "UNRESOLVED_ISSUES"
          | "CANCELING"
          | "COMPLETING"
          | "COMPLETE"
        )[];
        "fields[reviewSubmissionItems]"?: (
          | "appCustomProductPageVersion"
          | "appEvent"
          | "appStoreVersion"
          | "appStoreVersionExperiment"
          | "removed"
          | "resolved"
          | "reviewSubmission"
          | "state"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[reviewSubmissions]"?: (
          | "app"
          | "appStoreVersionForReview"
          | "canceled"
          | "items"
          | "platform"
          | "state"
          | "submitted"
          | "submittedDate"
        )[];
        limit?: number;
        "limit[items]"?: number;
        include?: ("app" | "appStoreVersionForReview" | "items")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewSubmissionsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/reviewSubmissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsSubscriptionGracePeriodGetToOneRelated
     * @request GET:/v1/apps/{id}/subscriptionGracePeriod
     * @secure
     */
    appsSubscriptionGracePeriodGetToOneRelated: (
      id: string,
      query?: { "fields[subscriptionGracePeriods]"?: ("app" | "optIn")[] },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGracePeriodResponse, ErrorResponse>({
        path: `/v1/apps/${id}/subscriptionGracePeriod`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Apps
     * @name AppsSubscriptionGroupsGetToManyRelated
     * @request GET:/v1/apps/{id}/subscriptionGroups
     * @secure
     */
    appsSubscriptionGroupsGetToManyRelated: (
      id: string,
      query?: {
        "filter[referenceName]"?: string[];
        "filter[subscriptions.state]"?: (
          | "MISSING_METADATA"
          | "READY_TO_SUBMIT"
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "DEVELOPER_ACTION_NEEDED"
          | "PENDING_BINARY_APPROVAL"
          | "APPROVED"
          | "DEVELOPER_REMOVED_FROM_SALE"
          | "REMOVED_FROM_SALE"
          | "REJECTED"
        )[];
        sort?: ("referenceName" | "-referenceName")[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[subscriptionGroups]"?: ("app" | "referenceName" | "subscriptionGroupLocalizations" | "subscriptions")[];
        "fields[subscriptionGroupLocalizations]"?: (
          | "customAppName"
          | "locale"
          | "name"
          | "state"
          | "subscriptionGroup"
        )[];
        limit?: number;
        "limit[subscriptions]"?: number;
        "limit[subscriptionGroupLocalizations]"?: number;
        include?: ("subscriptionGroupLocalizations" | "subscriptions")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGroupsResponse, ErrorResponse>({
        path: `/v1/apps/${id}/subscriptionGroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppLocalizations
     * @name BetaAppLocalizationsAppGetToOneRelated
     * @request GET:/v1/betaAppLocalizations/{id}/app
     * @secure
     */
    betaAppLocalizationsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/betaAppLocalizations/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppReviewDetails
     * @name BetaAppReviewDetailsAppGetToOneRelated
     * @request GET:/v1/betaAppReviewDetails/{id}/app
     * @secure
     */
    betaAppReviewDetailsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/betaAppReviewDetails/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaAppReviewSubmissions
     * @name BetaAppReviewSubmissionsBuildGetToOneRelated
     * @request GET:/v1/betaAppReviewSubmissions/{id}/build
     * @secure
     */
    betaAppReviewSubmissionsBuildGetToOneRelated: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildResponse, ErrorResponse>({
        path: `/v1/betaAppReviewSubmissions/${id}/build`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaBuildLocalizations
     * @name BetaBuildLocalizationsBuildGetToOneRelated
     * @request GET:/v1/betaBuildLocalizations/{id}/build
     * @secure
     */
    betaBuildLocalizationsBuildGetToOneRelated: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildResponse, ErrorResponse>({
        path: `/v1/betaBuildLocalizations/${id}/build`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsAppGetToOneRelated
     * @request GET:/v1/betaGroups/{id}/app
     * @secure
     */
    betaGroupsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/betaGroups/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsBetaTestersGetToManyRelationship
     * @request GET:/v1/betaGroups/{id}/relationships/betaTesters
     * @secure
     */
    betaGroupsBetaTestersGetToManyRelationship: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<BetaGroupBetaTestersLinkagesResponse, ErrorResponse>({
        path: `/v1/betaGroups/${id}/relationships/betaTesters`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsBetaTestersCreateToManyRelationship
     * @request POST:/v1/betaGroups/{id}/relationships/betaTesters
     * @secure
     */
    betaGroupsBetaTestersCreateToManyRelationship: (
      id: string,
      data: BetaGroupBetaTestersLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaGroups/${id}/relationships/betaTesters`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsBetaTestersDeleteToManyRelationship
     * @request DELETE:/v1/betaGroups/{id}/relationships/betaTesters
     * @secure
     */
    betaGroupsBetaTestersDeleteToManyRelationship: (
      id: string,
      data: BetaGroupBetaTestersLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaGroups/${id}/relationships/betaTesters`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsBetaTestersGetToManyRelated
     * @request GET:/v1/betaGroups/{id}/betaTesters
     * @secure
     */
    betaGroupsBetaTestersGetToManyRelated: (
      id: string,
      query?: {
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaTestersResponse, ErrorResponse>({
        path: `/v1/betaGroups/${id}/betaTesters`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsBuildsGetToManyRelationship
     * @request GET:/v1/betaGroups/{id}/relationships/builds
     * @secure
     */
    betaGroupsBuildsGetToManyRelationship: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<BetaGroupBuildsLinkagesResponse, ErrorResponse>({
        path: `/v1/betaGroups/${id}/relationships/builds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsBuildsCreateToManyRelationship
     * @request POST:/v1/betaGroups/{id}/relationships/builds
     * @secure
     */
    betaGroupsBuildsCreateToManyRelationship: (
      id: string,
      data: BetaGroupBuildsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaGroups/${id}/relationships/builds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsBuildsDeleteToManyRelationship
     * @request DELETE:/v1/betaGroups/{id}/relationships/builds
     * @secure
     */
    betaGroupsBuildsDeleteToManyRelationship: (
      id: string,
      data: BetaGroupBuildsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaGroups/${id}/relationships/builds`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaGroups
     * @name BetaGroupsBuildsGetToManyRelated
     * @request GET:/v1/betaGroups/{id}/builds
     * @secure
     */
    betaGroupsBuildsGetToManyRelated: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildsResponse, ErrorResponse>({
        path: `/v1/betaGroups/${id}/builds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaLicenseAgreements
     * @name BetaLicenseAgreementsAppGetToOneRelated
     * @request GET:/v1/betaLicenseAgreements/{id}/app
     * @secure
     */
    betaLicenseAgreementsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/betaLicenseAgreements/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersAppsGetToManyRelationship
     * @request GET:/v1/betaTesters/{id}/relationships/apps
     * @secure
     */
    betaTestersAppsGetToManyRelationship: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<BetaTesterAppsLinkagesResponse, ErrorResponse>({
        path: `/v1/betaTesters/${id}/relationships/apps`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersAppsDeleteToManyRelationship
     * @request DELETE:/v1/betaTesters/{id}/relationships/apps
     * @secure
     */
    betaTestersAppsDeleteToManyRelationship: (
      id: string,
      data: BetaTesterAppsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaTesters/${id}/relationships/apps`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersAppsGetToManyRelated
     * @request GET:/v1/betaTesters/{id}/apps
     * @secure
     */
    betaTestersAppsGetToManyRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppsResponse, ErrorResponse>({
        path: `/v1/betaTesters/${id}/apps`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersBetaGroupsGetToManyRelationship
     * @request GET:/v1/betaTesters/{id}/relationships/betaGroups
     * @secure
     */
    betaTestersBetaGroupsGetToManyRelationship: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<BetaTesterBetaGroupsLinkagesResponse, ErrorResponse>({
        path: `/v1/betaTesters/${id}/relationships/betaGroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersBetaGroupsCreateToManyRelationship
     * @request POST:/v1/betaTesters/{id}/relationships/betaGroups
     * @secure
     */
    betaTestersBetaGroupsCreateToManyRelationship: (
      id: string,
      data: BetaTesterBetaGroupsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaTesters/${id}/relationships/betaGroups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersBetaGroupsDeleteToManyRelationship
     * @request DELETE:/v1/betaTesters/{id}/relationships/betaGroups
     * @secure
     */
    betaTestersBetaGroupsDeleteToManyRelationship: (
      id: string,
      data: BetaTesterBetaGroupsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaTesters/${id}/relationships/betaGroups`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersBetaGroupsGetToManyRelated
     * @request GET:/v1/betaTesters/{id}/betaGroups
     * @secure
     */
    betaTestersBetaGroupsGetToManyRelated: (
      id: string,
      query?: {
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaGroupsResponse, ErrorResponse>({
        path: `/v1/betaTesters/${id}/betaGroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersBuildsGetToManyRelationship
     * @request GET:/v1/betaTesters/{id}/relationships/builds
     * @secure
     */
    betaTestersBuildsGetToManyRelationship: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<BetaTesterBuildsLinkagesResponse, ErrorResponse>({
        path: `/v1/betaTesters/${id}/relationships/builds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersBuildsCreateToManyRelationship
     * @request POST:/v1/betaTesters/{id}/relationships/builds
     * @secure
     */
    betaTestersBuildsCreateToManyRelationship: (
      id: string,
      data: BetaTesterBuildsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaTesters/${id}/relationships/builds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersBuildsDeleteToManyRelationship
     * @request DELETE:/v1/betaTesters/{id}/relationships/builds
     * @secure
     */
    betaTestersBuildsDeleteToManyRelationship: (
      id: string,
      data: BetaTesterBuildsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/betaTesters/${id}/relationships/builds`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BetaTesters
     * @name BetaTestersBuildsGetToManyRelated
     * @request GET:/v1/betaTesters/{id}/builds
     * @secure
     */
    betaTestersBuildsGetToManyRelated: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildsResponse, ErrorResponse>({
        path: `/v1/betaTesters/${id}/builds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBetaDetails
     * @name BuildBetaDetailsBuildGetToOneRelated
     * @request GET:/v1/buildBetaDetails/{id}/build
     * @secure
     */
    buildBetaDetailsBuildGetToOneRelated: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildResponse, ErrorResponse>({
        path: `/v1/buildBetaDetails/${id}/build`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBundles
     * @name BuildBundlesAppClipDomainCacheStatusGetToOneRelated
     * @request GET:/v1/buildBundles/{id}/appClipDomainCacheStatus
     * @secure
     */
    buildBundlesAppClipDomainCacheStatusGetToOneRelated: (
      id: string,
      query?: { "fields[appClipDomainStatuses]"?: ("domains" | "lastUpdatedDate")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppClipDomainStatusResponse, ErrorResponse>({
        path: `/v1/buildBundles/${id}/appClipDomainCacheStatus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBundles
     * @name BuildBundlesAppClipDomainDebugStatusGetToOneRelated
     * @request GET:/v1/buildBundles/{id}/appClipDomainDebugStatus
     * @secure
     */
    buildBundlesAppClipDomainDebugStatusGetToOneRelated: (
      id: string,
      query?: { "fields[appClipDomainStatuses]"?: ("domains" | "lastUpdatedDate")[] },
      params: RequestParams = {},
    ) =>
      this.request<AppClipDomainStatusResponse, ErrorResponse>({
        path: `/v1/buildBundles/${id}/appClipDomainDebugStatus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBundles
     * @name BuildBundlesBetaAppClipInvocationsGetToManyRelated
     * @request GET:/v1/buildBundles/{id}/betaAppClipInvocations
     * @secure
     */
    buildBundlesBetaAppClipInvocationsGetToManyRelated: (
      id: string,
      query?: {
        "fields[betaAppClipInvocations]"?: ("betaAppClipInvocationLocalizations" | "buildBundle" | "url")[];
        "fields[betaAppClipInvocationLocalizations]"?: ("betaAppClipInvocation" | "locale" | "title")[];
        limit?: number;
        "limit[betaAppClipInvocationLocalizations]"?: number;
        include?: "betaAppClipInvocationLocalizations"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppClipInvocationsResponse, ErrorResponse>({
        path: `/v1/buildBundles/${id}/betaAppClipInvocations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BuildBundles
     * @name BuildBundlesBuildBundleFileSizesGetToManyRelated
     * @request GET:/v1/buildBundles/{id}/buildBundleFileSizes
     * @secure
     */
    buildBundlesBuildBundleFileSizesGetToManyRelated: (
      id: string,
      query?: {
        "fields[buildBundleFileSizes]"?: ("deviceModel" | "downloadBytes" | "installBytes" | "osVersion")[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildBundleFileSizesResponse, ErrorResponse>({
        path: `/v1/buildBundles/${id}/buildBundleFileSizes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsAppGetToOneRelated
     * @request GET:/v1/builds/{id}/app
     * @secure
     */
    buildsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/builds/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsAppEncryptionDeclarationGetToOneRelationship
     * @request GET:/v1/builds/{id}/relationships/appEncryptionDeclaration
     * @secure
     */
    buildsAppEncryptionDeclarationGetToOneRelationship: (id: string, params: RequestParams = {}) =>
      this.request<BuildAppEncryptionDeclarationLinkageResponse, ErrorResponse>({
        path: `/v1/builds/${id}/relationships/appEncryptionDeclaration`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsAppEncryptionDeclarationUpdateToOneRelationship
     * @request PATCH:/v1/builds/{id}/relationships/appEncryptionDeclaration
     * @secure
     */
    buildsAppEncryptionDeclarationUpdateToOneRelationship: (
      id: string,
      data: BuildAppEncryptionDeclarationLinkageRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/builds/${id}/relationships/appEncryptionDeclaration`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsAppEncryptionDeclarationGetToOneRelated
     * @request GET:/v1/builds/{id}/appEncryptionDeclaration
     * @secure
     */
    buildsAppEncryptionDeclarationGetToOneRelated: (
      id: string,
      query?: {
        "fields[appEncryptionDeclarations]"?: (
          | "app"
          | "appEncryptionDeclarationState"
          | "availableOnFrenchStore"
          | "builds"
          | "codeValue"
          | "containsProprietaryCryptography"
          | "containsThirdPartyCryptography"
          | "documentName"
          | "documentType"
          | "documentUrl"
          | "exempt"
          | "platform"
          | "uploadedDate"
          | "usesEncryption"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppEncryptionDeclarationResponse, ErrorResponse>({
        path: `/v1/builds/${id}/appEncryptionDeclaration`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsAppStoreVersionGetToOneRelated
     * @request GET:/v1/builds/{id}/appStoreVersion
     * @secure
     */
    buildsAppStoreVersionGetToOneRelated: (
      id: string,
      query?: {
        "fields[appStoreVersionExperiments]"?: (
          | "appStoreVersion"
          | "appStoreVersionExperimentTreatments"
          | "endDate"
          | "name"
          | "reviewRequired"
          | "startDate"
          | "started"
          | "state"
          | "trafficProportion"
        )[];
        "fields[ageRatingDeclarations]"?: (
          | "alcoholTobaccoOrDrugUseOrReferences"
          | "contests"
          | "gambling"
          | "gamblingAndContests"
          | "gamblingSimulated"
          | "horrorOrFearThemes"
          | "kidsAgeBand"
          | "matureOrSuggestiveThemes"
          | "medicalOrTreatmentInformation"
          | "profanityOrCrudeHumor"
          | "seventeenPlus"
          | "sexualContentGraphicAndNudity"
          | "sexualContentOrNudity"
          | "unrestrictedWebAccess"
          | "violenceCartoonOrFantasy"
          | "violenceRealistic"
          | "violenceRealisticProlongedGraphicOrSadistic"
        )[];
        "fields[appStoreVersionSubmissions]"?: "appStoreVersion"[];
        "fields[appStoreReviewDetails]"?: (
          | "appStoreReviewAttachments"
          | "appStoreVersion"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[routingAppCoverages]"?: (
          | "appStoreVersion"
          | "assetDeliveryState"
          | "fileName"
          | "fileSize"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[appClipDefaultExperiences]"?: (
          | "action"
          | "appClip"
          | "appClipAppStoreReviewDetail"
          | "appClipDefaultExperienceLocalizations"
          | "appClipDefaultExperienceTemplate"
          | "releaseWithAppStoreVersion"
        )[];
        "fields[appStoreVersionPhasedReleases]"?: (
          | "appStoreVersion"
          | "currentDayNumber"
          | "phasedReleaseState"
          | "startDate"
          | "totalPauseDuration"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[appStoreVersionLocalizations]"?: (
          | "appPreviewSets"
          | "appScreenshotSets"
          | "appStoreVersion"
          | "description"
          | "keywords"
          | "locale"
          | "marketingUrl"
          | "promotionalText"
          | "supportUrl"
          | "whatsNew"
        )[];
        "limit[appStoreVersionLocalizations]"?: number;
        "limit[appStoreVersionExperiments]"?: number;
        include?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "routingAppCoverage"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppStoreVersionResponse, ErrorResponse>({
        path: `/v1/builds/${id}/appStoreVersion`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsBetaAppReviewSubmissionGetToOneRelated
     * @request GET:/v1/builds/{id}/betaAppReviewSubmission
     * @secure
     */
    buildsBetaAppReviewSubmissionGetToOneRelated: (
      id: string,
      query?: { "fields[betaAppReviewSubmissions]"?: ("betaReviewState" | "build" | "submittedDate")[] },
      params: RequestParams = {},
    ) =>
      this.request<BetaAppReviewSubmissionResponse, ErrorResponse>({
        path: `/v1/builds/${id}/betaAppReviewSubmission`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsBetaBuildLocalizationsGetToManyRelated
     * @request GET:/v1/builds/{id}/betaBuildLocalizations
     * @secure
     */
    buildsBetaBuildLocalizationsGetToManyRelated: (
      id: string,
      query?: { "fields[betaBuildLocalizations]"?: ("build" | "locale" | "whatsNew")[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<BetaBuildLocalizationsResponse, ErrorResponse>({
        path: `/v1/builds/${id}/betaBuildLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsBetaGroupsCreateToManyRelationship
     * @request POST:/v1/builds/{id}/relationships/betaGroups
     * @secure
     */
    buildsBetaGroupsCreateToManyRelationship: (
      id: string,
      data: BuildBetaGroupsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/builds/${id}/relationships/betaGroups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsBetaGroupsDeleteToManyRelationship
     * @request DELETE:/v1/builds/{id}/relationships/betaGroups
     * @secure
     */
    buildsBetaGroupsDeleteToManyRelationship: (
      id: string,
      data: BuildBetaGroupsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/builds/${id}/relationships/betaGroups`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsBuildBetaDetailGetToOneRelated
     * @request GET:/v1/builds/{id}/buildBetaDetail
     * @secure
     */
    buildsBuildBetaDetailGetToOneRelated: (
      id: string,
      query?: {
        "fields[buildBetaDetails]"?: ("autoNotifyEnabled" | "build" | "externalBuildState" | "internalBuildState")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildBetaDetailResponse, ErrorResponse>({
        path: `/v1/builds/${id}/buildBetaDetail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsDiagnosticSignaturesGetToManyRelated
     * @request GET:/v1/builds/{id}/diagnosticSignatures
     * @secure
     */
    buildsDiagnosticSignaturesGetToManyRelated: (
      id: string,
      query?: {
        "filter[diagnosticType]"?: ("DISK_WRITES" | "HANGS")[];
        "fields[diagnosticSignatures]"?: ("diagnosticType" | "logs" | "signature" | "weight")[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DiagnosticSignaturesResponse, ErrorResponse>({
        path: `/v1/builds/${id}/diagnosticSignatures`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsIconsGetToManyRelated
     * @request GET:/v1/builds/{id}/icons
     * @secure
     */
    buildsIconsGetToManyRelated: (
      id: string,
      query?: { "fields[buildIcons]"?: ("iconAsset" | "iconType" | "name")[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<BuildIconsResponse, ErrorResponse>({
        path: `/v1/builds/${id}/icons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsIndividualTestersGetToManyRelationship
     * @request GET:/v1/builds/{id}/relationships/individualTesters
     * @secure
     */
    buildsIndividualTestersGetToManyRelationship: (
      id: string,
      query?: { limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<BuildIndividualTestersLinkagesResponse, ErrorResponse>({
        path: `/v1/builds/${id}/relationships/individualTesters`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsIndividualTestersCreateToManyRelationship
     * @request POST:/v1/builds/{id}/relationships/individualTesters
     * @secure
     */
    buildsIndividualTestersCreateToManyRelationship: (
      id: string,
      data: BuildIndividualTestersLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/builds/${id}/relationships/individualTesters`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsIndividualTestersDeleteToManyRelationship
     * @request DELETE:/v1/builds/{id}/relationships/individualTesters
     * @secure
     */
    buildsIndividualTestersDeleteToManyRelationship: (
      id: string,
      data: BuildIndividualTestersLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/builds/${id}/relationships/individualTesters`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsIndividualTestersGetToManyRelated
     * @request GET:/v1/builds/{id}/individualTesters
     * @secure
     */
    buildsIndividualTestersGetToManyRelated: (
      id: string,
      query?: {
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BetaTestersResponse, ErrorResponse>({
        path: `/v1/builds/${id}/individualTesters`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsPerfPowerMetricsGetToManyRelated
     * @request GET:/v1/builds/{id}/perfPowerMetrics
     * @secure
     */
    buildsPerfPowerMetricsGetToManyRelated: (
      id: string,
      query?: {
        "filter[deviceType]"?: string[];
        "filter[metricType]"?: ("DISK" | "HANG" | "BATTERY" | "LAUNCH" | "MEMORY" | "ANIMATION" | "TERMINATION")[];
        "filter[platform]"?: "IOS"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<XcodeMetrics, ErrorResponse>({
        path: `/v1/builds/${id}/perfPowerMetrics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Builds
     * @name BuildsPreReleaseVersionGetToOneRelated
     * @request GET:/v1/builds/{id}/preReleaseVersion
     * @secure
     */
    buildsPreReleaseVersionGetToOneRelated: (
      id: string,
      query?: { "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[] },
      params: RequestParams = {},
    ) =>
      this.request<PrereleaseVersionResponse, ErrorResponse>({
        path: `/v1/builds/${id}/preReleaseVersion`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIds
     * @name BundleIdsAppGetToOneRelated
     * @request GET:/v1/bundleIds/{id}/app
     * @secure
     */
    bundleIdsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/bundleIds/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIds
     * @name BundleIdsBundleIdCapabilitiesGetToManyRelated
     * @request GET:/v1/bundleIds/{id}/bundleIdCapabilities
     * @secure
     */
    bundleIdsBundleIdCapabilitiesGetToManyRelated: (
      id: string,
      query?: { "fields[bundleIdCapabilities]"?: ("bundleId" | "capabilityType" | "settings")[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<BundleIdCapabilitiesResponse, ErrorResponse>({
        path: `/v1/bundleIds/${id}/bundleIdCapabilities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BundleIds
     * @name BundleIdsProfilesGetToManyRelated
     * @request GET:/v1/bundleIds/{id}/profiles
     * @secure
     */
    bundleIdsProfilesGetToManyRelated: (
      id: string,
      query?: {
        "fields[profiles]"?: (
          | "bundleId"
          | "certificates"
          | "createdDate"
          | "devices"
          | "expirationDate"
          | "name"
          | "platform"
          | "profileContent"
          | "profileState"
          | "profileType"
          | "uuid"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProfilesResponse, ErrorResponse>({
        path: `/v1/bundleIds/${id}/profiles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildActions
     * @name CiBuildActionsArtifactsGetToManyRelated
     * @request GET:/v1/ciBuildActions/{id}/artifacts
     * @secure
     */
    ciBuildActionsArtifactsGetToManyRelated: (
      id: string,
      query?: { "fields[ciArtifacts]"?: ("downloadUrl" | "fileName" | "fileSize" | "fileType")[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<CiArtifactsResponse, ErrorResponse>({
        path: `/v1/ciBuildActions/${id}/artifacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildActions
     * @name CiBuildActionsBuildRunGetToOneRelated
     * @request GET:/v1/ciBuildActions/{id}/buildRun
     * @secure
     */
    ciBuildActionsBuildRunGetToOneRelated: (
      id: string,
      query?: {
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        "fields[ciWorkflows]"?: (
          | "actions"
          | "branchStartCondition"
          | "buildRuns"
          | "clean"
          | "containerFilePath"
          | "description"
          | "isEnabled"
          | "isLockedForEditing"
          | "lastModifiedDate"
          | "macOsVersion"
          | "name"
          | "product"
          | "pullRequestStartCondition"
          | "repository"
          | "scheduledStartCondition"
          | "tagStartCondition"
          | "xcodeVersion"
        )[];
        "fields[scmPullRequests]"?: (
          | "destinationBranchName"
          | "destinationRepositoryName"
          | "destinationRepositoryOwner"
          | "isClosed"
          | "isCrossRepository"
          | "number"
          | "repository"
          | "sourceBranchName"
          | "sourceRepositoryName"
          | "sourceRepositoryOwner"
          | "title"
          | "webUrl"
        )[];
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "limit[builds]"?: number;
        include?: ("builds" | "destinationBranch" | "product" | "pullRequest" | "sourceBranchOrTag" | "workflow")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiBuildRunResponse, ErrorResponse>({
        path: `/v1/ciBuildActions/${id}/buildRun`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildActions
     * @name CiBuildActionsIssuesGetToManyRelated
     * @request GET:/v1/ciBuildActions/{id}/issues
     * @secure
     */
    ciBuildActionsIssuesGetToManyRelated: (
      id: string,
      query?: { "fields[ciIssues]"?: ("category" | "fileSource" | "issueType" | "message")[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<CiIssuesResponse, ErrorResponse>({
        path: `/v1/ciBuildActions/${id}/issues`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildActions
     * @name CiBuildActionsTestResultsGetToManyRelated
     * @request GET:/v1/ciBuildActions/{id}/testResults
     * @secure
     */
    ciBuildActionsTestResultsGetToManyRelated: (
      id: string,
      query?: {
        "fields[ciTestResults]"?: (
          | "className"
          | "destinationTestResults"
          | "fileSource"
          | "message"
          | "name"
          | "status"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CiTestResultsResponse, ErrorResponse>({
        path: `/v1/ciBuildActions/${id}/testResults`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildRuns
     * @name CiBuildRunsActionsGetToManyRelated
     * @request GET:/v1/ciBuildRuns/{id}/actions
     * @secure
     */
    ciBuildRunsActionsGetToManyRelated: (
      id: string,
      query?: {
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        "fields[ciBuildActions]"?: (
          | "actionType"
          | "artifacts"
          | "buildRun"
          | "completionStatus"
          | "executionProgress"
          | "finishedDate"
          | "isRequiredToPass"
          | "issueCounts"
          | "issues"
          | "name"
          | "startedDate"
          | "testResults"
        )[];
        limit?: number;
        include?: "buildRun"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiBuildActionsResponse, ErrorResponse>({
        path: `/v1/ciBuildRuns/${id}/actions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiBuildRuns
     * @name CiBuildRunsBuildsGetToManyRelated
     * @request GET:/v1/ciBuildRuns/{id}/builds
     * @secure
     */
    ciBuildRunsBuildsGetToManyRelated: (
      id: string,
      query?: {
        "filter[betaAppReviewSubmission.betaReviewState]"?: (
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "REJECTED"
          | "APPROVED"
        )[];
        "filter[buildAudienceType]"?: ("INTERNAL_ONLY" | "APP_STORE_ELIGIBLE")[];
        "filter[expired]"?: string[];
        "filter[preReleaseVersion.platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[preReleaseVersion.version]"?: string[];
        "filter[processingState]"?: ("PROCESSING" | "FAILED" | "INVALID" | "VALID")[];
        "filter[usesNonExemptEncryption]"?: string[];
        "filter[version]"?: string[];
        "filter[app]"?: string[];
        "filter[appStoreVersion]"?: string[];
        "filter[betaGroups]"?: string[];
        "filter[preReleaseVersion]"?: string[];
        "filter[id]"?: string[];
        sort?: (
          | "preReleaseVersion"
          | "-preReleaseVersion"
          | "uploadedDate"
          | "-uploadedDate"
          | "version"
          | "-version"
        )[];
        "fields[buildBundles]"?: (
          | "appClipDomainCacheStatus"
          | "appClipDomainDebugStatus"
          | "betaAppClipInvocations"
          | "buildBundleFileSizes"
          | "bundleId"
          | "bundleType"
          | "dSYMUrl"
          | "deviceProtocols"
          | "entitlements"
          | "fileName"
          | "hasOnDemandResources"
          | "hasPrerenderedIcon"
          | "hasSirikit"
          | "includesSymbols"
          | "isIosBuildMacAppStoreCompatible"
          | "locales"
          | "platformBuild"
          | "requiredCapabilities"
          | "sdkBuild"
          | "supportedArchitectures"
          | "usesLocationServices"
        )[];
        "fields[buildIcons]"?: ("iconAsset" | "iconType" | "name")[];
        "fields[betaAppReviewSubmissions]"?: ("betaReviewState" | "build" | "submittedDate")[];
        "fields[buildBetaDetails]"?: ("autoNotifyEnabled" | "build" | "externalBuildState" | "internalBuildState")[];
        "fields[betaTesters]"?: (
          | "apps"
          | "betaGroups"
          | "builds"
          | "email"
          | "firstName"
          | "inviteType"
          | "lastName"
        )[];
        "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[];
        "fields[betaBuildLocalizations]"?: ("build" | "locale" | "whatsNew")[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appEncryptionDeclarations]"?: (
          | "app"
          | "appEncryptionDeclarationState"
          | "availableOnFrenchStore"
          | "builds"
          | "codeValue"
          | "containsProprietaryCryptography"
          | "containsThirdPartyCryptography"
          | "documentName"
          | "documentType"
          | "documentUrl"
          | "exempt"
          | "platform"
          | "uploadedDate"
          | "usesEncryption"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        limit?: number;
        "limit[individualTesters]"?: number;
        "limit[betaGroups]"?: number;
        "limit[betaBuildLocalizations]"?: number;
        "limit[icons]"?: number;
        "limit[buildBundles]"?: number;
        include?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildBetaDetail"
          | "buildBundles"
          | "icons"
          | "individualTesters"
          | "preReleaseVersion"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildsResponse, ErrorResponse>({
        path: `/v1/ciBuildRuns/${id}/builds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiMacOsVersions
     * @name CiMacOsVersionsXcodeVersionsGetToManyRelated
     * @request GET:/v1/ciMacOsVersions/{id}/xcodeVersions
     * @secure
     */
    ciMacOsVersionsXcodeVersionsGetToManyRelated: (
      id: string,
      query?: {
        "fields[ciXcodeVersions]"?: ("macOsVersions" | "name" | "testDestinations" | "version")[];
        "fields[ciMacOsVersions]"?: ("name" | "version" | "xcodeVersions")[];
        limit?: number;
        "limit[macOsVersions]"?: number;
        include?: "macOsVersions"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiXcodeVersionsResponse, ErrorResponse>({
        path: `/v1/ciMacOsVersions/${id}/xcodeVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiProducts
     * @name CiProductsAdditionalRepositoriesGetToManyRelated
     * @request GET:/v1/ciProducts/{id}/additionalRepositories
     * @secure
     */
    ciProductsAdditionalRepositoriesGetToManyRelated: (
      id: string,
      query?: {
        "filter[id]"?: string[];
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[scmProviders]"?: ("repositories" | "scmProviderType" | "url")[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        limit?: number;
        include?: ("defaultBranch" | "scmProvider")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmRepositoriesResponse, ErrorResponse>({
        path: `/v1/ciProducts/${id}/additionalRepositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiProducts
     * @name CiProductsAppGetToOneRelated
     * @request GET:/v1/ciProducts/{id}/app
     * @secure
     */
    ciProductsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[betaLicenseAgreements]"?: ("agreementText" | "app")[];
        "fields[betaAppReviewDetails]"?: (
          | "app"
          | "contactEmail"
          | "contactFirstName"
          | "contactLastName"
          | "contactPhone"
          | "demoAccountName"
          | "demoAccountPassword"
          | "demoAccountRequired"
          | "notes"
        )[];
        "fields[appClips]"?: ("app" | "appClipAdvancedExperiences" | "appClipDefaultExperiences" | "bundleId")[];
        "fields[betaAppLocalizations]"?: (
          | "app"
          | "description"
          | "feedbackEmail"
          | "locale"
          | "marketingUrl"
          | "privacyPolicyUrl"
          | "tvOsPrivacyPolicy"
        )[];
        "fields[appInfos]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appInfoLocalizations"
          | "appStoreAgeRating"
          | "appStoreState"
          | "brazilAgeRating"
          | "kidsAgeBand"
          | "primaryCategory"
          | "primarySubcategoryOne"
          | "primarySubcategoryTwo"
          | "secondaryCategory"
          | "secondarySubcategoryOne"
          | "secondarySubcategoryTwo"
        )[];
        "fields[preReleaseVersions]"?: ("app" | "builds" | "platform" | "version")[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        "fields[subscriptionGroups]"?: ("app" | "referenceName" | "subscriptionGroupLocalizations" | "subscriptions")[];
        "fields[reviewSubmissions]"?: (
          | "app"
          | "appStoreVersionForReview"
          | "canceled"
          | "items"
          | "platform"
          | "state"
          | "submitted"
          | "submittedDate"
        )[];
        "fields[betaGroups]"?: (
          | "app"
          | "betaTesters"
          | "builds"
          | "createdDate"
          | "feedbackEnabled"
          | "hasAccessToAllBuilds"
          | "iosBuildsAvailableForAppleSiliconMac"
          | "isInternalGroup"
          | "name"
          | "publicLink"
          | "publicLinkEnabled"
          | "publicLinkId"
          | "publicLinkLimit"
          | "publicLinkLimitEnabled"
        )[];
        "fields[appPreOrders]"?: ("app" | "appReleaseDate" | "preOrderAvailableDate")[];
        "fields[appPrices]"?: ("app" | "priceTier")[];
        "fields[gameCenterEnabledVersions]"?: (
          | "app"
          | "compatibleVersions"
          | "iconAsset"
          | "platform"
          | "versionString"
        )[];
        "fields[subscriptionGracePeriods]"?: ("app" | "optIn")[];
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[endUserLicenseAgreements]"?: ("agreementText" | "app" | "territories")[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appCustomProductPages]"?: (
          | "app"
          | "appCustomProductPageVersions"
          | "appStoreVersionTemplate"
          | "customProductPageTemplate"
          | "name"
          | "url"
          | "visible"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        "fields[appEvents]"?: (
          | "app"
          | "archivedTerritorySchedules"
          | "badge"
          | "deepLink"
          | "eventState"
          | "localizations"
          | "primaryLocale"
          | "priority"
          | "purchaseRequirement"
          | "purpose"
          | "referenceName"
          | "territorySchedules"
        )[];
        "fields[territories]"?: "currency"[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        "limit[betaGroups]"?: number;
        "limit[appStoreVersions]"?: number;
        "limit[preReleaseVersions]"?: number;
        "limit[betaAppLocalizations]"?: number;
        "limit[builds]"?: number;
        "limit[appInfos]"?: number;
        "limit[appClips]"?: number;
        "limit[prices]"?: number;
        "limit[availableTerritories]"?: number;
        "limit[inAppPurchases]"?: number;
        "limit[subscriptionGroups]"?: number;
        "limit[gameCenterEnabledVersions]"?: number;
        "limit[appCustomProductPages]"?: number;
        "limit[inAppPurchasesV2]"?: number;
        "limit[promotedPurchases]"?: number;
        "limit[appEvents]"?: number;
        "limit[reviewSubmissions]"?: number;
        include?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "builds"
          | "ciProduct"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "preOrder"
          | "preReleaseVersions"
          | "prices"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/ciProducts/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiProducts
     * @name CiProductsBuildRunsGetToManyRelated
     * @request GET:/v1/ciProducts/{id}/buildRuns
     * @secure
     */
    ciProductsBuildRunsGetToManyRelated: (
      id: string,
      query?: {
        "filter[builds]"?: string[];
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        "fields[ciWorkflows]"?: (
          | "actions"
          | "branchStartCondition"
          | "buildRuns"
          | "clean"
          | "containerFilePath"
          | "description"
          | "isEnabled"
          | "isLockedForEditing"
          | "lastModifiedDate"
          | "macOsVersion"
          | "name"
          | "product"
          | "pullRequestStartCondition"
          | "repository"
          | "scheduledStartCondition"
          | "tagStartCondition"
          | "xcodeVersion"
        )[];
        "fields[scmPullRequests]"?: (
          | "destinationBranchName"
          | "destinationRepositoryName"
          | "destinationRepositoryOwner"
          | "isClosed"
          | "isCrossRepository"
          | "number"
          | "repository"
          | "sourceBranchName"
          | "sourceRepositoryName"
          | "sourceRepositoryOwner"
          | "title"
          | "webUrl"
        )[];
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        limit?: number;
        "limit[builds]"?: number;
        include?: ("builds" | "destinationBranch" | "product" | "pullRequest" | "sourceBranchOrTag" | "workflow")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiBuildRunsResponse, ErrorResponse>({
        path: `/v1/ciProducts/${id}/buildRuns`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiProducts
     * @name CiProductsPrimaryRepositoriesGetToManyRelated
     * @request GET:/v1/ciProducts/{id}/primaryRepositories
     * @secure
     */
    ciProductsPrimaryRepositoriesGetToManyRelated: (
      id: string,
      query?: {
        "filter[id]"?: string[];
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[scmProviders]"?: ("repositories" | "scmProviderType" | "url")[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        limit?: number;
        include?: ("defaultBranch" | "scmProvider")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmRepositoriesResponse, ErrorResponse>({
        path: `/v1/ciProducts/${id}/primaryRepositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiProducts
     * @name CiProductsWorkflowsGetToManyRelated
     * @request GET:/v1/ciProducts/{id}/workflows
     * @secure
     */
    ciProductsWorkflowsGetToManyRelated: (
      id: string,
      query?: {
        "fields[ciXcodeVersions]"?: ("macOsVersions" | "name" | "testDestinations" | "version")[];
        "fields[ciWorkflows]"?: (
          | "actions"
          | "branchStartCondition"
          | "buildRuns"
          | "clean"
          | "containerFilePath"
          | "description"
          | "isEnabled"
          | "isLockedForEditing"
          | "lastModifiedDate"
          | "macOsVersion"
          | "name"
          | "product"
          | "pullRequestStartCondition"
          | "repository"
          | "scheduledStartCondition"
          | "tagStartCondition"
          | "xcodeVersion"
        )[];
        "fields[ciMacOsVersions]"?: ("name" | "version" | "xcodeVersions")[];
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        limit?: number;
        include?: ("macOsVersion" | "product" | "repository" | "xcodeVersion")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiWorkflowsResponse, ErrorResponse>({
        path: `/v1/ciProducts/${id}/workflows`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiWorkflows
     * @name CiWorkflowsBuildRunsGetToManyRelated
     * @request GET:/v1/ciWorkflows/{id}/buildRuns
     * @secure
     */
    ciWorkflowsBuildRunsGetToManyRelated: (
      id: string,
      query?: {
        "filter[builds]"?: string[];
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[ciBuildRuns]"?: (
          | "actions"
          | "buildRun"
          | "builds"
          | "cancelReason"
          | "clean"
          | "completionStatus"
          | "createdDate"
          | "destinationBranch"
          | "destinationCommit"
          | "executionProgress"
          | "finishedDate"
          | "isPullRequestBuild"
          | "issueCounts"
          | "number"
          | "product"
          | "pullRequest"
          | "sourceBranchOrTag"
          | "sourceCommit"
          | "startReason"
          | "startedDate"
          | "workflow"
        )[];
        "fields[ciWorkflows]"?: (
          | "actions"
          | "branchStartCondition"
          | "buildRuns"
          | "clean"
          | "containerFilePath"
          | "description"
          | "isEnabled"
          | "isLockedForEditing"
          | "lastModifiedDate"
          | "macOsVersion"
          | "name"
          | "product"
          | "pullRequestStartCondition"
          | "repository"
          | "scheduledStartCondition"
          | "tagStartCondition"
          | "xcodeVersion"
        )[];
        "fields[scmPullRequests]"?: (
          | "destinationBranchName"
          | "destinationRepositoryName"
          | "destinationRepositoryOwner"
          | "isClosed"
          | "isCrossRepository"
          | "number"
          | "repository"
          | "sourceBranchName"
          | "sourceRepositoryName"
          | "sourceRepositoryOwner"
          | "title"
          | "webUrl"
        )[];
        "fields[ciProducts]"?: (
          | "additionalRepositories"
          | "app"
          | "buildRuns"
          | "bundleId"
          | "createdDate"
          | "name"
          | "primaryRepositories"
          | "productType"
          | "workflows"
        )[];
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        limit?: number;
        "limit[builds]"?: number;
        include?: ("builds" | "destinationBranch" | "product" | "pullRequest" | "sourceBranchOrTag" | "workflow")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiBuildRunsResponse, ErrorResponse>({
        path: `/v1/ciWorkflows/${id}/buildRuns`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiWorkflows
     * @name CiWorkflowsRepositoryGetToOneRelated
     * @request GET:/v1/ciWorkflows/{id}/repository
     * @secure
     */
    ciWorkflowsRepositoryGetToOneRelated: (
      id: string,
      query?: {
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[scmProviders]"?: ("repositories" | "scmProviderType" | "url")[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        include?: ("defaultBranch" | "scmProvider")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmRepositoryResponse, ErrorResponse>({
        path: `/v1/ciWorkflows/${id}/repository`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CiXcodeVersions
     * @name CiXcodeVersionsMacOsVersionsGetToManyRelated
     * @request GET:/v1/ciXcodeVersions/{id}/macOsVersions
     * @secure
     */
    ciXcodeVersionsMacOsVersionsGetToManyRelated: (
      id: string,
      query?: {
        "fields[ciXcodeVersions]"?: ("macOsVersions" | "name" | "testDestinations" | "version")[];
        "fields[ciMacOsVersions]"?: ("name" | "version" | "xcodeVersions")[];
        limit?: number;
        "limit[xcodeVersions]"?: number;
        include?: "xcodeVersions"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CiMacOsVersionsResponse, ErrorResponse>({
        path: `/v1/ciXcodeVersions/${id}/macOsVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerReviews
     * @name CustomerReviewsResponseGetToOneRelated
     * @request GET:/v1/customerReviews/{id}/response
     * @secure
     */
    customerReviewsResponseGetToOneRelated: (
      id: string,
      query?: {
        "fields[customerReviews]"?: (
          | "body"
          | "createdDate"
          | "rating"
          | "response"
          | "reviewerNickname"
          | "territory"
          | "title"
        )[];
        "fields[customerReviewResponses]"?: ("lastModifiedDate" | "responseBody" | "review" | "state")[];
        include?: "review"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerReviewResponseV1Response, ErrorResponse>({
        path: `/v1/customerReviews/${id}/response`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DiagnosticSignatures
     * @name DiagnosticSignaturesLogsGetToManyRelated
     * @request GET:/v1/diagnosticSignatures/{id}/logs
     * @secure
     */
    diagnosticSignaturesLogsGetToManyRelated: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<DiagnosticLogs, ErrorResponse>({
        path: `/v1/diagnosticSignatures/${id}/logs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EndUserLicenseAgreements
     * @name EndUserLicenseAgreementsTerritoriesGetToManyRelated
     * @request GET:/v1/endUserLicenseAgreements/{id}/territories
     * @secure
     */
    endUserLicenseAgreementsTerritoriesGetToManyRelated: (
      id: string,
      query?: { "fields[territories]"?: "currency"[]; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<TerritoriesResponse, ErrorResponse>({
        path: `/v1/endUserLicenseAgreements/${id}/territories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameCenterEnabledVersions
     * @name GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship
     * @request GET:/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
     * @secure
     */
    gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship: (
      id: string,
      query?: { limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<GameCenterEnabledVersionCompatibleVersionsLinkagesResponse, ErrorResponse>({
        path: `/v1/gameCenterEnabledVersions/${id}/relationships/compatibleVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameCenterEnabledVersions
     * @name GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship
     * @request POST:/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
     * @secure
     */
    gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship: (
      id: string,
      data: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/gameCenterEnabledVersions/${id}/relationships/compatibleVersions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameCenterEnabledVersions
     * @name GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship
     * @request PATCH:/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
     * @secure
     */
    gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship: (
      id: string,
      data: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/gameCenterEnabledVersions/${id}/relationships/compatibleVersions`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameCenterEnabledVersions
     * @name GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship
     * @request DELETE:/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
     * @secure
     */
    gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship: (
      id: string,
      data: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/gameCenterEnabledVersions/${id}/relationships/compatibleVersions`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameCenterEnabledVersions
     * @name GameCenterEnabledVersionsCompatibleVersionsGetToManyRelated
     * @request GET:/v1/gameCenterEnabledVersions/{id}/compatibleVersions
     * @secure
     */
    gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated: (
      id: string,
      query?: {
        "filter[platform]"?: ("IOS" | "MAC_OS" | "TV_OS")[];
        "filter[versionString]"?: string[];
        "filter[app]"?: string[];
        "filter[id]"?: string[];
        sort?: ("versionString" | "-versionString")[];
        "fields[gameCenterEnabledVersions]"?: (
          | "app"
          | "compatibleVersions"
          | "iconAsset"
          | "platform"
          | "versionString"
        )[];
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
        "limit[compatibleVersions]"?: number;
        include?: ("app" | "compatibleVersions")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<GameCenterEnabledVersionsResponse, ErrorResponse>({
        path: `/v1/gameCenterEnabledVersions/${id}/compatibleVersions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchasePriceSchedules
     * @name InAppPurchasePriceSchedulesManualPricesGetToManyRelated
     * @request GET:/v1/inAppPurchasePriceSchedules/{id}/manualPrices
     * @secure
     */
    inAppPurchasePriceSchedulesManualPricesGetToManyRelated: (
      id: string,
      query?: {
        "filter[territory]"?: string[];
        "fields[inAppPurchasePricePoints]"?: (
          | "customerPrice"
          | "inAppPurchaseV2"
          | "priceTier"
          | "proceeds"
          | "territory"
        )[];
        "fields[inAppPurchasePrices]"?: ("inAppPurchasePricePoint" | "inAppPurchaseV2" | "startDate" | "territory")[];
        "fields[territories]"?: "currency"[];
        limit?: number;
        include?: ("inAppPurchasePricePoint" | "territory")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchasePricesResponse, ErrorResponse>({
        path: `/v1/inAppPurchasePriceSchedules/${id}/manualPrices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreReleaseVersions
     * @name PreReleaseVersionsAppGetToOneRelated
     * @request GET:/v1/preReleaseVersions/{id}/app
     * @secure
     */
    preReleaseVersionsAppGetToOneRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AppResponse, ErrorResponse>({
        path: `/v1/preReleaseVersions/${id}/app`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PreReleaseVersions
     * @name PreReleaseVersionsBuildsGetToManyRelated
     * @request GET:/v1/preReleaseVersions/{id}/builds
     * @secure
     */
    preReleaseVersionsBuildsGetToManyRelated: (
      id: string,
      query?: {
        "fields[builds]"?: (
          | "app"
          | "appEncryptionDeclaration"
          | "appStoreVersion"
          | "betaAppReviewSubmission"
          | "betaBuildLocalizations"
          | "betaGroups"
          | "buildAudienceType"
          | "buildBetaDetail"
          | "buildBundles"
          | "computedMinMacOsVersion"
          | "diagnosticSignatures"
          | "expirationDate"
          | "expired"
          | "iconAssetToken"
          | "icons"
          | "individualTesters"
          | "lsMinimumSystemVersion"
          | "minOsVersion"
          | "perfPowerMetrics"
          | "preReleaseVersion"
          | "processingState"
          | "uploadedDate"
          | "usesNonExemptEncryption"
          | "version"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildsResponse, ErrorResponse>({
        path: `/v1/preReleaseVersions/${id}/builds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesBundleIdGetToOneRelated
     * @request GET:/v1/profiles/{id}/bundleId
     * @secure
     */
    profilesBundleIdGetToOneRelated: (
      id: string,
      query?: {
        "fields[bundleIds]"?: (
          | "app"
          | "bundleIdCapabilities"
          | "identifier"
          | "name"
          | "platform"
          | "profiles"
          | "seedId"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BundleIdResponse, ErrorResponse>({
        path: `/v1/profiles/${id}/bundleId`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesCertificatesGetToManyRelated
     * @request GET:/v1/profiles/{id}/certificates
     * @secure
     */
    profilesCertificatesGetToManyRelated: (
      id: string,
      query?: {
        "fields[certificates]"?: (
          | "certificateContent"
          | "certificateType"
          | "csrContent"
          | "displayName"
          | "expirationDate"
          | "name"
          | "platform"
          | "serialNumber"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CertificatesResponse, ErrorResponse>({
        path: `/v1/profiles/${id}/certificates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesDevicesGetToManyRelated
     * @request GET:/v1/profiles/{id}/devices
     * @secure
     */
    profilesDevicesGetToManyRelated: (
      id: string,
      query?: {
        "fields[devices]"?: ("addedDate" | "deviceClass" | "model" | "name" | "platform" | "status" | "udid")[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DevicesResponse, ErrorResponse>({
        path: `/v1/profiles/${id}/devices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PromotedPurchases
     * @name PromotedPurchasesPromotionImagesGetToManyRelated
     * @request GET:/v1/promotedPurchases/{id}/promotionImages
     * @secure
     */
    promotedPurchasesPromotionImagesGetToManyRelated: (
      id: string,
      query?: {
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[promotedPurchaseImages]"?: (
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "promotedPurchase"
          | "sourceFileChecksum"
          | "state"
          | "uploadOperations"
          | "uploaded"
        )[];
        limit?: number;
        include?: "promotedPurchase"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PromotedPurchaseImagesResponse, ErrorResponse>({
        path: `/v1/promotedPurchases/${id}/promotionImages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReviewSubmissions
     * @name ReviewSubmissionsItemsGetToManyRelated
     * @request GET:/v1/reviewSubmissions/{id}/items
     * @secure
     */
    reviewSubmissionsItemsGetToManyRelated: (
      id: string,
      query?: {
        "fields[appStoreVersionExperiments]"?: (
          | "appStoreVersion"
          | "appStoreVersionExperimentTreatments"
          | "endDate"
          | "name"
          | "reviewRequired"
          | "startDate"
          | "started"
          | "state"
          | "trafficProportion"
        )[];
        "fields[reviewSubmissionItems]"?: (
          | "appCustomProductPageVersion"
          | "appEvent"
          | "appStoreVersion"
          | "appStoreVersionExperiment"
          | "removed"
          | "resolved"
          | "reviewSubmission"
          | "state"
        )[];
        "fields[appStoreVersions]"?: (
          | "ageRatingDeclaration"
          | "app"
          | "appClipDefaultExperience"
          | "appStoreReviewDetail"
          | "appStoreState"
          | "appStoreVersionExperiments"
          | "appStoreVersionLocalizations"
          | "appStoreVersionPhasedRelease"
          | "appStoreVersionSubmission"
          | "build"
          | "copyright"
          | "createdDate"
          | "customerReviews"
          | "downloadable"
          | "earliestReleaseDate"
          | "platform"
          | "releaseType"
          | "routingAppCoverage"
          | "versionString"
        )[];
        "fields[appCustomProductPageVersions]"?: (
          | "appCustomProductPage"
          | "appCustomProductPageLocalizations"
          | "state"
          | "version"
        )[];
        "fields[appEvents]"?: (
          | "app"
          | "archivedTerritorySchedules"
          | "badge"
          | "deepLink"
          | "eventState"
          | "localizations"
          | "primaryLocale"
          | "priority"
          | "purchaseRequirement"
          | "purpose"
          | "referenceName"
          | "territorySchedules"
        )[];
        limit?: number;
        include?: ("appCustomProductPageVersion" | "appEvent" | "appStoreVersion" | "appStoreVersionExperiment")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewSubmissionItemsResponse, ErrorResponse>({
        path: `/v1/reviewSubmissions/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmProviders
     * @name ScmProvidersRepositoriesGetToManyRelated
     * @request GET:/v1/scmProviders/{id}/repositories
     * @secure
     */
    scmProvidersRepositoriesGetToManyRelated: (
      id: string,
      query?: {
        "filter[id]"?: string[];
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[scmProviders]"?: ("repositories" | "scmProviderType" | "url")[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        limit?: number;
        include?: ("defaultBranch" | "scmProvider")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmRepositoriesResponse, ErrorResponse>({
        path: `/v1/scmProviders/${id}/repositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmRepositories
     * @name ScmRepositoriesGitReferencesGetToManyRelated
     * @request GET:/v1/scmRepositories/{id}/gitReferences
     * @secure
     */
    scmRepositoriesGitReferencesGetToManyRelated: (
      id: string,
      query?: {
        "fields[scmGitReferences]"?: ("canonicalName" | "isDeleted" | "kind" | "name" | "repository")[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        limit?: number;
        include?: "repository"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmGitReferencesResponse, ErrorResponse>({
        path: `/v1/scmRepositories/${id}/gitReferences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScmRepositories
     * @name ScmRepositoriesPullRequestsGetToManyRelated
     * @request GET:/v1/scmRepositories/{id}/pullRequests
     * @secure
     */
    scmRepositoriesPullRequestsGetToManyRelated: (
      id: string,
      query?: {
        "fields[scmPullRequests]"?: (
          | "destinationBranchName"
          | "destinationRepositoryName"
          | "destinationRepositoryOwner"
          | "isClosed"
          | "isCrossRepository"
          | "number"
          | "repository"
          | "sourceBranchName"
          | "sourceRepositoryName"
          | "sourceRepositoryOwner"
          | "title"
          | "webUrl"
        )[];
        "fields[scmRepositories]"?: (
          | "defaultBranch"
          | "gitReferences"
          | "httpCloneUrl"
          | "lastAccessedDate"
          | "ownerName"
          | "pullRequests"
          | "repositoryName"
          | "scmProvider"
          | "sshCloneUrl"
        )[];
        limit?: number;
        include?: "repository"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ScmPullRequestsResponse, ErrorResponse>({
        path: `/v1/scmRepositories/${id}/pullRequests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroups
     * @name SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated
     * @request GET:/v1/subscriptionGroups/{id}/subscriptionGroupLocalizations
     * @secure
     */
    subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "fields[subscriptionGroups]"?: ("app" | "referenceName" | "subscriptionGroupLocalizations" | "subscriptions")[];
        "fields[subscriptionGroupLocalizations]"?: (
          | "customAppName"
          | "locale"
          | "name"
          | "state"
          | "subscriptionGroup"
        )[];
        limit?: number;
        include?: "subscriptionGroup"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionGroupLocalizationsResponse, ErrorResponse>({
        path: `/v1/subscriptionGroups/${id}/subscriptionGroupLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionGroups
     * @name SubscriptionGroupsSubscriptionsGetToManyRelated
     * @request GET:/v1/subscriptionGroups/{id}/subscriptions
     * @secure
     */
    subscriptionGroupsSubscriptionsGetToManyRelated: (
      id: string,
      query?: {
        "filter[name]"?: string[];
        "filter[productId]"?: string[];
        "filter[state]"?: (
          | "MISSING_METADATA"
          | "READY_TO_SUBMIT"
          | "WAITING_FOR_REVIEW"
          | "IN_REVIEW"
          | "DEVELOPER_ACTION_NEEDED"
          | "PENDING_BINARY_APPROVAL"
          | "APPROVED"
          | "DEVELOPER_REMOVED_FROM_SALE"
          | "REMOVED_FROM_SALE"
          | "REJECTED"
        )[];
        sort?: ("name" | "-name")[];
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[subscriptionPromotionalOffers]"?: (
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerCode"
          | "offerMode"
          | "prices"
          | "subscription"
        )[];
        "fields[subscriptionOfferCodes]"?: (
          | "active"
          | "customCodes"
          | "customerEligibilities"
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerEligibility"
          | "offerMode"
          | "oneTimeUseCodes"
          | "prices"
          | "subscription"
          | "totalNumberOfCodes"
        )[];
        "fields[subscriptionAppStoreReviewScreenshots]"?: (
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "subscription"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[subscriptionGroups]"?: ("app" | "referenceName" | "subscriptionGroupLocalizations" | "subscriptions")[];
        "fields[subscriptionIntroductoryOffers]"?: (
          | "duration"
          | "endDate"
          | "numberOfPeriods"
          | "offerMode"
          | "startDate"
          | "subscription"
          | "subscriptionPricePoint"
          | "territory"
        )[];
        "fields[subscriptionPrices]"?: (
          | "preserveCurrentPrice"
          | "preserved"
          | "startDate"
          | "subscription"
          | "subscriptionPricePoint"
          | "territory"
        )[];
        "fields[subscriptionLocalizations]"?: ("description" | "locale" | "name" | "state" | "subscription")[];
        limit?: number;
        "limit[subscriptionLocalizations]"?: number;
        "limit[introductoryOffers]"?: number;
        "limit[promotionalOffers]"?: number;
        "limit[offerCodes]"?: number;
        "limit[prices]"?: number;
        include?: (
          | "appStoreReviewScreenshot"
          | "group"
          | "introductoryOffers"
          | "offerCodes"
          | "prices"
          | "promotedPurchase"
          | "promotionalOffers"
          | "subscriptionLocalizations"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionsResponse, ErrorResponse>({
        path: `/v1/subscriptionGroups/${id}/subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodeOneTimeUseCodes
     * @name SubscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated
     * @request GET:/v1/subscriptionOfferCodeOneTimeUseCodes/{id}/values
     * @secure
     */
    subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated: (id: string, params: RequestParams = {}) =>
      this.request<Csv, ErrorResponse>({
        path: `/v1/subscriptionOfferCodeOneTimeUseCodes/${id}/values`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodes
     * @name SubscriptionOfferCodesCustomCodesGetToManyRelated
     * @request GET:/v1/subscriptionOfferCodes/{id}/customCodes
     * @secure
     */
    subscriptionOfferCodesCustomCodesGetToManyRelated: (
      id: string,
      query?: {
        "fields[subscriptionOfferCodeCustomCodes]"?: (
          | "active"
          | "createdDate"
          | "customCode"
          | "expirationDate"
          | "numberOfCodes"
          | "offerCode"
        )[];
        "fields[subscriptionOfferCodes]"?: (
          | "active"
          | "customCodes"
          | "customerEligibilities"
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerEligibility"
          | "offerMode"
          | "oneTimeUseCodes"
          | "prices"
          | "subscription"
          | "totalNumberOfCodes"
        )[];
        limit?: number;
        include?: "offerCode"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeCustomCodesResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodes/${id}/customCodes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodes
     * @name SubscriptionOfferCodesOneTimeUseCodesGetToManyRelated
     * @request GET:/v1/subscriptionOfferCodes/{id}/oneTimeUseCodes
     * @secure
     */
    subscriptionOfferCodesOneTimeUseCodesGetToManyRelated: (
      id: string,
      query?: {
        "fields[subscriptionOfferCodes]"?: (
          | "active"
          | "customCodes"
          | "customerEligibilities"
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerEligibility"
          | "offerMode"
          | "oneTimeUseCodes"
          | "prices"
          | "subscription"
          | "totalNumberOfCodes"
        )[];
        "fields[subscriptionOfferCodeOneTimeUseCodes]"?: (
          | "active"
          | "createdDate"
          | "expirationDate"
          | "numberOfCodes"
          | "offerCode"
          | "values"
        )[];
        limit?: number;
        include?: "offerCode"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodeOneTimeUseCodesResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodes/${id}/oneTimeUseCodes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionOfferCodes
     * @name SubscriptionOfferCodesPricesGetToManyRelated
     * @request GET:/v1/subscriptionOfferCodes/{id}/prices
     * @secure
     */
    subscriptionOfferCodesPricesGetToManyRelated: (
      id: string,
      query?: {
        "filter[territory]"?: string[];
        "fields[subscriptionPricePoints]"?: (
          | "customerPrice"
          | "equalizations"
          | "proceeds"
          | "proceedsYear2"
          | "subscription"
          | "territory"
        )[];
        "fields[territories]"?: "currency"[];
        "fields[subscriptionOfferCodePrices]"?: ("subscriptionPricePoint" | "territory")[];
        limit?: number;
        include?: ("subscriptionPricePoint" | "territory")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodePricesResponse, ErrorResponse>({
        path: `/v1/subscriptionOfferCodes/${id}/prices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPricePoints
     * @name SubscriptionPricePointsEqualizationsGetToManyRelated
     * @request GET:/v1/subscriptionPricePoints/{id}/equalizations
     * @secure
     */
    subscriptionPricePointsEqualizationsGetToManyRelated: (
      id: string,
      query?: {
        "filter[subscription]"?: string[];
        "filter[territory]"?: string[];
        "fields[subscriptionPricePoints]"?: (
          | "customerPrice"
          | "equalizations"
          | "proceeds"
          | "proceedsYear2"
          | "subscription"
          | "territory"
        )[];
        "fields[territories]"?: "currency"[];
        limit?: number;
        include?: "territory"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPricePointsResponse, ErrorResponse>({
        path: `/v1/subscriptionPricePoints/${id}/equalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubscriptionPromotionalOffers
     * @name SubscriptionPromotionalOffersPricesGetToManyRelated
     * @request GET:/v1/subscriptionPromotionalOffers/{id}/prices
     * @secure
     */
    subscriptionPromotionalOffersPricesGetToManyRelated: (
      id: string,
      query?: {
        "filter[territory]"?: string[];
        "fields[subscriptionPricePoints]"?: (
          | "customerPrice"
          | "equalizations"
          | "proceeds"
          | "proceedsYear2"
          | "subscription"
          | "territory"
        )[];
        "fields[territories]"?: "currency"[];
        "fields[subscriptionPromotionalOfferPrices]"?: ("subscriptionPricePoint" | "territory")[];
        limit?: number;
        include?: ("subscriptionPricePoint" | "territory")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPromotionalOfferPricesResponse, ErrorResponse>({
        path: `/v1/subscriptionPromotionalOffers/${id}/prices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsAppStoreReviewScreenshotGetToOneRelated
     * @request GET:/v1/subscriptions/{id}/appStoreReviewScreenshot
     * @secure
     */
    subscriptionsAppStoreReviewScreenshotGetToOneRelated: (
      id: string,
      query?: {
        "fields[subscriptionAppStoreReviewScreenshots]"?: (
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "sourceFileChecksum"
          | "subscription"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        include?: "subscription"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionAppStoreReviewScreenshotResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/appStoreReviewScreenshot`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsIntroductoryOffersGetToManyRelationship
     * @request GET:/v1/subscriptions/{id}/relationships/introductoryOffers
     * @secure
     */
    subscriptionsIntroductoryOffersGetToManyRelationship: (
      id: string,
      query?: { limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionIntroductoryOffersLinkagesResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/relationships/introductoryOffers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsIntroductoryOffersDeleteToManyRelationship
     * @request DELETE:/v1/subscriptions/{id}/relationships/introductoryOffers
     * @secure
     */
    subscriptionsIntroductoryOffersDeleteToManyRelationship: (
      id: string,
      data: SubscriptionIntroductoryOffersLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptions/${id}/relationships/introductoryOffers`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsIntroductoryOffersGetToManyRelated
     * @request GET:/v1/subscriptions/{id}/introductoryOffers
     * @secure
     */
    subscriptionsIntroductoryOffersGetToManyRelated: (
      id: string,
      query?: {
        "filter[territory]"?: string[];
        "fields[subscriptionPricePoints]"?: (
          | "customerPrice"
          | "equalizations"
          | "proceeds"
          | "proceedsYear2"
          | "subscription"
          | "territory"
        )[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[subscriptionIntroductoryOffers]"?: (
          | "duration"
          | "endDate"
          | "numberOfPeriods"
          | "offerMode"
          | "startDate"
          | "subscription"
          | "subscriptionPricePoint"
          | "territory"
        )[];
        "fields[territories]"?: "currency"[];
        limit?: number;
        include?: ("subscription" | "subscriptionPricePoint" | "territory")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionIntroductoryOffersResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/introductoryOffers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsOfferCodesGetToManyRelated
     * @request GET:/v1/subscriptions/{id}/offerCodes
     * @secure
     */
    subscriptionsOfferCodesGetToManyRelated: (
      id: string,
      query?: {
        "filter[territory]"?: string[];
        "fields[subscriptionOfferCodeCustomCodes]"?: (
          | "active"
          | "createdDate"
          | "customCode"
          | "expirationDate"
          | "numberOfCodes"
          | "offerCode"
        )[];
        "fields[subscriptionOfferCodes]"?: (
          | "active"
          | "customCodes"
          | "customerEligibilities"
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerEligibility"
          | "offerMode"
          | "oneTimeUseCodes"
          | "prices"
          | "subscription"
          | "totalNumberOfCodes"
        )[];
        "fields[subscriptionOfferCodeOneTimeUseCodes]"?: (
          | "active"
          | "createdDate"
          | "expirationDate"
          | "numberOfCodes"
          | "offerCode"
          | "values"
        )[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[subscriptionOfferCodePrices]"?: ("subscriptionPricePoint" | "territory")[];
        limit?: number;
        "limit[oneTimeUseCodes]"?: number;
        "limit[customCodes]"?: number;
        "limit[prices]"?: number;
        include?: ("customCodes" | "oneTimeUseCodes" | "prices" | "subscription")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionOfferCodesResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/offerCodes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsPricePointsGetToManyRelated
     * @request GET:/v1/subscriptions/{id}/pricePoints
     * @secure
     */
    subscriptionsPricePointsGetToManyRelated: (
      id: string,
      query?: {
        "filter[territory]"?: string[];
        "fields[subscriptionPricePoints]"?: (
          | "customerPrice"
          | "equalizations"
          | "proceeds"
          | "proceedsYear2"
          | "subscription"
          | "territory"
        )[];
        "fields[territories]"?: "currency"[];
        limit?: number;
        include?: "territory"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPricePointsResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/pricePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsPricesGetToManyRelationship
     * @request GET:/v1/subscriptions/{id}/relationships/prices
     * @secure
     */
    subscriptionsPricesGetToManyRelationship: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<SubscriptionPricesLinkagesResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/relationships/prices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsPricesDeleteToManyRelationship
     * @request DELETE:/v1/subscriptions/{id}/relationships/prices
     * @secure
     */
    subscriptionsPricesDeleteToManyRelationship: (
      id: string,
      data: SubscriptionPricesLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/subscriptions/${id}/relationships/prices`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsPricesGetToManyRelated
     * @request GET:/v1/subscriptions/{id}/prices
     * @secure
     */
    subscriptionsPricesGetToManyRelated: (
      id: string,
      query?: {
        "filter[subscriptionPricePoint]"?: string[];
        "filter[territory]"?: string[];
        "fields[subscriptionPricePoints]"?: (
          | "customerPrice"
          | "equalizations"
          | "proceeds"
          | "proceedsYear2"
          | "subscription"
          | "territory"
        )[];
        "fields[subscriptionPrices]"?: (
          | "preserveCurrentPrice"
          | "preserved"
          | "startDate"
          | "subscription"
          | "subscriptionPricePoint"
          | "territory"
        )[];
        "fields[territories]"?: "currency"[];
        limit?: number;
        include?: ("subscriptionPricePoint" | "territory")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPricesResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/prices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsPromotedPurchaseGetToOneRelated
     * @request GET:/v1/subscriptions/{id}/promotedPurchase
     * @secure
     */
    subscriptionsPromotedPurchaseGetToOneRelated: (
      id: string,
      query?: {
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[promotedPurchaseImages]"?: (
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "promotedPurchase"
          | "sourceFileChecksum"
          | "state"
          | "uploadOperations"
          | "uploaded"
        )[];
        "limit[promotionImages]"?: number;
        include?: ("inAppPurchaseV2" | "promotionImages" | "subscription")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PromotedPurchaseResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/promotedPurchase`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsPromotionalOffersGetToManyRelated
     * @request GET:/v1/subscriptions/{id}/promotionalOffers
     * @secure
     */
    subscriptionsPromotionalOffersGetToManyRelated: (
      id: string,
      query?: {
        "filter[territory]"?: string[];
        "fields[subscriptionPromotionalOffers]"?: (
          | "duration"
          | "name"
          | "numberOfPeriods"
          | "offerCode"
          | "offerMode"
          | "prices"
          | "subscription"
        )[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[subscriptionPromotionalOfferPrices]"?: ("subscriptionPricePoint" | "territory")[];
        limit?: number;
        "limit[prices]"?: number;
        include?: ("prices" | "subscription")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionPromotionalOffersResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/promotionalOffers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subscriptions
     * @name SubscriptionsSubscriptionLocalizationsGetToManyRelated
     * @request GET:/v1/subscriptions/{id}/subscriptionLocalizations
     * @secure
     */
    subscriptionsSubscriptionLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[subscriptionLocalizations]"?: ("description" | "locale" | "name" | "state" | "subscription")[];
        limit?: number;
        include?: "subscription"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SubscriptionLocalizationsResponse, ErrorResponse>({
        path: `/v1/subscriptions/${id}/subscriptionLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserInvitations
     * @name UserInvitationsVisibleAppsGetToManyRelated
     * @request GET:/v1/userInvitations/{id}/visibleApps
     * @secure
     */
    userInvitationsVisibleAppsGetToManyRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppsResponse, ErrorResponse>({
        path: `/v1/userInvitations/${id}/visibleApps`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersVisibleAppsGetToManyRelationship
     * @request GET:/v1/users/{id}/relationships/visibleApps
     * @secure
     */
    usersVisibleAppsGetToManyRelationship: (id: string, query?: { limit?: number }, params: RequestParams = {}) =>
      this.request<UserVisibleAppsLinkagesResponse, ErrorResponse>({
        path: `/v1/users/${id}/relationships/visibleApps`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersVisibleAppsCreateToManyRelationship
     * @request POST:/v1/users/{id}/relationships/visibleApps
     * @secure
     */
    usersVisibleAppsCreateToManyRelationship: (
      id: string,
      data: UserVisibleAppsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/users/${id}/relationships/visibleApps`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersVisibleAppsReplaceToManyRelationship
     * @request PATCH:/v1/users/{id}/relationships/visibleApps
     * @secure
     */
    usersVisibleAppsReplaceToManyRelationship: (
      id: string,
      data: UserVisibleAppsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/users/${id}/relationships/visibleApps`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersVisibleAppsDeleteToManyRelationship
     * @request DELETE:/v1/users/{id}/relationships/visibleApps
     * @secure
     */
    usersVisibleAppsDeleteToManyRelationship: (
      id: string,
      data: UserVisibleAppsLinkagesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/v1/users/${id}/relationships/visibleApps`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersVisibleAppsGetToManyRelated
     * @request GET:/v1/users/{id}/visibleApps
     * @secure
     */
    usersVisibleAppsGetToManyRelated: (
      id: string,
      query?: {
        "fields[apps]"?: (
          | "appClips"
          | "appCustomProductPages"
          | "appEvents"
          | "appInfos"
          | "appStoreVersions"
          | "availableInNewTerritories"
          | "availableTerritories"
          | "betaAppLocalizations"
          | "betaAppReviewDetail"
          | "betaGroups"
          | "betaLicenseAgreement"
          | "betaTesters"
          | "builds"
          | "bundleId"
          | "ciProduct"
          | "contentRightsDeclaration"
          | "customerReviews"
          | "endUserLicenseAgreement"
          | "gameCenterEnabledVersions"
          | "inAppPurchases"
          | "inAppPurchasesV2"
          | "isOrEverWasMadeForKids"
          | "name"
          | "perfPowerMetrics"
          | "preOrder"
          | "preReleaseVersions"
          | "pricePoints"
          | "prices"
          | "primaryLocale"
          | "promotedPurchases"
          | "reviewSubmissions"
          | "sku"
          | "subscriptionGracePeriod"
          | "subscriptionGroups"
          | "subscriptionStatusUrl"
          | "subscriptionStatusUrlForSandbox"
          | "subscriptionStatusUrlVersion"
          | "subscriptionStatusUrlVersionForSandbox"
        )[];
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AppsResponse, ErrorResponse>({
        path: `/v1/users/${id}/visibleApps`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  v2 = {
    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesCreateInstance
     * @request POST:/v2/inAppPurchases
     * @secure
     */
    inAppPurchasesCreateInstance: (data: InAppPurchaseV2CreateRequest, params: RequestParams = {}) =>
      this.request<InAppPurchaseV2Response, ErrorResponse>({
        path: `/v2/inAppPurchases`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesGetInstance
     * @request GET:/v2/inAppPurchases/{id}
     * @secure
     */
    inAppPurchasesGetInstance: (
      id: string,
      query?: {
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        include?: (
          | "appStoreReviewScreenshot"
          | "content"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "pricePoints"
          | "promotedPurchase"
        )[];
        "fields[inAppPurchaseAppStoreReviewScreenshots]"?: (
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "inAppPurchaseV2"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[inAppPurchasePricePoints]"?: (
          | "customerPrice"
          | "inAppPurchaseV2"
          | "priceTier"
          | "proceeds"
          | "territory"
        )[];
        "fields[inAppPurchaseLocalizations]"?: ("description" | "inAppPurchaseV2" | "locale" | "name" | "state")[];
        "fields[inAppPurchasePriceSchedules]"?: ("inAppPurchase" | "manualPrices")[];
        "fields[inAppPurchaseContents]"?: ("fileName" | "fileSize" | "inAppPurchaseV2" | "lastModifiedDate" | "url")[];
        "limit[inAppPurchaseLocalizations]"?: number;
        "limit[pricePoints]"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseV2Response, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesUpdateInstance
     * @request PATCH:/v2/inAppPurchases/{id}
     * @secure
     */
    inAppPurchasesUpdateInstance: (id: string, data: InAppPurchaseV2UpdateRequest, params: RequestParams = {}) =>
      this.request<InAppPurchaseV2Response, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesDeleteInstance
     * @request DELETE:/v2/inAppPurchases/{id}
     * @secure
     */
    inAppPurchasesDeleteInstance: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesAppStoreReviewScreenshotGetToOneRelated
     * @request GET:/v2/inAppPurchases/{id}/appStoreReviewScreenshot
     * @secure
     */
    inAppPurchasesAppStoreReviewScreenshotGetToOneRelated: (
      id: string,
      query?: {
        "fields[inAppPurchaseAppStoreReviewScreenshots]"?: (
          | "assetDeliveryState"
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "inAppPurchaseV2"
          | "sourceFileChecksum"
          | "uploadOperations"
          | "uploaded"
        )[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        include?: "inAppPurchaseV2"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseAppStoreReviewScreenshotResponse, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}/appStoreReviewScreenshot`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesContentGetToOneRelated
     * @request GET:/v2/inAppPurchases/{id}/content
     * @secure
     */
    inAppPurchasesContentGetToOneRelated: (
      id: string,
      query?: {
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[inAppPurchaseContents]"?: ("fileName" | "fileSize" | "inAppPurchaseV2" | "lastModifiedDate" | "url")[];
        include?: "inAppPurchaseV2"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseContentResponse, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}/content`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesIapPriceScheduleGetToOneRelated
     * @request GET:/v2/inAppPurchases/{id}/iapPriceSchedule
     * @secure
     */
    inAppPurchasesIapPriceScheduleGetToOneRelated: (
      id: string,
      query?: {
        "fields[inAppPurchasePrices]"?: ("inAppPurchasePricePoint" | "inAppPurchaseV2" | "startDate" | "territory")[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[inAppPurchasePriceSchedules]"?: ("inAppPurchase" | "manualPrices")[];
        "limit[manualPrices]"?: number;
        include?: ("inAppPurchase" | "manualPrices")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchasePriceScheduleResponse, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}/iapPriceSchedule`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesInAppPurchaseLocalizationsGetToManyRelated
     * @request GET:/v2/inAppPurchases/{id}/inAppPurchaseLocalizations
     * @secure
     */
    inAppPurchasesInAppPurchaseLocalizationsGetToManyRelated: (
      id: string,
      query?: {
        "fields[inAppPurchaseLocalizations]"?: ("description" | "inAppPurchaseV2" | "locale" | "name" | "state")[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        limit?: number;
        include?: "inAppPurchaseV2"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchaseLocalizationsResponse, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}/inAppPurchaseLocalizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesPricePointsGetToManyRelated
     * @request GET:/v2/inAppPurchases/{id}/pricePoints
     * @secure
     */
    inAppPurchasesPricePointsGetToManyRelated: (
      id: string,
      query?: {
        "filter[priceTier]"?: string[];
        "filter[territory]"?: string[];
        "fields[inAppPurchasePricePoints]"?: (
          | "customerPrice"
          | "inAppPurchaseV2"
          | "priceTier"
          | "proceeds"
          | "territory"
        )[];
        "fields[territories]"?: "currency"[];
        limit?: number;
        include?: "territory"[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InAppPurchasePricePointsResponse, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}/pricePoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InAppPurchases
     * @name InAppPurchasesPromotedPurchaseGetToOneRelated
     * @request GET:/v2/inAppPurchases/{id}/promotedPurchase
     * @secure
     */
    inAppPurchasesPromotedPurchaseGetToOneRelated: (
      id: string,
      query?: {
        "fields[promotedPurchases]"?: (
          | "app"
          | "enabled"
          | "inAppPurchaseV2"
          | "promotionImages"
          | "state"
          | "subscription"
          | "visibleForAllUsers"
        )[];
        "fields[subscriptions]"?: (
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "familySharable"
          | "group"
          | "groupLevel"
          | "introductoryOffers"
          | "name"
          | "offerCodes"
          | "pricePoints"
          | "prices"
          | "productId"
          | "promotedPurchase"
          | "promotionalOffers"
          | "reviewNote"
          | "state"
          | "subscriptionLocalizations"
          | "subscriptionPeriod"
        )[];
        "fields[inAppPurchases]"?: (
          | "app"
          | "appStoreReviewScreenshot"
          | "availableInAllTerritories"
          | "content"
          | "contentHosting"
          | "familySharable"
          | "iapPriceSchedule"
          | "inAppPurchaseLocalizations"
          | "inAppPurchaseType"
          | "name"
          | "pricePoints"
          | "productId"
          | "promotedPurchase"
          | "reviewNote"
          | "state"
        )[];
        "fields[promotedPurchaseImages]"?: (
          | "assetToken"
          | "assetType"
          | "fileName"
          | "fileSize"
          | "imageAsset"
          | "promotedPurchase"
          | "sourceFileChecksum"
          | "state"
          | "uploadOperations"
          | "uploaded"
        )[];
        "limit[promotionImages]"?: number;
        include?: ("inAppPurchaseV2" | "promotionImages" | "subscription")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<PromotedPurchaseResponse, ErrorResponse>({
        path: `/v2/inAppPurchases/${id}/promotedPurchase`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
