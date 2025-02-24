import { createPaginator } from "@smithy/core";
import { ListPolicyVersionsCommand, } from "../commands/ListPolicyVersionsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListPolicyVersions = createPaginator(IAMClient, ListPolicyVersionsCommand, "Marker", "Marker", "MaxItems");
