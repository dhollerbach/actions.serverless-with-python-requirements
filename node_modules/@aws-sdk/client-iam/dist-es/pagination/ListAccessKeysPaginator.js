import { createPaginator } from "@smithy/core";
import { ListAccessKeysCommand, } from "../commands/ListAccessKeysCommand";
import { IAMClient } from "../IAMClient";
export const paginateListAccessKeys = createPaginator(IAMClient, ListAccessKeysCommand, "Marker", "Marker", "MaxItems");
