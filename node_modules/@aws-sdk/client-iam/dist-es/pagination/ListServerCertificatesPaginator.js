import { createPaginator } from "@smithy/core";
import { ListServerCertificatesCommand, } from "../commands/ListServerCertificatesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListServerCertificates = createPaginator(IAMClient, ListServerCertificatesCommand, "Marker", "Marker", "MaxItems");
