import Navbar from "components/Navbar";
import SEO from "components/SEO";

type BaseProps = {
  children: React.ReactNode;
};

const BaseTemplate = ({ children }: BaseProps) => (
  <>
    <SEO title="DSMovie" />
    <Navbar />
    {children}
  </>
);

export default BaseTemplate;
