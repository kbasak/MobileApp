import HSAFundDetails from "./HSAFundDetails";
import ReimbursementFundDetails from "./ReimbursementFundDetails";

function FundDetails({ setScreen, fund, account }) {

    return (
        <>
            {(fund === "HSAAccount") &&
                <HSAFundDetails setScreen={setScreen} account={account}/>
            }
            {
                (fund === "ReimbursementAccount") &&
                <ReimbursementFundDetails setScreen={setScreen} account={account} />
            }
        </>
    );
}

export default FundDetails;

