import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© 2023 - {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {" / "}Built with{" "}
            <SmartLink href="https://once-ui.com" target="_blank" rel="noopener noreferrer">
              Once UI
            </SmartLink>{" "}
            – UI kit for stunning developer portfolios.
          </Text>
        </Text>

        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              )
          )}
        </Flex>
      </Flex>

      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="4"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
        style={{ fontSize: "12px", opacity: 0.8 }}
      >
        <Text onBackground="neutral-weak">
          Powered by{" "}
          <SmartLink href="https://quorvexinstitute.vercel.app/" target="_blank" rel="noopener noreferrer">
            Quorvex Institute
          </SmartLink>{" "}
          / All rights reserved
        </Text>
        <Flex gap="12">
          <SmartLink href="/privacy-policy">Privacy</SmartLink>
          <SmartLink href="/terms-of-service">Terms</SmartLink>
        </Flex>
      </Flex>

      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
