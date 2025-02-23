import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetClientCertificatesCommand, } from "../commands/GetClientCertificatesCommand";
export const paginateGetClientCertificates = createPaginator(APIGatewayClient, GetClientCertificatesCommand, "position", "position", "limit");
