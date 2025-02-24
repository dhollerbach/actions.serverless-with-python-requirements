import { createPaginator } from "@smithy/core";
import { ListSigningCertificatesCommand, } from "../commands/ListSigningCertificatesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListSigningCertificates = createPaginator(IAMClient, ListSigningCertificatesCommand, "Marker", "Marker", "MaxItems");
