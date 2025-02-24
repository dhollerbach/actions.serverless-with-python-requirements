import { createPaginator } from "@smithy/core";
import { ListServerCertificateTagsCommand, } from "../commands/ListServerCertificateTagsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListServerCertificateTags = createPaginator(IAMClient, ListServerCertificateTagsCommand, "Marker", "Marker", "MaxItems");
