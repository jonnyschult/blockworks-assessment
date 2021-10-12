import react from "react";
import { Box } from "@mui/system";

const Promo = () => {
  return (
    <Box>
      <p>HULU + LIVE TV</p>
      <h1>Limited-Time Savings</h1>
      <p>
        Save $10/month for 3 months on Hulu + Live TV. Just $54.99/mo for your
        first 3 months (after 7 day free trial, if eligible), then $64.00/mon.
        Cancel anyime.
      </p>
      <p>
        Offer for Hulu (ad-supported) + Live TV plan only. $54.99/month for 3
        months, then $64.99/month. Ends 11:59 PM PST on 10/28/21. Hulu + Live TV
        discount offer valid for new and eligible returning subscribers (who
        have not had Hulu in the past 3 months) only. Hulu + Live TV free trial
        offer valid for new and eligible returning subscribers (who have not
        taken a free trial of Hulu in the past 12 months) only.{" "}
        <a href="/"> Additional terms apply.</a>
      </p>
      <button> VIEW CHANNELS IN YOUR AREA &#8594;</button>
      <Box>&#8964;</Box>
    </Box>
  );
};

export default Promo;
