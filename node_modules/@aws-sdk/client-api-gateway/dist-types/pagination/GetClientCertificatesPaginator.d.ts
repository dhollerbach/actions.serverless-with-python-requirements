import { Paginator } from "@smithy/types";
import { GetClientCertificatesCommandInput, GetClientCertificatesCommandOutput } from "../commands/GetClientCertificatesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetClientCertificates: (config: APIGatewayPaginationConfiguration, input: GetClientCertificatesCommandInput, ...rest: any[]) => Paginator<GetClientCertificatesCommandOutput>;
