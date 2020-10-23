import Routes from "constants/Routes";

export const dealsData = [
  {
    id: "deal1",
    type: "single",
    title: "Mobiles and accessories | Up to 40% off",
    imgPath: "images/deals/cards/deals_card_1.jpg",
    extra: {
      to: Routes.PRODUCT_LIST,
      label: "See all offers",
    },
  },
  {
    id: "deal2",
    type: "single",
    title: "Up to 60% off | Electronics & accessories",
    imgPath: "images/deals/cards/deals_card_2.jpg",
    extra: {
      to: Routes.PRODUCT_LIST,
      label: "See all offers",
    },
  },
  {
    id: "deal3",
    type: "multi",
    title: "Under ₹599 | Pocket-friendly fashion",
    items: [
      {
        label: "Clothing",
        imgPath: "images/deals/mini/deals_mini_1.jpg",
      },
      {
        label: "Footwear",
        imgPath: "images/deals/mini/deals_mini_2.jpg",
      },
      {
        label: "Bags, watches & more",
        imgPath: "images/deals/mini/deals_mini_3.jpg",
      },
      {
        label: "View all offers",
        imgPath: "images/deals/mini/deals_mini_4.jpg",
      },
    ],
    extra: {
      to: Routes.PRODUCT_LIST,
      label: "See all offers",
    },
  },
  {
    id: "deal4",
    type: "multi",
    title: "Up to 80% off | Home & kitchen",
    items: [
      {
        label: "Kitchen & home appliances",
        imgPath: "images/deals/mini/deals_mini_5.jpg",
      },
      {
        label: "Home & decor",
        imgPath: "images/deals/mini/deals_mini_6.jpg",
      },
      {
        label: "Cookware & dining",
        imgPath: "images/deals/mini/deals_mini_7.jpg",
      },
      {
        label: "Sports & fitness",
        imgPath: "images/deals/mini/deals_mini_8.jpg",
      },
    ],
    extra: {
      to: Routes.PRODUCT_LIST,
      label: "See all deals",
    },
  },
  {
    id: "deal5",
    type: "multi",
    title: "Up to 50% off | Books & more",
    items: [
      {
        label: "All time bestsellers",
        imgPath: "images/deals/mini/deals_mini_9.jpg",
      },
      {
        label: "Academic books",
        imgPath: "images/deals/mini/deals_mini_10.jpg",
      },
      {
        label: "Gaming & accessories",
        imgPath: "images/deals/mini/deals_mini_11.jpg",
      },
      {
        label: "Antivirus, Microsoft Office & more",
        imgPath: "images/deals/mini/deals_mini_12.jpg",
      },
    ],
    extra: {
      to: Routes.PRODUCT_LIST,
      label: "See all deals",
    },
  },
  {
    id: "deal6",
    type: "multi",
    title: "Up to 70% off | Amazon Brands & more",
    items: [
      {
        label: "Home & kitchen",
        imgPath: "images/deals/mini/deals_mini_13.jpg",
      },
      {
        label: "Large appliances",
        imgPath: "images/deals/mini/deals_mini_14.jpg",
      },
      {
        label: "Daily essentials",
        imgPath: "images/deals/mini/deals_mini_15.jpg",
      },
      {
        label: "Kids wear",
        imgPath: "images/deals/mini/deals_mini_16.jpg",
      },
    ],
    extra: {
      to: Routes.PRODUCT_LIST,
      label: "See all deals",
    },
  },
  {
    id: "deal7",
    type: "multi",
    title: "Starting ₹99 | Daily needs",
    items: [
      {
        label: "Household essentials",
        imgPath: "images/deals/mini/deals_mini_17.jpg",
      },
      {
        label: "Beauty & grooming",
        imgPath: "images/deals/mini/deals_mini_18.jpg",
      },
      {
        label: "Family essentials",
        imgPath: "images/deals/mini/deals_mini_19.jpg",
      },
      {
        label: "Daily essentials store",
        imgPath: "images/deals/mini/deals_mini_20.jpg",
      },
    ],
    extra: {
      to: Routes.PRODUCT_LIST,
      label: "See all deals",
    },
  },
  {
    id: "deal8",
    type: "multi",
    title: "Benefits you enjoy as a Prime member",
    items: [
      {
        label: "Unlimited free delivery",
        imgPath: "images/deals/mini/deals_mini_21.jpg",
      },
      {
        label: "Instant access to Movies & TV shows",
        imgPath: "images/deals/mini/deals_mini_22.jpg",
      },
      {
        label: "Ad-free music",
        imgPath: "images/deals/mini/deals_mini_23.jpg",
      },
      {
        label: "Exclusive & early access to deals",
        imgPath: "images/deals/mini/deals_mini_24.jpg",
      },
    ],
    extra: {
      to: Routes.PRODUCT_LIST,
      label: "Join Prime",
    },
  },
];
