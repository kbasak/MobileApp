import CobraFundDetails from "./CobraFundDetails";
import ESAFundDetails from "./ESAFundDetails";
import HIAFundDetails from "./HIAFundDetails";
import HSAFundDetails from "./HSAFundDetails";
import ReimbursementFundDetails from "./ReimbursementFundDetails";

function FundDetails({ setScreen, fund, account }) {

    return (
        <>
            {(fund === "HSAAccount") &&
                <HSAFundDetails setScreen={setScreen} account={account}/>
            }
            {(fund === "HIAAccount") &&
                <HIAFundDetails setScreen={setScreen} account={account}/>
            }
            {(fund === "ESAAccount") &&
                <ESAFundDetails setScreen={setScreen} account={account}/>
            }
            {
                (fund === "ReimbursementAccount") &&
                <ReimbursementFundDetails setScreen={setScreen} account={account} />
            }
        </>
    );
}

export default FundDetails;

