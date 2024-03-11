export const productMockup = {
  productId: "2",
  productName: "Meow",
  brand: "Test Brand name",
  brandId: 2000000,
  brandImageUrl: null,
  linkText: "meow",
  productReference: "1234567",
  productReferenceCode: "1234567",
  categoryId: "1",
  productTitle: "Meow",
  metaTagDescription: "Produto teste da Karen",
  releaseDate: "2021-03-09T00:00:00Z",
  clusterHighlights: {
    "140": "Coleção teste da Karen e do Bruno",
  },
  productClusters: {
    "140": "Coleção teste da Karen e do Bruno",
  },
  searchableClusters: {
    "140": "Coleção teste da Karen e do Bruno",
  },
  categories: ["/Test Category/"],
  categoriesIds: ["/1/"],
  link: "https://apiexamples.vtexcommercestable.com.br/meow/p",
  description: "Produto teste da Karen",
  items: [
    {
      itemId: "2",
      name: "Meow SKU",
      nameComplete: "Meow SKU",
      complementName: "",
      ean: "09877654321",
      referenceId: [
        {
          Key: "RefId",
          Value: "1234567",
        },
      ],
      measurementUnit: "un",
      unitMultiplier: 1,
      modalType: null,
      isKit: false,
      images: [
        {
          imageId: "155398",
          imageLabel: "miau",
          imageTag:
            '<img src="~/arquivos/ids/155398-#width#-#height#/Cat-Sleeping-Pics.jpg?v=637509163299000000" width="#width#" height="#height#" alt="gatenho" id="" />',
          imageUrl:
            "https://apiexamples.vteximg.com.br/arquivos/ids/155398/Cat-Sleeping-Pics.jpg?v=637509163299000000",
          imageText: "gatenho",
          imageLastModified: "2021-03-09T19:52:09.9000000Z",
        },
      ],
      sellers: [
        {
          sellerId: "1",
          sellerName: "UNISUPER, SOCIEDAD ANONIMA",
          addToCartLink:
            "https://apiexamples.vtexcommercestable.com.br/checkout/cart/add?sku=2&qty=1&seller=1&sc=1&price=13000&cv=9F5DDDF45171475B97F6A2BEDED8C781_&sc=1",
          sellerDefault: true,
          commertialOffer: {
            DeliverySlaSamplesPerRegion: {
              "0": {
                DeliverySlaPerTypes: [],
                Region: null,
              },
            },
            Installments: [
              {
                Value: 130,
                InterestRate: 0,
                TotalValuePlusInterestRate: 130,
                NumberOfInstallments: 1,
                PaymentSystemName: "Visa",
                PaymentSystemGroupName: "creditCardPaymentGroup",
                Name: "Visa à vista",
              },
              {
                Value: 130,
                InterestRate: 0,
                TotalValuePlusInterestRate: 130,
                NumberOfInstallments: 1,
                PaymentSystemName: "Promissory",
                PaymentSystemGroupName: "custom201PaymentGroupPaymentGroup",
                Name: "Promissory à vista",
              },
            ],
            DiscountHighLight: [],
            GiftSkuIds: [],
            Teasers: [],
            PromotionTeasers: [],
            BuyTogether: [],
            ItemMetadataAttachment: [],
            Price: 130,
            ListPrice: 130,
            PriceWithoutDiscount: 130,
            FullSellingPrice: 130,
            RewardValue: 0,
            PriceValidUntil: "2025-03-11T15:58:30Z",
            AvailableQuantity: 200,
            IsAvailable: true,
            Tax: 0,
            DeliverySlaSamples: [
              {
                DeliverySlaPerTypes: [],
                Region: null,
              },
            ],
            GetInfoErrorMessage: null,
            CacheVersionUsedToCallCheckout: "9F5DDDF45171475B97F6A2BEDED8C781_",
            PaymentOptions: {
              installmentOptions: [
                {
                  paymentSystem: "2",
                  bin: null,
                  paymentName: "Visa",
                  paymentGroupName: "creditCardPaymentGroup",
                  value: 13000,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      value: 13000,
                      total: 13000,
                      sellerMerchantInstallments: [
                        {
                          id: "APIEXAMPLES",
                          count: 1,
                          hasInterestRate: false,
                          interestRate: 0,
                          value: 13000,
                          total: 13000,
                        },
                      ],
                    },
                  ],
                },
                {
                  paymentSystem: "201",
                  bin: null,
                  paymentName: "Promissory",
                  paymentGroupName: "custom201PaymentGroupPaymentGroup",
                  value: 13000,
                  installments: [
                    {
                      count: 1,
                      hasInterestRate: false,
                      interestRate: 0,
                      value: 13000,
                      total: 13000,
                      sellerMerchantInstallments: [
                        {
                          id: "APIEXAMPLES",
                          count: 1,
                          hasInterestRate: false,
                          interestRate: 0,
                          value: 13000,
                          total: 13000,
                        },
                      ],
                    },
                  ],
                },
              ],
              paymentSystems: [
                {
                  id: 201,
                  name: "Promissory",
                  groupName: "custom201PaymentGroupPaymentGroup",
                  validator: null,
                  stringId: "201",
                  template: "custom201PaymentGroupPaymentGroup-template",
                  requiresDocument: false,
                  isCustom: true,
                  description: "Promissory Description",
                  requiresAuthentication: false,
                  dueDate: "2024-03-18T15:58:31.1629088Z",
                  availablePayments: null,
                },
                {
                  id: 2,
                  name: "Visa",
                  groupName: "creditCardPaymentGroup",
                  validator: null,
                  stringId: "2",
                  template: "creditCardPaymentGroup-template",
                  requiresDocument: false,
                  isCustom: false,
                  description: null,
                  requiresAuthentication: false,
                  dueDate: "2024-03-18T15:57:31.1629088Z",
                  availablePayments: null,
                },
              ],
              payments: [],
              giftCards: [],
              giftCardMessages: [],
              availableAccounts: [],
              availableTokens: [],
            },
          },
        },
      ],
      Videos: [],
      estimatedDateArrival: null,
    },
  ],
};
