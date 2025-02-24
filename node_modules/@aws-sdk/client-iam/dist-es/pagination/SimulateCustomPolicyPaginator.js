import { createPaginator } from "@smithy/core";
import { SimulateCustomPolicyCommand, } from "../commands/SimulateCustomPolicyCommand";
import { IAMClient } from "../IAMClient";
export const paginateSimulateCustomPolicy = createPaginator(IAMClient, SimulateCustomPolicyCommand, "Marker", "Marker", "MaxItems");
