import { createPaginator } from "@smithy/core";
import { ListInstanceProfilesCommand, } from "../commands/ListInstanceProfilesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListInstanceProfiles = createPaginator(IAMClient, ListInstanceProfilesCommand, "Marker", "Marker", "MaxItems");
