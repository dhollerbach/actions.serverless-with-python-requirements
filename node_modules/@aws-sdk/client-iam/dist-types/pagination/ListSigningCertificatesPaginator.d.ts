import { Paginator } from "@smithy/types";
import { ListSigningCertificatesCommandInput, ListSigningCertificatesCommandOutput } from "../commands/ListSigningCertificatesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListSigningCertificates: (config: IAMPaginationConfiguration, input: ListSigningCertificatesCommandInput, ...rest: any[]) => Paginator<ListSigningCertificatesCommandOutput>;
