import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
export default function Faq() {
  return (
    <div style={{ marginTop: "40px" }}>
      <MDBContainer style={{ maxWidth: "1000px" }}>
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="What is the financing facility about?"
          >
            The financing facility aims to support various stakeholders in the
            agriculture eco-system, including{" "}
            <strong>
              farmers, government, Agri entrepreneurs, banking ecosystem, and
              consumers.
            </strong>
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="How can farmers benefit from this scheme?"
          >
            Farmers can benefit through improved marketing infrastructure,
            reduced post-harvest losses, and access to modern packaging and cold
            storage systems.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="What role does the government play in this scheme?"
          >
            The government can direct priority sector lending, reduce national
            food wastage, and structure viable PPP projects to attract
            investment in agriculture infrastructure.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle="How does this scheme impact agri entrepreneurs?"
          >
            Agri entrepreneurs can leverage a dedicated source of funding to
            push for innovation in the agriculture sector using new-age
            technologies such as IoT and AI.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="What benefits do consumers gain from the investment in agriculture infrastructure?"
          >
            Consumers benefit from reduced inefficiencies in the post-harvest
            ecosystem, leading to better quality and prices in the market.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={6}
            headerTitle="What is the financing facility about?"
          >
            The financing facility aims to support various stakeholders in the
            agriculture eco-system, including farmers, government, agri
            entrepreneurs, banking ecosystem, and consumers.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </div>
  );
}
