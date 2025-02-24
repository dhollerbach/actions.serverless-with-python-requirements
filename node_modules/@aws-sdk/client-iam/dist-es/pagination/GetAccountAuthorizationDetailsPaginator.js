import { createPaginator } from "@smithy/core";
import { GetAccountAuthorizationDetailsCommand, } from "../commands/GetAccountAuthorizationDetailsCommand";
import { IAMClient } from "../IAMClient";
export const paginateGetAccountAuthorizationDetails = createPaginator(IAMClient, GetAccountAuthorizationDetailsCommand, "Marker", "Marker", "MaxItems");
