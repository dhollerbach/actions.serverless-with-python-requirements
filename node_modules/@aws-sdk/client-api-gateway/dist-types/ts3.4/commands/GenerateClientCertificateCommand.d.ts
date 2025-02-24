import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import {
  ClientCertificate,
  GenerateClientCertificateRequest,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GenerateClientCertificateCommandInput
  extends GenerateClientCertificateRequest {}
export interface GenerateClientCertificateCommandOutput
  extends ClientCertificate,
    __MetadataBearer {}
declare const GenerateClientCertificateCommand_base: {
  new (
    input: GenerateClientCertificateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GenerateClientCertificateCommandInput,
    GenerateClientCertificateCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GenerateClientCertificateCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GenerateClientCertificateCommandInput,
    GenerateClientCertificateCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GenerateClientCertificateCommand extends GenerateClientCertificateCommand_base {
  protected static __types: {
    api: {
      input: GenerateClientCertificateRequest;
      output: ClientCertificate;
    };
    sdk: {
      input: GenerateClientCertificateCommandInput;
      output: GenerateClientCertificateCommandOutput;
    };
  };
}
