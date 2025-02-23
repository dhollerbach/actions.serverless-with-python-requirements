import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import {
  ClientCertificates,
  GetClientCertificatesRequest,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetClientCertificatesCommandInput
  extends GetClientCertificatesRequest {}
export interface GetClientCertificatesCommandOutput
  extends ClientCertificates,
    __MetadataBearer {}
declare const GetClientCertificatesCommand_base: {
  new (
    input: GetClientCertificatesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetClientCertificatesCommandInput,
    GetClientCertificatesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetClientCertificatesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetClientCertificatesCommandInput,
    GetClientCertificatesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetClientCertificatesCommand extends GetClientCertificatesCommand_base {
  protected static __types: {
    api: {
      input: GetClientCertificatesRequest;
      output: ClientCertificates;
    };
    sdk: {
      input: GetClientCertificatesCommandInput;
      output: GetClientCertificatesCommandOutput;
    };
  };
}
