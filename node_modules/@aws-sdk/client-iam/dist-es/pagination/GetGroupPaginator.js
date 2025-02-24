import { createPaginator } from "@smithy/core";
import { GetGroupCommand } from "../commands/GetGroupCommand";
import { IAMClient } from "../IAMClient";
export const paginateGetGroup = createPaginator(IAMClient, GetGroupCommand, "Marker", "Marker", "MaxItems");
