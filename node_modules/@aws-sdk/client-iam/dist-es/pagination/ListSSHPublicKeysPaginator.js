import { createPaginator } from "@smithy/core";
import { ListSSHPublicKeysCommand, } from "../commands/ListSSHPublicKeysCommand";
import { IAMClient } from "../IAMClient";
export const paginateListSSHPublicKeys = createPaginator(IAMClient, ListSSHPublicKeysCommand, "Marker", "Marker", "MaxItems");
