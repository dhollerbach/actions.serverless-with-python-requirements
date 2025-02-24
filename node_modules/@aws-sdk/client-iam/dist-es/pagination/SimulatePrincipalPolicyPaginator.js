import { createPaginator } from "@smithy/core";
import { SimulatePrincipalPolicyCommand, } from "../commands/SimulatePrincipalPolicyCommand";
import { IAMClient } from "../IAMClient";
export const paginateSimulatePrincipalPolicy = createPaginator(IAMClient, SimulatePrincipalPolicyCommand, "Marker", "Marker", "MaxItems");
