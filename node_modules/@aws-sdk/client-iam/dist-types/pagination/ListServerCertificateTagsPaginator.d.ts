import { Paginator } from "@smithy/types";
import { ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput } from "../commands/ListServerCertificateTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListServerCertificateTags: (config: IAMPaginationConfiguration, input: ListServerCertificateTagsCommandInput, ...rest: any[]) => Paginator<ListServerCertificateTagsCommandOutput>;
