import {
  reactExtension,
  BlockStack,
  Text,
  useApi,
  Heading,
  InlineStack,
  Image,
  Grid,
  View,
  GridItem,
} from '@shopify/ui-extensions-react/checkout';

// Define your FAQ data
const faqs = [
  {
    title: 'When will my order ship?',
    description:
      'We ship Monday-Friday. Orders ship in 1-3 business days and arrive 2-5 days after shipping. For Rx and custom lens, orders may take up to 5 business days to process before shipping.',

    image:
      'https://cdn.shopify.com/s/files/1/0140/0012/8057/files/when_will_ship_icon_aaf1b059-e9d8-4453-a642-ad3170da0df6.png?v=1758229458',
  },
  {
    title: 'Tracking your order',
    description:
      'You will receive tracking information to the email YOU provide from the shipping carrier. Once a label is created, updates may take up to 1 business day.',
    image:
      'https://cdn.shopify.com/s/files/1/0140/0012/8057/files/tracking_icon_712e57a3-2779-4f07-9b27-d8a90ea93a03.png?v=1758229458',
  },
  {
    title: 'Weekends, Holidays & Sales',
    description:
      'Orders placed over the weekends, holidays, or during big sales may need a day or two more, but have patience, WE ARE REAL people, not bots.',
    image:
      'https://cdn.shopify.com/s/files/1/0140/0012/8057/files/weekends_holidays_icon_d92219d0-137f-48d4-87b2-8005f043614d.png?v=1758229458',
  },
];

// 1. Choose an extension target
export default reactExtension('purchase.thank-you.block.render', () => (
  <Extension />
));

function Extension() {
  // 2. Use the extension API to gather context from the checkout and shop
  const { cost, shop } = useApi();

  // 3. Render a UI
  return (
    <BlockStack
      spacing="loose"
      inlineAlignment="center"
      background="subdued"
      padding="loose"
      borderRadius="base"
    >
      <Heading level={2}>FAQ&apos;S</Heading>

      <Grid
        columns={['10%', 'fill']}
        rows={['auto']}
        spacing="loose"
        borderRadius="base"
        padding="base"
        background="subdued"
      >
        {faqs.map((faq, i) => (
          <>
            <GridItem rowSpan={1}>
              <View
                display="block"
                blockAlignment="center"
                inlineAlignment="center"
                maxBlockSize="fill"
                maxInlineSize="fill"
              >
                <Image
                  source={faq.image}
                  accessibilityDescription={faq.title}
                />
              </View>
            </GridItem>
            <GridItem rowSpan={1}>
              <BlockStack spacing="extraTight">
                <Text size="medium" emphasis="bold" appearance="critical">
                  {faq.title}
                </Text>
                <Text size="small">{faq.description}</Text>
              </BlockStack>
            </GridItem>
          </>
        ))}
      </Grid>
    </BlockStack>
  );
}
