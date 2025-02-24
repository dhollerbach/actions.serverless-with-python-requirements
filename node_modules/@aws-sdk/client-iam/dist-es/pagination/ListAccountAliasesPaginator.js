import { createPaginator } from "@smithy/core";
import { ListAccountAliasesCommand, } from "../commands/ListAccountAliasesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListAccountAliases = createPaginator(IAMClient, ListAccountAliasesCommand, "Marker", "Marker", "MaxItems");
