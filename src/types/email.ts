export type EmailPyload = {
  from: string;
  to: string | string[];
  subject: string;
  react?: React.ReactElement | React.ReactNode | null;
  html?: string;
  text: string;
};
